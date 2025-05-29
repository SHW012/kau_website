// src/styles/Navbar.styles.js
import styled from "styled-components";

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  gap: 1.5rem;
`;

export const TopBarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  z-index: 10;
`;

export const Logo = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  position: relative;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem 0;
  list-style: none;
  border-radius: 4px;
  margin: 0;

  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const SubMenuItem = styled.li`
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
