import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";
import { client } from "../../client";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const routes = [
    { name: "Home", path: "/home" },
    { name: "Profile", path: "/profile" },
    { name: "Games", path: "/games" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Tournaments", path: "/tournament" },
    { name: "Premium Tournaments", path: "/premium-tournaments" },
    { name: "Activity", path: "/activity" },
    { name: "Rewards", path: "/rewards" },
    { name: "Support", path: "/support" },
  ];
  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  // Close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };
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
    <div>
      <div
        className="max-[485px]:bg-transparent min-[1023px]:hidden overflow-x-hidden text-white
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
          <div className="absolute min-[2559px]:h-[5vh] min-[2559px]:w-[89%] min-[1339px]:h-[10vh] w-[95%] h-[15vh] min-[1440px]:w-[90%] min-[1440px]:left-[10%]">
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[28%] "
              onClick={() => {
                navigate('/home')
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
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[59%] 
        max 
        "
              onClick={() => {
                navigate('/games')
              }}
            >
              <img
                src="/play.svg"
                className=" relative left-[-2%] top-[-44%] w-[160px] z-50 "
                alt=""
              />
            </button>
            <div className="absolute max-[1023px]:hidden min-[1024px]:top-[0px] z-100 ">
              <img
                src="/vector2.svg"
                className="max-[1023px]:hidden fixed min-[2559px]:left-[31%] min-[2559px]:w-[40%]  left-[20%] top-[0] z-10 min-[1399px]:left-[27%] rounded-lg"
                alt="desktopnav"
              />
            </div>
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[48%] "
              onClick={() => {
                navigate('/profile')
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
          </div>
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
          className={`fixed top-0 left-0 h-full z-[1000] transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <Sidebar onClose={closeSidebar} />
        </div>
      </div>



      <div
        className="max-[485px]:bg-transparent max-[1023px]:hidden overflow-x-hidden text-white
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
          <div className="absolute min-[2559px]:h-[5vh] min-[2559px]:w-[89%] min-[1339px]:h-[10vh] w-[95%] h-[15vh] min-[1440px]:w-[90%] min-[1440px]:left-[10%]">
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[28%] "
              onClick={() => {
                navigate('/home')
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
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[59%] 
        max 
        "
              onClick={() => {
                navigate('/games')
              }}
            >
              <img
                src="/play.svg"
                className=" relative left-[-2%] top-[-44%] w-[160px] z-50 "
                alt=""
              />
            </button>
            <div className="absolute max-[1023px]:hidden min-[1024px]:top-[0px] z-100 ">
              <img
                src="/vector2.svg"
                className="max-[1023px]:hidden fixed min-[2559px]:left-[31%] min-[2559px]:w-[40%]  left-[20%] top-[0] z-10 min-[1399px]:left-[27%] rounded-lg"
                alt="desktopnav"
              />
            </div>
            <button className="absolute max-[1023px]:hidden cursor-pointer w-[200px] h-[200px] top-[26%] z-50 left-[48%] "
              onClick={() => {
                navigate('/profile')
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
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={togglePopup}
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
      {isPopupVisible && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#141414] p-6 rounded-lg w-80 relative"
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-2xl"
              aria-label="Close Menu Popup"
            >
              &times;
            </button>
            <ul className="mt-4 space-y-4">
              {routes.map((route) => (
                <li key={route.name}>
                  <button
                    onClick={() => {
                      navigate(route.path);
                      closePopup();
                    }}
                    className="text-white text-lg hover:text-[#82E300] transition-colors"
                  >
                    {route.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
