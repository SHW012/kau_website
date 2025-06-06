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
import Resources from "./pages/community/Resources";
import Media from "./pages/community/Media";
import Gallery from "./pages/community/Gallery";
import QnA from "./pages/community/QnA";
import NoticeDetail from "./pages/community/NoticeDetail";

// CommunityLayout import
import CommunityLayout from "./pages/community/CommunityLayout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function AppContent() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar isMobile={isMobile} />
      <div>
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

          {/* Community 섹션: CommunityLayout으로 래핑 */}

          {/* 1) 공지사항 목록 */}
          <Route
            path="/community/notice"
            element={
              <CommunityLayout activeKey="공지사항">
                <Notice />
              </CommunityLayout>
            }
          />
          {/* 1-1) 공지사항 상세 */}
          <Route
            path="/community/notice/:id"
            element={
              <CommunityLayout activeKey="공지사항">
                <NoticeDetail />
              </CommunityLayout>
            }
          />

          {/* 2) 자료실 */}
          <Route
            path="/community/resources"
            element={
              <CommunityLayout activeKey="자료실">
                <Resources />
              </CommunityLayout>
            }
          />

          {/* 3) 홍보자료 */}
          <Route
            path="/community/media"
            element={
              <CommunityLayout activeKey="홍보자료">
                <Media />
              </CommunityLayout>
            }
          />

          {/* 4) 갤러리 */}
          <Route
            path="/community/gallery"
            element={
              <CommunityLayout activeKey="갤러리">
                <Gallery />
              </CommunityLayout>
            }
          />

          {/* 5) QnA */}
          <Route
            path="/community/qna"
            element={
              <CommunityLayout activeKey="QnA">
                <QnA />
              </CommunityLayout>
            }
          />
        </Routes>
      </div>
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
