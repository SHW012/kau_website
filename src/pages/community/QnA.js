// src/pages/community/QnA.jsx

import React, { useEffect, useState } from "react";
import {
  Container,
  PageTitle,
  FormWrapper,
  ListWrapper,
  ActionButton,
} from "../../styles/QnA.styles.js";
import {
  getQnaList,
  createQna,
  updateQna,
  deleteQna,
  answerQna,
} from "../../api/api";

export default function QnA() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [answeringId, setAnsweringId] = useState(null);
  const [answerText, setAnswerText] = useState("");

  const userEmail = localStorage.getItem("userEmail");
  const isAdmin = userEmail === "admin@gmail.com";

  // 목록 불러오기
  useEffect(() => {
    async function fetchList() {
      try {
        const res = await getQnaList(0, 100);
        setItems(res.data.content || []);
      } catch (e) {
        alert("목록 로드 실패");
      }
    }
    fetchList();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return alert("제목/내용 입력");
    try {
      await createQna({ title, content });
      setTitle("");
      setContent("");
      // 재조회
      const res = await getQnaList(0, 100);
      setItems(res.data.content || []);
    } catch {
      alert("등록 실패");
    }
  };

  const startEdit = (q) => {
    setEditingId(q.id);
    setEditTitle(q.title);
    setEditContent(q.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateQna(editingId, { title: editTitle, content: editContent });
      setEditingId(null);
      const res = await getQnaList(0, 100);
      setItems(res.data.content || []);
    } catch {
      alert("수정 실패");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    try {
      await deleteQna(id);
      const res = await getQnaList(0, 100);
      setItems(res.data.content || []);
    } catch {
      alert("삭제 실패");
    }
  };

  const startAnswer = (q) => {
    setAnsweringId(q.id);
    setAnswerText(q.answer || "");
  };

  const handleAnswer = async (e) => {
    e.preventDefault();
    if (!answerText.trim()) return alert("답변 입력");
    try {
      await answerQna(answeringId, { answer: answerText });
      setAnsweringId(null);
      const res = await getQnaList(0, 100);
      setItems(res.data.content || []);
    } catch {
      alert("답변 실패");
    }
  };

  return (
    <Container>
      <PageTitle>QnA</PageTitle>

      {!editingId && !answeringId && (
        <FormWrapper onSubmit={handleCreate}>
          <input
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ActionButton type="submit">등록</ActionButton>
        </FormWrapper>
      )}

      {editingId && (
        <FormWrapper onSubmit={handleUpdate}>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <ActionButton type="submit">저장</ActionButton>
            <ActionButton onClick={() => setEditingId(null)}>취소</ActionButton>
          </div>
        </FormWrapper>
      )}

      {answeringId && isAdmin && (
        <FormWrapper onSubmit={handleAnswer}>
          <textarea
            placeholder="답변 입력"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <ActionButton type="submit">답변 저장</ActionButton>
            <ActionButton onClick={() => setAnsweringId(null)}>
              취소
            </ActionButton>
          </div>
        </FormWrapper>
      )}

      <ListWrapper>
        {items.length === 0 && <p>등록된 QnA가 없습니다.</p>}
        {items.map((q) => (
          <li key={q.id}>
            <h3>{q.title}</h3>
            <p>{q.content}</p>
            {q.answer && <p className="answer">🗨️ 답변: {q.answer}</p>}
            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
              <ActionButton onClick={() => startEdit(q)}>수정</ActionButton>
              <ActionButton danger onClick={() => handleDelete(q.id)}>
                삭제
              </ActionButton>
              {isAdmin && !q.answer && (
                <ActionButton onClick={() => startAnswer(q)}>답변</ActionButton>
              )}
            </div>
          </li>
        ))}
      </ListWrapper>
    </Container>
  );
}
