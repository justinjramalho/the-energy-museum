import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import CommentSystem from '../components/CommentSystem';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const ComingSoon = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
`;

function ExhibitionDetail() {
  const { id } = useParams();

  const exhibitionTitles = {
    'renewable-revolution': 'Renewable Revolution',
    'physics-of-power': 'The Physics of Power',
    'energy-society': 'Energy and Society',
    'climate-solutions': 'Climate Solutions',
    'battery-science': 'The Science of Energy Storage',
    'smart-homes': 'Smart Homes & Energy Efficiency'
  };

  const title = exhibitionTitles[id] || 'Exhibition';

  return (
    <PageContainer>
      <BackLink to="/experiences">
        ← Back to Experiences
      </BackLink>

      <HeroSection>
        <Title>{title}</Title>
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
  );
}

export default ExhibitionDetail;