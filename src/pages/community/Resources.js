// src/pages/community/Resources.jsx

import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaDownload } from "react-icons/fa";

const dummyFiles = [
  { id: 1, title: "항공우주공학 학부 자료집", date: "2025.04.10", link: "#" },
  { id: 2, title: "대학원 연구 보고서 샘플", date: "2025.03.28", link: "#" },
  { id: 3, title: "AI 설계 실습 자료", date: "2025.03.15", link: "#" },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = dummyFiles.filter((file) =>
    file.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <Container>
      <Title>자료실</Title>

      <Description>
        <h3>1. 학부 자료실</h3>
        <ul>
          <li>교재, 학습 자료, 논문, 연구 보고서 등 학습자료 제공</li>
          <li>전자책, 웹사이트, 동영상 등 디지털 자료 포함</li>
          <li>설계 및 실습 과목에 필요한 자료 지원</li>
        </ul>

        <h3>2. 대학원 자료실</h3>
        <ul>
          <li>논문, 특허, 학술지, 국제 학회 자료 등 제공</li>
          <li>연구에 필요한 실험 및 연구 도구 자료 제공</li>
        </ul>

        <h3>3. 학과별 자료실</h3>
        <ul>
          <li>항공우주·기계공학부: 시스템 설계, 항공기 관련 자료</li>
          <li>항공전자정보공학부: 통신, 제어, 항공전자 자료</li>
          <li>소프트웨어학과: AI, 코딩, 알고리즘 관련 자료</li>
          <li>신소재공학과: 신소재, 재료과학 관련 자료</li>
          <li>스마트드론공학과: 드론, 자율주행 기술 자료</li>
        </ul>

        <h3>4. 자료실 이용 안내</h3>
        <ul>
          <li>학과별 또는 중앙 자료실 형태로 운영</li>
          <li>운영 규정 준수 필수, 효율적 이용 권장</li>
        </ul>
      </Description>

      <SearchBarWrapper>
        <SearchInput
          type="text"
          placeholder="자료 제목을 검색해 보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </SearchBarWrapper>

      <TableWrapper>
        <Table>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>자료 제목</Th>
              <Th>등록일</Th>
              <Th>다운로드</Th>
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

// ───────── 스타일 ─────────

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870;
  margin-bottom: 1.5rem;
`;

const Description = styled.div`
  color: #333;
  margin-bottom: 2rem;

  h3 {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: #002870;
  }

  ul {
    margin-left: 1rem;
    padding-left: 1rem;
    list-style-type: disc;
    color: #444;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

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

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

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
