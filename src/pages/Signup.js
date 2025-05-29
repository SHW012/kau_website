// src/pages/Signup.jsx
import React, { useState } from "react";
import {
  SignupWrapper,
  SignupCard,
  Title,
  Form,
  InputGroup,
  Icon,
  Input,
  ButtonPrimary,
  TogglePasswordBtn,
} from "../styles/Signup.styles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
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
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePasswordBtn
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "✅" : "❌"}
            </TogglePasswordBtn>
          </InputGroup>
          <ButtonPrimary type="submit">회원가입</ButtonPrimary>
        </Form>
      </SignupCard>
    </SignupWrapper>
  );
}
