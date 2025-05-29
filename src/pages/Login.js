// src/pages/Login.jsx
import React, { useState } from "react";
import {
  AuthWrapper,
  AuthForm,
  AuthTitle,
  AuthLabel,
  AuthInput,
  AuthButton,
} from "../styles/Login.styles.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 처리
    console.log({ email, password });
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>로그인</AuthTitle>

        <AuthLabel htmlFor="email">이메일</AuthLabel>
        <AuthInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthLabel htmlFor="password">비밀번호</AuthLabel>
        <AuthInput
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <AuthButton type="submit">로그인</AuthButton>
      </AuthForm>
    </AuthWrapper>
  );
}
