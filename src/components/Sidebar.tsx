import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [isClicked, setIsClicked] = useState<boolean>(false);
  
    const handleLinkClick = (link: string) => {
      setActiveLink(link);
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 100);
    };
  
    return (
      <SidebarContainer>
        <CloseButton onClick={onClose}>
          <IoClose size={24} />
        </CloseButton>
        <LogoContainer>
          <img
            src="/igni.svg"
            alt="Company Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-poppins font-semibold">IGNICULT</h1>
        </LogoContainer>
        <Nav>
          {["Home", "Profile", "Games", "Leaderboard", "Tournament", "Premium Tournaments", "Activity", "Rewards", "Support"].map((link) => (
            <NavItem key={link}>
              <NavLink
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                active={activeLink === link}
                isClicked={isClicked}
                onClick={() => handleLinkClick(link)}
                isPremium={link === "Premium Tournaments"} 
              >
                <IconWrapper>
                  <img
                    src={`/${link.toLowerCase().replace(/\s/g, "-")}.svg`} 
                    alt={`${link} icon`}
                    className="w-6 h-6"
                  />
                </IconWrapper>
                {link}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </SidebarContainer>
    );
  };
export default Sidebar;
const SidebarContainer = styled.div`
  height: 100%;
  width: 16rem;
  background-color: #242424;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #b0b0b0;
  &:hover {
    color: white;
  }
  transition: color 0.3s;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavItem = styled.div`
  position: relative;
  display: inline-block;
`;


const NavLink = styled.a<{ active: boolean; isClicked: boolean; isPremium: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: white;
  background-color: transparent;
  transition: background-color 0.3s ease;
  position: relative;

  &:hover {
    background-color: #2a2a2a;
  }

  /* Premium Tournaments: Gradient Underline and Text */
  ${(props) =>
    props.isPremium &&
    `
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(to right, #EE49FD, #F94EA6, #C253F5);
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.3s ease;
    }

    &:active:after {
      transform: scaleX(1);
    }

    /* Gradient text for Premium Tournaments */
    color: transparent;
    background-image: linear-gradient(to right, #EE49FD, #F94EA6, #C253F5);
    background-clip: text;
  `}

  /* For non-premium links: Green Underline */
  ${(props) =>
    !props.isPremium &&
    `
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #82E300; /* Green color for normal links */
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.3s ease;
    }

    &:active:after {
      transform: scaleX(1);
    }
  `}

  /* Underline appears when active for non-premium */
  ${(props) =>
    !props.isPremium &&
    props.active &&
    `
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}

  /* Underline disappears after the click duration */
  ${(props) =>
    props.isClicked &&
    !props.isPremium &&
    `
    &:after {
      transform: scaleX(0);
      transition: transform 1s ease;
    }
  `}
`;


const IconWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

