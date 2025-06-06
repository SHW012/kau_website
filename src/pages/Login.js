import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LoginWrapper,
  LoginCard,
  Title,
  Form,
  InputGroup,
  Icon,
  Input,
  ButtonPrimary,
  Divider,
  DividerText,
  SignupButton,
} from "../styles/Login.styles";

import { login, setAuthToken } from "../api/api";

// React Icons 라이브러리에서 필요한 아이콘을 가져옵니다.
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1) 백엔드 로그인 API 호출
      const response = await login({
        email: email.trim(),
        password: password,
      });

      // 2) 반환된 토큰 확인
      const { accessToken } = response.data;
      if (!accessToken) {
        throw new Error("로그인 응답에서 토큰을 찾을 수 없습니다.");
      }

      // 3) JWT 토큰을 쿠키에 저장
      document.cookie = `accessToken=${accessToken}; path=/;`;

      // 4) axios 기본 헤더에 Authorization 설정
      setAuthToken(accessToken);

      // 5) 로그인 성공 시 홈(랜딩) 페이지로 이동
      navigate("/");
    } catch (err) {
      console.error("로그인 실패:", err);
      alert("로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.");
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>로그인</Title>

        <Form onSubmit={handleSubmit}>
          {/* 이메일 입력 필드 + 아이콘 */}
          <InputGroup>
            <Icon>
              <FaEnvelope size={18} color="#888" />
            </Icon>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          {/* 비밀번호 입력 필드 + 아이콘 */}
          <InputGroup>
            <Icon>
              <FaLock size={18} color="#888" />
            </Icon>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          {/* 로그인 버튼 */}
          <ButtonPrimary type="submit">로그인</ButtonPrimary>

          {/* OR 구분선 */}
          <Divider>
            <DividerText>OR</DividerText>
          </Divider>

          {/* 회원가입 버튼 */}
          <SignupButton as={Link} to="/signup">
            회원가입
          </SignupButton>
        </Form>
      </LoginCard>
    </LoginWrapper>
  );
}
