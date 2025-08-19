import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useSearchParams } from 'react-router-dom';
import { FiSearch, FiMessageCircle, FiUsers, FiClock, FiStar, FiEdit, FiThumbsUp } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePagePerformance, useUserExperienceMetrics, useResponsiveMetrics } from '../hooks/usePagePerformance';
import ErrorBoundary from '../components/ErrorBoundary';
import SEOHead from '../components/SEOHead';
import AskQuestionModal from '../components/AskQuestionModal';
import { apiService } from '../services/api';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 3rem 2rem 4rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 3rem;
    border-radius: 16px;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem 2rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 90%;
    margin: 0 auto 1.5rem;
    line-height: 1.6;
    padding: 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 auto 1rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #00d4ff;
  font-size: 1.2rem;
`;

// Filter Controls
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const FilterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const FilterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const TopAskButton = styled.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FilterSelect = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  option {
    background: #1a2332;
    color: #ccd6f6;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem 0.8rem;
  }
`;

const DiscussionCount = styled.div`
  color: #8892a6;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

// Discussion List
const DiscussionsList = styled.div`
  margin-bottom: 3rem;
`;

const DiscussionItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 212, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
  }
`;

const DiscussionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const DiscussionTitle = styled.h3`
  color: #00d4ff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
`;

const CategoryTag = styled.span`
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.3);
`;

const PinnedBadge = styled.div`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const DiscussionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #8892a6;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const DiscussionPreview = styled.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin: 1rem 0;
  font-size: 0.95rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DiscussionStats = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #8892a6;
`;

const VoteCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d4ff;
  font-weight: 600;
`;

const PinnedIcon = styled(FiStar)`
  color: #64ffda;
  font-size: 0.8rem;
`;

const StatsSection = styled.section`
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`;

const StatCard = styled.div`
  h3 {
    font-size: 2.5rem;
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }

  p {
    color: #b0b7c3;
    font-size: 1rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(Link)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: transparent;
  border: 2px solid #00d4ff;
  color: #00d4ff;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
  }
`;

// Unified forum discussions data
const forumDiscussions = [
  {
    id: 1,
    title: 'NGSS Alignment Best Practices',
    category: 'Trainings',
    categoryIcon: '🎓',
    author: 'Sarah M.',
    authorRole: 'Middle School Teacher',
    preview: 'I\'m implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects...',
    isPinned: true,
    votes: 15,
    replies: 8,
    views: 142,
    lastActivity: '2 hours ago',
    created: '2 days ago'
  },
  {
    id: 2,
    title: 'Title I Grant Application Tips',
    category: 'Funding/Grants',
    categoryIcon: '💰',
    author: 'Dr. Edward Cohen',
    authorRole: 'Energy Museum Team',
    preview: 'Here are some proven strategies for successful Title I grant applications based on our experience helping schools secure funding for energy education programs...',
    isPinned: true,
    votes: 22,
    replies: 12,
    views: 89,
    lastActivity: '4 hours ago',
    created: '3 days ago'
  },
  {
    id: 3,
    title: 'Hyperlocal Learning Experience Design',
    category: 'Services/Consultation',
    categoryIcon: '🤝',
    author: 'Dr. Edward Cohen',
    authorRole: 'Energy Museum Team',
    preview: 'Designing hyperlocal place-based learning experiences requires understanding your community\'s unique energy landscape. Here\'s how we approach customization...',
    isPinned: true,
    votes: 18,
    replies: 15,
    views: 156,
    lastActivity: '1 hour ago',
    created: '1 day ago'
  },
  {
    id: 4,
    title: 'Family & Friends STEM Night Planning',
    category: 'Programs/Events',
    categoryIcon: '📅',
    author: 'Maria S.',
    authorRole: 'Elementary Principal',
    preview: 'Planning our first Family & Friends STEM Night focused on energy concepts. Looking for station ideas that work well for mixed age groups and keep parents engaged...',
    isPinned: false,
    votes: 14,
    replies: 9,
    views: 78,
    lastActivity: '3 hours ago',
    created: '5 hours ago'
  },
  {
    id: 5,
    title: 'Platform Access Issues',
    category: 'Support',
    categoryIcon: '🛠️',
    author: 'Tech Support Team',
    authorRole: 'Energy Museum Team',
    preview: 'If you\'re experiencing login issues or trouble accessing resources, please try these troubleshooting steps first. Most issues can be resolved quickly...',
    isPinned: true,
    votes: 8,
    replies: 6,
    views: 95,
    lastActivity: '30 minutes ago',
    created: '6 hours ago'
  },
  {
    id: 6,
    title: 'Energy Literacy in Elementary Schools',
    category: 'General Questions',
    categoryIcon: '💬',
    author: 'Tom W.',
    authorRole: 'Elementary Teacher',
    preview: 'What are the most effective ways to introduce energy concepts to K-5 students? I\'m particularly interested in hands-on activities that don\'t require expensive equipment...',
    isPinned: false,
    votes: 28,
    replies: 21,
    views: 203,
    lastActivity: '1 hour ago',
    created: '1 day ago'
  },
  {
    id: 7,
    title: 'OpenSciEd Implementation Timeline',
    category: 'Trainings',
    categoryIcon: '🎓',
    author: 'Mike R.',
    authorRole: 'Science Coordinator',
    preview: 'Our district is rolling out OpenSciEd across all middle schools. Looking for realistic timelines and what to expect during the first year of implementation...',
    isPinned: false,
    votes: 12,
    replies: 7,
    views: 67,
    lastActivity: '5 hours ago',
    created: '2 days ago'
  },
  {
    id: 8,
    title: 'NSF Grant Deadline Reminders',
    category: 'Funding/Grants',
    categoryIcon: '💰',
    author: 'Jennifer L.',
    authorRole: 'Grant Writer',
    preview: 'Important upcoming NSF deadlines for education grants. The Discovery Research PreK-12 program deadline is approaching, and here are some key points to remember...',
    isPinned: false,
    votes: 7,
    replies: 4,
    views: 45,
    lastActivity: '1 day ago',
    created: '2 days ago'
  },
  {
    id: 9,
    title: 'Field Trip Safety Protocols',
    category: 'Services/Consultation',
    categoryIcon: '🤝',
    author: 'Linda T.',
    authorRole: 'Safety Coordinator',
    preview: 'With field experiences resuming, what safety protocols are other schools implementing? Our district requires updated procedures for all off-site learning...',
    isPinned: false,
    votes: 12,
    replies: 8,
    views: 92,
    lastActivity: '6 hours ago',
    created: '1 day ago'
  },
  {
    id: 10,
    title: 'Welcome New Members!',
    category: 'General Questions',
    categoryIcon: '💬',
    author: 'Community Manager',
    authorRole: 'Energy Museum Team',
    preview: 'Welcome to our growing community of energy education professionals! Please introduce yourself and let us know how we can support your work...',
    isPinned: true,
    votes: 45,
    replies: 32,
    views: 298,
    lastActivity: '2 hours ago',
    created: '1 week ago'
  }
];

// Filter categories
const categories = [
  { value: 'all', label: 'All Discussions' },
  { value: 'trainings', label: '🎓 Trainings' },
  { value: 'funding', label: '💰 Funding/Grants' },
  { value: 'services', label: '🤝 Services/Consultation' },
  { value: 'programs', label: '📅 Programs/Events' },
  { value: 'support', label: '🛠️ Support' },
  { value: 'general', label: '💬 General Questions' }
];

function Forum() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('recent');
  const [filteredDiscussions, setFilteredDiscussions] = useState(forumDiscussions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmittingQuestion, setIsSubmittingQuestion] = useState(false);
  
  // Performance monitoring hooks
  usePagePerformance();
  useUserExperienceMetrics();
  useResponsiveMetrics();
  
  const heroAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Modal accessibility: close on escape key and manage body scroll
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isModalOpen]);

  useEffect(() => {
    let filtered = forumDiscussions;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(discussion => 
        discussion.category.toLowerCase().replace('/', '').replace(' ', '') === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(discussion =>
        discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort discussions
    filtered = [...filtered].sort((a, b) => {
      // Always show pinned posts first
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      switch (sortBy) {
        case 'recent':
          return 0; // Keep original order (already sorted by activity)
        case 'votes':
          return b.votes - a.votes;
        case 'replies':
          return b.replies - a.replies;
        default:
          return 0;
      }
    });

    setFilteredDiscussions(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const totalTopics = forumDiscussions.length;
  const totalPosts = forumDiscussions.reduce((sum, discussion) => sum + discussion.replies, 0);

  const handleQuestionSubmit = async (questionData) => {
    setIsSubmittingQuestion(true);
    
    try {
      // Submit to the forum API
      const response = await apiService.createForumTopic({
        title: questionData.title,
        content: questionData.content,
        category: questionData.category,
        author: questionData.author,
        authorRole: questionData.authorRole,
        email: questionData.email
      });

      if (response.success) {
        // Show success message
        alert('Question submitted successfully! It will appear after moderation review.');
        
        // Optionally refresh the discussions list or add optimistically
        // For now, we'll just close the modal since posts need moderation
      } else {
        throw new Error(response.message || 'Failed to submit question');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      throw error; // Re-throw so the modal can handle it
    } finally {
      setIsSubmittingQuestion(false);
    }
  };

  return (
    <ErrorBoundary>
      <SEOHead
        title="Community Forums"
        description="Connect with energy education professionals, share experiences, and get expert support from The Energy Museum community. Join discussions on STEM education, funding, and best practices."
        keywords="energy education forums, STEM education community, teacher collaboration, education discussion, energy literacy"
        canonical="/forum"
      />
      <PageContainer>
      <HeroSection ref={heroAnimation.ref} role="banner" aria-labelledby="forum-title">
        <div style={{
          opacity: heroAnimation.shouldAnimate ? 1 : 0,
          transform: heroAnimation.shouldAnimate ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
          <HeroTitle id="forum-title">Community Forums</HeroTitle>
          <HeroSubtitle>
            Connect with educators, share experiences, and get expert support from The Energy Museum community. 
            Your questions and insights help us all grow together.
          </HeroSubtitle>
          
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search topics, categories, or questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search forum discussions"
            />
          </SearchContainer>
        </div>
      </HeroSection>

      <StatsSection>
        <h2 style={{ color: '#00d4ff', marginBottom: '0.5rem' }}>Community Stats</h2>
        <p style={{ color: '#b0b7c3' }}>Building knowledge together, one conversation at a time</p>
        <StatsGrid>
          <StatCard>
            <h3>{totalTopics}</h3>
            <p>Active Topics</p>
          </StatCard>
          <StatCard>
            <h3>{totalPosts}</h3>
            <p>Community Posts</p>
          </StatCard>
          <StatCard>
            <h3>280+</h3>
            <p>Active Members</p>
          </StatCard>
          <StatCard>
            <h3>95%</h3>
            <p>Questions Answered</p>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <FilterContainer role="region" aria-label="Discussion filters and controls">
        <FilterLeft>
          <FilterSelect
            value={selectedCategory}
            onChange={(e) => {
              const newCategory = e.target.value;
              setSelectedCategory(newCategory);
              // Update URL parameters
              if (newCategory === 'all') {
                setSearchParams({});
              } else {
                setSearchParams({ category: newCategory });
              }
            }}
            aria-label="Filter discussions by category"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </FilterSelect>
          
          <FilterSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort discussions by"
          >
            <option value="recent">Most Recent</option>
            <option value="votes">Most Helpful</option>
            <option value="replies">Most Discussed</option>
          </FilterSelect>
          
          <DiscussionCount>
            {filteredDiscussions.length} discussion{filteredDiscussions.length !== 1 ? 's' : ''}
          </DiscussionCount>
        </FilterLeft>

        <FilterRight>
          <TopAskButton
            onClick={() => setIsModalOpen(true)}
            disabled={isSubmittingQuestion}
          >
            <FiEdit />
            Ask a Question
          </TopAskButton>
        </FilterRight>
      </FilterContainer>

      <DiscussionsList>
        {filteredDiscussions.map((discussion) => (
          <DiscussionItem 
            key={discussion.id}
            onClick={() => window.location.href = `/forum/topic/${discussion.id}`}
          >
            <DiscussionHeader>
              <DiscussionTitle>
                {discussion.isPinned && (
                  <PinnedBadge>
                    <PinnedIcon />
                    Pinned
                  </PinnedBadge>
                )}
                {discussion.title}
              </DiscussionTitle>
              <CategoryTag>{discussion.categoryIcon} {discussion.category}</CategoryTag>
            </DiscussionHeader>

            <DiscussionMeta>
              <MetaItem>
                <strong>{discussion.author}</strong>
                {discussion.authorRole && <span style={{ color: '#8892a6' }}>• {discussion.authorRole}</span>}
              </MetaItem>
              <MetaItem>
                <FiClock />
                {discussion.lastActivity}
              </MetaItem>
            </DiscussionMeta>

            <DiscussionPreview>{discussion.preview}</DiscussionPreview>

            <DiscussionStats>
              <VoteCount>
                <FiThumbsUp />
                {discussion.votes}
              </VoteCount>
              <StatItem>
                <FiMessageCircle />
                {discussion.replies} replies
              </StatItem>
              <StatItem>
                <FiUsers />
                {discussion.views} views
              </StatItem>
              <StatItem style={{ marginLeft: 'auto', color: '#8892a6' }}>
                Created {discussion.created}
              </StatItem>
            </DiscussionStats>
          </DiscussionItem>
        ))}
        
        {filteredDiscussions.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem', 
            color: '#8892a6',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(0, 212, 255, 0.2)'
          }}>
            <FiSearch style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }} />
            <h3 style={{ color: '#b0b7c3', marginBottom: '0.5rem' }}>No discussions found</h3>
            <p>Try adjusting your search terms or category filter, or start a new discussion!</p>
          </div>
        )}
      </DiscussionsList>

      <ActionButtons>
        <ActionButton 
          as="button"
          onClick={() => setIsModalOpen(true)}
          disabled={isSubmittingQuestion}
        >
          <FiEdit />
          Ask a Question
        </ActionButton>
        <SecondaryButton to="/contact">
          <FiMessageCircle />
          Direct Support
        </SecondaryButton>
      </ActionButtons>

      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleQuestionSubmit}
      />
    </PageContainer>
    </ErrorBoundary>
  );
}

export default Forum;
