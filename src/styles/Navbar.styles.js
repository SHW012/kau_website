// src/styles/Navbar.styles.js
import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
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
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const MenuItem = styled.li`
  position: relative;
  color: #fff;
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

  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  /* 유지: 마우스가 서브메뉴에 올라도 사라지지 않도록 */
  &:hover {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SubMenuItem = styled.li`
  padding: 0.5rem 1rem;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
