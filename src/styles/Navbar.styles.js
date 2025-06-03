import styled from "styled-components";

// 상단 로그인/회원가입 바
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

// 네비게이션 전체 컨테이너
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  z-index: 1000;
  flex-wrap: wrap;
`;

// 로고 영역
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

// 데스크탑 전용 메뉴 (가로 메뉴)
export const Menu = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 메뉴 항목
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

// 서브 메뉴
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

  @media (max-width: 768px) {
    position: static;
    visibility: visible;
    opacity: 1;
    transform: none;
    background: transparent;
    box-shadow: none;
    padding-left: 1rem;
  }
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

    @media (max-width: 768px) {
      color: #333;
      padding: 0.5rem 0;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      background: none;
    }
  }
`;

// 햄버거 버튼 (모바일 전용)
export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 1500;
  }
`;

// 모바일 메뉴 컨테이너 (햄버거 클릭 시 열림)
export const MobileMenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    padding: 1rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1200;
  }
`;
