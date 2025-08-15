import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { apiService } from '../services/api';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  // Mobile optimization
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
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
  
  // Mobile responsiveness
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
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
  
  // Mobile optimization for filters
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    justify-content: center;
  }
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
  font-size: 0.9rem;
  white-space: nowrap;
  
  // Accessibility improvements
  &:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }
  
  // Mobile optimization
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #00a8cc, #007799)' : 'rgba(0, 212, 255, 0.1)'};
    transform: translateY(-2px);
  }
  
  // Reduce motion for accessibility
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const ExhibitionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  // Mobile optimization for grid
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
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

// Error handling components
const ErrorContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  margin: 2rem 0;
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

const ErrorIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ErrorTitle = styled.h3`
  color: #00d4ff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const ErrorMessage = styled.p`
  color: #b0b7c3;
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
`;

const ErrorSubtext = styled.p`
  color: #8a9ba8;
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
`;

// Loading components
const LoadingContainer = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b0b7c3;
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const LoadingIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const LoadingTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #e0e6ed;
`;

const LoadingSubtext = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

// Exhibition data structured for educational learning approaches
export const exhibitionsData = [
  {
    id: 'renewable-revolution',
    title: 'Renewable Revolution',
    description: 'Journey through an immersive historical narrative exploring humanity\'s relationship with renewable energy, from ancient windmills to futuristic solar arrays.',
    tags: ['Historical Journey', 'Interactive Timeline', 'Real-World Application', 'Wind Energy', 'Solar Technology'],
    learningApproach: ['narrative-driven', 'virtual', 'place-based'],
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
    tags: ['Scientific Problem', 'Virtual Reality', 'Innovation Challenge', 'Quantum Physics', 'Energy Laws'],
    learningApproach: ['problem-based', 'virtual'],
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
    tags: ['Historical Drama', 'Community Investigation', 'Real-World Application', 'Social Impact', 'Urban Planning'],
    learningApproach: ['narrative-driven', 'place-based'],
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
    tags: ['Challenge-Based', 'Online Simulation', 'Research Investigation', 'NSF Funded', 'Climate Action'],
    learningApproach: ['problem-based', 'virtual', 'grant-supported'],
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
    tags: ['Scientific Mystery', 'Research Investigation', 'Virtual Reality', 'STEM Grant', 'Battery Technology'],
    learningApproach: ['narrative-driven', 'problem-based', 'virtual', 'grant-supported'],
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
    tags: ['Real-World Application', 'Interactive Timeline', 'Engineering Design', 'Title I', 'Smart Technology'],
    learningApproach: ['place-based', 'virtual', 'problem-based', 'grant-supported'],
    icon: '🏠',
    gradient: 'linear-gradient(135deg, #9370DB, #8A2BE2)',
    visitors: 1320,
    comments: 167,
    difficulty: 'Beginner',
    storyType: 'Interactive Simulation',
    duration: '12-15 min'
  }
];

// Fallback categories if API fails
const fallbackCategories = [
  { id: 'all', label: 'All Learning Experiences' },
  { id: 'place-based', label: 'Place-Based' },
  { id: 'virtual', label: 'Virtual' },
  { id: 'problem-based', label: 'Problem-Based' },
  { id: 'narrative-driven', label: 'Narrative-Driven' },
  { id: 'grant-supported', label: 'Grant Supported' }
];

function Exhibitions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [exhibitions, setExhibitions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load categories from database
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await apiService.getExhibitCategories();
        if (response.success) {
          // Don't add 'All Learning Experiences' - it's already in the database
          setCategories(response.categories);
        } else {
          // If API response is not successful, use fallback
          setCategories(fallbackCategories);
        }
      } catch (error) {
        console.error('Error loading categories:', error);
        // Fall back to hardcoded categories if API fails
        setCategories(fallbackCategories);
      }
    };
    loadCategories();
  }, []);

  // Load exhibitions with filtering
  useEffect(() => {
    const loadExhibitions = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await apiService.getExhibits(selectedCategory);
        
        // Handle successful response
        if (response && response.success && response.exhibits) {
          setExhibitions(response.exhibits);
          console.log(`✅ Loaded ${response.exhibits.length} exhibits for category: ${selectedCategory}`);
        } else if (response && response.success === false) {
          // This is expected in development mode
          setError(response.error || 'Using fallback data');
          // Fall back to hardcoded data
          const filteredData = selectedCategory === 'all' 
            ? exhibitionsData
            : exhibitionsData.filter(exhibition => 
                exhibition.learningApproach && 
                exhibition.learningApproach.includes(selectedCategory)
              );
          setExhibitions(filteredData);
          console.log(`🔧 Using fallback data: ${filteredData.length} exhibits for category: ${selectedCategory}`);
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (error) {
        console.error('❌ Error loading exhibitions:', error);
        setError(error.message);
        // Fall back to hardcoded data if API fails
        const filteredData = selectedCategory === 'all' 
          ? exhibitionsData
          : exhibitionsData.filter(exhibition => 
              exhibition.learningApproach && 
              exhibition.learningApproach.includes(selectedCategory)
            );
        setExhibitions(filteredData);
        console.log(`🔄 Fallback to local data: ${filteredData.length} exhibits`);
      } finally {
        setLoading(false);
      }
    };
    
    loadExhibitions();
  }, [selectedCategory]);

  return (
    <PageContainer role="main" aria-label="Learning Experiences">
      <PageHeader>
        <PageTitle>Experiences</PageTitle>
        <PageSubtitle>
          Explore our immersive collection of energy-focused exhibits designed for diverse 
          learning approaches, from place-based field experiences to virtual simulations.
        </PageSubtitle>
      </PageHeader>

      <FilterSection role="group" aria-label="Filter exhibitions by learning approach">
        {categories.map(category => (
          <FilterButton
            key={category.id}
            $active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
            aria-pressed={selectedCategory === category.id}
            aria-label={`Filter by ${category.label}${selectedCategory === category.id ? ' (currently selected)' : ''}`}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterSection>

      {error && (
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Notice</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
          <ErrorSubtext>
            Using locally stored data. All functionality remains available.
          </ErrorSubtext>
        </ErrorContainer>
      )}

      {loading ? (
        <LoadingContainer>
          <LoadingIcon>⚡</LoadingIcon>
          <LoadingTitle>Loading Exhibits...</LoadingTitle>
          <LoadingSubtext>Fetching the latest learning experiences</LoadingSubtext>
        </LoadingContainer>
      ) : (
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
                <ViewButton to={`/experiences/${exhibition.id}`}>
                  Explore Exhibit
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
      )}
    </PageContainer>
  );
}

export default Exhibitions;