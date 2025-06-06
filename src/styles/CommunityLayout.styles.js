// src/pages/community/CommunityLayout.styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";

////////////////////////////////////////////////////////////////
// LayoutWrapper: 커뮤니티 전체 페이지 래퍼
////////////////////////////////////////////////////////////////
export const LayoutWrapper = styled.div`
  width: 100%;
  background: #f5f7fa;
`;

////////////////////////////////////////////////////////////////
// ContentArea: 콘텐츠 전체 영역 (사이드바 + 메인)
// 배너 제거를 반영하여 상단 여백만 남겨둡니다.
////////////////////////////////////////////////////////////////
export const ContentArea = styled.div`
  max-width: 1200px;
  margin: 40px auto; /* 상단 배너 없이, 위쪽 여백만 확보 */
  display: flex;
  gap: 24px;
  padding: 0 24px;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////
// SideNav: 왼쪽 네비게이션 메뉴
////////////////////////////////////////////////////////////////
export const SideNav = styled.nav`
  width: 200px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled(Link)`
  display: block;
  padding: 12px 16px;
  font-size: 1rem;
  color: ${(props) => (props.$active ? "#fff" : "#333")};
  background: ${(props) => (props.$active ? "#002870" : "transparent")};
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#002870" : "#f0f0f0")};
  }
`;

////////////////////////////////////////////////////////////////
// MainContent: 우측 메인 콘텐츠 영역
////////////////////////////////////////////////////////////////
export const MainContent = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////
// SearchBarWrapper: 검색 바 래퍼
////////////////////////////////////////////////////////////////
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

////////////////////////////////////////////////////////////////
// SearchButton: 검색 버튼 스타일
////////////////////////////////////////////////////////////////
export const SearchButton = styled.button`
  width: 48px;
  height: 40px;
  background: #002870;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1a3370;
  }
`;

////////////////////////////////////////////////////////////////
// TableWrapper: 콘텐츠가 테이블 형태일 때 가로 스크롤 가능하도록
////////////////////////////////////////////////////////////////
export const TableWrapper = styled.div`
  overflow-x: auto;
`;

////////////////////////////////////////////////////////////////
// 테이블 관련 스타일 (필요 시 활용하세요)
////////////////////////////////////////////////////////////////
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
`;

export const Thead = styled.thead`
  background: #f9f2f2;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #fbf7f7;
  }
`;

export const Th = styled.th`
  padding: 12px 8px;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
  color: #333;
`;

export const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #e0e0e0;
  color: #555;
`;
