import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogTrainingPage from './components/DogTrainingPage';
import LandingPage from './components/LandingPage';
import './assets/styles/main.css';
import './assets/styles/custom.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dog-training" element={<DogTrainingPage />} />
    </Routes>
  );
};


export default App;
