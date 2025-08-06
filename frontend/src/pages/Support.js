import React, { useState } from 'react';
import styled from 'styled-components';
import { apiService } from '../services/api';
import { useApiSubmit } from '../hooks/useApi';

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

const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SupportCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
  }
`;

const SupportIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const SupportTitle = styled.h3`
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const SupportDescription = styled.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactForm = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  margin: 2rem 0;
`;

const FormTitle = styled.h2`
  color: #00d4ff;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #e0e6ed;
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a2332;
    color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactCard = styled.div`
  text-align: center;
  padding: 1.5rem;

  h3 {
    color: #00d4ff;
    margin-bottom: 1rem;
  }

  p {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
  }

  a {
    color: #00d4ff;
  }
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
  
  h4 {
    color: #51cf66;
    margin-bottom: 0.5rem;
  }
`;

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    supportType: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const { submit: submitRequest, loading: isSubmitting, error } = useApiSubmit(
    (data) => apiService.submitSupportRequest(data),
    (response) => {
      // Success callback
      setFormData({
        name: '',
        email: '',
        organization: '',
        supportType: '',
        message: ''
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 8000);
    }
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitRequest(formData);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Professional Support</PageTitle>
        <PageSubtitle>
          Get expert guidance and personalized consultation from our network of energy professionals. 
          Whether you're a student, educator, business owner, or researcher, we're here to help.
        </PageSubtitle>
      </PageHeader>

      <SupportGrid>
        <SupportCard>
          <SupportIcon>📚</SupportIcon>
          <SupportTitle>Educational Support</SupportTitle>
          <SupportDescription>
            Curriculum development, research guidance, student mentoring, and teacher training programs.
          </SupportDescription>
        </SupportCard>

        <SupportCard>
          <SupportIcon>🏢</SupportIcon>
          <SupportTitle>Business Consultation</SupportTitle>
          <SupportDescription>
            Energy audits, renewable integration, sustainability strategy, and technology assessment.
          </SupportDescription>
        </SupportCard>

        <SupportCard>
          <SupportIcon>🏛️</SupportIcon>
          <SupportTitle>Policy & Planning</SupportTitle>
          <SupportDescription>
            Energy policy analysis, community planning, stakeholder engagement, and environmental impact.
          </SupportDescription>
        </SupportCard>

        <SupportCard>
          <SupportIcon>🔬</SupportIcon>
          <SupportTitle>Technical Support</SupportTitle>
          <SupportDescription>
            System design, performance analysis, troubleshooting, and innovation consulting.
          </SupportDescription>
        </SupportCard>
      </SupportGrid>

      <ContactForm>
        <FormTitle>Request Professional Consultation</FormTitle>
        
        {error && (
          <ErrorMessage>
            Error submitting request: {error.message}
          </ErrorMessage>
        )}
        
        {showSuccess && (
          <SuccessMessage>
            <h4>🎉 Request Submitted Successfully!</h4>
            <p>
              Thank you for your consultation request! We've received your information and 
              will match you with the most suitable expert. You can expect to hear from us 
              within 24 hours to schedule your free initial consultation.
            </p>
          </SuccessMessage>
        )}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="organization">Organization</Label>
            <Input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="Your organization or institution (optional)"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="supportType">Type of Support *</Label>
            <Select
              id="supportType"
              name="supportType"
              value={formData.supportType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select support type</option>
              <option value="educational">Educational Support</option>
              <option value="business">Business Consultation</option>
              <option value="policy">Policy & Planning</option>
              <option value="technical">Technical Support</option>
              <option value="research">Research Collaboration</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your specific needs, challenges, or questions. Include any relevant details about your project, timeline, and goals."
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </SubmitButton>
        </Form>
      </ContactForm>

      <ContactInfo>
        <ContactCard>
          <h3>📧 Email Support</h3>
          <p>General Inquiries:</p>
          <a href="mailto:info@energymuseum.org">info@energymuseum.org</a>
          <p>Consultation Requests:</p>
          <a href="mailto:support@energymuseum.org">support@energymuseum.org</a>
        </ContactCard>

        <ContactCard>
          <h3>🕒 Response Time</h3>
          <p>Initial Response: Within 24 hours</p>
          <p>Consultation Scheduling: 2-3 business days</p>
          <p>Office Hours: Mon-Fri, 9 AM - 5 PM EST</p>
        </ContactCard>

        <ContactCard>
          <h3>💬 Community Support</h3>
          <p>Join our discussion forums for community-driven support and networking opportunities.</p>
          <a href="#forums">Visit Community Forums</a>
        </ContactCard>
      </ContactInfo>
    </PageContainer>
  );
}

export default Support;