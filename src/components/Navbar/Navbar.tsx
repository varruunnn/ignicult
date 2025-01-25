import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import styled from "styled-components";

const Navbar = () => {
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

  return (
    <div className="max-[485px]:bg-black overflow-x-hidden text-white">
      <header className="flex justify-between items-center px-6 py-4 bg-black h-[131px]">
        <button
          onClick={toggleSidebar}
          className="cursor-pointer relative"
          aria-label="Open Sidebar Menu"
        >
          <IoMenu size={37} className="text-white" />
        </button>
        <button
          className="w-[120px] h-[41px] bg-[#282828] text-[#82E300] rounded-full hover:bg-[#3a3a3a] transition font-roboto font-semibold"
          style={{
            border: "2px solid #82E300",
            textShadow:
              "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
          }}
          onClick={handleSignup}
        >
          Let's Dive In
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={closeSidebar} />
      </div>
      {isPopupVisible && (
        <Popup>
          <div className="popup-content relative h-[300px]">
            <h1 className="text-[#FED33C] text-xl absolute left-[35%] top-1 font-bold mb-4">Let's Dive In</h1>
            <button className="close-button" onClick={handleClosePopup}>
              <IoClose size={24} color="#82E300" />
            </button>
            <div className="content relative">
             <input type="text" placeholder="Enter your email" className="w-[90%] h-[40px] absolute top-[1px] bg-[#C0FFC3] text-[#7A7A7A] p-1 rounded-md mb-4" />
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

// Styled Popup
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .popup-content {
    background: #282828;
    color: #82e300;
    padding: 2rem;
    border-radius: 1rem;
    width: 400px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    border: 2px solid #82e300;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Navbar;
