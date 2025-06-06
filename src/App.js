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
import NoticeDetail from "./pages/community/NoticeDetail";
import Resources from "./pages/community/Resources";
import Media from "./pages/community/Media";
import Gallery from "./pages/community/Gallery";
import QnA from "./pages/community/QnA";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function AppContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
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
        {/* 로그인/회원가입 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 메인 랜딩 페이지 */}
        <Route path="/" element={<LandingPage />} />

        {/* About 페이지 */}
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/greeting" element={<Greeting />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/location" element={<Location />} />

        {/* Programs 페이지 */}
        <Route path="/programs/microdegree" element={<Microdegree />} />
        <Route path="/programs/wemeet" element={<Wemeet />} />
        <Route path="/programs/intern" element={<Intern />} />

        {/* Apply 페이지 */}
        <Route path="/apply/form" element={<Form />} />
        <Route path="/apply/my" element={<My />} />

        {/* Community 섹션: 사이드 메뉴 없이, 각 컴포넌트만 직접 렌더링 */}
        <Route path="/community/notice" element={<Notice />} />
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
