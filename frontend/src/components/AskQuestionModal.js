import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX, FiEdit, FiUser, FiMail, FiTag, FiMessageSquare } from 'react-icons/fi';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, #1a2332 0%, #0a0f1c 100%);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
`;

const ModalTitle = styled.h2`
  color: #00d4ff;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #8892a6;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const Select = styled.select`
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

  option {
    background: #1a2332;
    color: #ccd6f6;
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
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`;

const HelpText = styled.p`
  color: #8892a6;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  line-height: 1.4;
`;

const ModalFooter = styled.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  border: 2px solid #8892a6;
  color: #8892a6;

  &:hover:not(:disabled) {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }
`;

const categories = [
  { value: '', label: 'Select discussion type...' },
  { value: 'trainings', label: '🎓 Trainings', description: 'OpenSciEd workshops, professional development, training programs' },
  { value: 'funding', label: '💰 Funding/Grants', description: 'Grant opportunities, funding sources, implementation support' },
  { value: 'services', label: '🤝 Services/Consultation', description: 'Field experiences, customized programs, consultation services' },
  { value: 'programs', label: '📅 Programs/Events', description: 'Family STEM nights, community programs, educational events' },
  { value: 'support', label: '🛠️ Support', description: 'Technical support, troubleshooting, general assistance' },
  { value: 'general', label: '💬 General Questions', description: 'Open discussions, community conversations about energy education' }
];

function AskQuestionModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    author: '',
    authorRole: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Question title is required';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Title should be at least 10 characters';
    }
    
    if (!formData.category) {
      newErrors.category = 'Please select a discussion type';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Your name is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Question content is required';
    } else if (formData.content.length < 20) {
      newErrors.content = 'Please provide more details (at least 20 characters)';
    }

    // Email validation if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit the question
      await onSubmit(formData);
      
      // Reset form
      setFormData({
        title: '',
        category: '',
        author: '',
        authorRole: '',
        email: '',
        content: ''
      });
      setErrors({});
      
      // Close modal
      onClose();
    } catch (error) {
      console.error('Error submitting question:', error);
      setErrors({ submit: 'Failed to submit question. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    // Reset form and close
    setFormData({
      title: '',
      category: '',
      author: '',
      authorRole: '',
      email: '',
      content: ''
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  const selectedCategory = categories.find(cat => cat.value === formData.category);

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && handleCancel()}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>
            <FiEdit />
            Ask a Question
          </ModalTitle>
          <CloseButton onClick={handleCancel}>
            <FiX />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">
                <FiMessageSquare />
                Question Title *
              </Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., NGSS Alignment Best Practices"
                style={{ borderColor: errors.title ? '#ff6b6b' : undefined }}
              />
              {errors.title && <HelpText style={{ color: '#ff6b6b' }}>{errors.title}</HelpText>}
              <HelpText>Be specific and clear. This will be the main heading of your discussion.</HelpText>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="category">
                <FiTag />
                Discussion Type *
              </Label>
              <Select
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                style={{ borderColor: errors.category ? '#ff6b6b' : undefined }}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
              {errors.category && <HelpText style={{ color: '#ff6b6b' }}>{errors.category}</HelpText>}
              {selectedCategory && selectedCategory.description && (
                <HelpText>{selectedCategory.description}</HelpText>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="author">
                <FiUser />
                Your Name *
              </Label>
              <Input
                id="author"
                type="text"
                value={formData.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
                placeholder="e.g., Sarah M."
                style={{ borderColor: errors.author ? '#ff6b6b' : undefined }}
              />
              {errors.author && <HelpText style={{ color: '#ff6b6b' }}>{errors.author}</HelpText>}
              <HelpText>This will be displayed publicly with your question.</HelpText>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="authorRole">
                <FiUser />
                Your Role (optional)
              </Label>
              <Input
                id="authorRole"
                type="text"
                value={formData.authorRole}
                onChange={(e) => handleInputChange('authorRole', e.target.value)}
                placeholder="e.g., Middle School Teacher"
                style={{ borderColor: errors.authorRole ? '#ff6b6b' : undefined }}
              />
              {errors.authorRole && <HelpText style={{ color: '#ff6b6b' }}>{errors.authorRole}</HelpText>}
              <HelpText>This will appear next to your name.</HelpText>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                <FiMail />
                Email (optional)
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
                style={{ borderColor: errors.email ? '#ff6b6b' : undefined }}
              />
              {errors.email && <HelpText style={{ color: '#ff6b6b' }}>{errors.email}</HelpText>}
              <HelpText>Optional. We may use this to follow up or notify you of responses.</HelpText>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="content">
                <FiMessageSquare />
                Question Details *
              </Label>
              <TextArea
                id="content"
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Describe your situation, what you've tried, and what specific help you need. Include any relevant context about your school, grade level, or implementation challenges..."
                style={{ borderColor: errors.content ? '#ff6b6b' : undefined }}
              />
              {errors.content && <HelpText style={{ color: '#ff6b6b' }}>{errors.content}</HelpText>}
              <HelpText>Provide details to help the community give you the best possible answers. The more context, the better!</HelpText>
            </FormGroup>

            {errors.submit && (
              <HelpText style={{ color: '#ff6b6b', textAlign: 'center', marginBottom: '1rem' }}>
                {errors.submit}
              </HelpText>
            )}
          </form>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton type="button" onClick={handleCancel} disabled={isSubmitting}>
            Cancel
          </SecondaryButton>
          <PrimaryButton onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Question'}
          </PrimaryButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default AskQuestionModal;
