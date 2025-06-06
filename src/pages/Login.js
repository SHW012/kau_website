// src/pages/Login.jsx
import React, { useState } from "react";
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
import { Link } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 로그인 로직 제거됨
    console.log("ID:", id);
    console.log("Password:", pw);
    alert("로그인 버튼 클릭됨 (API 연동 없음)");
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Icon>👤</Icon>
            <Input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <Icon>🔒</Icon>
            <Input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
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
