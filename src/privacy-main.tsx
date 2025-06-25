import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrivacyPolicyPage } from '@presentation/pages/PrivacyPolicyPage';
import { DependencyConfig } from '@infrastructure/config/DependencyConfig';
import '@presentation/styles/responsive.ts';
import './index.css';

// Initialize dependencies
const initializeApp = async () => {
  try {
    const dependencies = DependencyConfig.getInstance();
    await dependencies.initialize();
    console.log('Privacy Policy app initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Privacy Policy app:', error);
  }
};

// Initialize the app
initializeApp();

ReactDOM.createRoot(document.getElementById('privacy-root')!).render(
  <React.StrictMode>
    <PrivacyPolicyPage />
  </React.StrictMode>
); 