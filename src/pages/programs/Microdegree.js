// src/pages/programs/Microdegree.jsx

import React from "react";
import styled from "styled-components";

// 이미지 파일 import (총 6장)
import img1 from "../../assets/마이크로디그리_1.png";
import img2 from "../../assets/마이크로디그리_2.png";
import img3 from "../../assets/마이크로디그리_3.png";
import img4 from "../../assets/마이크로디그리_4.png";
import img5 from "../../assets/마이크로디그리_5.png";
import img6 from "../../assets/마이크로디그리_6.png";

////////////////////////////////////////////////////////////////////////////////
// Container: 페이지 전체 래퍼
////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////////////////////
// Title: 페이지 상단 제목
////////////////////////////////////////////////////////////////////////////////
const Title = styled.h2`
  font-size: 2rem;
  color: #002870; /* Pantone 294C 계열 */
  text-align: center;
  margin-bottom: 2rem;
`;

////////////////////////////////////////////////////////////////////////////////
// ImageGrid: 반응형 그리드 레이아웃
////////////////////////////////////////////////////////////////////////////////
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

////////////////////////////////////////////////////////////////////////////////
// ImageBox: 개별 이미지 박스 (카드 형태)
////////////////////////////////////////////////////////////////////////////////
const ImageBox = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

////////////////////////////////////////////////////////////////////////////////
// StyledImage: 이미지 자체 스타일 (반응형)
////////////////////////////////////////////////////////////////////////////////
const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

////////////////////////////////////////////////////////////////////////////////
// Microdegree 컴포넌트
////////////////////////////////////////////////////////////////////////////////
export default function Microdegree() {
  return (
    <Container>
      <Title>차세대통신 마이크로디그리</Title>

      <ImageGrid>
        <ImageBox>
          <StyledImage src={img1} alt="마이크로디그리 1" />
        </ImageBox>
        <ImageBox>
          <StyledImage src={img2} alt="마이크로디그리 2" />
        </ImageBox>
        <ImageBox>
          <StyledImage src={img3} alt="마이크로디그리 3" />
        </ImageBox>
        <ImageBox>
          <StyledImage src={img4} alt="마이크로디그리 4" />
        </ImageBox>
        <ImageBox>
          <StyledImage src={img5} alt="마이크로디그리 5" />
        </ImageBox>
        <ImageBox>
          <StyledImage src={img6} alt="마이크로디그리 6" />
        </ImageBox>
      </ImageGrid>
    </Container>
  );
}
