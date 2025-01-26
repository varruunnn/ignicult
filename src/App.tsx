import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";
import RewardsPage from "./components/RewardsPage/RewardsPage";
import Navbar from "./components/Navbar/Navbar";
import Activity from "./components/Activity/Activity";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Leaderboard from "./components/Leaderboard/Leaderboard";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
