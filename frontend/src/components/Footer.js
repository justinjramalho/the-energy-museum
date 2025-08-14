import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiLinkedin, FiYoutube, FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

const FooterContainer = styled.footer`
  background: rgba(10, 15, 28, 0.95);
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #00d4ff;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p, a {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  a {
    display: block;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00d4ff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    background: rgba(0, 212, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00d4ff;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 212, 255, 0.2);
      color: #00a8cc;
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(0, 212, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: #8892a6;
  font-size: 0.9rem;

  p {
    margin: 0;
  }

  a {
    color: #00d4ff;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  input {
    flex: 1;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 6px;
    color: #ffffff;
    
    &::placeholder {
      color: #8892a6;
    }
    
    &:focus {
      outline: none;
      border-color: #00d4ff;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  button {
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    color: #0a0f1c;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #00a8cc, #007799);
      transform: translateY(-1px);
    }
  }
`;

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription submitted');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <h3>About The Energy Museum</h3>
            <p>
              Discover the fascinating world of energy through immersive digital exhibitions, 
              interactive experiences, and expert-led consultations. Join us in exploring 
              the science that powers our world.
            </p>
            <SocialLinks>
              <a href="https://x.com/energymuseum" title="X (formerly Twitter)" target="_blank" rel="noopener noreferrer">
                <RiTwitterXLine />
              </a>
              <a href="https://linkedin.com/company/energymuseum" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="https://youtube.com/energymuseum" title="YouTube" target="_blank" rel="noopener noreferrer">
                <FiYoutube />
              </a>
              <a href="https://instagram.com/energymuseum" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FiInstagram />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Experiences</h3>
            <Link to="/experiences">All Experiences</Link>
            <a href="/experiences/renewable-revolution">Renewable Revolution</a>
            <a href="/experiences/physics-of-power">Physics of Power</a>
            <a href="/experiences/energy-society">Energy and Society</a>
            <a href="/experiences/climate-solutions">Climate Solutions</a>
          </FooterSection>

          <FooterSection>
            <h3>Support & Services</h3>
            <Link to="/contact">Contact Us</Link>
            <a href="/contact#education">Educational Support</a>
            <a href="/contact#business">Business Consulting</a>
            <a href="/contact#research">Research Collaboration</a>
            <a href="/contact#community">Community Forums</a>
          </FooterSection>

          <FooterSection>
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for the latest exhibitions and energy insights.</p>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email"
                required 
              />
              <button type="submit">Subscribe</button>
            </NewsletterForm>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>
            © 2024 The Energy Museum. All rights reserved. | 
            <a href="/privacy"> Privacy Policy</a> | 
            <a href="/terms"> Terms of Service</a>
          </p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;