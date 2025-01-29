import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";
import RewardsPage from "./components/RewardsPage/RewardsPage";
import Navbar from "./components/Navbar/Navbar";
import Activity from "./components/Activity/Activity";
import Profile from "./components/Profile/Profile";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Games from "./components/Games/Games";
import Tournaments from "./components/Tournaments/Tournaments";
import Pt from "./components/Pt/Pt";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Particles from "@tsparticles/react";
import Particle from "./components/Background/Particle";

export function App() {
  return (
    <Router>
	  <Particle />
      <Navbar />
      <div className="app-content mt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/tournament" element={<Tournaments />} />
          <Route path="/premium-tournaments" element={<Pt />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
