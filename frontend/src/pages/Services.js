import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';

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
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 2rem 0 3rem;
    margin-bottom: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0 2rem;
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
    max-width: 90%;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 0.5rem;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`;

const AnimatedSection = styled.div`
  opacity: ${props => props.shouldAnimate ? 1 : 0};
  transform: translateY(${props => props.shouldAnimate ? '0' : '30px'});
  transition: all 0.8s ease;
  will-change: opacity, transform;
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
    opacity: 1;
  }
`;

const SectionTitle = styled.h2`
  color: #00d4ff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #64ffda;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  color: #ccd6f6;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✨';
    position: absolute;
    left: 0;
    color: #64ffda;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
  border: 2px solid rgba(100, 255, 218, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    border-color: rgba(100, 255, 218, 0.5);
  }
`;

const PricingTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PricingPrice = styled.div`
  color: #00d4ff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PricingDetails = styled.div`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LastRowWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 2rem;
  
  /* Ensure cards maintain consistent width */
  & > ${PricingCard} {
    flex: 0 0 auto;
    width: calc((100% - 4rem) / 3); /* Same width as grid cards */
  }
  
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    
    & > ${PricingCard} {
      width: auto;
    }
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    & > ${PricingCard} {
      width: auto;
    }
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  background: linear-gradient(135deg, #00d4ff, #64ffda);
  color: #0a0f1c;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const StepTitle = styled.h3`
  color: #00d4ff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.6;
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 20px;
  padding: 4rem;
  text-align: center;
  margin: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2.5rem;
    margin: 2rem 0;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 2rem;
    margin: 1.5rem 0;
    border-radius: 12px;
  }
`;

const CTATitle = styled.h2`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const CTADescription = styled.p`
  color: #b0b7c3;
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
    color: #0a0f1c;
    text-decoration: none;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  
  h4 {
    color: #ffd700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #ccd6f6;
    line-height: 1.6;
  }
`;

function Services() {
  // Optimized thresholds for mobile devices
  const heroAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const fieldAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const pdAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const communityAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const pricingAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const howItWorksAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const ctaAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <SEOHead 
        title="Our Services"
        description="Transforming STEM education through expertly crafted field experiences, professional development, and community programs. World-class energy literacy education for students, educators, and communities."
        keywords="STEM education, energy literacy, field experiences, professional development, community programs, OpenSciEd, educational services, science education"
        canonical="/services"
      />
      <PageContainer>
      {/* Hero Section */}
      <AnimatedSection 
        ref={heroAnimation.ref}
        shouldAnimate={heroAnimation.shouldAnimate}
        role="banner"
        aria-label="Services page hero section"
      >
        <HeroSection>
          <HeroTitle id="page-title">Our Services</HeroTitle>
          <HeroSubtitle>
            Transforming STEM education through expertly crafted field experiences, 
            professional development, and community programs. We bring world-class 
            energy literacy directly to your students, educators, and community.
          </HeroSubtitle>
        </HeroSection>
      </AnimatedSection>

      {/* Field Experiences Section */}
      <Section as="section" aria-labelledby="field-experiences-title">
        <AnimatedSection 
          ref={fieldAnimation.ref}
          shouldAnimate={fieldAnimation.shouldAnimate}
          role="region"
          aria-label="Field experiences services"
        >
          <SectionTitle id="field-experiences-title">Field Experiences</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Immerse your students in hands-on energy exploration with our expertly designed 
              field experiences. Each program is meticulously tailored to your curriculum goals 
              and delivered by seasoned STEM educators.
            </p>
          </div>

          <ServiceGrid>
            <ServiceCard>
              <ServiceIcon>🔬</ServiceIcon>
              <ServiceTitle>Engineering & Design Challenges</ServiceTitle>
              <ServiceDescription>
                Transform learning through authentic engineering and design experiences where students 
                conduct real energy research alongside experienced professionals.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Renewable energy testing stations</FeatureItem>
                <FeatureItem>Energy efficiency analysis labs</FeatureItem>
                <FeatureItem>Sustainable technology prototyping</FeatureItem>
                <FeatureItem>Data collection and analysis training</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🏭</ServiceIcon>
              <ServiceTitle>Industrial Site Visits</ServiceTitle>
              <ServiceDescription>
                Take learning beyond the classroom with guided tours of cutting-edge 
                energy facilities, from solar farms to research laboratories.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Power generation facilities</FeatureItem>
                <FeatureItem>Green technology companies</FeatureItem>
                <FeatureItem>University research centers</FeatureItem>
                <FeatureItem>Environmental monitoring stations</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🌱</ServiceIcon>
              <ServiceTitle>Environmental Field Studies</ServiceTitle>
              <ServiceDescription>
                Connect students with nature through environmental monitoring, 
                sustainability assessments, and ecosystem energy flow studies.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Ecosystem energy mapping</FeatureItem>
                <FeatureItem>Environmental impact assessments</FeatureItem>
                <FeatureItem>Biodiversity and energy relationships</FeatureItem>
                <FeatureItem>Climate change monitoring</FeatureItem>
              </FeatureList>
            </ServiceCard>
          </ServiceGrid>

          <HighlightBox>
            <h4>🎯 Completely Customizable Experiences</h4>
            <p>
              Every field experience is expertly crafted to align with your specific learning objectives, 
              grade levels, and curriculum standards. Our team travels to your location or coordinates 
              seamless transportation to premier facilities nationwide.
            </p>
          </HighlightBox>
        </AnimatedSection>
      </Section>

      {/* Professional Development Section */}
      <Section>
        <AnimatedSection 
          ref={pdAnimation.ref}
          shouldAnimate={pdAnimation.shouldAnimate}
        >
          <SectionTitle>Professional Development</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Empower your educators with cutting-edge training that transforms how they teach 
              energy science. Our comprehensive programs build confidence, competence, and passion 
              for innovative STEM instruction.
            </p>
          </div>

          <ServiceGrid>
            <ServiceCard>
              <ServiceIcon>👩‍🏫</ServiceIcon>
              <ServiceTitle>OpenSciEd Integration</ServiceTitle>
              <ServiceDescription>
                Master the art of OpenSciEd implementation with intensive training programs 
                designed to revolutionize your science curriculum delivery.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>1-hour to 4-day workshops</FeatureItem>
                <FeatureItem>Unit-specific training modules</FeatureItem>
                <FeatureItem>Virtual coaching support</FeatureItem>
                <FeatureItem>Assessment alignment strategies</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🛠️</ServiceIcon>
              <ServiceTitle>Curriculum Customization</ServiceTitle>
              <ServiceDescription>
                Transform your existing curriculum with our expert guidance in adapting 
                and enhancing content for maximum student engagement and learning outcomes.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>NGSS-aligned lesson development</FeatureItem>
                <FeatureItem>Assessment design and rubrics</FeatureItem>
                <FeatureItem>Hands-on activity integration</FeatureItem>
                <FeatureItem>Technology integration strategies</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceTitle>Advanced STEM Techniques</ServiceTitle>
              <ServiceDescription>
                Elevate your teaching with advanced pedagogical strategies, cutting-edge 
                technology integration, and research-based instructional methods.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Inquiry-based learning mastery</FeatureItem>
                <FeatureItem>Advanced pedagogical techniques</FeatureItem>
                <FeatureItem>Project-based learning design</FeatureItem>
                <FeatureItem>Student-centered assessment</FeatureItem>
              </FeatureList>
            </ServiceCard>
          </ServiceGrid>

          <HighlightBox>
            <h4>📈 Measurable Impact Guaranteed</h4>
            <p>
              Our professional development programs are backed by rigorous evaluation methods 
              that demonstrate tangible improvements in teacher confidence, student engagement, 
              and learning outcomes. We tailor every session to your specific needs and travel 
              to your location for maximum convenience and impact.
            </p>
          </HighlightBox>
        </AnimatedSection>
      </Section>

      {/* Community Programs Section */}
      <Section>
        <AnimatedSection 
          ref={communityAnimation.ref}
          shouldAnimate={communityAnimation.shouldAnimate}
        >
          <SectionTitle>Community Programs</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Ignite community-wide passion for energy literacy through engaging programs 
              that bring families, organizations, and citizens together in meaningful STEM learning.
            </p>
          </div>

          <ServiceGrid>
            <ServiceCard>
              <ServiceIcon>👨‍👩‍👧‍👦</ServiceIcon>
              <ServiceTitle>Family & Friends STEM Nights</ServiceTitle>
              <ServiceDescription>
                Create unforgettable intergenerational learning experiences that strengthen 
                family bonds while exploring the fascinating world of energy science.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Interactive energy experiments</FeatureItem>
                <FeatureItem>Multi-generational activities</FeatureItem>
                <FeatureItem>Take-home energy kits</FeatureItem>
                <FeatureItem>Community science challenges</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🚐</ServiceIcon>
              <ServiceTitle>Mobile Museum Experiences</ServiceTitle>
              <ServiceDescription>
                Bring world-class museum experiences directly to your community with our 
                traveling exhibitions and interactive energy laboratories.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Pop-up energy exhibitions</FeatureItem>
                <FeatureItem>Portable laboratory setups</FeatureItem>
                <FeatureItem>Community science fairs</FeatureItem>
                <FeatureItem>Public demonstration events</FeatureItem>
              </FeatureList>
            </ServiceCard>

            <ServiceCard>
              <ServiceIcon>🏢</ServiceIcon>
              <ServiceTitle>Corporate & Government</ServiceTitle>
              <ServiceDescription>
                Elevate organizational sustainability through comprehensive energy literacy 
                programs designed for adult learners and professional teams.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Sustainability workshops</FeatureItem>
                <FeatureItem>Grant writing & implementation</FeatureItem>
                <FeatureItem>Climate literacy programs</FeatureItem>
                <FeatureItem>Team-building STEM challenges</FeatureItem>
              </FeatureList>
            </ServiceCard>
          </ServiceGrid>

          <HighlightBox>
            <h4>🌟 Community-Centered Approach</h4>
            <p>
              Every community program is carefully crafted to reflect local energy challenges, 
              cultural values, and learning preferences. We work closely with community leaders 
              to ensure maximum relevance and impact, bringing our mobile resources directly to you.
            </p>
          </HighlightBox>
        </AnimatedSection>
      </Section>

      {/* Pricing Packages Section */}
      <Section>
        <AnimatedSection 
          ref={pricingAnimation.ref}
          shouldAnimate={pricingAnimation.shouldAnimate}
        >
          <SectionTitle id="pricing">Pricing</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Transparent, value-driven pricing that makes world-class energy education 
              accessible to organizations of all sizes. Every package includes travel and 
              can be completely customized to your needs.
            </p>
          </div>

          <PricingGrid>
            <PricingCard>
              <PricingTitle>Grant Execution</PricingTitle>
              <PricingPrice>$300</PricingPrice>
              <PricingDetails>
                <strong>Hourly Writing & Implementation</strong><br/>
                • Grant research & identification<br/>
                • Professional grant writing<br/>
                • Application management<br/>
                • Implementation support<br/>
                • Reporting assistance
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>Unit-Specific Virtual PD</PricingTitle>
              <PricingPrice>$450-2,250</PricingPrice>
              <PricingDetails>
                <strong>90-minute Sessions<br/>(1-5 Units)</strong><br/>
                • Virtual coaching support<br/>
                • Unit-specific training<br/>
                • Key points walkthrough<br/>
                • Implementation guidance<br/>
                • Assessment strategies
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>Mini Museum Visit</PricingTitle>
              <PricingPrice>$750</PricingPrice>
              <PricingDetails>
                <strong>3-hour Hands-on Exhibits</strong><br/>
                • Up to 100 students<br/>
                • Interactive energy stations<br/>
                • Expert facilitation<br/>
                • Educational materials<br/>
                • Pre/post-visit support
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>STEM Night</PricingTitle>
              <PricingPrice>$950</PricingPrice>
              <PricingDetails>
                <strong>2-hour Event with Stations</strong><br/>
                • Multiple learning stations<br/>
                • Professional facilitators<br/>
                • Take-home materials<br/>
                • Family engagement activities<br/>
                • Community building focus
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>PD Workshop</PricingTitle>
              <PricingPrice>$1,200-2,400</PricingPrice>
              <PricingDetails>
                <strong>Half- to Full-day Interactive Training</strong><br/>
                • Up to 30 instructors<br/>
                • Standards-aligned content<br/>
                • PBL and hands-on activities<br/>
                • Implementation strategies<br/>
                • Follow-up resources
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>Maker Camp (1 Week)</PricingTitle>
              <PricingPrice>$3,500</PricingPrice>
              <PricingDetails>
                <strong>Design-based Learning</strong><br/>
                • 15-25 youth participants<br/>
                • Engineering challenges<br/>
                • Energy project creation<br/>
                • Innovation methodology<br/>
                • Portfolio development
              </PricingDetails>
            </PricingCard>

            <LastRowWrapper>
              <PricingCard>
                <PricingTitle>OpenSciEd Launch<br/>PL Training</PricingTitle>
                <PricingPrice>$5-10,000</PricingPrice>
                <PricingDetails>
                  <strong>Full-day Intensive Workshop<br/>(2-4 Days)</strong><br/>
                  • 1 certified, in-person trainer<br/>
                  • Complete curriculum implementation<br/>
                  • All materials included<br/>
                  • Assessment alignment<br/>
                  • Year-long support package
                </PricingDetails>
              </PricingCard>

              <PricingCard>
                <PricingTitle>Custom Solutions</PricingTitle>
                <PricingPrice>Custom Pricing</PricingPrice>
                <PricingDetails>
                  <strong>Tailored to Your Needs</strong><br/>
                  • Corporate training programs<br/>
                  • Multi-site implementations<br/>
                  • Extended partnerships<br/>
                  • Specialized workshops<br/>
                  • Long-term consulting
                </PricingDetails>
              </PricingCard>
            </LastRowWrapper>
          </PricingGrid>

          <HighlightBox>
            <h4>💎 Premium Value Promise</h4>
            <p>
              Every investment includes expert facilitation, premium materials, comprehensive support, 
              and nationwide travel. We believe transformative education should be accessible, 
              which is why we offer flexible payment options and sliding scale pricing for 
              qualifying nonprofit organizations.
            </p>
          </HighlightBox>
        </AnimatedSection>
      </Section>

      {/* How It Works Section */}
      <Section>
        <AnimatedSection 
          ref={howItWorksAnimation.ref}
          shouldAnimate={howItWorksAnimation.shouldAnimate}
        >
          <SectionTitle id="how-it-works">How It Works</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Our streamlined process ensures your experience exceeds expectations from initial 
              consultation through long-term follow-up support.
            </p>
          </div>

          <StepsContainer>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepTitle>Discovery Consultation</StepTitle>
              <StepDescription>
                We begin with a comprehensive consultation to understand your specific needs, 
                goals, and context. This ensures every program is perfectly tailored to your situation.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>2</StepNumber>
              <StepTitle>Custom Program Design</StepTitle>
              <StepDescription>
                Our expert team crafts a bespoke program that aligns with your objectives, 
                timeline, and budget. Every detail is customized to maximize impact and engagement.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>3</StepNumber>
              <StepTitle>Seamless Delivery</StepTitle>
              <StepDescription>
                We handle all logistics and travel to your location with premium materials and 
                expert facilitators, ensuring a flawless, high-impact learning experience.
              </StepDescription>
            </StepCard>

            <StepCard>
              <StepNumber>4</StepNumber>
              <StepTitle>Ongoing Support</StepTitle>
              <StepDescription>
                Your relationship with us extends beyond the program with follow-up coaching, 
                resource sharing, and continued consultation to ensure lasting impact.
              </StepDescription>
            </StepCard>
          </StepsContainer>

          <HighlightBox>
            <h4>⚡ Rapid Response Capability</h4>
            <p>
              Need urgent support? We can mobilize our team within 48 hours for emergency 
              professional development, crisis curriculum support, or time-sensitive field experiences. 
              Our nationwide network ensures we're always ready to serve your community.
            </p>
          </HighlightBox>
        </AnimatedSection>
      </Section>

      {/* Call-to-Action Section */}
      <AnimatedSection 
        ref={ctaAnimation.ref}
        shouldAnimate={ctaAnimation.shouldAnimate}
      >
        <CTASection>
          <CTATitle>Ready to Elevate Your STEM Education?</CTATitle>
          <CTADescription>
            Join hundreds of educators, administrators, and community leaders who have 
            revolutionized their approach to energy literacy through our expert services. 
            Let's craft an experience that ignites passion and drives real learning outcomes.
          </CTADescription>
          <CTAButton to="/contact">
            Start Your Transformation Today
          </CTAButton>
          <div style={{ marginTop: '2rem', color: '#64ffda', fontSize: '1rem' }}>
            <p>✨ Free consultation • 🌍 Nationwide travel • 🎯 Completely customizable</p>
          </div>
        </CTASection>
      </AnimatedSection>
      </PageContainer>
    </ErrorBoundary>
  );
}

export default Services;