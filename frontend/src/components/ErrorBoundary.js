import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: rgba(255, 0, 0, 0.05);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 12px;
  margin: 2rem 0;
`;

const ErrorTitle = styled.h2`
  color: #ff6b6b;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: #b0b7c3;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 1.5rem;
`;

const RetryButton = styled.button`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
  }
  
  &:focus {
    outline: 2px solid #64ffda;
    outline-offset: 2px;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Services page error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Refresh the page as a fallback
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer role="alert" aria-live="assertive">
          <ErrorTitle>⚠️ Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but there was an error loading this section of our services page. 
            This might be a temporary issue. Please try refreshing the page or contact us 
            if the problem persists.
          </ErrorMessage>
          <RetryButton 
            onClick={this.handleRetry}
            aria-label="Retry loading the page"
          >
            Try Again
          </RetryButton>
          {process.env.NODE_ENV === 'development' && (
            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
              <summary style={{ color: '#64ffda', cursor: 'pointer' }}>
                Developer Info (Development Mode)
              </summary>
              <pre style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '1rem' }}>
                {this.state.error && this.state.error.toString()}
              </pre>
            </details>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
