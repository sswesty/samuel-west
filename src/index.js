import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ScrollToTopOnPageLoad from './components/ScrollToTopOnPageLoad';
import ScrollToTop from 'react-scroll-to-top';
import { HashRouter as Router } from 'react-router-dom';
import './assets/styles/main.css';
import './assets/styles/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollToTopOnPageLoad />
    <ScrollToTop
      smooth
      className="scroll-to-top-button"
      color="white"
      viewBox="0 0 320 512"
      svgPath="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
    />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
