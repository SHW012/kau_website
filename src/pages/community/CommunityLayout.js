// src/pages/community/CommunityLayout.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutWrapper,
  ContentArea,
  SideNav,
  NavItem,
  MainContent,
  SearchBarWrapper,
  SearchButton,
  TableWrapper,
} from "../../styles/CommunityLayout.styles";

export default function CommunityLayout({ children, activeKey }) {
  const { pathname } = useLocation();

  return (
    <LayoutWrapper>
      {/* 상단 배너 제거 (필요 시, 이 부분을 주석 처리하거나 삭제) */}

      {/* 콘텐츠 영역 */}
      <ContentArea>
        {/* 좌측 사이드 네비게이션 */}
        <SideNav>
          <NavItem
            to="/community/notice"
            $active={pathname.startsWith("/community/notice")}
          >
            공지사항
          </NavItem>
          <NavItem
            to="/community/media"
            $active={pathname.startsWith("/community/media")}
          >
            홍보자료
          </NavItem>
          <NavItem
            to="/community/resources"
            $active={pathname.startsWith("/community/resources")}
          >
            자료실
          </NavItem>
          <NavItem
            to="/community/qna"
            $active={pathname.startsWith("/community/qna")}
          >
            QnA
          </NavItem>
          <NavItem
            to="/community/gallery"
            $active={pathname.startsWith("/community/gallery")}
          >
            갤러리
          </NavItem>
        </SideNav>

        {/* 우측 메인 콘텐츠 영역 */}
        <MainContent>
          {/* 검색 바 (간소화된 input + button) */}
          <SearchBarWrapper>
            <input
              type="text"
              placeholder="검색어를 입력해 주세요"
              style={{
                flex: 1,
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
                padding: "0 12px",
                marginRight: "12px",
              }}
            />
            <SearchButton>🔍</SearchButton>
          </SearchBarWrapper>

          {/* 실제 페이지 컴포넌트(공지사항 리스트, 상세, 자료실 등)를 이곳에 출력 */}
          <TableWrapper>{children}</TableWrapper>
        </MainContent>
      </ContentArea>
    </LayoutWrapper>
  );
}
