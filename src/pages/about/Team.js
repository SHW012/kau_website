// src/pages/about/Team.jsx
import React from "react";
// assets 폴더에서 조직도 이미지를 import 합니다.
import teamImg from "../../assets/조직도.png";

export default function Team() {
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
      {/* 조직도 페이지 제목 */}
      <h2
        style={{
          marginTop: "24px",
          marginBottom: "16px",
          fontSize: "1.8rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        조직도
      </h2>

      {/* 
        width: "100%", height: "auto"를 주면 반응형으로 이미지를 표시합니다.
        objectFit: "cover"를 주면 컨테이너에 맞춰 비율을 유지하며 잘립니다.
      */}
      <img
        src={teamImg}
        alt="조직도"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}
