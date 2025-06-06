import styled from "styled-components";

// ✅ 이미지를 감싸는 컨테이너
export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

// ✅ 반응형 이미지 스타일
export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 영역을 꽉 채우도록 */
  display: block;
`;
