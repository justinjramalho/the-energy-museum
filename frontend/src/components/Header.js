import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { logViewportInfo, checkHeaderElements } from '../utils/responsiveDebug';

const HeaderContainer = styled.header`
  background: rgba(10, 15, 28, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;
  
  @media (max-width: 480px) {
    padding: 0.8rem 0;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.8rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00d4ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  
  &:hover {
    color: #00a8cc;
    background: rgba(0, 212, 255, 0.1);
  }
  
  &:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }

  .icon {
    font-size: 2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: scale(1.1);
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    
    .icon {
      font-size: 1.7rem;
    }
  }
`;

const Nav = styled.nav`
  /* Desktop navigation - always visible */
  display: flex;
  gap: 2rem;
  align-items: center;
  position: static;
  visibility: visible;
  opacity: 1;

  @media (max-width: 768px) {
    /* Mobile navigation - collapsible */
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 15, 28, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: ${props => props.$isOpen ? '2rem' : '0 2rem'};
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    
    /* Animation properties */
    max-height: ${props => props.$isOpen ? '400px' : '0'};
    opacity: ${props => props.$isOpen ? '1' : '0'};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transform: translateY(${props => props.$isOpen ? '0' : '-20px'});
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.$isOpen ? '1.5rem' : '0 1.5rem'};
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#00d4ff' : '#e0e6ed'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  display: block;
  text-align: center;
  min-height: 44px; /* Minimum touch target size */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
    background: rgba(0, 212, 255, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }

  ${props => props.$isActive && `
    background: rgba(0, 212, 255, 0.15);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      background: #00d4ff;
      border-radius: 50%;
      
      @media (max-width: 768px) {
        display: none;
      }
    }
  `}
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

const MobileMenuButton = styled.button`
  /* Hidden by default on desktop */
  display: none;
  background: none;
  border: 2px solid transparent;
  color: #00d4ff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  min-width: 44px;
  min-height: 44px;
  position: relative;
  
  /* Only show on mobile screens */
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(0, 212, 255, 0.1);
      border-color: rgba(0, 212, 255, 0.3);
      transform: scale(1.05);
    }
    
    &:focus {
      outline: 2px solid #00d4ff;
      outline-offset: 2px;
      background: rgba(0, 212, 255, 0.1);
    }
    
    &:active {
      transform: scale(0.95);
    }
    
    /* Hamburger menu animation */
    &::before {
      content: ${props => props.$isOpen ? '"✕"' : '"☰"'};
      font-size: 1.2rem;
      transition: all 0.3s ease;
      transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
      display: block;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    min-width: 40px;
    min-height: 40px;
    
    &::before {
      font-size: 1.1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
    color: #0a0f1c;
  }
  
  &:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
    color: #0a0f1c;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    margin-top: 1rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Auto-close menu on route change (MAIN FIX)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) &&
          mobileButtonRef.current &&
          !mobileButtonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        mobileButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    // Close menu if open
    setIsMenuOpen(false);
    // Ensure we scroll to top when logo is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleNavLinkClick = useCallback(() => {
    // This will be called by each nav link to ensure menu closes
    setIsMenuOpen(false);
  }, []);

  // Debug logging for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const timer = setTimeout(() => {
        console.log('🔍 Header Debug - Current State:');
        logViewportInfo();
        checkHeaderElements();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo 
          to="/" 
          onClick={handleLogoClick}
          aria-label="The Energy Museum - Go to homepage"
        >
          <span className="icon" aria-hidden="true">⚡</span>
          The Energy Museum
        </Logo>
        
        <Nav 
          $isOpen={isMenuOpen} 
          ref={navRef}
          role="navigation"
          aria-label="Main navigation"
          aria-expanded={isMenuOpen}
        >
          <NavLink 
            to="/about" 
            $isActive={isActive('/about')}
            onClick={handleNavLinkClick}
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            $isActive={isActive('/services')}
            onClick={handleNavLinkClick}
            aria-current={isActive('/services') ? 'page' : undefined}
          >
            Services
          </NavLink>
          <NavLink 
            to="/experiences" 
            $isActive={isActive('/experiences')}
            onClick={handleNavLinkClick}
            aria-current={isActive('/experiences') ? 'page' : undefined}
          >
            Experiences
          </NavLink>
          <NavLink 
            to="/contact" 
            $isActive={isActive('/contact')}
            onClick={handleNavLinkClick}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contact
          </NavLink>
          <CTAButton 
            to="/donate"
            onClick={handleNavLinkClick}
            aria-label="Make a donation to support The Energy Museum"
          >
            Donate
          </CTAButton>
        </Nav>

        <MobileMenuButton 
          onClick={toggleMenu}
          ref={mobileButtonRef}
          $isOpen={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        />
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;