// src/styles/Notice.styles.js

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
  color: #002870; /* Pantone 294C 계열 */
  margin-bottom: 1.5rem;
`;

////////////////////////////////////////////////////////////////////////////////
// SearchBarWrapper: 검색바 래퍼
////////////////////////////////////////////////////////////////////////////////
export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;

  input {
    flex: 1;
    height: 40px;
    padding: 0 0.75rem;
    border: none;
    font-size: 1rem;
    color: #333;

    &:focus {
      outline: none;
      border-color: #002870;
    }
  }

  button {
    width: 48px;
    height: 40px;
    background: #002870;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: #1a3370;
    }
  }
`;

////////////////////////////////////////////////////////////////////////////////
// TableWrapper: 테이블 래퍼 (가로 스크롤 가능)
////////////////////////////////////////////////////////////////////////////////
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    thead {
      background: #f9f9f9;
      border-bottom: 2px solid #e0e0e0;
    }

    th {
      padding: 0.75rem 1rem;
      text-align: left;
      font-size: 0.95rem;
      color: #333;
      border-right: 1px solid #e0e0e0;

      &:last-child {
        border-right: none;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #e0e0e0;

        &:hover {
          background: #f5f5f5;
        }
      }

      td {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
        color: #555;
        border-right: 1px solid #e0e0e0;

        &:last-child {
          border-right: none;
        }

        a {
          color: #002870;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
