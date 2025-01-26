import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';
import RewardsPage from './components/RewardsPage/RewardsPage';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Activity from './components/Activity/Activity';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="app-background">
        <div className="hex-container">
          <div className="hex item">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex item">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="hex item">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
