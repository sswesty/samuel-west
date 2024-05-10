import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogTrainingPage from './components/DogTrainingPage';
import LandingPage from './components/LandingPage';
import UqcsPage from './components/UqcsPage';
import './assets/styles/main.css';
import './assets/styles/custom.css';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/dog-training" element={<DogTrainingPage />} />
      <Route path="/west-tiling" element={<DogTrainingPage />} />
      <Route path="/uqcs" element={<UqcsPage />} />
      <Route path="/lightning-games" element={<DogTrainingPage />} />
      <Route path="/rogue-nation" element={<DogTrainingPage />} />
      <Route path="/some-worries" element={<DogTrainingPage />} />
    </Routes>
  );
};


export default App;
