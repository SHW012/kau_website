// src/styles/Signup.styles.js
import styled from "styled-components";

////////////////////////////////////////////////////////////////
// SignupWrapper: 회원가입 페이지 전체 래퍼
////////////////////////////////////////////////////////////////
export const SignupWrapper = styled.div`
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px 20px 20px;
  background: #f5f7fa;
`;

////////////////////////////////////////////////////////////////
// SignupCard: 실제 회원가입 폼이 담길 박스
////////////////////////////////////////////////////////////////
export const SignupCard = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

////////////////////////////////////////////////////////////////
// Title: "회원가입" 텍스트
////////////////////////////////////////////////////////////////
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
  font-size: 1.75rem;
`;

////////////////////////////////////////////////////////////////
// Form: form 태그 (flex-column)
////////////////////////////////////////////////////////////////
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

////////////////////////////////////////////////////////////////
// InputGroup: 아이콘 + input을 감싸는 래퍼
////////////////////////////////////////////////////////////////
export const InputGroup = styled.div`
  position: relative;
`;

////////////////////////////////////////////////////////////////
// Icon: input 왼쪽에 위치할 아이콘
////////////////////////////////////////////////////////////////
export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;

////////////////////////////////////////////////////////////////
// Input: 이메일/비밀번호를 입력하는 필드
////////////////////////////////////////////////////////////////
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: 44px; /* 아이콘 크기(18px) + left(12px) + 마진(14px) 정도 여유 */
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #002870; /* Pantone 294C 색상으로 포커스 시 강조 */
  }
`;

////////////////////////////////////////////////////////////////
// TogglePasswordBtn: 비밀번호 표시/숨김 버튼
////////////////////////////////////////////////////////////////
export const TogglePasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`;

////////////////////////////////////////////////////////////////
// ButtonPrimary: 회원가입 버튼 스타일
////////////////////////////////////////////////////////////////
export const ButtonPrimary = styled.button`
  width: 100%;
  padding: 12px;
  background: #002870; /* Pantone 294C (RGB: 0,40,112) */
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #1a3370; /* 조금 밝게 변형한 색상 예시 */
  }
`;
