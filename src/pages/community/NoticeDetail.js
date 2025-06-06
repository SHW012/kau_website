import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getNotice } from "../../api";

export default function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotice(id)
      .then(setNotice)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <div>오류: {error}</div>;
  if (!notice) return <div>Loading...</div>;

  return (
    <div>
      <h2>{notice.title}</h2>
      <p>{notice.content}</p>
      <Link to="/community/notice">목록으로</Link>
    </div>
  );
}
