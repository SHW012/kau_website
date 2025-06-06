// src/pages/community/NoticeDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { getNoticeDetail } from "../../api/api";

// ────────────────────────────────────────────────────────────────────────────────
// 스타일 정의 (SideNav 관련을 모두 제거하고, ContentOnly 형태로 작성)
// ────────────────────────────────────────────────────────────────────────────────

// 페이지 전체 래퍼 (중앙 정렬, 최대 너비)
const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
`;

// 제목 스타일
const PageTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #002870; /* Pantone 294C 계열 */
  margin-bottom: 1.5rem;
`;

// 상세 내용 박스
const DetailBox = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 1.6;
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

// 목록으로 돌아가기 링크
const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #002870;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(false);

  // 상세 데이터를 가져오는 effect
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        console.log(`🚀 [NoticeDetail] getNoticeDetail 호출 시작 (id: ${id})`);
        const res = await getNoticeDetail(id);
        console.log("✅ [NoticeDetail] getNoticeDetail 응답 데이터:", res.data);
        setNotice(res.data);
      } catch (err) {
        console.error("❌ [NoticeDetail] getNoticeDetail 에러:", err);
        alert("공지사항 상세를 불러오는 중 오류가 발생했습니다.");
        setNotice(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <PageWrapper>
      <PageTitle>공지사항 상세</PageTitle>

      {loading ? (
        <div>로딩 중...</div>
      ) : !notice ? (
        <>
          <div>해당 공지를 찾을 수 없습니다.</div>
          <BackLink to="/community/notice">목록으로 돌아가기</BackLink>
        </>
      ) : (
        <>
          {/* 공지 제목 */}
          <PageTitle>{notice.title}</PageTitle>

          {/* 공지 콘텐츠 */}
          <DetailBox>
            <p>{notice.content}</p>
          </DetailBox>

          {/* 뒤로 가기 링크 */}
          <BackLink to="/community/notice">목록으로 돌아가기</BackLink>
        </>
      )}
    </PageWrapper>
  );
}
