// src/pages/programs/Wemeet.jsx

import React from "react";
import styled from "styled-components";

export default function Wemeet() {
  return (
    <Wrapper>
      <Title>WE-MEET 신청 안내</Title>
      <Section>
        <SubTitle>1. 개요</SubTitle>
        <Text>
          목적: 캡스톤디자인 산학연계형 과제, 동아리 참여자들의 WE-MEET 프로젝트
          신청 시, 참여 학생들의 혼선 최소화 및 혜택 최대화를 위함
        </Text>
      </Section>

      <Section>
        <SubTitle>2. 신청자별 학점 부여 방식 안내</SubTitle>
        <StyledTable>
          <thead>
            <tr>
              <th>구분</th>
              <th>학점 부여방식</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A) 캡스톤디자인 산학연계형</td>
              <td>캡스톤디자인 3 (등급)</td>
              <td></td>
            </tr>
            <tr>
              <td>B) 동아리</td>
              <td>계절학기 3 (pass/non-pass)</td>
              <td></td>
            </tr>
            <tr>
              <td>C) A + B</td>
              <td>캡스톤디자인 3 (등급) + 계절학기 3 (pass/non-pass)</td>
              <td>
                6학점 이수시, 내년 WE-MEET 참여 불가
                <br />⁕ 동일 주제로 6학점 이수 불가
              </td>
            </tr>
            <tr>
              <td>D) A + B + B 중복</td>
              <td>캡스톤디자인 3 (등급) + 계절학기 3 (pass/non-pass)</td>
              <td></td>
            </tr>
            <tr>
              <td>E) B + B</td>
              <td>계절학기 3 (pass/non-pass)</td>
              <td></td>
            </tr>
          </tbody>
        </StyledTable>
      </Section>

      <Section>
        <SubTitle>3. 학점 부여 방식별 등록 안내</SubTitle>
        <StyledTable>
          <thead>
            <tr>
              <th>학점 부여방식</th>
              <th>시기</th>
              <th>등록방법</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>캡스톤디자인 only</td>
              <td>
                1차 등록팀: 09.22.(금)
                <br />
                2차 등록팀: 09.27.(수) (예상)
              </td>
              <td>
                WE-MEET 홈페이지 회원가입 후 해당 프로젝트 신청
                <br />
                <a
                  href="https://wemeet.korcham.net/Front/Main/appl/Main.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://wemeet.korcham.net/Front/Main/appl/Main.asp
                </a>
                <br />⁕ 위 절차 없이 예산 사용 불가
              </td>
            </tr>
            <tr>
              <td>계절학기 only</td>
              <td>10.13.(금)까지 (예상)</td>
              <td>동일 방식으로 등록</td>
            </tr>
            <tr>
              <td>캡스톤디자인 + 계절학기</td>
              <td>각각의 등록 시기에 맞춰 모두 등록</td>
              <td>개인당 프로젝트 참여 제한 없음 (1인이 2개 이상 참여 가능)</td>
            </tr>
          </tbody>
        </StyledTable>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  color: black;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: black;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  color: white;

  th,
  td {
    border: 1px solid #ccc;
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background-color: #002870;
    color: white;
  }

  td {
    background-color: #1e1e1e;
  }

  a {
    color: #4ea5f7;
    text-decoration: underline;
  }
`;
