import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(10, 15, 28, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00d4ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #00a8cc;
  }

  .icon {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 15, 28, 0.98);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
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

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  ${props => props.$isActive && `
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
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #00d4ff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
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

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">
          <span className="icon">⚡</span>
          The Energy Museum
        </Logo>
        
        <Nav $isOpen={isMenuOpen}>
          <NavLink to="/" $isActive={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={isActive('/about')}>
            About
          </NavLink>
          <NavLink to="/exhibitions" $isActive={isActive('/exhibitions')}>
            Exhibitions
          </NavLink>
          <CTAButton to="/support">
            Get Support
          </CTAButton>
        </Nav>

        <MobileMenuButton onClick={toggleMenu}>
          ☰
        </MobileMenuButton>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;