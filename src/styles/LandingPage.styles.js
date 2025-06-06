import styled from "styled-components";
import heroImage from "../assets/kau_image.png";

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 90vh;

  @media (max-width: 768px) {
    height: auto;
    aspect-ratio: 16 / 9; /* 또는 이미지 비율에 따라 조정 (예: 3 / 2) */
  }
`;

export const HeroText = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  z-index: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: center;
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

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
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

export const NewBadge = styled.span`
  background: red;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  margin-left: 6px;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
