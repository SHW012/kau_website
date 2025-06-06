import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  FormWrapper,
  ListWrapper,
} from "../../styles/QnA.styles.js";

// API 함수 임포트
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

  // 수정 모드 관련 상태
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // 답변 모드 관련 상태
  const [answeringId, setAnsweringId] = useState(null);
  const [answerText, setAnswerText] = useState("");

  // QnA 목록 가져오기
  const fetchList = async () => {
    try {
      const res = await getQnaList(0, 100);
      console.log("🔍 getQnaList 응답:", res);
      const list = res.data.content ?? [];
      setItems(list);
    } catch (err) {
      console.error("❌ getQnaList 에러:", err);
      alert("QnA 목록을 불러오는 중 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // 신규 QnA 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    const newQna = {
      title: title.trim(),
      content: content.trim(),
    };

    try {
      const res = await createQna(newQna);
      console.log("✅ createQna 성공:", res);
      setTitle("");
      setContent("");
      fetchList();
    } catch (err) {
      console.error("❌ createQna 에러:", err);
      alert("QnA 등록 중 오류가 발생했습니다.");
    }
  };

  // QnA 삭제
  const handleDelete = async (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await deleteQna(id);
      console.log("✅ deleteQna 성공:", res);
      fetchList();
    } catch (err) {
      console.error("❌ deleteQna 에러:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // 수정 모드 진입
  const enterEditMode = (qna) => {
    setEditingId(qna.id);
    setEditTitle(qna.title);
    setEditContent(qna.content);
  };

  // 수정 모드 취소
  const cancelEditMode = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  // QnA 수정 저장
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editTitle.trim() || !editContent.trim()) {
      alert("수정할 제목과 내용을 모두 입력해주세요.");
      return;
    }

    const updatedData = {
      title: editTitle.trim(),
      content: editContent.trim(),
    };

    try {
      const res = await updateQna(editingId, updatedData);
      console.log("✅ updateQna 성공:", res);
      cancelEditMode();
      fetchList();
    } catch (err) {
      console.error("❌ updateQna 에러:", err);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  // 답변 모드 진입
  const enterAnswerMode = (qna) => {
    setAnsweringId(qna.id);
    setAnswerText(qna.answer ?? "");
  };

  // 답변 저장
  const handleAnswer = async (e) => {
    e.preventDefault();
    if (!answerText.trim()) {
      alert("답변 내용을 입력해주세요.");
      return;
    }

    const answerData = { answer: answerText.trim() };

    try {
      const res = await answerQna(answeringId, answerData);
      console.log("✅ answerQna 성공:", res);
      setAnsweringId(null);
      setAnswerText("");
      fetchList();
    } catch (err) {
      console.error("❌ answerQna 에러:", err);
      alert("답변 저장 중 오류가 발생했습니다.");
    }
  };

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
        <PageTitle>QnA</PageTitle>

        {/** 신규 등록 폼 **/}
        {!editingId && !answeringId && (
          <FormWrapper onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              rows="4"
              placeholder="내용"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <button type="submit">등록</button>
          </FormWrapper>
        )}

        {/** 수정 모드 폼 **/}
        {editingId && (
          <FormWrapper onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="수정할 제목"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />
            <textarea
              rows="4"
              placeholder="수정할 내용"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              required
            />
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button type="submit">수정 저장</button>
              <button type="button" onClick={cancelEditMode}>
                취소
              </button>
            </div>
          </FormWrapper>
        )}

        {/** 답변 모드 폼 **/}
        {answeringId && (
          <FormWrapper onSubmit={handleAnswer}>
            <textarea
              rows="4"
              placeholder="답변을 입력하세요"
              value={answerText}
              onChange={(e) => setAnswerText(e.target.value)}
              required
            />
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button type="submit">답변 저장</button>
              <button
                type="button"
                onClick={() => {
                  setAnsweringId(null);
                  setAnswerText("");
                }}
              >
                취소
              </button>
            </div>
          </FormWrapper>
        )}

        {/** QnA 리스트 **/}
        <ListWrapper>
          {items.length === 0 && (
            <li style={{ textAlign: "center", padding: "1rem", color: "#555" }}>
              등록된 QnA가 없습니다.
            </li>
          )}

          {items.map((q) => (
            <li key={q.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ margin: 0 }}>{q.title}</h3>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button onClick={() => enterEditMode(q)}>수정</button>
                  <button onClick={() => handleDelete(q.id)}>삭제</button>
                  {!q.answer && (
                    <button onClick={() => enterAnswerMode(q)}>답변</button>
                  )}
                </div>
              </div>
              <p style={{ margin: "0.5rem 0" }}>{q.content}</p>
              {q.answer && (
                <p className="answer" style={{ margin: "0.5rem 0" }}>
                  {q.answer}
                </p>
              )}
            </li>
          ))}
        </ListWrapper>
      </ContentArea>
    </PageWrapper>
  );
}
