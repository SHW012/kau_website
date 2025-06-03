// src/components/MobileMenu.jsx
import React from "react";
import {
  MenuWrapper,
  Section,
  SectionTitle,
  StyledLink,
} from "../styles/MobileMenu.styles.js";

const menuItems = [
  {
    label: "사업단 소개",
    sub: [
      { label: "사업단소개", to: "/about/intro" },
      { label: "인사말", to: "/about/greeting" },
      { label: "조직도", to: "/about/team" },
      { label: "찾아오시는 길", to: "/about/location" },
    ],
  },
  {
    label: "교육 프로그램",
    sub: [
      { label: "차세대통신 마이크로디그리", to: "/programs/microdegree" },
      { label: "WE-MEET 프로젝트", to: "/programs/wemeet" },
      { label: "현장실습 및 비교과 프로그램", to: "/programs/intern" },
    ],
  },
  {
    label: "프로그램 신청",
    sub: [
      { label: "프로그램 신청", to: "/apply/form" },
      { label: "내 프로그램", to: "/apply/my" },
    ],
  },
  {
    label: "커뮤니티",
    sub: [
      { label: "공지사항", to: "/community/notice" },
      { label: "자료실", to: "/community/resources" },
      { label: "홍보자료", to: "/community/media" },
      { label: "갤러리", to: "/community/gallery" },
      { label: "QnA", to: "/community/qna" },
    ],
  },
];

export default function MobileMenu({ onClose }) {
  return (
    <MenuWrapper>
      {menuItems.map((group, i) => (
        <Section key={i}>
          <SectionTitle>{group.label}</SectionTitle>
          {group.sub.map((item, j) => (
            <StyledLink to={item.to} key={j} onClick={onClose}>
              {item.label}
            </StyledLink>
          ))}
        </Section>
      ))}
    </MenuWrapper>
  );
}
