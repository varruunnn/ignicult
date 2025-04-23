import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LoadingScreen from './LoadingScreen';
import LandingPage from './components/LandingPage/LandingPage';
import Profile from './components/Profile/Profile';
// const LandingPage = lazy(() => import("./components/LandingPage/LandingPage"));
const Games = lazy(() => import("./components/Games/Games"));
const RewardsPage = lazy(() => import("./components/RewardsPage/RewardsPage"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Leaderboard = lazy(() => import("./components/Leaderboard/Leaderboard"));
// const Profile = lazy(() => import("./components/Profile/Profile"));
const Help = lazy(() => import("./components/Help/Help"));
const Activity = lazy(() => import("./components/Activity/Activity"));
const Tournaments = lazy(() => import("./components/Tournaments/Tournaments"));
const PremiumTournament = lazy(() => import("./components/Premium/Premium"));
const UserProfile = lazy(() => import("./components/Profile/UserProfile"));
const LegalPages = lazy(() => import("./components/Footer/LegalPages"));

export function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingScreen loading={true} />}>
        <main className="app-content overflow-x-hidden min-h-[calc(100vh-10rem)]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:walletId" element={<UserProfile />} />
            <Route path="/support" element={<Help />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/premium-tournaments" element={<PremiumTournament />} />
            <Route path="/legal/privacy" element={<LegalPages />} />
            <Route path="/legal/terms" element={<LegalPages />} />
            <Route path="/legal/cookies" element={<LegalPages />} />
            <Route path="/legal/faq" element={<LegalPages />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </Suspense>
    </Router>
  );
}