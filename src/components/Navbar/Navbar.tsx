import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";
import { client } from "../../client";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const customTheme = darkTheme({
    colors: {
      selectedTextColor: "hsl(228, 78%, 48%)",
      secondaryIconColor: "hsl(0, 0%, 14%)",
      secondaryIconHoverColor: "hsl(240, 6%, 94%)",
      modalBg: "hsl(0, 0%, 14%)",
      borderColor: "hsl(86, 100%, 50%)",
      accentText: "hsl(86, 100%, 50%)",
      separatorLine: "hsl(86, 100%, 50%)",
      secondaryText: "hsl(0, 0%, 95%)",
      primaryText: "hsl(0, 0%, 100%)",
      primaryButtonText: "hsl(0, 0%, 100%)",
    },
  });

  const wallets = [
    inAppWallet({
      auth: {
        options: [
          "google",
          "discord",
          "telegram",
          "farcaster",
          "email",
          "x",
          "passkey",
          "phone",
        ],
      },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

  const [isPopupVisible, setPopupVisible] = useState(false);
  const location = useLocation();
  const isPremiumRoute = location.pathname === "/premium-tournaments";

  const buttonStyle = isPremiumRoute
    ? {
        backgroundColor: "#282828",
        borderRadius: "20000px",
        color: "#F94EA6", 
        border: "2px solid #F94EA6", 
        minWidth: "1px",
        height: "41px",
      }
    : {
        backgroundColor: "#282828",
        borderRadius: "20000px",
        color: "#82E300", 
        border: "2px solid #82E300", 
        minWidth: "1px",
        height: "41px",
      };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSignup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="max-[485px]:bg-transparent overflow-x-hidden text-white">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 backdrop-blur-sm flex justify-between items-center px-6 py-4 h-[131px] max-[398px]:z-10 z-50 shadow-md"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={toggleSidebar}
          className="cursor-pointer relative"
          aria-label="Open Sidebar Menu"
        >
          <IoMenu size={37} className="text-white" />
        </motion.button>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <ConnectButton
            client={client}
            wallets={wallets}
            modal-bg-color="#FFFFFF"
            connectModal={{ size: "compact" }}
            theme={customTheme}
            connectButton={{
              label: "Lets dive in",
              style: buttonStyle,
            }}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
          />
        </motion.div>
      </motion.header>
      <div
        className={`fixed top-0 left-0 h-full z-[1000] transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>
    </div>
  );
};

export default Navbar;
