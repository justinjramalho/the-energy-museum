import { useState, useEffect } from 'react';
import { handleApiError } from '../services/api';

/**
 * Custom hook for handling API calls with loading states and error handling
 * @param {Function} apiCall - The API function to call
 * @param {Array} dependencies - Dependencies array for useEffect
 * @param {boolean} immediate - Whether to call the API immediately
 * @returns {Object} - { data, loading, error, refetch }
 */
export const useApi = (apiCall, dependencies = [], immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiCall();
      setData(result);
    } catch (err) {
      const errorInfo = handleApiError(err);
      setError(errorInfo);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, dependencies);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

/**
 * Custom hook for form submission with loading states
 * @param {Function} submitFunction - The function to call on form submission
 * @param {Function} onSuccess - Callback function on successful submission
 * @param {Function} onError - Callback function on error
 * @returns {Object} - { submit, loading, error }
 */
export const useApiSubmit = (submitFunction, onSuccess, onError) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const result = await submitFunction(data);
      if (onSuccess) {
        onSuccess(result);
      }
      return result;
    } catch (err) {
      const errorInfo = handleApiError(err);
      setError(errorInfo);
      if (onError) {
        onError(errorInfo);
      }
      throw errorInfo;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
};

/**
 * Custom hook for managing local storage state
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The initial value if key doesn't exist
 * @returns {Array} - [value, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

/**
 * Custom hook for debouncing values
 * @param {*} value - The value to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {*} - The debounced value
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Custom hook for tracking scroll position
 * @returns {Object} - { scrollY, scrollDirection }
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      
      setScrollY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return { scrollY, scrollDirection };
};

/**
 * Custom hook for managing loading states across multiple operations
 * @returns {Object} - { setLoading, isLoading, loadingStates }
 */
export const useLoadingStates = () => {
  const [loadingStates, setLoadingStates] = useState({});

  const setLoading = (key, loading) => {
    setLoadingStates(prev => ({
      ...prev,
      [key]: loading
    }));
  };

  const isLoading = (key) => {
    return loadingStates[key] || false;
  };

  const isAnyLoading = () => {
    return Object.values(loadingStates).some(loading => loading);
  };

  return { setLoading, isLoading, isAnyLoading, loadingStates };
};