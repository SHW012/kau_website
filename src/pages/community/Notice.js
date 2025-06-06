// src/pages/community/Notice.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getNoticeList,
  createNotice,
  updateNotice,
  deleteNotice,
} from "../../api/api";

export default function Notice() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const loadItems = () => {
    getNoticeList()
      .then((res) => setItems(res.content || []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createNotice({ title, content });
      setTitle("");
      setContent("");
      loadItems();
    } catch (err) {
      console.error(err);
      alert("공지 등록 실패");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    try {
      await deleteNotice(id);
      loadItems();
    } catch (err) {
      console.error(err);
      alert("삭제 실패");
    }
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditTitle(item.title);
    setEditContent(item.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateNotice(editingId, { title: editTitle, content: editContent });
      setEditingId(null);
      setEditTitle("");
      setEditContent("");
      loadItems();
    } catch (err) {
      console.error(err);
      alert("수정 실패");
    }
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
