// src/components/MobileMenu.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuWrapper = styled.div`
  background: white;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 2000;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

export const StyledLink = styled(Link)`
  font-size: 0.95rem;
  color: #333;
  padding: 0.3rem 0;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;
