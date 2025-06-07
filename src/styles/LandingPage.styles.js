import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background: ${(props) => `url(${props.bannerImage}) center/cover no-repeat`};
  position: relative;
`;

export const ContentSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContentBox = styled.div`
  flex: 1;
  background: #222;
  border-radius: 8px;
  padding: 1.5rem;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 1.2rem;
  border-bottom: 2px solid #fff;
  display: inline-block;
  padding-bottom: 0.25rem;
  color: #fff;
  text-decoration: none;
  vertical-align: middle;

  svg {
    vertical-align: middle;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: #fff;
  opacity: 1;

  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

export const ListDate = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  color: #ccc;
`;
