import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import CommentSystem from '../components/CommentSystem';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';
import { usePagePerformance, useUserExperienceMetrics, useResponsiveMetrics } from '../hooks/usePagePerformance';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d4ff;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    color: #00a8cc;
  }
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #0a0f1c;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
    border-radius: 12px;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
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
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

function ExhibitionDetail() {
  const { id } = useParams();
  
  // Performance monitoring hooks
  usePagePerformance();
  useUserExperienceMetrics();
  useResponsiveMetrics();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const exhibitionTitles = {
    'renewable-revolution': 'Renewable Revolution',
    'physics-of-power': 'The Physics of Power',
    'energy-society': 'Energy and Society',
    'climate-solutions': 'Climate Solutions',
    'battery-science': 'The Science of Energy Storage',
    'smart-homes': 'Smart Homes & Energy Efficiency'
  };

  const title = exhibitionTitles[id] || 'Exhibition';
  
  const exhibitionDescriptions = {
    'renewable-revolution': 'Journey through an immersive historical narrative exploring humanity\'s relationship with renewable energy, from ancient windmills to futuristic solar arrays.',
    'physics-of-power': 'Embark on a mind-bending interactive journey where abstract physics becomes tangible reality. Manipulate energy fields and witness quantum phenomena in action.',
    'energy-society': 'Follow the dramatic narrative of how energy transformed human civilization, from steam engines to smart cities, through the eyes of historical figures.',
    'climate-solutions': 'Experience a future-forward simulation where you collaborate with scientists in 2050 to witness breakthrough technologies that solved the climate crisis.',
    'battery-science': 'Dive deep into the molecular world of batteries through a detective story, solving the mystery of how energy gets trapped and released.',
    'smart-homes': 'Experience a day in the life of an AI-powered smart home, learning how intelligent systems optimize energy use through interactive household scenarios.'
  };
  
  const description = exhibitionDescriptions[id] || 'An immersive digital exhibition experience exploring energy science and technology.';

  return (
    <ErrorBoundary>
      <SEOHead 
        title={title}
        description={description}
        keywords={`energy exhibition, ${title.toLowerCase()}, interactive learning, STEM education, digital museum`}
        canonical={`/experiences/${id}`}
      />
      <PageContainer>
        <BackLink to="/experiences" aria-label="Return to Experiences page">
          ← Back to Experiences
        </BackLink>

        <HeroSection role="banner" aria-labelledby="exhibition-title">
          <Title id="exhibition-title">{title}</Title>
          <Subtitle>Immersive Digital Exhibition Experience</Subtitle>
        </HeroSection>

      <ComingSoon>
        <h2 style={{ color: '#00d4ff', marginBottom: '1rem' }}>🚧 Coming Soon</h2>
        <p style={{ color: '#b0b7c3', fontSize: '1.1rem', lineHeight: '1.7' }}>
          This immersive exhibition experience is currently under development. 
          We're creating interactive 3D visualizations, real-time simulations, 
          and engaging multimedia content that will bring energy science to life.
        </p>
        <br />
        <p style={{ color: '#8892a6' }}>
          Want to be notified when this exhibition launches? 
                  <Link to="/contact" style={{ color: '#00d4ff', marginLeft: '0.5rem' }}>
          Request updates from our team
        </Link>
      </p>
    </ComingSoon>

        {/* Comment System */}
        <CommentSystem 
          exhibitionId={id} 
          exhibitionTitle={title}
        />
      </PageContainer>
    </ErrorBoundary>
  );
}

export default ExhibitionDetail;