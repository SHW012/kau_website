import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  DetailBox,
} from "../../styles/NoticeDetail.styles.js";
import { getNoticeDetail } from "../../api/api";

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
        <PageTitle>공지사항 상세</PageTitle>

        {loading ? (
          <div>로딩 중...</div>
        ) : !notice ? (
          <>
            <div>해당 공지를 찾을 수 없습니다.</div>
            <Link
              to="/community/notice"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              목록으로 돌아가기
            </Link>
          </>
        ) : (
          <>
            <PageTitle>{notice.title}</PageTitle>
            <DetailBox>
              <p>{notice.content}</p>
            </DetailBox>
            <Link
              to="/community/notice"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              목록으로 돌아가기
            </Link>
          </>
        )}
      </ContentArea>
    </PageWrapper>
  );
}
