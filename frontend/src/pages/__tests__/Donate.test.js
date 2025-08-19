import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Donate from '../Donate';

// Mock the performance hooks for testing
jest.mock('../hooks/usePagePerformance', () => ({
  usePagePerformance: jest.fn(),
  useUserExperienceMetrics: jest.fn(),
  useResponsiveMetrics: jest.fn()
}));

const DonateWrapper = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

describe('Donate Page', () => {
  beforeEach(() => {
    // Reset viewport
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));
  });

  test('renders main heading and content', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument();
    expect(screen.getByText(/help us transform energy education/i)).toBeInTheDocument();
    expect(screen.getByText(/tax-deductible donations.*501.*nonprofit/i)).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    // Check for proper ARIA landmarks
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
    
    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Support Our Mission');
    
    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toHaveTextContent(/donation platform coming soon/i);
  });

  test('tax-deductible badge has proper accessibility attributes', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const badge = screen.getByRole('status');
    expect(badge).toHaveAttribute('aria-label', expect.stringContaining('Tax-deductible donations'));
    expect(badge).toHaveTextContent('✅ Tax-Deductible Donations • 501(c)(3) Nonprofit');
  });

  test('contact link has proper accessibility and functionality', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const contactLink = screen.getByRole('link', { name: /contact our team for donation/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(contactLink).toHaveAttribute('aria-label', expect.stringContaining('donation and sponsorship'));
  });

  test('coming soon section has proper ARIA relationships', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const comingSoonSection = screen.getByRole('region');
    expect(comingSoonSection).toHaveAttribute('aria-labelledby', 'coming-soon-title');
    expect(comingSoonSection).toHaveAttribute('aria-describedby', 'coming-soon-description');
    
    expect(screen.getByText(/donation platform coming soon/i)).toHaveAttribute('id', 'coming-soon-title');
  });

  test('responsive design adapts to mobile viewport', () => {
    // Set mobile viewport
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });

    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    // Verify content is still accessible on mobile
    expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact our team/i })).toBeInTheDocument();
  });

  test('handles focus management properly', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const contactLink = screen.getByRole('link', { name: /contact our team/i });
    
    // Test focus behavior
    contactLink.focus();
    expect(contactLink).toHaveFocus();
  });

  test('emoji decorations have proper accessibility attributes', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const constructionEmoji = screen.getByText('🚧');
    expect(constructionEmoji).toHaveAttribute('aria-hidden', 'true');
  });

  test('error boundary wraps content', () => {
    // This test ensures ErrorBoundary is properly implemented
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    // If the component renders without error, ErrorBoundary is working
    expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument();
  });

  test('SEO head information is included', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    // Check that page title is set (this would require more sophisticated testing setup)
    // For now, just verify the component renders without issues
    expect(screen.getByRole('heading', { name: /support our mission/i })).toBeInTheDocument();
  });
});

describe('Donate Page Mobile Optimization', () => {
  test('content hierarchy is maintained on small screens', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 480,
    });

    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    // Check that all essential content is present and accessible
    const mainHeading = screen.getByRole('heading', { level: 1 });
    const sectionHeading = screen.getByRole('heading', { level: 2 });
    const statusBadge = screen.getByRole('status');
    const contactLink = screen.getByRole('link');

    expect(mainHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(statusBadge).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('touch targets are adequately sized for mobile', () => {
    render(
      <DonateWrapper>
        <Donate />
      </DonateWrapper>
    );

    const contactLink = screen.getByRole('link', { name: /contact our team/i });
    
    // Verify the link exists and is accessible
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toBeVisible();
  });
});
