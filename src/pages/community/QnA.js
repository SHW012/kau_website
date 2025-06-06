// src/pages/community/QnA.jsx
import React, { useState, useEffect } from "react";

export default function QnA() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // 초기 더미 QnA 데이터
    setItems([
      {
        id: 1,
        title: "Q. 질문 예시 1",
        content: "내용입니다.",
        answer: "A. 답변입니다.",
      },
      { id: 2, title: "Q. 질문 예시 2", content: "다른 내용입니다." },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQna = {
      id: Date.now(),
      title,
      content,
      answer: null,
    };
    setItems([newQna, ...items]);
    setTitle("");
    setContent("");
    alert("QnA 등록됨 (API 미연동)");
  };

  return (
    <div>
      <h2>QnA</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
          required
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {items.map((q) => (
          <li key={q.id}>
            <h3>{q.title}</h3>
            <p>{q.content}</p>
            {q.answer && <p>답변: {q.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
