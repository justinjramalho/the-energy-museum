import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

const Section = styled.section`
  padding: 4rem 0;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;

const AnimatedSection = styled.div`
  opacity: ${props => props.shouldAnimate ? 1 : 0};
  transform: translateY(${props => props.shouldAnimate ? '0' : '30px'});
  transition: all 0.8s ease;
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
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
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

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
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
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const fieldAnimation = useScrollAnimation({ threshold: 0.3 });
  const pdAnimation = useScrollAnimation({ threshold: 0.3 });
  const communityAnimation = useScrollAnimation({ threshold: 0.3 });
  const pricingAnimation = useScrollAnimation({ threshold: 0.3 });
  const howItWorksAnimation = useScrollAnimation({ threshold: 0.3 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 });

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {/* Hero Section */}
      <AnimatedSection 
        ref={heroAnimation.ref}
        shouldAnimate={heroAnimation.shouldAnimate}
      >
        <HeroSection>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>
            Transforming STEM education through expertly crafted field experiences, 
            professional development, and community programs. We bring world-class 
            energy literacy directly to your students, educators, and community.
          </HeroSubtitle>
        </HeroSection>
      </AnimatedSection>

      {/* Field Experiences Section */}
      <Section>
        <AnimatedSection 
          ref={fieldAnimation.ref}
          shouldAnimate={fieldAnimation.shouldAnimate}
        >
          <SectionTitle>Field Experiences</SectionTitle>
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
              <ServiceTitle>Laboratory Immersions</ServiceTitle>
              <ServiceDescription>
                Transform learning through authentic laboratory experiences where students 
                conduct real energy research alongside professional scientists.
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
                <FeatureItem>4-day intensive workshops</FeatureItem>
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
                <FeatureItem>Standards-aligned lesson development</FeatureItem>
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
                <FeatureItem>Digital storytelling in STEM</FeatureItem>
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
              <ServiceTitle>Family STEM Nights</ServiceTitle>
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
              <ServiceTitle>Corporate & Government Training</ServiceTitle>
              <ServiceDescription>
                Elevate organizational sustainability through comprehensive energy literacy 
                programs designed for adult learners and professional teams.
              </ServiceDescription>
              <FeatureList>
                <FeatureItem>Sustainability workshops</FeatureItem>
                <FeatureItem>Energy systems training</FeatureItem>
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
          <SectionTitle>Investment Packages</SectionTitle>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Transparent, value-driven pricing that makes world-class energy education 
              accessible to organizations of all sizes. Every package includes travel and 
              can be completely customized to your needs.
            </p>
          </div>

          <PricingGrid>
            <PricingCard>
              <PricingTitle>Mini Museum Visit</PricingTitle>
              <PricingPrice>$750</PricingPrice>
              <PricingDetails>
                <strong>3-hour hands-on exhibits</strong><br/>
                • Up to 100 students<br/>
                • Interactive energy stations<br/>
                • Expert facilitation<br/>
                • Educational materials<br/>
                • Pre/post-visit support
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>STEM Night or Family Event</PricingTitle>
              <PricingPrice>$950</PricingPrice>
              <PricingDetails>
                <strong>2-hour event with stations</strong><br/>
                • Multiple learning stations<br/>
                • Professional facilitators<br/>
                • Take-home materials<br/>
                • Family engagement activities<br/>
                • Community building focus
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>PD Workshop (Half Day)</PricingTitle>
              <PricingPrice>$1,200</PricingPrice>
              <PricingDetails>
                <strong>Interactive NGSS or PBL training</strong><br/>
                • Up to 30 teachers<br/>
                • Standards-aligned content<br/>
                • Hands-on activities<br/>
                • Implementation strategies<br/>
                • Follow-up resources
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>Unit-Specific Virtual PD</PricingTitle>
              <PricingPrice>$2,250</PricingPrice>
              <PricingDetails>
                <strong>Key points walkthrough (5 Sessions)</strong><br/>
                • Virtual coaching support<br/>
                • Unit-specific training<br/>
                • Implementation guidance<br/>
                • Assessment strategies<br/>
                • Ongoing consultation
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>Maker Camp (1 Week)</PricingTitle>
              <PricingPrice>$3,500</PricingPrice>
              <PricingDetails>
                <strong>Design-based learning</strong><br/>
                • 15-25 youth participants<br/>
                • Engineering challenges<br/>
                • Energy project creation<br/>
                • Innovation methodology<br/>
                • Portfolio development
              </PricingDetails>
            </PricingCard>

            <PricingCard>
              <PricingTitle>OpenSciEd 4-Day Launch</PricingTitle>
              <PricingPrice>$10,000</PricingPrice>
              <PricingDetails>
                <strong>Comprehensive high school training</strong><br/>
                • Complete curriculum implementation<br/>
                • Intensive 4-day workshop<br/>
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
          <SectionTitle>How It Works</SectionTitle>
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
          <CTATitle>Ready to Transform Your STEM Education?</CTATitle>
          <CTADescription>
            Join hundreds of educators, administrators, and community leaders who have 
            revolutionized their approach to energy literacy through our expert services. 
            Let's craft an experience that ignites passion and drives real learning outcomes.
          </CTADescription>
          <CTAButton to="/support">
            Start Your Transformation Today
          </CTAButton>
          <div style={{ marginTop: '2rem', color: '#64ffda', fontSize: '1rem' }}>
            <p>✨ Free consultation • 🌍 Nationwide travel • 🎯 Completely customizable</p>
          </div>
        </CTASection>
      </AnimatedSection>
    </PageContainer>
  );
}

export default Services;