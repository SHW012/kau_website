import React from "react";
import { Link } from "react-router-dom";
import {
  TopBar,
  TopBarLink,
  Nav,
  Logo,
  Menu,
  MenuItem,
  SubMenu,
  SubMenuItem,
} from "../styles/Navbar.styles";
import kauLogo from "../assets/kau_logo1.jpg";

const items = [
  {
    label: "사업단 소개",
    to: "/about/intro",
    sub: [
      { label: "사업단소개", to: "/about/intro" },
      { label: "인사말", to: "/about/greeting" },
      { label: "조직도", to: "/about/team" },
      { label: "찾아오시는 길", to: "/about/location" },
    ],
  },
  {
    label: "교육 프로그램",
    to: "/programs/microdegree",
    sub: [
      { label: "차세대통신 마이크로디그리", to: "/programs/microdegree" },
      { label: "WE-MEET 프로젝트", to: "/programs/wemeet" },
      { label: "현장실습 및 비교과 프로그램", to: "/programs/intern" },
    ],
  },
  {
    label: "프로그램 신청",
    to: "/apply/form",
    sub: [
      { label: "프로그램 신청", to: "/apply/form" },
      { label: "내 프로그램", to: "/apply/my", disabled: true },
    ],
  },
  {
    label: "커뮤니티",
    to: "/community/notice",
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
    <>
      <TopBar>
        <TopBarLink as={Link} to="/login">
          로그인
        </TopBarLink>
        <TopBarLink as={Link} to="/signup">
          회원가입
        </TopBarLink>
      </TopBar>

      <Nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <img
              src={kauLogo}
              alt="KAU NCCOSS 로고"
              style={{
                height: "40px",
                objectFit: "contain",
                marginRight: "10px",
              }}
            />
            {/* Navbar.styles.js에서 Logo span 색상을 #333으로 지정했으므로 아래 인라인 color 제거 가능 */}
            <span
              style={{
                fontSize: "16px",
                fontWeight: "bold" /* color: "#333" */,
              }}
            >
              차세대통신 혁신융합대학사업단
            </span>
          </Logo>
        </Link>

        <Menu>
          {items.map((item, i) => (
            <MenuItem key={i}>
              <Link to={item.to}>{item.label}</Link>
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
                      <Link to={sub.to}>{sub.label}</Link>
                    </SubMenuItem>
                  ))}
                </SubMenu>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Nav>
    </>
  );
}
