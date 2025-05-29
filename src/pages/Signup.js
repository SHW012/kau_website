// src/pages/Signup.jsx
import React, { useState } from "react";
import {
  AuthWrapper,
  AuthForm,
  AuthTitle,
  AuthLabel,
  AuthInput,
  AuthButton,
} from "../styles/Signup.styles.js";

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
    // TODO: 회원가입 처리
    console.log({ email, password });
  };

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>회원가입</AuthTitle>

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

        <AuthLabel htmlFor="confirm">비밀번호 확인</AuthLabel>
        <AuthInput
          id="confirm"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <AuthButton type="submit">회원가입</AuthButton>
      </AuthForm>
    </AuthWrapper>
  );
}
