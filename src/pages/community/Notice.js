// src/pages/community/Notice.jsx
import React, { useEffect, useState } from "react";
import { getNoticeList } from "../../api";

export default function Notice() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getNoticeList()
      .then((res) => setItems(res.content || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>공지사항</h2>
      <ul>
        {items.map((n) => (
          <li key={n.id}>
            <h3>{n.title}</h3>
            <p>{n.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
