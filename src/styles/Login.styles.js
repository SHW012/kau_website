// src/styles/Login.styles.js
import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 40px 20px 20px;
  background: #f5f7fa;
`;

export const LoginCard = styled.div`
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

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonSecondary = styled.button`
  flex: 1;
  padding: 10px;
  background: #fff;
  color: #20b2aa;
  border: 1px solid #20b2aa;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  &:hover {
    background: #e6f4f2;
  }
`;

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

export const DividerText = styled.span`
  background: #fff;
  padding: 0 8px;
  color: #888;
  font-size: 0.9rem;
`;

export const SignupButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #fff;
  color: #20b2aa;
  border: 1px solid #20b2aa;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: #e6f4f2;
  }
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 0.9rem;
  color: #555;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 16px;
  height: 16px;
  accent-color: #20b2aa;
`;
