import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ComingSoon = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
`;

function Donate() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Support Our Mission</HeroTitle>
        <HeroSubtitle>
          Help us transform energy education and create a more sustainable future 
          through innovative STEM learning experiences for all ages.
        </HeroSubtitle>
      </HeroSection>

      <ComingSoon>
        <h2 style={{ color: '#00d4ff', marginBottom: '1rem' }}>🚧 Donation Platform Coming Soon</h2>
        <p style={{ color: '#b0b7c3', fontSize: '1.1rem', lineHeight: '1.7' }}>
          We're currently setting up secure donation processing to make it easy for you 
          to support our mission of advancing energy literacy education. This page will 
          soon feature multiple ways to contribute to our programs and initiatives.
        </p>
        <br />
        <p style={{ color: '#8892a6' }}>
          In the meantime, if you'd like to make a donation or learn about sponsorship opportunities, 
          please <a href="/contact" style={{ color: '#00d4ff', marginLeft: '0.5rem' }}>
            contact our team directly
          </a>
        </p>
      </ComingSoon>
    </PageContainer>
  );
}

export default Donate;