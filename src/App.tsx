import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Particle from "./components/Background/Particle";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"; 
const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const Support = lazy(() => import("./components/Support/Support"));
const RewardsPage = lazy(() => import("./components/RewardsPage/RewardsPage"));
const Activity = lazy(() => import("./components/Activity/Activity"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Leaderboard = lazy(() => import("./components/Leaderboard/Leaderboard"));
const Games = lazy(() => import("./components/Games/Games"));
const Tournaments = lazy(() => import("./components/Tournaments/Tournaments"));
const Pt = lazy(() => import("./components/Pt/Pt"));


export function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Particle />
      </div>
      
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-sm z-[999]"
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      <main className="app-content mt-20 min-h-[calc(100vh-10rem)]">
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </main>
      <Footer  />
    </Router>
  );
}