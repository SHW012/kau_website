// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader"; // 상단 이미지 포함 헤더
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

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {!isLanding && <PageHeader />}
      <Routes>
        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* About */}
        <Route path="/about/intro" element={<Intro />} />
        <Route path="/about/greeting" element={<Greeting />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/location" element={<Location />} />

        {/* Programs */}
        <Route path="/programs/microdegree" element={<Microdegree />} />
        <Route path="/programs/wemeet" element={<Wemeet />} />
        <Route path="/programs/intern" element={<Intern />} />

        {/* Apply */}
        <Route path="/apply/form" element={<Form />} />
        <Route path="/apply/my" element={<My />} />

        {/* Community */}
        <Route path="/community/notice" element={<Notice />} />
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
