// src/pages/community/Resources.jsx

import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaDownload } from "react-icons/fa";

// ────────────────────────────────────────────────────────────────────────────────
// 더미 데이터 (나중에 API 호출로 대체 가능)
// ────────────────────────────────────────────────────────────────────────────────
const dummyFiles = [
  { id: 1, title: "자료실 파일 1", date: "2025.04.10", link: "#" },
  { id: 2, title: "자료실 파일 2", date: "2025.03.28", link: "#" },
  { id: 3, title: "자료실 파일 3", date: "2025.03.15", link: "#" },
];

// ────────────────────────────────────────────────────────────────────────────────
// 스타일 정의
// ────────────────────────────────────────────────────────────────────────────────

// 페이지 전체 래퍼
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

// 상단 제목
const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870; /* Pantone 294C 계열 */
  margin-bottom: 1rem;
`;

// 검색바 래퍼
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

// 검색 입력창
const SearchInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 0.75rem;
  border: none;
  font-size: 1rem;
  color: #333;

  &:focus {
    outline: none;
  }
`;

// 검색 버튼
const SearchButton = styled.button`
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
`;

// 테이블 래퍼 (가로 스크롤 가능)
const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

// 기본 테이블 스타일
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

// 테이블 헤더
const Thead = styled.thead`
  background: #f9f9f9;
  border-bottom: 2px solid #e0e0e0;
`;

const Th = styled.th`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.95rem;
  color: #333;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`;

// 테이블 본문 (행)
const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  color: #555;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`;

// 다운로드 링크 버튼
const DownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #002870;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// Resources 컴포넌트
// ────────────────────────────────────────────────────────────────────────────────
export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  // 검색어를 포함한 파일 리스트만 필터링
  const filtered = dummyFiles.filter((file) =>
    file.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <Container>
      {/* 상단 제목 */}
      <Title>자료실</Title>

      {/* 검색바 */}
      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="검색어를 입력해 주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchBarWrapper>

      {/* 테이블 */}
      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th style={{ width: "60px" }}>No.</Th>
              <Th>Title</Th>
              <Th style={{ width: "100px" }}>Date</Th>
              <Th style={{ width: "100px" }}>Link</Th>
            </Tr>
          </Thead>

          <Tbody>
            {filtered.map((file, idx) => (
              <Tr key={file.id}>
                <Td>{idx + 1}</Td>
                <Td>{file.title}</Td>
                <Td>{file.date}</Td>
                <Td>
                  <DownloadLink href={file.link}>
                    <FaDownload />
                    다운로드
                  </DownloadLink>
                </Td>
              </Tr>
            ))}

            {/* 검색 결과가 없을 경우 */}
            {filtered.length === 0 && (
              <Tr>
                <Td colSpan={4} style={{ textAlign: "center", color: "#888" }}>
                  검색 결과가 없습니다.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}
