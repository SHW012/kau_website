import styled from "styled-components";

////////////////////////////////////////////////////////////////
// LoginWrapper: 로그인 페이지 전체 래퍼
////////////////////////////////////////////////////////////////
export const LoginWrapper = styled.div`
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px 20px 20px;
  background: #f5f7fa;
`;

////////////////////////////////////////////////////////////////
// LoginCard: 실제 로그인 폼이 담길 박스
////////////////////////////////////////////////////////////////
export const LoginCard = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

////////////////////////////////////////////////////////////////
// Title: "로그인" 텍스트
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
// InputGroup: 입력창을 감싸는 래퍼
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
// Input: 이메일/비밀번호 입력 필드
////////////////////////////////////////////////////////////////
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: 40px; /* 아이콘 크기 + left padding 만큼 공간 확보 */
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #002870; /* Pantone 294C 계열 강조색 */
  }
`;

////////////////////////////////////////////////////////////////
// ButtonPrimary: 로그인 버튼 스타일
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
    background: #1a3370; /* 살짝 밝게 변경 */
  }
`;

////////////////////////////////////////////////////////////////
// Divider: OR 구분선
////////////////////////////////////////////////////////////////
export const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 16px 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: #ccc;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

////////////////////////////////////////////////////////////////
// DividerText: OR 텍스트
////////////////////////////////////////////////////////////////
export const DividerText = styled.span`
  background: #fff;
  padding: 0 8px;
  color: #888;
  font-size: 0.9rem;
`;

////////////////////////////////////////////////////////////////
// SignupButton: 회원가입 버튼 스타일
////////////////////////////////////////////////////////////////
export const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #002870; /* Pantone 294C */
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #1a3370; /* 살짝 밝게 변경 */
  }
`;
