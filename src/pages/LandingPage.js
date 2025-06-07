import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 배너 이미지
import banner from "../assets/kau_image.png";

// 스타일
import {
  Wrapper,
  HeroSection,
  ContentSection,
  ContentBox,
  SectionTitle,
  ListItem,
  ListDate,
} from "../styles/LandingPage.styles";

// 챗봇
import Chatbot from "../components/Chatbot";

// 아이콘
import { FaBullhorn, FaBell } from "react-icons/fa";

// API
import { getNoticeList } from "../api/api";

export default function LandingPage() {
  const [latestNotices, setLatestNotices] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getNoticeList(0, 2); // 최신 2개
        setLatestNotices(res.data.content || []);
      } catch (err) {
        console.error("공지사항 불러오기 실패:", err);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {/* 배너 */}
      <HeroSection bannerImage={banner} />

      {/* 홍보자료 & 공지사항 */}
      <ContentSection>
        {/* 홍보자료 */}
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

        {/* 공지사항 */}
        <ContentBox>
          <SectionTitle as={Link} to="/community/notice">
            <FaBell
              style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
            />
            공지사항
          </SectionTitle>
          <ul>
            {latestNotices.map((notice) => (
              <ListItem key={notice.id}>
                <ListDate>{notice.date}</ListDate>
                <Link
                  to={`/community/notice/${notice.id}`}
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  {notice.title}
                </Link>
              </ListItem>
            ))}
          </ul>
        </ContentBox>
      </ContentSection>

      {/* 챗봇 */}
      <Chatbot />
    </Wrapper>
  );
}
