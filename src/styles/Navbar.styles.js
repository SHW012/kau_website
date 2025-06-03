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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    object-fit: contain;
    margin-right: 10px;
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    white-space: nowrap;
  }
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
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem 0;
    display: inline-block;
  }

  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  &:hover > a {
    color: #007bff;
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  padding: 0.5rem 0;
  list-style: none;
  border-radius: 4px;
  margin-top: 0;
  min-width: 180px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  z-index: 1010;
`;

export const SubMenuItem = styled.li`
  padding: 0;
  white-space: nowrap;

  a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #fff;
    text-decoration: none;
    font-weight: normal;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
