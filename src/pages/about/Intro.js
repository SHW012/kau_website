// src/pages/about/Intro.jsx
import React from "react";
// assets 폴더에 있는 이미지를 import 합니다.
import introImg from "../../assets/사업단 소개.png";

export default function Intro() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        boxSizing: "border-box",
      }}
    >
      {/* 이미지 위에 짤막한 제목을 넣습니다. */}
      <h2
        style={{
          marginTop: "24px",
          marginBottom: "16px",
          fontSize: "1.8rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        사업단 소개
      </h2>

      {/* 
        img 태그에 width:100%와 height:auto를 주면
        화면 크기에 맞춰 너비가 늘어나고, 높이는 원본 비율대로 자동 조정되므로
        반응형이 됩니다.
      */}
      <img
        src={introImg}
        alt="사업단 소개"
        style={{
          width: "100%",
          height: "auto",
          display: "block", // 인라인 여백을 없애기 위해 block 처리
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      {/* 필요하다면 이 아래에 추가 텍스트나 컴포넌트를 붙일 수 있습니다 */}
    </div>
  );
}
