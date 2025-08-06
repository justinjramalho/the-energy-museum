import React, { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.direction - Animation direction ('left', 'right', 'up', 'down')
 * @param {number} options.delay - Animation delay in milliseconds
 * @returns {Object} - { ref, isVisible, shouldAnimate }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    direction = 'up',
    delay = 0,
    rootMargin = '0px 0px -100px 0px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add delay before triggering animation
          setTimeout(() => {
            setShouldAnimate(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, rootMargin]);

  return {
    ref: elementRef,
    isVisible,
    shouldAnimate,
    direction
  };
};

/**
 * Hook for multiple scroll animations with staggered timing
 * @param {number} count - Number of elements to animate
 * @param {number} staggerDelay - Delay between each element animation (ms)
 * @param {Object} options - Animation options
 * @returns {Array} - Array of refs and animation states
 */
export const useMultipleScrollAnimations = (count, staggerDelay = 200, options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const refs = useRef([]);
  
  // Initialize refs array
  if (refs.current.length !== count) {
    refs.current = Array(count).fill().map((_, i) => refs.current[i] || React.createRef());
  }

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, index]));
            // Add staggered delay for animation
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, index]));
            }, (options.delay || 0) + (index * staggerDelay));
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -100px 0px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]?.current) {
          observer.unobserve(refs.current[index].current);
        }
      });
    };
  }, [count, staggerDelay, options.delay, options.threshold, options.rootMargin]);

  return refs.current.map((ref, index) => ({
    ref,
    isVisible: visibleElements.has(index),
    shouldAnimate: animatedElements.has(index),
    direction: options.direction || 'up'
  }));
};

/**
 * Hook for alternating animations (left/right pattern)
 * @param {number} count - Number of elements
 * @param {number} staggerDelay - Delay between animations
 * @param {Object} options - Animation options
 * @returns {Array} - Array of animation objects with alternating directions
 */
export const useAlternatingScrollAnimation = (count, staggerDelay = 400, options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const refs = useRef([]);
  
  // Initialize refs array
  if (refs.current.length !== count) {
    refs.current = Array(count).fill().map((_, i) => refs.current[i] || React.createRef());
  }

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, index]));
            // Add staggered delay for animation
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, index]));
            }, (options.delay || 0) + (index * staggerDelay));
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -100px 0px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]?.current) {
          observer.unobserve(refs.current[index].current);
        }
      });
    };
  }, [count, staggerDelay, options.delay, options.threshold, options.rootMargin]);

  return refs.current.map((ref, index) => ({
    ref,
    isVisible: visibleElements.has(index),
    shouldAnimate: animatedElements.has(index),
    direction: index % 2 === 0 ? 'left' : 'right'
  }));
};