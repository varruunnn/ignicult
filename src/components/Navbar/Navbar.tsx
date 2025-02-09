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
        boxShadow: "0 2px 4px rgba(249, 78, 166, 1)",
      }
    : {
        backgroundColor: "#282828",
        borderRadius: "20000px",
        color: "#82E300",
        border: "2px solid #82E300",
        minWidth: "1px",
        height: "41px",
        boxShadow: "0px 2px 5px rgba(130, 227, 0, 1)",
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
    <div
      className="max-[485px]:bg-transparent overflow-x-hidden text-white
    min-[1024px]:bg-none
    "
    >
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 backdrop-blur-sm flex justify-between items-center px-6 py-4 h-[131px] max-[398px]:z-10 z-50 shadow-md

        min-[1024px]:h-[100px]
        "
      >
        <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[28%] "
        onClick={()=>{
          alert("iamglowingdiv")
        }}
        >
          <img
            src="/homee.svg"
            className=" relative left-[-2%] top-[-44%] w-[20px] z-50 "
            alt=""
          />
          <h3 className="absolute  text-[#9A999C] top-[1%] left-[10%] z-50">
            Home
          </h3>
        </button>
        <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[62%] "
        onClick={()=>{
          alert("iamglowingdiv")
        }}
        >
          <img
            src="/play.svg"
            className=" relative left-[-2%] top-[-44%] w-[160px] z-50 "
            alt=""
          />
        </button>
        <div className="absolute max-[1023px]:hidden min-[1024px]:top-[0px] z-100">
          <img
            src="/vector2.svg"
            className="max-[1023px]:hidden fixed  left-[20%] top-[0] z-10 rounded-lg"
            alt="desktopnav"
          />
          <img
            src="/vector22.svg"
            className="max-[1023px]:hidden fixed left-[17.4%] top-[0] -z-1 w-[64.3%] rounded-lg"
            alt=""
          />
        </div>
        <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[48%] "
        onClick={()=>{
          alert("iamglowingdiv")
        }}
        >
          <img
            src="/groupp.svg"
            className=" relative right-[-2%] top-[-44%] w-[20px] z-50 "
            alt=""
          />
          <h3 className="absolute  text-[#9A999C] top-[1%] left-[14%] z-50">
            Profile
          </h3>
        </button>
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
