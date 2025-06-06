// src/pages/about/Location.jsx
import React from "react";
import locationImg from "../../assets/찾아오는 길.png";

export default function Location() {
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
      {/* 페이지 제목 */}
      <h2
        style={{
          marginTop: "24px",
          marginBottom: "16px",
          fontSize: "1.8rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        찾아오시는 길
      </h2>

      {/* 상단에 위치 사진(지도 혹은 전경) */}
      <img
        src={locationImg}
        alt="찾아오시는 길"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "24px",
        }}
      />

      {/* 하단에 텍스트 정보 */}
      <div
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#444",
        }}
      >
        <p style={{ marginBottom: "16px" }}>
          <strong>주소</strong>
          <br />
          경기 고양시 덕양구 항공대학로 76
        </p>

        <p style={{ margin: "16px 0 8px 0", fontWeight: "600" }}>버스</p>
        <ul style={{ margin: "0 0 16px 20px", padding: 0 }}>
          <li>
            <strong>일반버스:</strong> 733, 82, 72, 77, 66
          </li>
          <li>
            <strong>광역버스:</strong> 9711A, 1900
          </li>
          <li>
            <strong>지선버스:</strong> 7727, 7726
          </li>
          <li>
            <strong>마을버스:</strong> 075B, 022, 042
          </li>
        </ul>

        <p style={{ margin: "16px 0 8px 0", fontWeight: "600" }}>지하철</p>
        <p style={{ margin: 0 }}>
          <strong>경의중앙선 한국항공대역 2번 출구</strong>
        </p>
      </div>
    </div>
  );
}
