import React, { useEffect, useState } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ 추가

import {
  Container,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
} from "../../styles/Media.styles.js";

export default function Media() {
  const [mediaItems, setMediaItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    // 실제 백엔드 연동 시 이곳을 API 호출로 교체
    setMediaItems([
      {
        id: 1,
        title: "KAU 최신 홍보자료",
        date: "2025.04.05",
        link: "https://example.com/kau-promo.pdf",
      },
      {
        id: 2,
        title: "WE-MEET 프로젝트 소개",
        date: "2025.03.20",
        link: "https://example.com/wemeet-intro.pdf",
      },
      {
        id: 3,
        title: "2025 학술 자료 요약본",
        date: "2025.03.10",
        link: "https://example.com/kau-research.pdf",
      },
    ]);
  }, []);

  const filtered = mediaItems.filter((m) =>
    m.title.toLowerCase().includes(searchKeyword.trim().toLowerCase())
  );

  return (
    <Container>
      <PageTitle>홍보자료</PageTitle>

      <SearchBarWrapper>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button>
          <FaSearch />
        </button>
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
                <td>
                  <Link
                    to={`/community/media/${m.id}`}
                    style={{ color: "#002870", textDecoration: "underline" }}
                  >
                    {m.title}
                  </Link>
                </td>
                <td style={{ textAlign: "center" }}>{m.date}</td>
                <td style={{ textAlign: "center" }}>
                  <a href={m.link} target="_blank" rel="noreferrer">
                    <FaDownload style={{ marginRight: "4px" }} />
                    다운로드
                  </a>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                    color: "#555",
                  }}
                >
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
    </Container>
  );
}
