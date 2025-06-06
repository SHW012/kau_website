import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  HeroSection,
  HeroText,
  ContentSection,
  ContentBox,
  SectionTitle,
  ListItem,
  ListDate,
  NewBadge,
} from "../styles/LandingPage.styles";

export default function LandingPage() {
  return (
    <Wrapper>
      <HeroSection>
        <HeroText>NCCOSS</HeroText>
      </HeroSection>

      <ContentSection>
        <ContentBox>
          <SectionTitle as={Link} to="/community/media">홍보자료</SectionTitle>
          <ul>
            <ListItem>
              [포토뉴스] 혁신융합대학사업 지자체 총괄사업단장 간담회
              <ListDate>2025.04.30</ListDate>
            </ListItem>
            <ListItem>
              [한국항공대] 차세대통신사업단, 연간 102억 지원받는 COSS 2단계
              <ListDate>2025.04.03</ListDate>
            </ListItem>
          </ul>
        </ContentBox>

        <ContentBox>
          <SectionTitle as={Link} to="/community/notice">공지사항</SectionTitle>
          <ul>
            <ListItem>
              2025학년도 1학기 UROP 결과보고서 제출 안내(~6/16)
              <NewBadge>N</NewBadge>
              <ListDate>2025.06.02</ListDate>
            </ListItem>
            <ListItem>
              2025학년도 1학기 학업성적 정정요청 안내
              <NewBadge>N</NewBadge>
              <ListDate>2025.06.02</ListDate>
            </ListItem>
          </ul>
        </ContentBox>
      </ContentSection>
    </Wrapper>
  );
}
