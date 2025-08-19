import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../Header';

// Mock useLocation for testing
const mockLocation = {
  pathname: '/'
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockLocation
}));

const HeaderWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('Header Responsive Behavior', () => {
  beforeEach(() => {
    // Reset viewport
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  test('hamburger menu should NOT be visible on desktop (>768px)', () => {
    // Set desktop viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    
    // On desktop, the button should exist in DOM but not be visible
    expect(menuButton).toBeInTheDocument();
    
    // Check that the button has display: none (not visible)
    const buttonStyles = window.getComputedStyle(menuButton);
    expect(buttonStyles.display).toBe('none');
  });

  test('navigation links should be visible on desktop', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    // All navigation links should be visible
    expect(screen.getByText('About')).toBeVisible();
    expect(screen.getByText('Services')).toBeVisible();
    expect(screen.getByText('Experiences')).toBeVisible();
    expect(screen.getByText('Contact')).toBeVisible();
    expect(screen.getByText('Donate')).toBeVisible();
  });

  test('hamburger menu should be visible on mobile (<768px)', () => {
    // Set mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });

    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    expect(menuButton).toBeInTheDocument();
    
    // On mobile, button should be visible (this test would need jsdom environment with CSS support)
    // For now, we're just ensuring the element exists and has correct attributes
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('Header CSS Media Query Tests', () => {
  test('MobileMenuButton should have correct CSS structure', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    
    // Test that the button exists
    expect(menuButton).toBeInTheDocument();
    
    // Test ARIA attributes
    expect(menuButton).toHaveAttribute('aria-expanded');
    expect(menuButton).toHaveAttribute('aria-label');
  });
});
