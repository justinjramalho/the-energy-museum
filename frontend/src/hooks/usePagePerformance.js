import { useEffect } from 'react';

/**
 * Hook to monitor page performance and loading times
 * @param {string} pageName - Name of the page for tracking
 */
export const usePagePerformance = (pageName) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now();
      
      // Mark when page starts loading
      performance.mark(`${pageName}-start`);
      
      // Measure when component mounts
      const handleLoad = () => {
        const endTime = performance.now();
        const loadTime = endTime - startTime;
        
        performance.mark(`${pageName}-loaded`);
        performance.measure(`${pageName}-load-time`, `${pageName}-start`, `${pageName}-loaded`);
        
        console.group(`📊 ${pageName} Performance Metrics`);
        console.log(`Component Mount Time: ${loadTime.toFixed(2)}ms`);
        
        // Check for performance entries
        const entries = performance.getEntriesByType('measure');
        const pageEntry = entries.find(entry => entry.name === `${pageName}-load-time`);
        if (pageEntry) {
          console.log(`Total Load Time: ${pageEntry.duration.toFixed(2)}ms`);
        }
        
        // Check for layout shifts (if available)
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              entries.forEach((entry) => {
                if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                  console.log(`Layout Shift Score: ${entry.value.toFixed(4)}`);
                }
              });
            });
            observer.observe({ entryTypes: ['layout-shift'] });
          } catch (e) {
            // Layout shift API not supported
          }
        }
        
        console.groupEnd();
      };
      
      // Monitor when all resources are loaded
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
      
      return () => {
        window.removeEventListener('load', handleLoad);
        // Clean up performance marks
        try {
          performance.clearMarks(`${pageName}-start`);
          performance.clearMarks(`${pageName}-loaded`);
          performance.clearMeasures(`${pageName}-load-time`);
        } catch (e) {
          // Performance API not fully supported
        }
      };
    }
  }, [pageName]);
};

/**
 * Hook to measure time to interactive and other UX metrics
 */
export const useUserExperienceMetrics = (pageName) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      let interactionStartTime = null;
      
      const measureInteraction = (eventType) => {
        if (!interactionStartTime) {
          interactionStartTime = performance.now();
          console.log(`🖱️ First ${eventType} interaction on ${pageName}`);
        }
      };
      
      const events = ['click', 'touchstart', 'keydown', 'scroll'];
      events.forEach(event => {
        document.addEventListener(event, () => measureInteraction(event), { once: true, passive: true });
      });
      
      return () => {
        events.forEach(event => {
          document.removeEventListener(event, measureInteraction);
        });
      };
    }
  }, [pageName]);
};

/**
 * Hook to monitor viewport and responsive behavior
 */
export const useResponsiveMetrics = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logViewportInfo = () => {
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight,
          orientation: window.screen?.orientation?.type || 'unknown',
          devicePixelRatio: window.devicePixelRatio || 1
        };
        
        console.log('📱 Viewport Info:', viewport);
        
        // Check if it's mobile
        const isMobile = viewport.width <= 768;
        const isSmallMobile = viewport.width <= 480;
        
        if (isMobile) {
          console.log('✅ Mobile layout active');
          if (isSmallMobile) {
            console.log('✅ Small mobile optimizations active');
          }
        } else {
          console.log('✅ Desktop layout active');
        }
      };
      
      // Log initial viewport
      logViewportInfo();
      
      // Log on orientation change
      window.addEventListener('orientationchange', () => {
        setTimeout(logViewportInfo, 100);
      });
      
      // Log on significant resize
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(logViewportInfo, 300);
      });
      
      return () => {
        window.removeEventListener('orientationchange', logViewportInfo);
        window.removeEventListener('resize', logViewportInfo);
      };
    }
  }, []);
};
