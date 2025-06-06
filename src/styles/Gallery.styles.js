// src/styles/Gallery.styles.js

import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// Container: 전체 페이지 콘텐츠 래퍼 (중앙 정렬, 최대 너비)
////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////////////////////
// PageTitle: 페이지 상단 제목
////////////////////////////////////////////////////////////////////////////////
export const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870; /* Pantone 294C 계열 */
  margin-bottom: 1.5rem;
`;

////////////////////////////////////////////////////////////////////////////////
// GridWrapper: 이미지를 그리드 레이아웃으로 배치
////////////////////////////////////////////////////////////////////////////////
export const GridWrapper = styled.div`
  display: grid;
  /* minimum 240px씩, 화면 남는 공간에 맞춰 자동으로 컬럼 개수 조정 */
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서는 한 열씩 */
  }
`;

////////////////////////////////////////////////////////////////////////////////
// ImageCard: 한 장의 사진 + 제목을 카드 형태로 감싸기
////////////////////////////////////////////////////////////////////////////////
export const ImageCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  p {
    margin: 0;
    padding: 0.75rem;
    font-size: 1rem;
    color: #333;
    text-align: center;
  }
`;
