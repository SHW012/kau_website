// src/styles/QnA.styles.js

import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// Container: 전체 페이지 콘텐츠 래퍼 (중앙 정렬, 최대 너비)
////////////////////////////////////////////////////////////////////////////////
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

////////////////////////////////////////////////////////////////////////////////
// PageTitle: 상단 제목 스타일
////////////////////////////////////////////////////////////////////////////////
export const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870; /* Pantone 294C 색상 */
  margin-bottom: 1.5rem;
`;

////////////////////////////////////////////////////////////////////////////////
// FormWrapper: QnA 등록/수정/답변 폼 래퍼
////////////////////////////////////////////////////////////////////////////////
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
    align-self: flex-end;
    padding: 0.5rem 1rem;
    background: #002870;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
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
  margin: 0;
  padding: 0;

  li {
    background: #f9f9f9;
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #333;
    }

    p {
      font-size: 0.95rem;
      color: #555;
    }

    .answer {
      font-style: italic;
      color: #002870;
    }

    button {
      background: transparent;
      border: 1px solid #002870;
      color: #002870;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;

      &:hover {
        background: #002870;
        color: #fff;
      }
    }
  }
`;
