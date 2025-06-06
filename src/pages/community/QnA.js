// src/pages/community/QnA.jsx
import React, { useEffect, useState } from "react";
import { getQnaList, postQna } from "../../api/api";

export default function QnA() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loadItems = () => {
    getQnaList()
      .then((res) => setItems(res.content || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postQna({ title, content });
      setTitle("");
      setContent("");
      loadItems();
    } catch (err) {
      console.error(err);
      alert("문의 등록 실패");
    }
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
