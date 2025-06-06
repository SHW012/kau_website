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
import { getNoticeList } from "../../api/api";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  // 페이지 로딩 시, 또는 검색 버튼 클릭 시 목록을 가져오는 함수
  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      try {
        // 디버깅: 호출 직전 로그
        console.log("🚀 [Notice] getNoticeList 호출 시작 (page:0, size:100)");
        const res = await getNoticeList(0, 100);
        console.log("✅ [Notice] getNoticeList 응답 데이터:", res.data);
        // 보통 Spring Boot 페이징 응답 형태는 { content: [...], totalPages: X, ... }
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

  // “검색” 버튼 클릭 시에도 목록을 다시 불러오기 위해 버튼에 연결
  const handleSearchClick = () => {
    // (원한다면 서버 측 검색 API가 따로 있다면 page/keyword 파라미터로 요청하도록 수정)
    // 여기서는 클라이언트 필터링+전체 목록 재요청 조합
    setSearchKeyword(searchKeyword.trim());
  };

  // 클라이언트 측 필터: 제목에 검색어가 포함된 것만 표시
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
      </ContentArea>
    </PageWrapper>
  );
}
