import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`;

const FilterSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterButton = styled.button`
  background: ${props => props.$active ? 'linear-gradient(135deg, #00d4ff, #0099cc)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.$active ? '#0a0f1c' : '#e0e6ed'};
  border: ${props => props.$active ? 'none' : '1px solid rgba(0, 212, 255, 0.3)'};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #00a8cc, #007799)' : 'rgba(0, 212, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;

const ExhibitionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ExhibitionCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }
`;

const ExhibitionImage = styled.div`
  height: 200px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #00d4ff, #0099cc)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ExhibitionContent = styled.div`
  padding: 2rem;
`;

const ExhibitionTitle = styled.h3`
  font-size: 1.5rem;
  color: #00d4ff;
  margin-bottom: 1rem;
`;

const ExhibitionDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ExhibitionMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const MetaTag = styled.span`
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ExhibitionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewButton = styled(Link)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
  }
`;

const InteractionStats = styled.div`
  color: #8892a6;
  font-size: 0.9rem;
  
  span {
    margin-right: 1rem;
  }
`;

// Exhibition data structured for digital storytelling experiences
const exhibitionsData = [
  {
    id: 'renewable-revolution',
    title: 'Renewable Revolution',
    description: 'Journey through an immersive historical narrative exploring humanity\'s relationship with renewable energy, from ancient windmills to futuristic solar arrays.',
    category: 'renewable',
    tags: ['Historical Journey', 'Interactive Timeline', 'Wind', 'Solar'],
    icon: '🌞',
    gradient: 'linear-gradient(135deg, #FFD700, #FFA500)',
    visitors: 1250,
    comments: 89,
    difficulty: 'Beginner',
    storyType: 'Historical Narrative',
    duration: '15-20 min'
  },
  {
    id: 'physics-of-power',
    title: 'The Physics of Power',
    description: 'Embark on a mind-bending interactive journey where abstract physics becomes tangible reality. Manipulate energy fields and witness quantum phenomena in action.',
    category: 'science',
    tags: ['Interactive Discovery', 'Quantum Physics', 'Energy Laws', 'Simulation'],
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)',
    visitors: 987,
    comments: 156,
    difficulty: 'Advanced',
    storyType: 'Interactive Discovery',
    duration: '20-25 min'
  },
  {
    id: 'energy-society',
    title: 'Energy and Society',
    description: 'Follow the dramatic narrative of how energy transformed human civilization, from steam engines to smart cities, through the eyes of historical figures.',
    category: 'society',
    tags: ['Social Impact', 'Historical Drama', 'Urban Planning', 'Future Cities'],
    icon: '🏘️',
    gradient: 'linear-gradient(135deg, #32CD32, #228B22)',
    visitors: 1450,
    comments: 203,
    difficulty: 'Intermediate',
    storyType: 'Historical Drama',
    duration: '18-22 min'
  },
  {
    id: 'climate-solutions',
    title: 'Climate Solutions',
    description: 'Experience a future-forward simulation where you collaborate with scientists in 2050 to witness breakthrough technologies that solved the climate crisis.',
    category: 'climate',
    tags: ['Future Simulation', 'Climate Action', 'Innovation', 'Global Collaboration'],
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #4169E1, #1E90FF)',
    visitors: 2100,
    comments: 287,
    difficulty: 'Intermediate',
    storyType: 'Future Simulation',
    duration: '25-30 min'
  },
  {
    id: 'battery-science',
    title: 'The Science of Energy Storage',
    description: 'Dive deep into the molecular world of batteries through a detective story, solving the mystery of how energy gets trapped and released.',
    category: 'technology',
    tags: ['Scientific Mystery', 'Molecular Journey', 'Battery Tech', 'Innovation'],
    icon: '🔋',
    gradient: 'linear-gradient(135deg, #FF6347, #FF4500)',
    visitors: 876,
    comments: 124,
    difficulty: 'Advanced',
    storyType: 'Scientific Mystery',
    duration: '22-28 min'
  },
  {
    id: 'smart-homes',
    title: 'Smart Homes & Energy Efficiency',
    description: 'Experience a day in the life of an AI-powered smart home, learning how intelligent systems optimize energy use through interactive household scenarios.',
    category: 'technology',
    tags: ['Interactive Simulation', 'Smart Technology', 'Energy Efficiency', 'IoT'],
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #9370DB, #8A2BE2)',
    visitors: 1320,
    comments: 167,
    difficulty: 'Beginner',
    storyType: 'Interactive Simulation',
    duration: '12-15 min'
  }
];

const categories = [
  { id: 'all', label: 'All Story Experiences' },
  { id: 'renewable', label: 'Renewable Energy' },
  { id: 'science', label: 'Interactive Science' },
  { id: 'technology', label: 'Technology Stories' },
  { id: 'society', label: 'Historical Narratives' },
  { id: 'climate', label: 'Future Simulations' }
];

function Exhibitions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [exhibitions, setExhibitions] = useState(exhibitionsData);

  useEffect(() => {
    // Filter exhibitions based on selected category
    if (selectedCategory === 'all') {
      setExhibitions(exhibitionsData);
    } else {
      setExhibitions(exhibitionsData.filter(exhibition => exhibition.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Digital Exhibitions</PageTitle>
        <PageSubtitle>
          Explore our immersive collection of energy-focused exhibitions designed to educate, 
          inspire, and engage visitors of all backgrounds through interactive storytelling.
        </PageSubtitle>
      </PageHeader>

      <FilterSection>
        {categories.map(category => (
          <FilterButton
            key={category.id}
            $active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterSection>

      <ExhibitionsGrid>
        {exhibitions.map(exhibition => (
          <ExhibitionCard key={exhibition.id}>
            <ExhibitionImage $gradient={exhibition.gradient}>
              <span>{exhibition.icon}</span>
            </ExhibitionImage>
            
            <ExhibitionContent>
              <ExhibitionTitle>{exhibition.title}</ExhibitionTitle>
              <ExhibitionDescription>{exhibition.description}</ExhibitionDescription>
              
              <ExhibitionMeta>
                {exhibition.tags.map(tag => (
                  <MetaTag key={tag}>{tag}</MetaTag>
                ))}
              </ExhibitionMeta>

              <ExhibitionFooter>
                <ViewButton to={`/exhibitions/${exhibition.id}`}>
                  Explore Exhibition
                </ViewButton>
                <InteractionStats>
                  <span>👥 {exhibition.visitors}</span>
                  <span>💬 {exhibition.comments}</span>
                </InteractionStats>
              </ExhibitionFooter>
            </ExhibitionContent>
          </ExhibitionCard>
        ))}
      </ExhibitionsGrid>
    </PageContainer>
  );
}

export default Exhibitions;