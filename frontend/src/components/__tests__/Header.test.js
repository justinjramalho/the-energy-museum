import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

describe('Header Component', () => {
  beforeEach(() => {
    // Reset any DOM modifications
    document.body.style.overflow = 'unset';
  });

  test('renders logo and navigation links', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    expect(screen.getByLabelText(/the energy museum - go to homepage/i)).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Experiences')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Donate')).toBeInTheDocument();
  });

  test('mobile menu button is accessible and toggles menu', async () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open menu
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu');
    });

    // Click to close menu
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton).toHaveAttribute('aria-label', 'Open navigation menu');
    });
  });

  test('menu closes when escape key is pressed', async () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    
    // Open menu
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    // Press escape
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('navigation links have proper accessibility attributes', () => {
    mockLocation.pathname = '/about';
    
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
    
    const servicesLink = screen.getByText('Services');
    expect(servicesLink).not.toHaveAttribute('aria-current');
  });

  test('donate button has proper accessibility label', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const donateButton = screen.getByLabelText(/make a donation to support the energy museum/i);
    expect(donateButton).toBeInTheDocument();
  });

  test('logo has proper accessibility attributes', () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const logo = screen.getByLabelText(/the energy museum - go to homepage/i);
    expect(logo).toBeInTheDocument();
    
    const icon = screen.getByText('⚡');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  test('prevents body scroll when mobile menu is open', async () => {
    render(
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
    );

    const menuButton = screen.getByLabelText(/open navigation menu/i);
    
    // Open menu
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('hidden');
    });

    // Close menu
    fireEvent.click(menuButton);
    await waitFor(() => {
      expect(document.body.style.overflow).toBe('unset');
    });
  });
});
