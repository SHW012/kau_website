// src/styles/NoticeCreate.styles.js

import styled from "styled-components";

////////////////////////////////////////////////////////////////////////////////
// FormWrapper: 새 공지 작성 폼 래퍼
////////////////////////////////////////////////////////////////////////////////
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

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
`;
