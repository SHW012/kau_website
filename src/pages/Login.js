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
  ButtonGroup,
  ButtonSecondary,
  Divider,
  DividerText,
  SignupButton,
  CheckboxWrapper,
  Checkbox,
} from "../styles/Login.styles";

import { login, setAuthToken } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState(""); // ID 대신 email 로 변경
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

      // 2) 백엔드에서 반환해주는 토큰 키명을 확인하세요.
      //    예를 들어 response.data.accessToken 또는 response.data.token 등.
      //    백엔드 명세에 맞게 아래 코드의 “accessToken”을 수정해 주세요.
      const { accessToken } = response.data;
      if (!accessToken) {
        throw new Error("로그인 응답에서 토큰을 찾을 수 없습니다.");
      }

      // 3) JWT 토큰을 쿠키에 저장 (브라우저 JS에서 간단히 document.cookie로 설정)
      //    만약 백엔드가 HttpOnly 쿠키로 내려주도록 이미 설정되어 있으면,
      //    클라이언트에서 document.cookie 로 설정할 필요가 없습니다.
      document.cookie = `accessToken=${accessToken}; path=/;`;

      // 4) axios 인스턴스의 Authorization 헤더에도 토큰을 붙여 줍니다.
      setAuthToken(accessToken);

      // 5) 로그인 성공 후, 랜딩 페이지(“/”)로 이동
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
          <InputGroup>
            <Icon>✉️</Icon>
            <Input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Icon>🔒</Icon>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <ButtonPrimary type="submit">로그인</ButtonPrimary>

          <ButtonGroup>
            <ButtonSecondary type="button">아이디 찾기</ButtonSecondary>
            <ButtonSecondary type="button">비밀번호 찾기</ButtonSecondary>
          </ButtonGroup>

          <Divider>
            <DividerText>OR</DividerText>
          </Divider>

          <SignupButton as={Link} to="/signup">
            회원가입
          </SignupButton>

          <CheckboxWrapper>
            <Checkbox />
            아이디 저장
          </CheckboxWrapper>
        </Form>
      </LoginCard>
    </LoginWrapper>
  );
}
