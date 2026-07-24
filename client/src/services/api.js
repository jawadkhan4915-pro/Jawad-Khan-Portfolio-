import axios from 'axios';
import { PROJECTS } from '../data/portfolioData';

// Relative /api path enables single-port serving on http://localhost:5000/api
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const submitContact = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Failed to submit contact form');
    }
    throw new Error(error.message || 'Could not connect to the backend server. Please check your network connection.');
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
    console.warn('API response offline, using static projects data.');
    return PROJECTS;
  }
};

export default api;
