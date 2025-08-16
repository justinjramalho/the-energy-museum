import axios from 'axios';

// Base URLs for different services
const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://theenergymuseum.com/backend' 
  : 'http://localhost:8001'; // Grav CMS backend

const API_SERVER_URL = process.env.NODE_ENV === 'production' 
  ? 'https://theenergymuseum.com/api' 
  : 'http://localhost:8002'; // Standalone API server

// Create axios instance for Grav CMS
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Create axios instance for standalone API server
const apiServer = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor for logging and authentication
api.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config?.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// API methods for different endpoints
export const apiService = {
  // Get homepage content
  getHomePage: async () => {
    try {
      const response = await api.get('/');
      return response.data;
    } catch (error) {
      console.error('Error fetching homepage:', error);
      throw error;
    }
  },

  // Get exhibitions list
  getExhibitions: async () => {
    try {
      const response = await api.get('/experiences');
      return response.data;
    } catch (error) {
      console.error('Error fetching exhibitions:', error);
      throw error;
    }
  },

  // Get specific exhibition by slug
  getExhibition: async (slug) => {
    try {
      const response = await api.get(`/experiences/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching exhibition ${slug}:`, error);
      throw error;
    }
  },

  // Submit support request
  submitSupportRequest: async (formData) => {
    try {
      const response = await apiServer.post('/support.php', formData);
      return response.data;
    } catch (error) {
      console.error('Error submitting support request:', error);
      throw error;
    }
  },

  // Submit comment on exhibition
  submitComment: async (exhibitionId, comment) => {
    try {
      const response = await apiServer.post(`/comments.php/${exhibitionId}`, comment);
      return response.data;
    } catch (error) {
      console.error('Error submitting comment:', error);
      throw error;
    }
  },

  // Get comments for exhibition
  getComments: async (exhibitionId) => {
    try {
      const response = await apiServer.get(`/comments.php/${exhibitionId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error;
    }
  },

  // Subscribe to newsletter
  subscribeNewsletter: async (email) => {
    try {
      const response = await api.post('/newsletter/subscribe', { email });
      return response.data;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  },

  // Forum API methods
  getForumCategories: async () => {
    try {
      const response = await apiServer.get('/forum.php/categories');
      return response.data;
    } catch (error) {
      console.error('Error fetching forum categories:', error);
      throw error;
    }
  },

  getForumTopics: async (categoryId = null) => {
    try {
      const url = categoryId ? `/forum.php/topics?category=${categoryId}` : '/forum.php/topics';
      const response = await apiServer.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching forum topics:', error);
      throw error;
    }
  },

  getForumTopic: async (topicId) => {
    try {
      const response = await apiServer.get(`/forum.php/topic/${topicId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching forum topic:', error);
      throw error;
    }
  },

  createForumTopic: async (topicData) => {
    try {
      // Use Grav integration endpoint for proper CMS integration
      const response = await apiServer.post('/grav-integration.php/submit-topic', topicData);
      return response.data;
    } catch (error) {
      console.error('Error creating forum topic:', error);
      throw error;
    }
  },

  createForumReply: async (replyData) => {
    try {
      // Use Grav integration endpoint for proper CMS integration
      const response = await apiServer.post('/grav-integration.php/submit-reply', replyData);
      return response.data;
    } catch (error) {
      console.error('Error creating forum reply:', error);
      throw error;
    }
  },

      submitForumVote: async (voteData) => {
      try {
        const response = await apiServer.post('/forum.php/vote', voteData);
        return response.data;
      } catch (error) {
        console.error('Error submitting vote:', error);
        throw error;
      }
    },

    // Exhibits API methods (Phase 1: Database Integration)
    getExhibits: async (categoryFilter = 'all') => {
      try {
        // In development, return fallback data since local doesn't have database
        if (process.env.NODE_ENV === 'development') {
          console.log('🔧 Development mode: Using fallback exhibit data');
          // Import the fallback data directly
          const { exhibitionsData } = await import('../pages/Exhibitions');
          
          // Filter fallback data based on category
          let filteredExhibits = exhibitionsData;
          if (categoryFilter !== 'all') {
            filteredExhibits = exhibitionsData.filter(exhibition => 
              exhibition.learningApproach && 
              exhibition.learningApproach.includes(categoryFilter)
            );
          }
          
          return { 
            success: true,
            exhibits: filteredExhibits
          };
        }

        const url = categoryFilter === 'all' 
          ? '/exhibits.php?action=get_exhibits'
          : `/exhibits.php?action=get_exhibits&category=${categoryFilter}`;
        const response = await apiServer.get(url);
        
        // Handle different response formats from API
        if (response.data && Array.isArray(response.data)) {
          return { success: true, exhibits: response.data };
        } else if (response.data && response.data.success !== undefined) {
          return response.data;
        } else {
          return { success: true, exhibits: response.data || [] };
        }
      } catch (error) {
        console.error('Error fetching exhibits:', error);
        throw error;
      }
    },

    getExhibitCategories: async () => {
      try {
        // In development, return fallback data since local doesn't have database
        if (process.env.NODE_ENV === 'development') {
          console.log('🔧 Development mode: Using fallback category data');
          return { 
            success: true,
            categories: [
              { id: 'all', label: 'All Learning Experiences' },
              { id: 'place-based', label: 'Place-Based' },
              { id: 'virtual', label: 'Virtual' },
              { id: 'problem-based', label: 'Problem-Based' },
              { id: 'narrative-driven', label: 'Narrative-Driven' },
              { id: 'grant-supported', label: 'Grant Supported' }
            ]
          };
        }

        const response = await apiServer.get('/exhibits.php?action=get_categories');
        
        // Handle different response formats from API
        if (response.data && Array.isArray(response.data)) {
          return { success: true, categories: response.data };
        } else if (response.data && response.data.success !== undefined) {
          return response.data;
        } else {
          return { success: true, categories: response.data || [] };
        }
      } catch (error) {
        console.error('Error fetching exhibit categories:', error);
        throw error;
      }
    },

    getExhibit: async (exhibitId) => {
      try {
        // In development, return fallback data since local doesn't have database
        if (process.env.NODE_ENV === 'development') {
          console.log('🔧 Development mode: Using fallback exhibit data for', exhibitId);
          const { exhibitionsData } = await import('../pages/Exhibitions');
          const exhibit = exhibitionsData.find(ex => ex.id === exhibitId);
          
          return { 
            success: true,
            exhibit: exhibit || null
          };
        }

        const response = await apiServer.get(`/exhibits.php?action=get_exhibit&id=${exhibitId}`);
        
        // Handle different response formats from API
        if (response.data && response.data.success !== undefined) {
          return response.data;
        } else {
          return { success: true, exhibit: response.data || null };
        }
      } catch (error) {
        console.error('Error fetching exhibit:', error);
        throw error;
      }
    }
};

// Utility function to handle API errors consistently
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    return {
      message: error.response.data?.message || 'Server error occurred',
      status: error.response.status,
      type: 'server_error'
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      message: 'Unable to connect to server. Please check your internet connection.',
      type: 'network_error'
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      type: 'unknown_error'
    };
  }
};

export default api;