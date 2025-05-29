// src/components/PageHeader.js
import styled from "styled-components";
import kauImage from "../assets/kau_image.png";

const PageHeader = styled.section`
  position: relative;
  width: 100%;
  height: 250px;
  background: url(${kauImage}) center/cover no-repeat;
  background-size: cover;
`;

export default PageHeader;
