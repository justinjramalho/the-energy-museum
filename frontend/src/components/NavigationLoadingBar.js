import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
`;

const LoadingBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 9999;
  background: transparent;
  pointer-events: none;
`;

const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  background: linear-gradient(90deg, 
    transparent 0%, 
    #00d4ff 50%, 
    transparent 100%
  );
  animation: ${loadingAnimation} 1s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
`;

const NavigationLoadingBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading bar when location changes
    setIsLoading(true);
    
    // Hide loading bar after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <LoadingBarContainer role="progressbar" aria-label="Page loading">
      <LoadingBar />
    </LoadingBarContainer>
  );
};

export default NavigationLoadingBar;
