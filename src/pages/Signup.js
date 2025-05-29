// src/pages/Signup.jsx
import React, { useState } from "react";
import {
  PageHeader,
  Breadcrumb,
  CrumbLink,
  CrumbCurrent,
} from "../styles/AuthPage.styles";
import {
  SignupWrapper,
  SignupCard,
  Title,
  Form,
  InputGroup,
  Icon,
  Input,
  ButtonPrimary,
} from "../styles/Signup.styles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log({ email, password });
  };

  return (
    <>
      <PageHeader />

      <Breadcrumb>
        <CrumbLink to="/">홈</CrumbLink>
        <CrumbCurrent>회원가입</CrumbCurrent>
      </Breadcrumb>

      <SignupWrapper>
        <SignupCard>
          <Title>회원가입</Title>
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
            <InputGroup>
              <Icon>🔒</Icon>
              <Input
                type="password"
                placeholder="비밀번호 확인"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </InputGroup>
            <ButtonPrimary type="submit">회원가입</ButtonPrimary>
          </Form>
        </SignupCard>
      </SignupWrapper>
    </>
  );
}
