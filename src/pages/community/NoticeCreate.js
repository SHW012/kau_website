// src/pages/community/NoticeCreate.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNotice } from "../../api/api";

// 기존 스타일들
import {
  Container,
  PageTitle,
  ActionButton,
} from "../../styles/Notice.styles.js";
// 분리한 스타일 임포트
import { FormWrapper } from "../../styles/NoticeCreate.styles.js";

export default function NoticeCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    setSubmitting(true);
    try {
      await createNotice({ title: title.trim(), content: content.trim() });
      alert("공지 작성이 완료되었습니다.");
      navigate("/community/notice");
    } catch (err) {
      console.error(err);
      alert("공지 작성 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <PageTitle>새 공지 작성</PageTitle>
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
          {submitting ? "등록 중…" : "등록하기"}
        </ActionButton>
      </FormWrapper>
    </Container>
  );
}
