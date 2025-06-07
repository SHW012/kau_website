// src/App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import Intro from "./pages/about/Intro";
import Greeting from "./pages/about/Greeting";
import Team from "./pages/about/Team";
import Location from "./pages/about/Location";

import Microdegree from "./pages/programs/Microdegree";
import Wemeet from "./pages/programs/Wemeet";
import Intern from "./pages/programs/Intern";

import Form from "./pages/apply/Form";
import My from "./pages/apply/My";

import Notice from "./pages/community/Notice";
import NoticeCreate from "./pages/community/NoticeCreate"; // 생성 + 수정 겸용
import NoticeDetail from "./pages/community/NoticeDetail";
import Resources from "./pages/community/Resources";
import Media from "./pages/community/Media";
import Gallery from "./pages/community/Gallery";
import QnA from "./pages/community/QnA";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { setAuthToken } from "./api/api";

function AppContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // ✅ 토큰 우선 localStorage에서 찾고, 없으면 쿠키에서 찾기
    let token = localStorage.getItem("accessToken");
    if (!token) {
      token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1];
    }

    if (token) {
      setAuthToken(token);
      console.log("✅ JWT 토큰 설정 완료");
    } else {
      console.warn("⚠️ JWT 토큰이 존재하지 않음");
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar isMobile={isMobile} />
      <Routes>
        {/* 인증 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 메인 */}
        <Route path="/" element={<LandingPage />} />

        {/* 소개 */}
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/greeting" element={<Greeting />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/location" element={<Location />} />

        {/* 프로그램 */}
        <Route path="/programs/microdegree" element={<Microdegree />} />
        <Route path="/programs/wemeet" element={<Wemeet />} />
        <Route path="/programs/intern" element={<Intern />} />

        {/* 신청 */}
        <Route path="/apply/form" element={<Form />} />
        <Route path="/apply/my" element={<My />} />

        {/* 커뮤니티 */}
        <Route path="/community/notice" element={<Notice />} />
        <Route path="/community/notice/new" element={<NoticeCreate />} />
        <Route path="/community/notice/edit/:id" element={<NoticeCreate />} />
        <Route path="/community/notice/:id" element={<NoticeDetail />} />
        <Route path="/community/resources" element={<Resources />} />
        <Route path="/community/media" element={<Media />} />
        <Route path="/community/gallery" element={<Gallery />} />
        <Route path="/community/qna" element={<QnA />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
