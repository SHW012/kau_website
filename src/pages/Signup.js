// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { signup } from "../api/api";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1) 백엔드 회원가입 API 호출
      //    signupData: { email, password }
      const response = await signup({
        email: email.trim(),
        password: password,
      });

      // 2) 회원가입이 성공적으로 되었다면, 보통 response.data가 비어있거나
      //    { success: true } 등의 메시지가 옵니다.
      //    필요하다면 response.data를 확인하여 추가 로직을 작성하세요.
      console.log("회원가입 성공:", response.data);

      alert("회원가입이 완료되었습니다. 이제 로그인 페이지로 이동합니다.");

      // 3) 회원가입 완료 후, 로그인 페이지(“/login”)로 리다이렉트
      navigate("/login");
    } catch (err) {
      console.error("회원가입 실패:", err);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
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
              {showPassword ? "✅" : "🔒"}
            </TogglePasswordBtn>
          </InputGroup>

          <ButtonPrimary type="submit">회원가입</ButtonPrimary>
        </Form>
      </SignupCard>
    </SignupWrapper>
  );
}
