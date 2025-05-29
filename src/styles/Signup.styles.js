import styled from "styled-components";

export const SignupWrapper = styled.div`
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px 20px 20px;
  background: #f5f7fa;
`;

export const SignupCard = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
  font-size: 1.75rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-left: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #20b2aa;
  }
`;

export const ButtonPrimary = styled.button`
  width: 100%;
  padding: 12px;
  background: #20b2aa;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #1a8d82;
  }
`;

// ✅ 비밀번호 토글 버튼
export const TogglePasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #888;
  padding: 0;
  &:hover {
    color: #20b2aa;
  }
`;
