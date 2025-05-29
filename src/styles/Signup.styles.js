// src/styles/Signup.styles.js
import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 1rem;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const AuthTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
`;

export const AuthLabel = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const AuthInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AuthButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background: #0074d9;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
