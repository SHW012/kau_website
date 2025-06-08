// src/pages/LandingPage.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/kau_image.png";
import {
  Wrapper,
  HeroSection,
  ContentSection,
  ContentBox,
  SectionTitle,
  ListItem,
  ListDate,
} from "../styles/LandingPage.styles";
import Chatbot from "../components/Chatbot";
import { FaBullhorn, FaBell } from "react-icons/fa";
import { getNoticeList } from "../api/api";

export default function LandingPage() {
  const [latestNotices, setLatestNotices] = useState([]);
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    // 공지사항 최신 2개
    (async () => {
      try {
        const res = await getNoticeList(0, 2);
        setLatestNotices(res.data.content || []);
      } catch (err) {
        console.error("공지사항 로드 실패", err);
      }
    })();

    // 홍보자료 최신 2개 (임시 데이터)
    setMediaItems([
      { id: 1, title: "KAU 최신 홍보자료", date: "2025.04.05" },
      { id: 2, title: "WE-MEET 프로젝트 소개", date: "2025.03.20" },
    ]);
  }, []);

  return (
    <Wrapper>
      <HeroSection bannerImage={banner} />

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
            {mediaItems.map((item) => (
              <ListItem key={item.id}>
                <ListDate>{item.date}</ListDate>
                <Link
                  to={`/community/media/${item.id}`}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {item.title}
                </Link>
              </ListItem>
            ))}
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
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {notice.title}
                </Link>
              </ListItem>
            ))}
          </ul>
        </ContentBox>
      </ContentSection>

      <Chatbot />
    </Wrapper>
  );
}
