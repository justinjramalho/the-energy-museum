import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TeaserContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.$reverse ? '1fr 1.2fr' : '1.2fr 1fr'};
  gap: 4rem;
  align-items: center;
  margin: 6rem 0;
  opacity: 0;
  
  ${props => props.$shouldAnimate && css`
    animation: ${props.$direction === 'left' ? slideInLeft : slideInRight} 0.8s ease-out forwards;
  `}

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const ContentSection = styled.div`
  order: ${props => props.$reverse ? 2 : 1};
  
  @media (max-width: 968px) {
    order: 2;
  }
`;

const VisualSection = styled.div`
  order: ${props => props.$reverse ? 1 : 2};
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
  }
`;

const StorylineTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const ExhibitionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const NarrativeHook = styled.p`
  font-size: 1.4rem;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  font-style: italic;
`;

const StoryDescription = styled.p`
  font-size: 1.1rem;
  color: #b0b7c3;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const StoryElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const StoryElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e0e6ed;
  font-size: 0.95rem;
  
  .icon {
    color: #00d4ff;
    font-size: 1.1rem;
  }
`;

const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const VisualFrame = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.$gradient};
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.5);
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const VisualContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  
  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  .label {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.9;
  }
`;

const InteractionHint = styled.div`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  background: rgba(0, 212, 255, 0.9);
  color: #0a0f1c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #8892a6;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

function ExhibitionTeaser({ 
  exhibition, 
  reverse = false, 
  shouldAnimate = false, 
  direction = 'left' 
}) {
  return (
    <TeaserContainer 
      $reverse={reverse} 
      $shouldAnimate={shouldAnimate}
      $direction={direction}
    >
      <ContentSection $reverse={reverse}>
        <StorylineTag>
          <span className="icon">📖</span>
          Digital Story Experience
        </StorylineTag>
        
        <ExhibitionTitle>{exhibition.title}</ExhibitionTitle>
        
        <NarrativeHook>"{exhibition.hook}"</NarrativeHook>
        
        <StoryDescription>{exhibition.description}</StoryDescription>
        
        <StoryElements>
          <StoryElement>
            <span className="icon">🎭</span>
            {exhibition.storyType}
          </StoryElement>
          <StoryElement>
            <span className="icon">⏱️</span>
            {exhibition.duration}
          </StoryElement>
          <StoryElement>
            <span className="icon">🎯</span>
            {exhibition.audience}
          </StoryElement>
        </StoryElements>
        
        <ExploreButton to={`/exhibitions/${exhibition.id}`}>
          Begin Your Journey
          <span>→</span>
        </ExploreButton>
        
        <MetaInfo>
          <MetaItem>
            <span>👥</span>
            {exhibition.visitors} explorers
          </MetaItem>
          <MetaItem>
            <span>⭐</span>
            {exhibition.rating}/5 stars
          </MetaItem>
          <MetaItem>
            <span>💬</span>
            {exhibition.comments} stories shared
          </MetaItem>
        </MetaInfo>
      </ContentSection>
      
      <VisualSection $reverse={reverse}>
        <VisualFrame $gradient={exhibition.gradient}>
          <VisualContent>
            <span className="icon">{exhibition.icon}</span>
            <div className="label">Interactive Experience</div>
          </VisualContent>
          <InteractionHint>Click to Explore</InteractionHint>
        </VisualFrame>
      </VisualSection>
    </TeaserContainer>
  );
}

export default ExhibitionTeaser;