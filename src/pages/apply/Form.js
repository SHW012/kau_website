// src/pages/apply/Form.jsx

import React, { useState } from "react";
import styled from "styled-components";

// 더미 데이터
const dummyPrograms = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  title: `프로그램 ${i + 1}`,
  description: `이것은 프로그램 ${i + 1}의 설명입니다.`,
}));

export default function Form() {
  const [page, setPage] = useState(1);
  const perPage = 8;

  const totalPages = Math.ceil(dummyPrograms.length / perPage);
  const currentList = dummyPrograms.slice((page - 1) * perPage, page * perPage);

  return (
    <Wrapper>
      <Title>프로그램 신청</Title>
      <ListView>
        {currentList.map((program) => (
          <ProgramCard key={program.id}>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </ProgramCard>
        ))}
      </ListView>

      <Pagination>
        {Array.from({ length: totalPages }, (_, idx) => (
          <PageButton
            key={idx + 1}
            active={page === idx + 1}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </PageButton>
        ))}
      </Pagination>

      <ApplyButton>신청하기</ApplyButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #002870;
`;

const ListView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const ProgramCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: #f8f8f8;
  h3 {
    margin-bottom: 0.5rem;
    color: #002870;
  }
  p {
    color: #555;
  }
`;

const Pagination = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const PageButton = styled.button`
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => (props.active ? "#002870" : "#ccc")};
  color: white;
  cursor: pointer;

  &:hover {
    background: #1a3370;
  }
`;

const ApplyButton = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background-color: #002870;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #1a3370;
  }
`;
