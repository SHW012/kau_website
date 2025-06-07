// src/pages/community/NoticeCreate.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNotice, getNoticeDetail, updateNotice } from "../../api/api";

// 기존 스타일들
import {
  Container,
  PageTitle,
  ActionButton,
} from "../../styles/Notice.styles.js";
import { FormWrapper } from "../../styles/NoticeCreate.styles.js";

export default function NoticeCreate() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에 id가 있으면 수정 모드
  const isEdit = !!id;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // 수정 모드일 경우 기존 공지 데이터 불러오기
  useEffect(() => {
    if (isEdit) {
      (async () => {
        try {
          const res = await getNoticeDetail(id);
          setTitle(res.data.title);
          setContent(res.data.content);
        } catch (err) {
          alert("공지사항을 불러오는 중 오류가 발생했습니다.");
          navigate("/community/notice");
        }
      })();
    }
  }, [id, isEdit, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    setSubmitting(true);
    try {
      if (isEdit) {
        await updateNotice(id, {
          title: title.trim(),
          content: content.trim(),
        });
        alert("공지 수정이 완료되었습니다.");
      } else {
        await createNotice({
          title: title.trim(),
          content: content.trim(),
        });
        alert("공지 작성이 완료되었습니다.");
      }
      navigate("/community/notice");
    } catch (err) {
      console.error(err);
      alert(`공지 ${isEdit ? "수정" : "작성"} 중 오류가 발생했습니다.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <PageTitle>{isEdit ? "공지 수정" : "공지 작성"}</PageTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="공지 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
        />
        <textarea
          rows="8"
          placeholder="공지 내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={submitting}
        />
        <ActionButton type="submit" disabled={submitting}>
          {submitting
            ? isEdit
              ? "수정 중…"
              : "등록 중…"
            : isEdit
            ? "수정 완료"
            : "등록하기"}
        </ActionButton>
      </FormWrapper>
    </Container>
  );
}
