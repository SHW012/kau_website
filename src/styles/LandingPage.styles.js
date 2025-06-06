import styled from "styled-components";
import heroImage from "../assets/kau_image.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HeroSection = styled.div`
  flex: 6;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContentSection = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: stretch; /* ✅ 박스 높이 통일 */
  background: #222;
  color: white;
  padding: 2rem 1rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ContentBox = styled.div`
  background: #333;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  min-height: 200px; /* ✅ 최소 높이 통일 */

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
    min-height: auto; /* 모바일에서는 높이 자동 */
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid white;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ListItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  list-style: none;
  position: relative;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const ListDate = styled.span`
  float: right;
  font-size: 0.85rem;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
