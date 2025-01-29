import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { inAppWallet, createWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { IoMenu, IoClose } from "react-icons/io5";
import styled from "styled-components";
import { client } from "../../client";
const Navbar = () => {
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-[485px]:bg-black overflow-x-hidden text-white">
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-black h-[131px] max-[398px]:z-10 z-50 shadow-md">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer relative"
          aria-label="Open Sidebar Menu"
        >
          <IoMenu size={37} className="text-white" />
        </button>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ConnectButton
            client={client}
            wallets={wallets}
            modal-bg-color="#FFFFFF"
            connectModal={{ size: "compact" }}
            theme={customTheme}
            connectButton={{
              label: "Lets dive in",
              style: {
                backgroundColor: "black",
                borderRadius: "20000px",
                color: "white",
                border: "2px solid #82E300",
                width: "120px",
                height: "41px",
                transition: "box-shadow 0.3s ease-in-out",
                boxShadow: isHovered
                  ? "0 0 15px #000000, 0 0 30px #82E300, 0 0 45px #82E300"
                  : "0 0 10px #82E300, 0 0 20px #82E300",
              },
            }}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
          />
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>
    </div>
  );
};
export default Navbar;