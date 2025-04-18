import { matchPath } from "react-router-dom";

export const getNavbarColor = (pathname: string): string => {
  if (matchPath("/profile/:walletId", pathname)) {
    return "bg-[#0f1a2a]";
  }

  switch (pathname) {
    case "/":
      return "bg-[#1e1d1d]";
    case "/profile":
      return "bg-[#0d0d0d]";
    case "/games":
      return "bg-[#040404]";
    case "/leaderboard":
      return "bg-[#000001]";
    case "/support":
      return "bg-[#1c0b0b]";
    case "/rewards":
      return "bg-[#111111]";
    case "/activity":
      return "bg-[#040404]";
    case "/tournaments":
    case "/premium-tournaments":
      return "bg-[#111827]";
    default:
      return "bg-[#0d0d0d]";
  }
};