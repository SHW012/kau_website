// src/pages/community/Notice.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  PageTitle,
  SearchBarWrapper,
  TableWrapper,
  ActionButton,
} from "../../styles/Notice.styles.js";
import { getNoticeList, deleteNotice } from "../../api/api";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 관리자 여부: 로컬스토리지에 저장한 userEmail 에서 판단
  const userEmail = localStorage.getItem("userEmail");
  const isAdmin = userEmail === "admin@gmail.com";

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await getNoticeList(0, 100);
      setItems(res.data.content || []);
    } catch (err) {
      alert("공지사항을 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteNotice(id);
      fetchList();
    } catch (err) {
      alert(
        err.response?.status === 403
          ? "권한이 없습니다."
          : "삭제 중 오류가 발생했습니다."
      );
    }
  };

  const filteredItems = items.filter((item) =>
    item.title.includes(searchKeyword.trim())
  );

  return (
    <Container>
      <PageTitle>공지사항</PageTitle>

      {/* 관리자는 새 공지 작성 버튼 */}
      {isAdmin && (
        <ActionButton onClick={() => navigate("/community/notice/new")}>
          새 공지 작성
        </ActionButton>
      )}

      <SearchBarWrapper>
        <input
          type="text"
          placeholder="검색어를 입력해 주세요"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={() => setSearchKeyword(searchKeyword.trim())}>
          🔍
        </button>
      </SearchBarWrapper>

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>No.</th>
                <th>Title</th>
                <th style={{ width: "15%", textAlign: "center" }}>Date</th>
                {isAdmin && <th style={{ width: "15%" }}>Actions</th>}
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
                  {isAdmin && (
                    <td style={{ textAlign: "center" }}>
                      <ActionButton
                        onClick={() => navigate(`/community/notice/${item.id}`)}
                      >
                        수정
                      </ActionButton>
                      <ActionButton
                        danger
                        onClick={() => handleDelete(item.id)}
                      >
                        삭제
                      </ActionButton>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      )}
    </Container>
  );
}
