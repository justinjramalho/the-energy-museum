import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ExhibitionTeaser from '../components/ExhibitionTeaser';
import { useAlternatingScrollAnimation } from '../hooks/useScrollAnimation';
import { usePagePerformance, useUserExperienceMetrics, useResponsiveMetrics } from '../hooks/usePagePerformance';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
`;

const PageContainer = styled.div`
  min-height: calc(100vh - 200px);
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, rgba(10, 15, 28, 0.9) 70%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,212,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    min-height: 60vh;
    padding: 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #0099cc, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

const HeroSubtitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: #e0e6ed;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #b0b7c3;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${glow} 3s ease-in-out infinite;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
  }
`;

const SecondaryButton = styled(Link)`
  border: 2px solid #00d4ff;
  color: #00d4ff;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.2);
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #b0b7c3;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    max-width: 90%;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.4;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  justify-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 400px;
    margin: 0 auto 4rem auto;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
    max-width: 350px;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  width: 100%;
  max-width: 400px;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00d4ff;
`;

const FeatureDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.7;
`;

const StatsSection = styled.section`
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 4rem 2rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  h3 {
    font-size: 3rem;
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }

  p {
    color: #b0b7c3;
    font-size: 1.1rem;
  }
`;

const ExhibitionTeasersSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

// Removed unused TeasersTitle and TeasersSubtitle styled components (commented out in JSX)

// Featured exhibitions data with storytelling focus
const featuredExhibitions = [
  {
    id: 'renewable-revolution',
    title: 'Renewable Revolution',
    hook: 'What if the wind could tell you its story of powering civilization?',
    description: 'Journey through an immersive narrative that traces humanity\'s relationship with renewable energy. From ancient windmills grinding grain to massive offshore turbines powering cities, experience the epic transformation of how we harness nature\'s power.',
    storyType: 'Historical Journey',
    duration: '15-20 min',
    audience: 'All Ages',
    icon: '🌞',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
    visitors: 125,
    rating: 4.8,
    comments: 8
  },
  {
    id: 'climate-solutions',
    title: 'Climate Solutions',
    hook: 'Step into 2050 and discover how we solved the climate crisis.',
    description: 'Experience a future-forward narrative that showcases breakthrough technologies and global collaboration. Interact with carbon capture systems, explore fusion reactors, and witness the transformation of our energy landscape through the eyes of future scientists.',
    storyType: 'Future Simulation',
    duration: '25-30 min',
    audience: 'Teen & Adult',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #4169E1, #1E90FF)',
    visitors: 210,
    rating: 4.9,
    comments: 28
  },
  {
    id: 'physics-of-power',
    title: 'The Physics of Power',
    hook: 'See the invisible forces that power our universe come alive.',
    description: 'Embark on a mind-bending exploration where abstract physics becomes tangible reality. Manipulate energy fields, witness quantum phenomena, and understand the fundamental laws that govern everything from lightning bolts to nuclear fusion.',
    storyType: 'Interactive Discovery',
    duration: '20-25 min',
    audience: 'Students & Adults',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)',
    visitors: 98,
    rating: 4.7,
    comments: 15
  }
];

function Home() {
  // Performance monitoring hooks
  usePagePerformance();
  useUserExperienceMetrics();
  useResponsiveMetrics();
  
  // Use alternating scroll animations for exhibition teasers
  const teaserAnimations = useAlternatingScrollAnimation(featuredExhibitions.length, 600);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ErrorBoundary>
      <SEOHead
        title="Home"
        description="Discover the power of energy through digital storytelling at The Energy Museum. Explore immersive exhibitions, professional STEM education services, and interactive learning experiences."
        keywords="energy museum, digital storytelling, STEM education, interactive exhibitions, energy science, renewable energy, professional development"
        canonical="/"
      />
      <PageContainer>
      <HeroSection role="banner" aria-labelledby="hero-title">
        <HeroContent>
          <HeroTitle id="hero-title">The Energy Museum</HeroTitle>
          <HeroSubtitle>Discover the Power of Energy Through Digital Storytelling</HeroSubtitle>
          <HeroDescription>
            Step into a world where science meets art, where complex energy concepts come alive 
            through immersive digital experiences. Explore cutting-edge exhibitions that make 
            learning about energy engaging, interactive, and inspiring.
          </HeroDescription>
          <CTAContainer>
            <PrimaryButton to="/about">
              👥 About Us
            </PrimaryButton>
            <SecondaryButton to="/contact">
              🤝 Contact Us
            </SecondaryButton>
          </CTAContainer>
        </HeroContent>
      </HeroSection>

      <ExhibitionTeasersSection>
        {/* <TeasersTitle>Featured Digital Stories</TeasersTitle>
        <TeasersSubtitle>
          Immerse yourself in carefully crafted narrative experiences that transform 
          complex energy concepts into engaging, interactive stories that inspire and educate.
        </TeasersSubtitle> */}
        
        {featuredExhibitions.map((exhibition, index) => (
          <div key={exhibition.id} ref={teaserAnimations[index].ref}>
            <ExhibitionTeaser
              exhibition={exhibition}
              reverse={index % 2 !== 0}
              shouldAnimate={teaserAnimations[index].shouldAnimate}
              direction={teaserAnimations[index].direction}
            />
          </div>
        ))}
      </ExhibitionTeasersSection>

      <FeaturesSection role="main" aria-labelledby="services-title">
        <SectionTitle id="services-title">Professional STEM Education Services</SectionTitle>
        <SectionSubtitle>
          Transforming energy education through expert-designed field experiences, professional development, and community programs tailored to your needs
        </SectionSubtitle>
        
        <FeaturesGrid>
          <FeatureCard delay="0s">
            <FeatureIcon>🔬</FeatureIcon>
            <FeatureTitle>Field Experiences</FeatureTitle>
            <FeatureDescription>
              Immerse students in hands-on engineering and design challenges with authentic 
              energy research experiences. Our hyperlocal place-based learning programs transform 
              field studies into engaging NGSS-aligned educational adventures.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard delay="0.5s">
            <FeatureIcon>👩‍🏫</FeatureIcon>
            <FeatureTitle>Professional Development</FeatureTitle>
            <FeatureDescription>
              Empower educators with cutting-edge OpenSciEd integration training and 
              NGSS-aligned curriculum development. Our expert-led workshops range from 
              intensive 1-hour sessions to comprehensive 4-day professional learning programs.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard delay="1s">
            <FeatureIcon>👨‍👩‍👧‍👦</FeatureIcon>
            <FeatureTitle>Community Programs</FeatureTitle>
            <FeatureDescription>
              Ignite community-wide energy literacy through engaging Family & Friends STEM Nights, 
              grant writing and implementation support, and corporate sustainability training 
              programs designed to build lasting partnerships.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>

        <StatsSection>
          <h2 style={{ marginBottom: '2rem', color: '#00d4ff' }}>Museum Impact</h2>
          <StatsGrid>
            <StatItem>
              <h3>50K+</h3>
              <p>Visitors Engaged</p>
            </StatItem>
            <StatItem>
              <h3>12</h3>
              <p>Digital Exhibitions</p>
            </StatItem>
            <StatItem>
              <h3>200+</h3>
              <p>Expert Consultations</p>
            </StatItem>
            <StatItem>
              <h3>95%</h3>
              <p>Visitor Satisfaction</p>
            </StatItem>
          </StatsGrid>
        </StatsSection>
      </FeaturesSection>
    </PageContainer>
    </ErrorBoundary>
  );
}

export default Home;