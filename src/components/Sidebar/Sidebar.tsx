import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsClicked(true);
    navigate(`/${link.toLowerCase().replace(/\s/g, "-")}`);
    onClose();
    setTimeout(() => {
      setIsClicked(false);
    }, 10);
  };

  return (
    <SidebarContainer>
        <IoClose size={24} onClick={onClose}  className="absolute top-[36px] border-2 rounded-[50%] border-[#82e300] right-[20px]" />
      <LogoContainer>
        <img
          src="/blackLOgo.svg"
          alt="Company Logo"
          className="w-12 h-12 rounded-[20px]  max-[371px]:w-12 max-[371px]:h-12 max-[375px]:w-10 max-[375px]:h-10"
        />
        <h1 className="text-xl font-poppins font-semibold">IGNICULT</h1>
      </LogoContainer>
      <Nav>
        {[
          "Home",
          "Profile",
          "Games",
          "Leaderboard",
          "Tournament",
          "Premium Tournaments",
          "Activity",
          "Rewards",
          "Support",
        ].map((link) => (
          <NavItem key={link}>
            <NavLink
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
  z-index: 1000;
  padding: 1.5rem;
  position: relative;
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
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: white;
  background-color: transparent;
  transition: background-color 0.3s ease;
  position: relative;
  cursor: pointer; 

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
      background-image: linear-gradient(to right, #ee49fd, #f94ea6, #c253f5);
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.3s ease;
    }
    &:active:after {
      transform: scaleX(1);
    }
    color: transparent;
    background-image: linear-gradient(to right, #ee49fd, #f94ea6, #c253f5);
    background-clip: text;
  `}
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
      background-color: #82e300;
      transform: scaleX(0);
      transform-origin: bottom left;
      transition: transform 0.3s ease;
    }
    &:active:after {
      transform: scaleX(1);
    }
  `}
  ${(props) =>
    !props.isPremium &&
    props.active &&
    `
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}
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
