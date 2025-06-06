// src/pages/community/Notice.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // 더미 데이터 로드 (처음 한 번만)
  useEffect(() => {
    setItems([
      { id: 1, title: "공지사항 예시 1", content: "내용입니다." },
      { id: 2, title: "공지사항 예시 2", content: "다른 내용입니다." },
    ]);
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    const newNotice = {
      id: Date.now(),
      title,
      content,
    };
    setItems([newNotice, ...items]);
    setTitle("");
    setContent("");
    alert("공지 등록됨 (API 미연동)");
  };

  const handleDelete = (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    setItems(items.filter((item) => item.id !== id));
    alert("삭제됨 (API 미연동)");
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditContent(item.content);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updated = items.map((item) =>
      item.id === editingId
        ? { ...item, title: editTitle, content: editContent }
        : item
    );
    setItems(updated);
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
    alert("수정됨 (API 미연동)");
  };

  return (
    <div>
      <h2>공지사항</h2>
      <form onSubmit={editingId ? handleUpdate : handleCreate}>
        <input
          value={editingId ? editTitle : title}
          onChange={(e) =>
            editingId ? setEditTitle(e.target.value) : setTitle(e.target.value)
          }
          placeholder="제목"
          required
        />
        <textarea
          value={editingId ? editContent : content}
          onChange={(e) =>
            editingId
              ? setEditContent(e.target.value)
              : setContent(e.target.value)
          }
          placeholder="내용"
          required
        />
        <button type="submit">{editingId ? "수정" : "등록"}</button>
        {editingId && (
          <button type="button" onClick={() => setEditingId(null)}>
            취소
          </button>
        )}
      </form>
      <ul>
        {items.map((n) => (
          <li key={n.id}>
            <Link to={`/community/notice/${n.id}`}>
              <h3>{n.title}</h3>
            </Link>
            <p>{n.content}</p>
            <button onClick={() => startEdit(n)}>수정</button>
            <button onClick={() => handleDelete(n.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
