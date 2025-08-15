import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Exhibitions from './pages/Exhibitions';
import ExhibitionDetail from './pages/ExhibitionDetail';
import Support from './pages/Support';
import Donate from './pages/Donate';
import Forum from './pages/Forum';
import ForumTopic from './components/ForumTopic';

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0a0f1c;
    color: #ffffff;
    line-height: 1.6;
  }

  code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #00d4ff;
    margin-bottom: 1rem;
  }

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #00a8cc;
  }

  p {
    margin-bottom: 1rem;
    color: #e0e6ed;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a2332 100%);
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
                            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/experiences" element={<Exhibitions />} />
                    <Route path="/experiences/:id" element={<ExhibitionDetail />} />
                    <Route path="/contact" element={<Support />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/forum/topic/:topicId" element={<ForumTopic />} />
                    <Route path="*" element={<Home />} />
                  </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;