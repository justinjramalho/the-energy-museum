import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';
import { usePagePerformance, useUserExperienceMetrics, useResponsiveMetrics } from '../hooks/usePagePerformance';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 2rem 1rem 3rem;
    margin-bottom: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0.8rem 2rem;
    margin-bottom: 1.5rem;
    border-radius: 12px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 95%;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto 0.5rem;
  }
`;

const ComingSoon = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1.5rem 0;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 10px;
  }
`;

const TaxDeductibleBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  margin: 2rem 0 1rem 0;
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
    margin: 1.5rem 0 0.8rem 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    margin: 1rem 0 0.5rem 0;
    border-radius: 25px;
  }
`;

// Enhanced styled components for better mobile responsiveness
const ComingSoonTitle = styled.h2`
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`;

const ComingSoonText = styled.p`
  color: #b0b7c3;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ContactText = styled.p`
  color: #8892a6;
  font-size: 1rem;
  
  a {
    color: #00d4ff;
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    
    &:hover {
      color: #00a8cc;
      background: rgba(0, 212, 255, 0.1);
      text-decoration: underline;
    }
    
    &:focus {
      outline: 2px solid #00d4ff;
      outline-offset: 2px;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

function Donate() {
  // Performance and UX monitoring
  usePagePerformance('DonatePage');
  useUserExperienceMetrics('DonatePage');
  useResponsiveMetrics();
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <SEOHead 
        title="Support Our Mission - Donate"
        description="Help us transform energy education and create a more sustainable future through innovative STEM learning experiences. Tax-deductible donations to 501(c)(3) nonprofit."
        keywords="donate, support, nonprofit, 501c3, tax deductible, energy education, STEM learning, sustainable future"
        canonical="/donate"
      />
      <PageContainer>
        <HeroSection role="banner" aria-labelledby="hero-title">
          <HeroTitle id="hero-title">Support Our Mission</HeroTitle>
          <HeroSubtitle>
            Help us transform energy education and create a more sustainable future 
            through innovative STEM learning experiences for all ages.
          </HeroSubtitle>
          <TaxDeductibleBadge 
            role="status"
            aria-label="Tax-deductible donations accepted - 501(c)(3) nonprofit organization"
          >
            ✅ Tax-Deductible Donations • 501(c)(3) Nonprofit
          </TaxDeductibleBadge>
        </HeroSection>

        <ComingSoon 
          role="region" 
          aria-labelledby="coming-soon-title"
          aria-describedby="coming-soon-description"
        >
          <ComingSoonTitle id="coming-soon-title">
            <span aria-hidden="true">🚧</span> Donation Platform Coming Soon
          </ComingSoonTitle>
          <ComingSoonText id="coming-soon-description">
            We're currently setting up secure donation processing to make it easy for you 
            to support our mission of advancing energy literacy education. This page will 
            soon feature multiple ways to contribute to our programs and initiatives.
          </ComingSoonText>
          <ContactText>
            In the meantime, if you'd like to make a donation or learn about sponsorship opportunities, 
            please <a 
              href="/contact" 
              aria-label="Contact our team for donation and sponsorship opportunities"
            >
              contact our team directly
            </a>
          </ContactText>
        </ComingSoon>
      </PageContainer>
    </ErrorBoundary>
  );
}

export default Donate;