// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Logo,
  Menu,
  MenuItem,
  SubMenu,
  SubMenuItem,
} from "../styles/Navbar.styles";

const items = [
  {
    label: "사업단 소개",
    to: "/about",
    sub: [
      { label: "사업단소개", to: "/about/intro" },
      { label: "인사말", to: "/about/greeting" },
      { label: "조직도", to: "/about/team" },
      { label: "찾아오시는 길", to: "/about/location" },
    ],
  },
  {
    label: "교육 프로그램",
    to: "/programs",
    sub: [
      { label: "차세대통신 마이크로디그리", to: "/programs/microdegree" },
      { label: "WE-MEET 프로젝트", to: "/programs/wemeet" },
      { label: "현장실습 및 비교과 프로그램", to: "/programs/intern" },
    ],
  },
  {
    label: "프로그램 신청",
    to: "/apply",
    sub: [
      { label: "프로그램 신청", to: "/apply/form" },
      { label: "내 프로그램", to: "/apply/my", disabled: true },
    ],
  },
  {
    label: "커뮤니티",
    to: "/community",
    sub: [
      { label: "공지사항", to: "/community/notice" },
      { label: "자료실", to: "/community/resources" },
      { label: "홍보자료", to: "/community/media" },
      { label: "갤러리", to: "/community/gallery" },
      { label: "QnA", to: "/community/qna" },
    ],
  },
];

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          KAU-NCCOSS
        </Link>
      </Logo>
      <Menu>
        {items.map((item, i) => (
          <MenuItem key={i}>
            <Link
              to={item.to}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {item.label}
            </Link>
            {item.sub && (
              <SubMenu>
                {item.sub.map((sub, j) => (
                  <SubMenuItem
                    key={j}
                    style={
                      sub.disabled
                        ? { opacity: 0.5, pointerEvents: "none" }
                        : {}
                    }
                  >
                    <Link
                      to={sub.to}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      {sub.label}
                    </Link>
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
}
