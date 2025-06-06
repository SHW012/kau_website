// src/pages/Login.jsx
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
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("[디버깅] handleSubmit 시작 – 이메일:", email);

    try {
      console.log("[디버깅] 로그인 API 호출 전");
      const response = await login({
        email: email.trim(),
        password: password,
      });
      console.log("[디버깅] 로그인 API 응답 전체:", response);

      if (!response || !response.data) {
        throw new Error("로그인 응답이 유효하지 않습니다.");
      }

      // 백엔드에서 내려주는 실제 키 이름 확인 필요
      // 예시: response.data = { token: "...", sub: "user@naver.com", ... }
      const { accessToken, token, jwt, userEmail, sub } = response.data;

      console.log("[디버깅] response.data.accessToken:", accessToken);
      console.log("[디버깅] response.data.token:", token);
      console.log("[디버깅] response.data.jwt:", jwt);
      console.log("[디버깅] response.data.userEmail:", userEmail);
      console.log("[디버깅] response.data.sub:", sub);

      // 토큰 우선순위: accessToken > token > jwt
      const actualToken = accessToken || token || jwt;
      // 실제 이메일: userEmail 키가 없으면 sub, 없으면 사용자가 입력한 email 그대로 사용
      const actualEmail = userEmail || sub || email.trim();

      console.log("[디버깅] 실제 사용할 토큰값:", actualToken);
      console.log("[디버깅] 실제 사용할 이메일값:", actualEmail);

      if (!actualToken) {
        throw new Error("로그인 응답에서 토큰을 찾을 수 없습니다.");
      }

      // 1) JWT 토큰을 브라우저 쿠키에 저장 (기본 path=/)
      document.cookie = `accessToken=${actualToken}; path=/;`;

      // 2) Axios 인스턴스에 Authorization 헤더 설정
      setAuthToken(actualToken);

      // 3) localStorage에 사용자 이메일 저장 (Navbar가 이 값을 읽어 로그인 상태 판단)
      localStorage.setItem("userEmail", actualEmail);
      console.log("[디버깅] localStorage에 userEmail 저장 완료:", actualEmail);

      // 4) 로그인 성공 후 홈 페이지로 이동
      navigate("/");
    } catch (err) {
      console.error("[디버깅] 로그인 실패 오류 객체:", err);
      if (err.response) {
        console.error("[디버깅] err.response.data:", err.response.data);
        console.error("[디버깅] err.response.status:", err.response.status);
      }
      alert("로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.");
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit}>
          {/* 이메일 입력 + 아이콘 */}
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

          {/* 비밀번호 입력 + 아이콘 */}
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
