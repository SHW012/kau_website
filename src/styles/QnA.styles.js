// src/styles/QnA.styles.js

import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// Container: 페이지 전체 래퍼
////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////////////////////
// PageTitle: 제목 스타일
////////////////////////////////////////////////////////////////////////////////
export const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870;
  margin-bottom: 1.5rem;
`;

////////////////////////////////////////////////////////////////////////////////
// FormWrapper: 입력 폼 래퍼
////////////////////////////////////////////////////////////////////////////////
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: #002870;
    }
  }

  button {
    width: fit-content;
    padding: 0.5rem 1rem;
    background: #002870;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #1a3370;
    }
  }
`;

////////////////////////////////////////////////////////////////////////////////
// ListWrapper: QnA 리스트 래퍼
////////////////////////////////////////////////////////////////////////////////
export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.2rem;
      color: #333;
    }

    p {
      margin: 0.25rem 0;
      color: #555;
    }

    .answer {
      background: #eef7ff;
      padding: 0.75rem;
      border-left: 4px solid #002870;
      border-radius: 4px;
      margin-top: 0.75rem;
      color: #333;
    }
  }
`;

////////////////////////////////////////////////////////////////////////////////
// ActionButton: 공통 액션 버튼 (수정/삭제/답변)
////////////////////////////////////////////////////////////////////////////////
export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${(p) => (p.danger ? "#c62828" : "#002870")};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background: ${(p) => (p.danger ? "#a71e1e" : "#1a3370")};
  }
`;
