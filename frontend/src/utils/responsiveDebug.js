/**
 * Responsive debugging utility to help identify viewport and media query issues
 */

export const logViewportInfo = () => {
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    userAgent: navigator.userAgent
  };
  
  console.group('🔍 Responsive Debug Info');
  console.log('Viewport Width:', viewport.width + 'px');
  console.log('Viewport Height:', viewport.height + 'px');
  console.log('Device Pixel Ratio:', viewport.devicePixelRatio);
  console.log('User Agent:', viewport.userAgent);
  
  // Check media query states
  const mediaQueries = {
    mobile: window.matchMedia('(max-width: 768px)').matches,
    tablet: window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches,
    desktop: window.matchMedia('(min-width: 1025px)').matches,
    smallMobile: window.matchMedia('(max-width: 480px)').matches
  };
  
  console.log('Media Query States:');
  console.table(mediaQueries);
  
  // Determine expected behavior
  if (mediaQueries.mobile) {
    console.log('✅ Expected: Hamburger menu VISIBLE, Nav COLLAPSED');
  } else {
    console.log('✅ Expected: Hamburger menu HIDDEN, Nav VISIBLE');
  }
  
  console.groupEnd();
  
  return { viewport, mediaQueries };
};

export const checkHeaderElements = () => {
  const nav = document.querySelector('nav[role="navigation"]');
  const mobileButton = document.querySelector('button[aria-label*="navigation menu"]');
  
  if (nav) {
    const navStyles = window.getComputedStyle(nav);
    console.log('Nav Display:', navStyles.display);
    console.log('Nav Visibility:', navStyles.visibility);
    console.log('Nav Opacity:', navStyles.opacity);
  }
  
  if (mobileButton) {
    const buttonStyles = window.getComputedStyle(mobileButton);
    console.log('Mobile Button Display:', buttonStyles.display);
    console.log('Mobile Button Visibility:', buttonStyles.visibility);
  }
  
  return { nav, mobileButton };
};

// Auto-run in development
if (process.env.NODE_ENV === 'development') {
  // Log on initial load
  window.addEventListener('load', () => {
    setTimeout(() => {
      logViewportInfo();
      checkHeaderElements();
    }, 1000);
  });
  
  // Log on resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      logViewportInfo();
      checkHeaderElements();
    }, 500);
  });
}
