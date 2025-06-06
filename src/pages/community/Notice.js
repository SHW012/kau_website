// src/pages/community/Notice.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
} from "../../styles/Notice.styles.js";
import { getNoticeList } from "../../api/api";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  // 페이지 로딩 시 목록을 가져오는 함수
  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        console.log("🚀 [Notice] getNoticeList 호출 시작 (page:0, size:100)");
        const res = await getNoticeList(0, 100);
        console.log("✅ [Notice] getNoticeList 응답 데이터:", res.data);
        const list = res.data.content ?? [];
        setItems(list);
      } catch (err) {
        console.error("❌ [Notice] getNoticeList 에러:", err);
        alert("공지사항 목록을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, []);

  // 검색 버튼 클릭 시 검색어 적용
  const handleSearchClick = () => {
    setSearchKeyword(searchKeyword.trim());
  };

  // 제목에 검색어가 포함된 항목만 필터링
  const filteredItems = items.filter((item) =>
    item.title.includes(searchKeyword)
  );

  return (
    <Container>
      <PageTitle>공지사항</PageTitle>

      {/* 검색바 */}
      <SearchBarWrapper>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearchClick}>🔍</button>
      </SearchBarWrapper>

      {loading ? (
        <div>로딩 중...</div>
      ) : (
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
                    <Link
                      to={`/community/notice/${item.id}`}
                      style={{ color: "#002870", textDecoration: "none" }}
                    >
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
                    style={{
                      textAlign: "center",
                      padding: "1rem",
                      color: "#555",
                    }}
                  >
                    {items.length === 0
                      ? "등록된 공지사항이 없습니다."
                      : "검색 결과가 없습니다."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </TableWrapper>
      )}
    </Container>
  );
}
