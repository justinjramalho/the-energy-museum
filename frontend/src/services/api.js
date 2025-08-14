import axios from 'axios';

// Base URLs for different services
const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://theenergymuseum.com' 
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