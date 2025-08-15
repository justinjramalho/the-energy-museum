import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0a0f1c 100%);
  color: #ffffff;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00d4ff;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    border-radius: 2px;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(10, 15, 28, 0.9)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad"><stop offset="0%" stop-color="%2300d4ff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23000" stop-opacity="0"/></radialGradient></defs><circle cx="500" cy="500" r="400" fill="url(%23grad)"/></svg>');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem 4rem;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MissionBox = styled.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 5.5rem 3rem 3rem;
  margin: 3rem auto;
  max-width: 800px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '🎯';
    font-size: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    padding: 0;
    z-index: 1;
  }
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e6ed;
  font-weight: 500;
  margin: 0;
`;

const TeamSection = styled.div`
  text-align: center;
`;

const FounderSpotlight = styled.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FounderImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    z-index: -1;
    opacity: 0.3;
  }
`;

const FounderInfo = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FounderName = styled.h3`
  font-size: 2rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
`;

const FounderTitle = styled.h4`
  font-size: 1.2rem;
  color: #b0b7c3;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const FounderBio = styled.p`
  color: #e0e6ed;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BoardMembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BoardMemberCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 212, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const MemberImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const MemberName = styled.h4`
  color: #00d4ff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  color: #b0b7c3;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const LearnMoreLink = styled.button`
  background: none;
  border: none;
  color: #00d4ff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #0a0f1c, #1a2332);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.9)'};
  transition: all 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #b0b7c3;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: #00d4ff;
  }
`;

const ModalImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto 2rem;
`;

const ModalName = styled.h3`
  color: #00d4ff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ModalTitle = styled.h4`
  color: #b0b7c3;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
`;

const ModalBio = styled.div`
  color: #e0e6ed;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ContactLink = styled.a`
  color: #00d4ff;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
    color: #00a8cc;
    transform: scale(1.1) translateY(-2px);
  }
`;

const HistoryImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin: 3rem auto;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 4px solid #00d4ff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00d4ff;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 2rem;
  line-height: 1.5;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #00d4ff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #b0b7c3;
  font-size: 1.1rem;
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 212, 255, 0.4);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h4`
  color: #00d4ff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.6;
`;

const ServicesTeaser = styled.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 3rem auto;
  max-width: 800px;
  
  p {
    margin-top: 1.5rem;
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ServiceItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  
  h5 {
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #b0b7c3;
    font-size: 0.9rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
    background: linear-gradient(135deg, #00a8cc, #007799);
  }
`;

const AnimatedSection = styled.div`
  opacity: ${props => props.shouldAnimate ? 1 : 0};
  transform: translateY(${props => props.shouldAnimate ? '0' : '30px'});
  transition: all 0.8s ease;
`;

function About() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const missionAnimation = useScrollAnimation({ threshold: 0.3 });
  const teamAnimation = useScrollAnimation({ threshold: 0.3 });
  const historyAnimation = useScrollAnimation({ threshold: 0.3 });
  const impactAnimation = useScrollAnimation({ threshold: 0.3 });
  const valuesAnimation = useScrollAnimation({ threshold: 0.3 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.3 });

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Board members data (including founder)
  const boardMembers = [
    {
      id: 0,
      name: "Dr. Edward Cohen",
      title: "Founder & Chief Executive Officer",
      initials: "EC",
      email: "e.cohen@energymuseum.org",
      linkedin: "https://linkedin.com/in/edwardcohen",
      bio: [
        "Dr. Edward Cohen, EdD, founded The Energy Museum with a revolutionary vision to democratize energy education and make complex sustainability concepts accessible to learners of all ages. With over two decades of experience in educational leadership and STEM curriculum development, Dr. Cohen has dedicated his career to transforming how we teach and learn about energy.",
        "As Founder and Chief Executive Officer, Dr. Cohen leads our strategic vision and ensures that every program, exhibition, and initiative aligns with our mission of expanding access to quality energy literacy. His innovative approach to digital storytelling has revolutionized how educational content is delivered, making complex scientific concepts engaging and memorable for diverse learning populations.",
        "Dr. Cohen holds an EdD in Educational Leadership from Columbia University and has been recognized nationally for his contributions to STEM education. He frequently speaks at educational conferences worldwide and has authored numerous publications on energy literacy and innovative pedagogy. His philosophy of 'lifelong learning from 2 to 102' drives our commitment to serving learners across all age groups.",
        "Under his leadership, The Energy Museum has grown from a small curriculum development initiative to a comprehensive platform that serves over 100,000 students and educators annually. Dr. Cohen's vision continues to inspire our team to push the boundaries of what's possible in energy education and community engagement."
      ]
    },
    {
      id: 1,
      name: "Dr. Sarah Martinez",
      title: "Board Member & Education Director",
      initials: "SM",
      email: "s.martinez@energymuseum.org",
      linkedin: "https://linkedin.com/in/sarahmartinez",
      bio: [
        "Dr. Sarah Martinez brings over 15 years of experience in STEM education and curriculum development. She holds a PhD in Educational Technology from Stanford University and has been instrumental in developing innovative energy literacy programs.",
        "As Board Member and Education Director, Dr. Martinez oversees our curriculum development initiatives and ensures all programs meet the highest educational standards. Her research focuses on making complex scientific concepts accessible to diverse learning populations.",
        "Dr. Martinez has authored numerous publications on energy education and has spoken at international conferences on sustainable education practices."
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Board Member & Technology Advisor",
      initials: "MC",
      email: "m.chen@energymuseum.org",
      twitter: "https://x.com/michaelchen_tech",
      linkedin: "https://linkedin.com/in/michaelchen",
      bio: [
        "Michael Chen is a technology innovator and entrepreneur with a passion for educational technology. He founded two successful EdTech companies and has been recognized as a leader in digital learning platforms.",
        "As Board Member and Technology Advisor, Michael guides our digital strategy and helps integrate cutting-edge technology into our educational programs. His expertise in user experience design ensures our digital museum platform is engaging and accessible.",
        "Michael holds a Master's degree in Computer Science from MIT and frequently consults for educational organizations on technology integration and digital transformation."
      ]
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <AnimatedSection 
          ref={heroAnimation.ref}
          shouldAnimate={heroAnimation.shouldAnimate}
        >
          <HeroTitle>About Us</HeroTitle>
          <HeroSubtitle>
            Empowering the next generation through innovative energy education, 
            hands-on STEM learning, and sustainable future thinking.
          </HeroSubtitle>
        </AnimatedSection>
      </HeroSection>

      {/* Mission Section */}
      <Section>
        <AnimatedSection 
          ref={missionAnimation.ref}
          shouldAnimate={missionAnimation.shouldAnimate}
        >
          <SectionTitle>Our Mission</SectionTitle>
          <MissionBox>
            <MissionText>
              Our nonprofit's focus is on education, sustainability, and innovative pedagogy. 
              We bridge the gap between complex energy concepts and accessible learning experiences, 
              creating pathways for students, educators, and communities to understand and engage 
              with the energy systems that power our world.
            </MissionText>
          </MissionBox>
        </AnimatedSection>
      </Section>

      {/* Team Section */}
      <Section>
        <AnimatedSection 
          ref={teamAnimation.ref}
          shouldAnimate={teamAnimation.shouldAnimate}
        >
          <TeamSection id="our-team">
            <SectionTitle>Our Team</SectionTitle>
            <p style={{ textAlign: 'center', color: '#b0b7c3', fontSize: '1.1rem', marginBottom: '3rem' }}>
              Our executive leadership team guides our mission to ensure educators and students have the 
              tools, resources, and inspiration to explore energy innovation and sustainability.
            </p>
            
            <FounderSpotlight>
              <FounderImage>
                EC
              </FounderImage>
              <FounderInfo>
                <FounderName>Dr. Edward Cohen</FounderName>
                <FounderTitle>Founder & Chief Executive Officer</FounderTitle>
                <FounderBio>
                  Dr. Edward Cohen, EdD, founded The Energy Museum to democratize energy education 
                  and make complex sustainability concepts accessible to learners of all ages. 
                  With decades of experience in education and STEM curriculum development, 
                  Dr. Cohen works to expand access to quality energy literacy programs 
                  that nurture innovation in every classroom and community.
                </FounderBio>
                <LearnMoreLink onClick={() => openModal(boardMembers[0])}>
                  Learn more →
                </LearnMoreLink>
              </FounderInfo>
            </FounderSpotlight>

            <BoardMembersGrid>
              {boardMembers.filter(member => member.id !== 0).map((member) => (
                <BoardMemberCard key={member.id} onClick={() => openModal(member)}>
                  <MemberImage>{member.initials}</MemberImage>
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <LearnMoreLink>Learn more →</LearnMoreLink>
                </BoardMemberCard>
              ))}
            </BoardMembersGrid>
          </TeamSection>
        </AnimatedSection>
      </Section>

      {/* History Section */}
      <Section>
        <AnimatedSection 
          ref={historyAnimation.ref}
          shouldAnimate={historyAnimation.shouldAnimate}
        >
          <SectionTitle>Our History</SectionTitle>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Founded with a vision to transform how we teach and learn about energy, The Energy Museum 
              began as a response to the growing need for comprehensive energy literacy in our schools 
              and communities. What started as innovative curriculum development has evolved into a 
              comprehensive platform for energy education.
            </p>
            
            <HistoryImage>
              Historical Timeline Image<br/>
              [Placeholder for Energy Museum evolution timeline]
            </HistoryImage>
            
            <p style={{ color: '#b0b7c3', fontSize: '1rem', lineHeight: '1.7' }}>
              From our early days developing hands-on STEM activities to our current digital storytelling 
              platform, we've remained committed to making energy education engaging, accessible, and 
              impactful. Our focus on "lifelong learning from '2 to 102'" reflects our belief that 
              energy literacy is essential for all ages in building a sustainable future.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Impact Section */}
      <Section>
        <AnimatedSection 
          ref={impactAnimation.ref}
          shouldAnimate={impactAnimation.shouldAnimate}
        >
          <SectionTitle>Our Impact</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>K-12</StatNumber>
              <StatLabel>Youth Programs</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>6</StatNumber>
              <StatLabel>Core Service Areas</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>∞</StatNumber>
              <StatLabel>Learning Opportunities</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>2-102</StatNumber>
              <StatLabel>Age Range Served</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <div style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'center' }}>
            <p style={{ color: '#e0e6ed', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Through our comprehensive programs—from Family & Community STEM Nights to Corporate 
              Education initiatives—we're building a more energy-literate society. Our mobile museum 
              experiences bring learning directly to schools and communities, while our maker camps 
              and teacher coaching ensure sustainable impact through educator empowerment.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* Values Section */}
      <Section>
        <AnimatedSection 
          ref={valuesAnimation.ref}
          shouldAnimate={valuesAnimation.shouldAnimate}
        >
          <SectionTitle>Our Values</SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>🎯</ValueIcon>
              <ValueTitle>Educational Excellence</ValueTitle>
              <ValueDescription>
                We believe in hands-on, standards-aligned learning that makes complex energy 
                concepts accessible and engaging for all learners.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌱</ValueIcon>
              <ValueTitle>Sustainability Focus</ValueTitle>
              <ValueDescription>
                Environmental stewardship guides our mission to educate about renewable energy, 
                conservation, and climate solutions.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Community Partnership</ValueTitle>
              <ValueDescription>
                We work collaboratively with schools, families, and organizations to create 
                lasting impact in energy education.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>💡</ValueIcon>
              <ValueTitle>Innovation</ValueTitle>
              <ValueDescription>
                We embrace innovative pedagogy and emerging technologies to create cutting-edge 
                learning experiences.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🌍</ValueIcon>
              <ValueTitle>Accessibility</ValueTitle>
              <ValueDescription>
                Energy literacy should be available to everyone—from preschoolers to seniors, 
                regardless of background or location.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>🚀</ValueIcon>
              <ValueTitle>Future-Ready</ValueTitle>
              <ValueDescription>
                We prepare learners for the energy challenges and opportunities of tomorrow 
                through forward-thinking curriculum.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </AnimatedSection>
      </Section>

      {/* Services Teaser Section */}
      <Section>
        <AnimatedSection 
          ref={servicesAnimation.ref}
          shouldAnimate={servicesAnimation.shouldAnimate}
        >
          <ServicesTeaser>
            <SectionTitle style={{ marginBottom: '1rem' }}>Discover Our Programs</SectionTitle>
            <p style={{ color: '#b0b7c3', fontSize: '1.1rem', marginBottom: '2rem' }}>
              From interactive family nights to corporate sustainability training, 
              we offer comprehensive energy education solutions.
            </p>
            
            <ServicesList>
              <ServiceItem>
                <h5>Family STEM Nights</h5>
                <p>Intergenerational learning experiences</p>
              </ServiceItem>
              <ServiceItem>
                <h5>Mobile Museum</h5>
                <p>Traveling exhibits and pop-up labs</p>
              </ServiceItem>
              <ServiceItem>
                <h5>Maker Camps</h5>
                <p>Seasonal hands-on engineering challenges</p>
              </ServiceItem>
              <ServiceItem>
                <h5>Teacher Coaching</h5>
                <p>Professional development and curriculum support</p>
              </ServiceItem>
              <ServiceItem>
                <h5>Corporate Training</h5>
                <p>Sustainability and energy system workshops</p>
              </ServiceItem>
              <ServiceItem>
                <h5>Assessment Services</h5>
                <p>Program evaluation and development support</p>
              </ServiceItem>
            </ServicesList>
            
            <CTAButton to="/services">
              Explore Our Services
            </CTAButton>
          </ServicesTeaser>
        </AnimatedSection>
      </Section>

      {/* Modal for Board Member Details */}
      <Modal isOpen={isModalOpen} onClick={closeModal}>
        <ModalContent isOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          {selectedMember && (
            <>
              <ModalImage>{selectedMember.initials}</ModalImage>
              <ModalName>{selectedMember.name}</ModalName>
              <ModalTitle>{selectedMember.title}</ModalTitle>
              <ModalBio>
                {selectedMember.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </ModalBio>
              <ContactInfo>
                <ContactLink href={`mailto:${selectedMember.email}`} title="Email">
                  <FiMail />
                </ContactLink>
                {selectedMember.linkedin && (
                  <ContactLink 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FiLinkedin />
                  </ContactLink>
                )}
                {selectedMember.twitter && (
                  <ContactLink 
                    href={selectedMember.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="X (formerly Twitter)"
                  >
                    <RiTwitterXLine />
                  </ContactLink>
                )}
              </ContactInfo>
            </>
          )}
        </ModalContent>
      </Modal>
    </PageContainer>
  );
}

export default About;