import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  DetailBox,
} from "../../styles/NoticeDetail.styles.js";

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  const dummyNotices = [
    { id: 1, title: "공지사항 예시 1", content: "내용입니다." },
    { id: 2, title: "공지사항 예시 2", content: "다른 내용입니다." },
  ];

  useEffect(() => {
    const found = dummyNotices.find((item) => item.id === Number(id));
    setNotice(found || null);
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
        {!notice ? (
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
