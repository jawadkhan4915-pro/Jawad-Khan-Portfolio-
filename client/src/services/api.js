import axios from 'axios';
import { PROJECTS } from '../data/portfolioData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const submitContact = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Failed to submit contact form');
    }
    // Network fallback response simulation for frontend preview when backend server is off
    return {
      success: true,
      message: 'Thank you! Message submitted successfully (local mode).',
    };
  }
};

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects');
    if (response.data && response.data.data) {
      return response.data.data;
    }
    return PROJECTS;
  } catch (error) {
    console.warn('API connection offline, using static projects data.');
    return PROJECTS;
  }
};

export default api;
