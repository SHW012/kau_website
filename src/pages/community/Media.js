import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
} from "../../styles/Media.styles.js";

export default function Media() {
  const [mediaItems, setMediaItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // 실제 API 호출 시 해당 부분을 변경하세요
    setMediaItems([
      { id: 1, title: "홍보자료 1", date: "2025.04.05", link: "#" },
      { id: 2, title: "홍보자료 2", date: "2025.03.20", link: "#" },
      { id: 3, title: "홍보자료 3", date: "2025.03.10", link: "#" },
    ]);
  }, []);

  const filtered = mediaItems.filter((m) => m.title.includes(searchKeyword));

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
        <PageTitle>홍보자료</PageTitle>

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
              {filtered.map((m) => (
                <tr key={m.id}>
                  <td>{m.id}</td>
                  <td>{m.title}</td>
                  <td style={{ textAlign: "center" }}>{m.date}</td>
                  <td style={{ textAlign: "center" }}>
                    <a href={m.link} target="_blank" rel="noreferrer">
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
