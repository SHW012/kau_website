import styled from "styled-components";

// ✅ 이미지를 감싸는 컨테이너
export const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

// ✅ 반응형 이미지 스타일
export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* 또는 contain → 아래 참고 */
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    object-fit: contain; // 모바일에서는 이미지 비율 유지하며 축소
  }
`;
