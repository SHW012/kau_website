// src/api/api.js

import axios from "axios";

const API_BASE_URL = "http://13.125.148.30:8080/api";

// ✅ Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // ✅ 인증 정보 쿠키 포함 허용
});

// ✅ JWT 토큰을 Axios Header에 붙이는 함수
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("✅ [api.js] Authorization 헤더 설정 완료:", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    console.warn("🧹 [api.js] Authorization 헤더 제거됨");
  }
}

// ─── QnA ───────────────────────────────────────────────────────────────
export function getQnaList(page = 0, size = 10) {
  return api.get("/qna", { params: { page, size } });
}
export function getQnaDetail(id) {
  return api.get(`/qna/${id}`);
}
export function createQna(qnaData) {
  return api.post("/qna", qnaData);
}
export function updateQna(id, qnaData) {
  return api.put(`/qna/${id}`, qnaData);
}
export function deleteQna(id) {
  return api.delete(`/qna/${id}`);
}
export function answerQna(id, answerData) {
  return api.put(`/qna/${id}/answer`, answerData);
}

// ─── 회원가입/로그인 ───────────────────────────────────────────────────
export function signup(signupData) {
  return api.post("/signup", signupData);
}
export function login(loginData) {
  return api.post("/login", loginData);
}

// ─── 공지사항 ─────────────────────────────────────────────────────────
export function getNoticeList(page = 0, size = 10) {
  return api.get("/notices", { params: { page, size } });
}
export function getNoticeDetail(id) {
  return api.get(`/notices/${id}`);
}
export function createNotice(noticeData) {
  return api.post("/notices", noticeData);
}
export function updateNotice(id, noticeData) {
  return api.put(`/notices/${id}`, noticeData);
}
export function deleteNotice(id) {
  return api.delete(`/notices/${id}`);
}

// ─── 챗봇 ─────────────────────────────────────────────────────────────
export function askChatbot(questionData) {
  return api.post("/chatbot/question", questionData);
}

export default api;
