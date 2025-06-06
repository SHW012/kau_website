// src/pages/LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";

// **배너 이미지 import**
import banner from "../assets/kau_image.png"; // 실제 파일 경로에 맞게 수정

// 스타일 임포트
import {
  Wrapper,
  HeroSection,
  ContentSection,
  ContentBox,
  SectionTitle,
  ListItem,
  ListDate,
} from "../styles/LandingPage.styles";

// Chatbot 컴포넌트
import Chatbot from "../components/Chatbot";

// React Icons
import { FaBullhorn, FaBell } from "react-icons/fa";

export default function LandingPage() {
  return (
    <Wrapper>
      {/* ───────────────────────────────────────────────────────────────
        HeroSection: 배너 영역
        - banner 이미지를 props로 넘겨 줍니다.
      ─────────────────────────────────────────────────────────────── */}
      <HeroSection bannerImage={banner} />

      {/* ───────────────────────────────────────────────────────────────
        ContentSection: 홍보자료 / 공지사항 섹션
      ─────────────────────────────────────────────────────────────── */}
      <ContentSection>
        {/* 홍보자료 Box */}
        <ContentBox>
          <SectionTitle as={Link} to="/community/media">
            <FaBullhorn
              style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
            />
            홍보자료
          </SectionTitle>
          <ul>
            <ListItem>
              <ListDate>2025.04.05</ListDate>
              KAU 최신 홍보자료 보기
            </ListItem>
            <ListItem>
              <ListDate>2025.03.20</ListDate>
              WE-MEET 프로젝트 안내
            </ListItem>
          </ul>
        </ContentBox>

        {/* 공지사항 Box */}
        <ContentBox>
          <SectionTitle as={Link} to="/community/notice">
            <FaBell
              style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
            />
            공지사항
          </SectionTitle>
          <ul>
            <ListItem>
              <ListDate>2025.04.21</ListDate>
              2025학년도 1학기 UROP 결과보고서 제출 안내
            </ListItem>
            <ListItem>
              <ListDate>2025.04.16</ListDate>
              Matlab &amp; Simulink 인프라 활용 특강 안내
            </ListItem>
          </ul>
        </ContentBox>
      </ContentSection>

      {/* LandingPage 하단에 Chatbot 컴포넌트를 추가 */}
      <Chatbot />
    </Wrapper>
  );
}
