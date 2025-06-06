import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
} from "../../styles/Resources.styles.js";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // 실제 API 호출 시 해당 부분을 교체하세요
    setResources([
      { id: 1, title: "자료실 파일 1", date: "2025.04.10", link: "#" },
      { id: 2, title: "자료실 파일 2", date: "2025.03.28", link: "#" },
      { id: 3, title: "자료실 파일 3", date: "2025.03.15", link: "#" },
    ]);
  }, []);

  const filtered = resources.filter((res) => res.title.includes(searchKeyword));

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
        <PageTitle>자료실</PageTitle>

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
                <th style={{ width: "10%", textAlign: "center" }}>Link</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((res) => (
                <tr key={res.id}>
                  <td>{res.id}</td>
                  <td>{res.title}</td>
                  <td style={{ textAlign: "center" }}>{res.date}</td>
                  <td style={{ textAlign: "center" }}>
                    <a href={res.link} target="_blank" rel="noreferrer">
                      다운로드
                    </a>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
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
