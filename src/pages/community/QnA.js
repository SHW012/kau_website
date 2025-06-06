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
      {
        id: 2,
        title: "Q. 질문 예시 2",
        content: "다른 내용입니다.",
        answer: null,
      },
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

        {/* QnA 작성 폼 */}
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

        {/* QnA 리스트 */}
        <ListWrapper>
          {items.map((q) => (
            <li key={q.id}>
              <h3>{q.title}</h3>
              <p>{q.content}</p>
              {q.answer && <p className="answer">{q.answer}</p>}
            </li>
          ))}
        </ListWrapper>
      </ContentArea>
    </PageWrapper>
  );
}
