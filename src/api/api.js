// src/api/api.js

import axios from "axios";

// ───────────────────────────────────────────────────────────────────────
// Axios 인스턴스 생성
// baseURL을 “/api” 까지 포함하여 설정했습니다.
// (즉, 실제 요청 URL은
//   http://13.125.148.30:8080/api/…
// 형태가 됩니다.)
// ───────────────────────────────────────────────────────────────────────
const API_BASE_URL = "http://13.125.148.30:8080/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ───────────────────────────────────────────────────────────────────────
// 1) 공통 인증 토큰 세팅 함수
//    로그인 후 받은 JWT 토큰을 다음과 같이 설정하면,
//    이후 모든 요청에 “Authorization: Bearer <token>” 헤더가 자동으로 붙습니다.
// ───────────────────────────────────────────────────────────────────────
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

// ───────────────────────────────────────────────────────────────────────
// 2) QnA(문의사항) 관련 API
//    - GET    /api/qna            : 목록 조회 (page, size는 선택적 쿼리 파라미터)
//    - GET    /api/qna/{id}       : 상세 조회
//    - POST   /api/qna            : 문의 작성 (body: { title, content })
//    - PUT    /api/qna/{id}       : 문의 수정 (body: { title, content })
//    - DELETE /api/qna/{id}       : 문의 삭제
//    - PUT    /api/qna/{id}/answer: 문의 답변 작성 (body: { answer })
// ───────────────────────────────────────────────────────────────────────

// QnA 목록 조회 (page, size를 인자로 전달하지 않으면 서버 기본값(0,10)이 적용됩니다)
export function getQnaList(page = 0, size = 10) {
  return api.get("/qna", {
    params: { page, size },
  });
}

// QnA 상세 조회
export function getQnaDetail(id) {
  return api.get(`/qna/${id}`);
}

// QnA 작성
// qnaData: { title: string, content: string }
export function createQna(qnaData) {
  return api.post("/qna", qnaData);
}

// QnA 수정
// qnaData: { title: string, content: string }
export function updateQna(id, qnaData) {
  return api.put(`/qna/${id}`, qnaData);
}

// QnA 삭제
export function deleteQna(id) {
  return api.delete(`/qna/${id}`);
}

// QnA 답변 작성
// answerData: { answer: string }
export function answerQna(id, answerData) {
  return api.put(`/qna/${id}/answer`, answerData);
}

// ───────────────────────────────────────────────────────────────────────
// 3) 회원가입(Signup) / 로그인(Login) API
//    - POST /api/signup   : 회원가입 (body: { email, password })
//    - POST /api/login    : 로그인   (body: { email, password })
// ───────────────────────────────────────────────────────────────────────

// 회원가입
// signupData: { email: string, password: string }
export function signup(signupData) {
  return api.post("/signup", signupData);
}

// 로그인
// loginData: { email: string, password: string }
export function login(loginData) {
  return api.post("/login", loginData);
}

// ───────────────────────────────────────────────────────────────────────
// 4) 공지사항(Notice) 관련 API
//    - GET    /api/notices            : 목록 조회 (page, size 쿼리)
//    - GET    /api/notices/{id}       : 상세 조회
//    - POST   /api/notices            : 공지 등록 (body: { title, content })
//    - PUT    /api/notices/{id}       : 공지 수정 (body: { title, content })
//    - DELETE /api/notices/{id}       : 공지 삭제
// ───────────────────────────────────────────────────────────────────────

// 공지사항 목록 조회 (page, size 기본값 0,10)
export function getNoticeList(page = 0, size = 10) {
  return api.get("/notices", {
    params: { page, size },
  });
}

// 공지사항 상세 조회
export function getNoticeDetail(id) {
  return api.get(`/notices/${id}`);
}

// 공지사항 등록
// noticeData: { title: string, content: string }
export function createNotice(noticeData) {
  return api.post("/notices", noticeData);
}

// 공지사항 수정
// noticeData: { title: string, content: string }
export function updateNotice(id, noticeData) {
  return api.put(`/notices/${id}`, noticeData);
}

// 공지사항 삭제
export function deleteNotice(id) {
  return api.delete(`/notices/${id}`);
}

// ───────────────────────────────────────────────────────────────────────
// 5) 챗봇(Chatbot) 관련 API
//    - POST /api/chatbot/question : 챗봇에 질문 (body: { question })
//      응답: { answer: string }
// ───────────────────────────────────────────────────────────────────────

// 챗봇에 질문 보내기
// questionData: { question: string }
export function askChatbot(questionData) {
  return api.post("/chatbot/question", questionData);
}

// ───────────────────────────────────────────────────────────────────────
// 6) 기타(추가할 엔드포인트가 있다면 여기에 작성)
//    예: 프로그램 목록 조회, 댓글 CRUD, 파일 업로드 등
// ───────────────────────────────────────────────────────────────────────
// export function getProgramList(page = 0, size = 10) {
//   return api.get("/programs", { params: { page, size } });
// }

// ───────────────────────────────────────────────────────────────────────
// 7) 기본적으로 Axios 인스턴스도 내보냅니다.
//    필요하다면 직접 api.get/post/put/delete(...)를 사용할 수 있습니다.
// ───────────────────────────────────────────────────────────────────────
export default api;
