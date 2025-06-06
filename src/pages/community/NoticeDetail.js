import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// 예시용 더미 데이터
const dummyNotices = [
  { id: 1, title: "공지사항 예시 1", content: "내용입니다." },
  { id: 2, title: "공지사항 예시 2", content: "다른 내용입니다." },
];

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const found = dummyNotices.find((item) => item.id === Number(id));
    setNotice(found || null);
  }, [id]);

  if (!notice) return <div>해당 공지를 찾을 수 없습니다.</div>;

  return (
    <div>
      <h2>{notice.title}</h2>
      <p>{notice.content}</p>
      <Link to="/community/notice">목록으로</Link>
    </div>
  );
}
