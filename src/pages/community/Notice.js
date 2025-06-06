import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
} from "../../styles/Notice.styles";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // 실제 API 호출 시 이 부분만 교체하세요
    setItems([
      {
        id: 102,
        title:
          "2025 아·태 지역 인터넷거버넌스 아카데미(APIGA) 프로그램 참여 지원(~05/11(일) 까지)",
        date: "2025.04.21",
        count: 185,
      },
      {
        id: 101,
        title:
          "2025년도 대한전자공학회 하계종합학술대회 참가 지원(논문제출 ~05/01(목) 15:00까지)",
        date: "2025.04.21",
        count: 359,
      },
      {
        id: 100,
        title: "Matlab & Simulink 인프라 활용 특강",
        date: "2025.04.16",
        count: 149,
      },
      {
        id: 99,
        title:
          "한국정보통신설비학회 2025 정보통신설비 춘계세미나 참가 모집 (추가 모집: ~25.04.16. 09:00)",
        date: "2025.03.27",
        count: 307,
      },
      {
        id: 98,
        title:
          "2025학년도 1학기 캡스톤디자인 WE-Meet 프로젝트 과제 신청 결과 안내",
        date: "2025.03.25",
        count: 262,
      },
      {
        id: 97,
        title:
          "2025학년도 1학기 캡스톤디자인 WE-Meet 프로젝트 과제 지원 선정 결과 지연 안내",
        date: "2025.03.21",
        count: 165,
      },
      {
        id: 96,
        title: "차세대통신 분야 동아리 운영 및 지원",
        date: "2025.03.17",
        count: 299,
      },
      {
        id: 95,
        title: "전남대 차세대통신융합신사업단 마일리지 제도 운영 중단 안내",
        date: "2025.03.12",
        count: 176,
      },
      {
        id: 94,
        title:
          "2025학년도 1학기 캡스톤디자인 WE-Meet 프로젝트 과제 지원 안내(~3/20(목) 15:00 까지)",
        date: "2025.03.05",
        count: 966,
      },
    ]);
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.includes(searchKeyword)
  );

  return (
    <PageWrapper>
      <SideNav>
        <ul>
          <li>
            <Link to="/community/notice">공지사항</Link>
          </li>
          <li>
            <Link to="/community/resources">자료실</Link>
          </li>
          <li>
            <Link to="/community/media">홍보자료</Link>
          </li>
          <li>
            <Link to="/community/gallery">갤러리</Link>
          </li>
          <li>
            <Link to="/community/qna">QnA</Link>
          </li>
        </ul>
      </SideNav>

      <ContentArea>
        <PageTitle>공지사항</PageTitle>

        <SearchBarWrapper>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button>🔍</button>
        </SearchBarWrapper>

        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>No.</th>
                <th>Title</th>
                <th style={{ width: "15%", textAlign: "center" }}>Date</th>
                <th style={{ width: "10%", textAlign: "center" }}>Count</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/community/notice/${item.id}`}>
                      {item.title}
                    </Link>
                  </td>
                  <td style={{ textAlign: "center" }}>{item.date}</td>
                  <td style={{ textAlign: "center" }}>{item.count}</td>
                </tr>
              ))}
              {filteredItems.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    style={{ textAlign: "center", padding: "1rem" }}
                  >
                    검색 결과가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </TableWrapper>
      </ContentArea>
    </PageWrapper>
  );
}
