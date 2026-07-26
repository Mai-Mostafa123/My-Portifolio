import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  category?: string;
  properties?: Record<string, unknown>;
  timestamp: string;
  path: string;
}

export interface AnalyticsStats {
  pageViews: Record<string, number>;
  eventCounts: Record<string, number>;
  totalEvents: number;
  lastVisited: string;
}

const STORAGE_KEY = 'portfolio_analytics_stats_v1';
const LOG_KEY = 'portfolio_analytics_logs_v1';

// Helper to get stats from localStorage
export const getAnalyticsStats = (): AnalyticsStats => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn('Analytics storage read error:', err);
  }
  return { pageViews: {}, eventCounts: {}, totalEvents: 0, lastVisited: new Date().toISOString() };
};

// Helper to get raw logs (up to 100 recent)
export const getAnalyticsLogs = (): AnalyticsEvent[] => {
  try {
    const raw = localStorage.getItem(LOG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (err) {
    console.warn('Analytics log read error:', err);
  }
  return [];
};

// Helper to record an event
export const trackEvent = (eventName: string, properties?: Record<string, unknown>, category = 'interaction') => {
  const path = window.location.pathname || '/';
  const timestamp = new Date().toISOString();
  const newEvent: AnalyticsEvent = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    eventName,
    category,
    properties,
    timestamp,
    path,
  };

  // Log in non-production console for developer visibility
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics] 📊 Event: ${eventName}`, { path, properties, category, timestamp });
  }

  try {
    // Update Stats Summary
    const currentStats = getAnalyticsStats();
    const updatedStats: AnalyticsStats = {
      ...currentStats,
      totalEvents: currentStats.totalEvents + 1,
      lastVisited: timestamp,
      eventCounts: {
        ...currentStats.eventCounts,
        [eventName]: (currentStats.eventCounts[eventName] || 0) + 1,
      },
      pageViews: eventName === 'page_view'
        ? {
            ...currentStats.pageViews,
            [path]: (currentStats.pageViews[path] || 0) + 1,
          }
        : currentStats.pageViews,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));

    // Update Logs Array (keep latest 100)
    const currentLogs = getAnalyticsLogs();
    const updatedLogs = [newEvent, ...currentLogs].slice(0, 100);
    localStorage.setItem(LOG_KEY, JSON.stringify(updatedLogs));
  } catch (err) {
    console.warn('Analytics storage write error:', err);
  }
};

/**
 * Custom React hook for tracking pageviews automatically
 * and providing a convenience track function.
 */
export const useAnalytics = () => {
  const location = useLocation();

  // Automatically track page views on location change
  useEffect(() => {
    trackEvent('page_view', { title: document.title, search: location.search }, 'navigation');
  }, [location.pathname, location.search]);

  const track = useCallback((eventName: string, properties?: Record<string, unknown>, category?: string) => {
    trackEvent(eventName, properties, category);
  }, []);

  return {
    trackEvent: track,
    getStats: getAnalyticsStats,
    getLogs: getAnalyticsLogs,
  };
};
