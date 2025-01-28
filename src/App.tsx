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


export function App() {
	return (
		<Router>
			<Navbar />
			<div className="app-content mt-40">
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
			</Routes>
			</div>
			<Footer />
	  </Router>
	);
}
{/* <main className="p-4 pb-10  min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
<div className="py-20">
	<div className="flex justify-center mb-20">

	</div>
</div>
</main> */}