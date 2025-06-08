// src/pages/programs/Intern.jsx

import React from "react";
import styled from "styled-components";
import careerImage from "../../assets/carrer.png"; // ✅ 경로 확인

export default function Intern() {
  return (
    <Wrapper>
      <Title>현장실습 및 비교과 프로그램</Title>
      <Image src={careerImage} alt="현장실습 이미지" />
      <Description>
        KAU는 학생들의 실무 경험 강화를 위해 다양한 현장실습 및 비교과
        프로그램을 운영하고 있습니다. 산업체와 연계된 실습 과정뿐 아니라 글로벌
        인턴십, 기업 프로젝트, 비교과 역량 인증제 등을 통해 학생들이 다양한
        현장을 경험하고 실무역량을 기를 수 있도록 적극 지원하고 있습니다.
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: black;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: black;
`;
