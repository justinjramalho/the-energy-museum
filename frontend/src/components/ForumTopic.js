import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiThumbsUp, FiThumbsDown, FiMessageCircle, FiClock, FiStar, FiFlag } from 'react-icons/fi';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #8892a6;

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #64ffda;
    }
  }
`;

const TopicHeader = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const TopicTitle = styled.h1`
  color: #00d4ff;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const PinnedBadge = styled.div`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TopicMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
  color: #8892a6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const TopicContent = styled.div`
  color: #e0e6ed;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  blockquote {
    border-left: 4px solid #00d4ff;
    background: rgba(0, 212, 255, 0.05);
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
  }
`;

const VotingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`;

const VoteButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: ${props => props.$active ? '#00d4ff' : '#8892a6'};
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  ${props => props.$active && `
    background: rgba(0, 212, 255, 0.1);
    border-color: #00d4ff;
  `}
`;

const VoteCount = styled.span`
  font-weight: 600;
  margin: 0 1rem;
  color: #00d4ff;
  font-size: 1.1rem;
`;

const RepliesSection = styled.div`
  margin-top: 3rem;
`;

const SectionHeader = styled.h2`
  color: #00d4ff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReplyCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
  }
`;

const ReplyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0f1c;
  font-weight: 700;
  font-size: 1.1rem;
`;

const AuthorName = styled.div`
  color: #00d4ff;
  font-weight: 600;
`;

const AuthorRole = styled.div`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ReplyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #8892a6;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;

  &:hover {
    color: #00d4ff;
  }
`;

const ReplyContent = styled.div`
  color: #e0e6ed;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const ReplyVoting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`;

const NewReplySection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
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

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
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

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// Sample topic data
const sampleTopic = {
  id: 1,
  title: "NGSS Alignment Best Practices",
  content: `I'm implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects.

**Specific areas I'm struggling with:**

1. **Performance Expectations (PEs)** - How do you effectively assess student progress on the PEs without over-testing?

2. **Crosscutting Concepts** - What strategies work best for helping students recognize and apply crosscutting concepts across different units?

3. **Science and Engineering Practices** - How do you balance student autonomy in investigations with ensuring they're meeting the practice standards?

I've been using the Energy and Matter unit as a pilot, and while students are engaged, I want to make sure I'm not missing key alignment opportunities.

Any resources, strategies, or experiences would be greatly appreciated!`,
  author: "Sarah M.",
  authorRole: "Middle School Teacher",
  category: "trainings",
  isPinned: true,
  votes: 15,
  replies: 8,
  views: 142,
  createdAt: "2 days ago"
};

const sampleReplies = [
  {
    id: 1,
    author: "Dr. Edward Cohen",
    authorRole: "Energy Museum Team",
    content: `Great question, Sarah! NGSS alignment is indeed a journey, not a destination. Here are some strategies that have worked well for our partner schools:

**For Performance Expectations:**
- Use formative assessment strategies that feel natural to the learning process
- Consider using student self-reflection journals where they track their own progress
- Try "gallery walks" where students present their understanding in various formats

**For Crosscutting Concepts:**
- Create concept maps that students build throughout the unit
- Use consistent vocabulary and reference back to previous units
- The "Energy and Matter" concept is perfect for making connections across chemistry, physics, and earth science

I'd be happy to share some specific assessment rubrics we've developed. Would that be helpful?`,
    votes: 22,
    createdAt: "1 day ago",
    isPinned: true
  },
  {
    id: 2,
    author: "Mike R.",
    authorRole: "Science Coordinator",
    content: `@Sarah M. I've been working with OpenSciEd for 3 years now. One thing that really helped was creating a "practices tracker" - a simple document where students check off which science practices they used in each investigation. It helps them become more metacognitive about their learning process.

For crosscutting concepts, I use anchor charts that stay up all year and we add to them as we encounter examples in different units.`,
    votes: 8,
    createdAt: "1 day ago"
  },
  {
    id: 3,
    author: "Jennifer L.",
    authorRole: "8th Grade Teacher",
    content: `The assessment piece is so challenging! I've found that using exit tickets with specific prompts about the day's learning helps me gauge where students are without formal testing. Questions like "What pattern did you notice today?" or "How does today's investigation connect to our previous work with energy transfers?"`,
    votes: 5,
    createdAt: "18 hours ago"
  }
];

function ForumTopic() {
  // const { topicId } = useParams(); // Will be used when implementing dynamic topic loading
  const topicId = sampleTopic.id; // Using sample topic ID for now
  
  // Load saved votes from localStorage
  const [userVote, setUserVote] = useState(() => {
    const saved = localStorage.getItem(`forum_vote_topic_${topicId}`);
    return saved ? JSON.parse(saved) : null;
  });
  
  const [replyVotes, setReplyVotes] = useState(() => {
    const saved = localStorage.getItem(`forum_votes_replies_${topicId}`);
    return saved ? JSON.parse(saved) : {};
  });
  
  const [newReply, setNewReply] = useState({ name: '', email: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flaggedItems, setFlaggedItems] = useState(() => {
    const saved = localStorage.getItem(`forum_flagged_${topicId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVote = async (type) => {
    const newVote = userVote === type ? null : type;
    setUserVote(newVote);
    
    // Save to localStorage
    if (newVote) {
      localStorage.setItem(`forum_vote_topic_${topicId}`, JSON.stringify(newVote));
    } else {
      localStorage.removeItem(`forum_vote_topic_${topicId}`);
    }
    
    // Send vote to API
    try {
      const response = await fetch('https://theenergymuseum.com/api/forum.php/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'topic',
          topicId: topicId,
          vote: newVote
        })
      });

      const data = await response.json();
      if (data.success) {
        // Optionally update topic score in real-time
        console.log('Vote recorded:', data);
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
    }
  };

  const handleReplyVote = async (replyId, type) => {
    const newVotes = {
      ...replyVotes,
      [replyId]: replyVotes[replyId] === type ? null : type
    };
    setReplyVotes(newVotes);
    
    // Save to localStorage
    localStorage.setItem(`forum_votes_replies_${topicId}`, JSON.stringify(newVotes));
    
    // Send vote to API
    try {
      const response = await fetch('https://theenergymuseum.com/api/forum.php/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'reply',
          replyId: replyId,
          vote: newVotes[replyId]
        })
      });

      const data = await response.json();
      if (data.success) {
        console.log('Reply vote recorded:', data);
      }
    } catch (error) {
      console.error('Error submitting reply vote:', error);
    }
  };

  const handleFlag = async (itemId, itemType = 'topic') => {
    const confirmed = window.confirm(
      `Are you sure you want to report this ${itemType} for inappropriate content? This will notify moderators.`
    );
    
    if (confirmed) {
      const newFlagged = { ...flaggedItems, [itemId]: true };
      setFlaggedItems(newFlagged);
      localStorage.setItem(`forum_flagged_${topicId}`, JSON.stringify(newFlagged));
      
      // TODO: Send flag to API
      try {
        // await apiService.flagForumContent({ itemId, itemType, reason: 'inappropriate' });
        alert('Content has been reported to moderators. Thank you for helping keep our community safe.');
      } catch (error) {
        console.error('Error flagging content:', error);
        alert('Unable to report content at this time. Please try again later.');
      }
    }
  };

  const handleSubmitReply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Reply submitted! It will appear after moderation approval.');
      setNewReply({ name: '', email: '', content: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const getVoteCount = (baseVotes, userVote) => {
    if (userVote === 'up') return baseVotes + 1;
    if (userVote === 'down') return baseVotes - 1;
    return baseVotes;
  };

  return (
    <PageContainer>
      <Breadcrumb>
        <Link to="/forum">
          <FiArrowLeft style={{ marginRight: '0.3rem' }} />
          Back to Forums
        </Link>
        <span>/</span>
        <Link to="/forum?category=trainings">Trainings</Link>
        <span>/</span>
        <span>{sampleTopic.title}</span>
      </Breadcrumb>

      <TopicHeader>
        <TopicTitle>
          {sampleTopic.isPinned && (
            <PinnedBadge>
              <FiStar />
              Pinned
            </PinnedBadge>
          )}
          {sampleTopic.title}
        </TopicTitle>

        <TopicMeta>
          <MetaItem>
            <strong>{sampleTopic.author}</strong>
            {sampleTopic.authorRole && <span>• {sampleTopic.authorRole}</span>}
          </MetaItem>
          <MetaItem>
            <FiClock />
            {sampleTopic.createdAt}
          </MetaItem>
          <MetaItem>
            <FiMessageCircle />
            {sampleTopic.replies} replies
          </MetaItem>
          <MetaItem>
            👁️ {sampleTopic.views} views
          </MetaItem>
        </TopicMeta>

        <TopicContent dangerouslySetInnerHTML={{ __html: sampleTopic.content.replace(/\n/g, '<br/>') }} />

        <VotingSection>
          <VoteButton
            $active={userVote === 'up'}
            onClick={() => handleVote('up')}
          >
            <FiThumbsUp />
            Helpful
          </VoteButton>
          <VoteCount>{getVoteCount(sampleTopic.votes, userVote)}</VoteCount>
          <VoteButton
            $active={userVote === 'down'}
            onClick={() => handleVote('down')}
          >
            <FiThumbsDown />
          </VoteButton>
          <ActionButton 
            style={{ 
              marginLeft: 'auto',
              opacity: flaggedItems[sampleTopic.id] ? 0.5 : 1,
              color: flaggedItems[sampleTopic.id] ? '#ff6b6b' : undefined
            }}
            onClick={() => handleFlag(sampleTopic.id, 'topic')}
            disabled={flaggedItems[sampleTopic.id]}
          >
            <FiFlag />
            {flaggedItems[sampleTopic.id] ? 'Reported' : 'Report'}
          </ActionButton>
        </VotingSection>
      </TopicHeader>

      <RepliesSection>
        <SectionHeader>
          <FiMessageCircle />
          Replies ({sampleTopic.replies})
        </SectionHeader>

        {sampleReplies.map((reply) => (
          <ReplyCard key={reply.id}>
            <ReplyHeader>
              <AuthorInfo>
                <Avatar>{reply.author.charAt(0)}</Avatar>
                <div>
                  <AuthorName>{reply.author}</AuthorName>
                  {reply.authorRole && <AuthorRole>{reply.authorRole}</AuthorRole>}
                </div>
              </AuthorInfo>
              <ReplyActions>
                <span style={{ color: '#8892a6', fontSize: '0.9rem' }}>{reply.createdAt}</span>
                <ActionButton
                  style={{
                    opacity: flaggedItems[reply.id] ? 0.5 : 1,
                    color: flaggedItems[reply.id] ? '#ff6b6b' : undefined
                  }}
                  onClick={() => handleFlag(reply.id, 'reply')}
                  disabled={flaggedItems[reply.id]}
                >
                  <FiFlag />
                </ActionButton>
              </ReplyActions>
            </ReplyHeader>

            <ReplyContent dangerouslySetInnerHTML={{ __html: reply.content.replace(/\n/g, '<br/>') }} />

            <ReplyVoting>
              <VoteButton
                $active={replyVotes[reply.id] === 'up'}
                onClick={() => handleReplyVote(reply.id, 'up')}
              >
                <FiThumbsUp />
                {getVoteCount(reply.votes, replyVotes[reply.id])}
              </VoteButton>
              <VoteButton
                $active={replyVotes[reply.id] === 'down'}
                onClick={() => handleReplyVote(reply.id, 'down')}
              >
                <FiThumbsDown />
              </VoteButton>
              {reply.isPinned && (
                <div style={{ marginLeft: 'auto', color: '#64ffda', fontSize: '0.9rem' }}>
                  <FiStar style={{ marginRight: '0.3rem' }} />
                  Team Response
                </div>
              )}
            </ReplyVoting>
          </ReplyCard>
        ))}
      </RepliesSection>

      <NewReplySection>
        <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem' }}>Add Your Reply</h3>
        <form onSubmit={handleSubmitReply}>
          <FormGroup>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              value={newReply.name}
              onChange={(e) => setNewReply(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Your name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              id="email"
              type="email"
              value={newReply.email}
              onChange={(e) => setNewReply(prev => ({ ...prev, email: e.target.value }))}
              placeholder="your.email@example.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="content">Your Reply *</Label>
            <TextArea
              id="content"
              value={newReply.content}
              onChange={(e) => setNewReply(prev => ({ ...prev, content: e.target.value }))}
              placeholder="Share your thoughts, experiences, or questions..."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Reply'}
          </SubmitButton>
        </form>
      </NewReplySection>
    </PageContainer>
  );
}

export default ForumTopic;
