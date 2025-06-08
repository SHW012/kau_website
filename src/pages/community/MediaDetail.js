// src/pages/community/MediaDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export default function MediaDetail() {
  const { id } = useParams();

  const dummyData = {
    1: {
      title: "KAU 최신 홍보자료",
      content: `한국항공대학교(KAU)는 2025년을 맞아 대학의 비전, 전략, 주요 성과 및 미래 계획을 종합적으로 담은 최신 홍보자료를 발간했습니다. 
이 자료는 항공우주 분야에서의 선도적인 연구 성과를 중심으로, AI, 무인이동체, 스마트 모빌리티 등의 미래 기술과의 융합을 강조하고 있으며, 
학생 중심의 혁신 교육과 글로벌 산학협력 체계에 대한 구체적인 사례를 포함하고 있습니다. 특히 KAU는 국내외 다양한 연구기관과 협업을 통해 
신기술을 실현하고 있으며, 이번 자료에는 그러한 협력의 구체적인 내용과 결과가 다수 포함되어 있습니다. 
또한, 재학생의 인터뷰, 졸업생 성공사례, 교수진의 연구성과, 비교과 프로그램, 국제 교류 현황 등 다양한 정보를 시각화된 자료와 함께 제공하여 
KAU의 우수성과 차별성을 효과적으로 전달하고 있습니다. 이 홍보자료는 KAU의 정체성을 대내외적으로 알리는 중요한 수단이자, 
대학이 추구하는 가치와 철학을 함축한 메시지로서, 고등교육계뿐만 아니라 산업계에서도 주목받고 있습니다.`,
    },
    2: {
      title: "WE-MEET 프로젝트 소개",
      content: `WE-MEET(Wisdom-based Education through Multi-disciplinary Experience and Engagement Training)은 한국항공대학교가 주도하는 
혁신형 산학연계 프로젝트입니다. 이 프로그램은 학생들이 실제 산업체와 협력하여 실무 문제를 해결하는 프로젝트 기반 학습(PBL)을 중심으로 
운영되며, 항공, 소프트웨어, 전자, 기계, 경영 등 다양한 전공의 학생들이 한 팀을 이뤄 다학제적 문제 해결 능력을 키우는 것을 목표로 합니다. 
지도 교수 외에도 외부 산업 멘토가 참여하여 프로젝트의 실효성을 극대화하고 있으며, 학생들은 기획, 실행, 피드백, 발표까지 
모든 과정을 직접 경험함으로써 실무 역량을 자연스럽게 습득합니다. 또한 WE-MEET는 교과와 비교과를 넘나드는 융합적 접근을 통해 
창의적 문제 해결력과 커뮤니케이션 능력, 팀워크, 리더십을 기를 수 있도록 설계되었습니다. 
2024년 기준으로 약 20개 팀이 참여하고 있으며, 그중 일부는 특허 출원, 시제품 제작, 창업 아이디어 발표 등으로 이어져 
실질적인 성과를 거두고 있습니다.`,
    },
    3: {
      title: "2025 홍보영상 제작 완료 보고",
      content: `KAU는 2025년을 맞아 대학의 브랜드 이미지 강화를 위해 새로운 홍보영상을 제작하였습니다. 
이 영상은 캠퍼스 전경, 주요 교육시설, 첨단 연구소, 실습 환경 등을 다각도 드론 촬영과 인터뷰 클립을 활용하여 생생하게 담아냈으며, 
특히 학생과 교수의 실제 수업 장면, 동아리 활동, 국제 교류 현장 등도 포함되어 대학의 역동적인 분위기를 전달합니다. 
영상은 한국어와 영어 자막으로 제공되어 국내외 입학 희망자, 협력 기관, 기업 파트너에게 대학을 효과적으로 소개할 수 있도록 제작되었으며, 
현재는 유튜브, 공식 홈페이지, 각종 교육 박람회 등에서 활발히 활용되고 있습니다. 제작 과정에서 홍보팀과 영상 전문가, 교수진, 재학생이 
유기적으로 협력하여 스토리보드 기획부터 촬영, 편집, 배포에 이르기까지 모든 단계를 체계적으로 수행하였으며, 
영상은 발표 이후 외부 기관으로부터 ‘우수 교육 홍보 콘텐츠’로 선정되기도 했습니다. KAU는 앞으로도 디지털 콘텐츠 중심의 소통 전략을 
지속 강화해 나갈 계획입니다.`,
    },
  };

  const item = dummyData[id];

  if (!item) {
    return <Wrapper>해당 홍보자료를 찾을 수 없습니다.</Wrapper>;
  }

  return (
    <Wrapper>
      <BackLink to="/community/media">← 목록으로 돌아가기</BackLink>
      <Title>{item.title}</Title>
      <Content>{item.content}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: black;
`;

const Content = styled.p`
  font-size: 1.1rem;
  white-space: pre-wrap;
  line-height: 1.6;
  color: black;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: #ccc;
  text-decoration: underline;
`;
