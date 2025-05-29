// src/styles/AuthPage.styles.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import kauImage from "../assets/kau_image.png";

export const PageHeader = styled.section`
  position: relative;
  width: 100%;
  height: 250px;
  background: url(${kauImage}) center/cover no-repeat;
  background-size: cover;
`;

export const Breadcrumb = styled.nav`
  background: #20b2aa;
  padding: 0.4rem 1.5rem;
  color: #fff;
  font-size: 0.85rem;
`;

export const CrumbLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &::after {
    content: ">";
    margin: 0 0.5rem;
  }
`;

export const CrumbCurrent = styled.span`
  color: #fff;
`;
