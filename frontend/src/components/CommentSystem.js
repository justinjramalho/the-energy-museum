import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { apiService } from '../services/api';
import { useApiSubmit } from '../hooks/useApi';
import { useUserExperienceMetrics } from '../hooks/usePagePerformance';

const CommentSystemContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
  }
`;

const SectionTitle = styled.h3`
  color: #00d4ff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
`;

const CommentForm = styled.form`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const TextAreaFormGroup = styled(FormGroup)`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const Label = styled.label`
  color: #e0e6ed;
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.95rem;
    min-height: 80px;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    min-height: 70px;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  align-self: flex-start;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
    width: 100%;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.8rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CommentCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const AuthorName = styled.div`
  color: #00d4ff;
  font-weight: 600;
  font-size: 1.1rem;
`;

const CommentDate = styled.div`
  color: #8892a6;
  font-size: 0.9rem;
`;

const CommentContent = styled.div`
  color: #e0e6ed;
  line-height: 1.6;
  word-wrap: break-word;
`;

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #8892a6;
  font-style: italic;
`;

const ErrorMessage = styled.div`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  background: rgba(81, 207, 102, 0.1);
  border: 1px solid rgba(81, 207, 102, 0.3);
  color: #51cf66;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #8892a6;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  h4 {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
  }
`;

function CommentSystem({ exhibitionId, exhibitionTitle }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Performance monitoring
  useUserExperienceMetrics();

  const { submit: submitComment, loading: submitting, error } = useApiSubmit(
    (data) => apiService.submitComment(exhibitionId, data),
    (response) => {
      // Success callback
      setComments(prev => [response.comment, ...prev]);
      setFormData({ name: '', email: '', comment: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  );

  // Load comments on component mount
  useEffect(() => {
    const loadComments = async () => {
      try {
        setLoading(true);
        const response = await apiService.getComments(exhibitionId);
        setComments(response.comments || []);
      } catch (err) {
        console.error('Error loading comments:', err);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [exhibitionId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.comment.trim()) {
      return;
    }

    await submitComment(formData);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <CommentSystemContainer>
      <SectionTitle>
        <span>💬</span>
        Visitor Stories & Reflections
      </SectionTitle>
      
      <p style={{ color: '#b0b7c3', marginBottom: '2rem', lineHeight: 1.6 }}>
        Share your thoughts about "{exhibitionTitle}" and connect with other visitors. 
        What stories or insights did this exhibition inspire?
      </p>

      {/* Comment Form */}
      <CommentForm onSubmit={handleSubmit} role="form" aria-labelledby="comment-form-title">
        <h4 id="comment-form-title" style={{ color: '#00d4ff', marginBottom: '1.5rem' }}>
          Share Your Story
        </h4>
        
        {error && (
          <ErrorMessage role="alert" aria-live="polite">
            Error submitting comment: {error.message}
          </ErrorMessage>
        )}
        
        {showSuccess && (
          <SuccessMessage role="alert" aria-live="polite">
            Thank you for sharing! Your story has been added to the conversation.
          </SuccessMessage>
        )}

        <FormGrid>
          <FormGroup>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              aria-describedby="name-required"
              aria-invalid={!formData.name.trim() && formData.name !== '' ? 'true' : 'false'}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email (optional)</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              aria-describedby="email-optional"
            />
          </FormGroup>
        </FormGrid>

        <TextAreaFormGroup>
          <Label htmlFor="comment">Your Story or Reflection *</Label>
          <TextArea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="What did you discover in this exhibition? How did it make you think about energy differently? Share your insights..."
            required
            aria-describedby="comment-required"
            aria-invalid={!formData.comment.trim() && formData.comment !== '' ? 'true' : 'false'}
          />
        </TextAreaFormGroup>

        <SubmitButton 
          type="submit" 
          disabled={submitting || !formData.name.trim() || !formData.comment.trim()}
          aria-describedby="submit-requirements"
        >
          {submitting ? 'Sharing...' : 'Share Your Story'}
          <span aria-hidden="true">📝</span>
        </SubmitButton>
      </CommentForm>

      {/* Comments List */}
      <div>
        <h4 style={{ color: '#00d4ff', marginBottom: '1.5rem' }}>
          Visitor Stories ({comments.length})
        </h4>
        
        {loading ? (
          <LoadingIndicator>
            Loading visitor stories...
          </LoadingIndicator>
        ) : comments.length === 0 ? (
          <EmptyState>
            <div className="icon">💭</div>
            <h4>Be the First to Share</h4>
            <p>
              No stories have been shared yet for this exhibition. 
              Be the first to share your insights and inspire others!
            </p>
          </EmptyState>
        ) : (
          <CommentsList>
            {comments.map((comment) => (
              <CommentCard key={comment.id}>
                <CommentHeader>
                  <AuthorName>{comment.name}</AuthorName>
                  <CommentDate>{formatDate(comment.timestamp)}</CommentDate>
                </CommentHeader>
                <CommentContent>{comment.comment}</CommentContent>
              </CommentCard>
            ))}
          </CommentsList>
        )}
      </div>
    </CommentSystemContainer>
  );
}

export default CommentSystem;