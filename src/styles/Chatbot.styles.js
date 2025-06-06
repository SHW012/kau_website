// src/styles/Chatbot.styles.js
import styled from "styled-components";

// ────────────────────────────────────────────────────────────────────────────────
// 챗봇 고정 버튼 (하단 우측)
// ────────────────────────────────────────────────────────────────────────────────
export const ChatbotButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #002870; /* Pantone 294C */
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  z-index: 2000;

  &:hover {
    background: #1a3370;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// 채팅창 전체 래퍼 (모달 형태로 띄움, 하단 우측에 붙음)
// ────────────────────────────────────────────────────────────────────────────────
export const ChatWindowWrapper = styled.div`
  position: fixed;
  bottom: 96px; /* 버튼 위에 살짝 올라오게 */
  right: 24px;
  width: 320px;
  max-height: 480px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 2000;
`;

// ────────────────────────────────────────────────────────────────────────────────
// 챗봇 헤더: 제목 + 닫기 버튼
// ────────────────────────────────────────────────────────────────────────────────
export const ChatWindowHeader = styled.div`
  background: #002870; /* Pantone 294C */
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// ────────────────────────────────────────────────────────────────────────────────
// 채팅창 내용 영역 (스크롤 가능한 부분)
// ────────────────────────────────────────────────────────────────────────────────
export const ChatWindowBody = styled.div`
  flex: 1;
  padding: 0.75rem 0.75rem;
  overflow-y: auto;
  background: #f5f5f5;
`;

// ────────────────────────────────────────────────────────────────────────────────
// 개별 메시지 스타일 (사용자 vs 챗봇)
// ────────────────────────────────────────────────────────────────────────────────
export const ChatMessage = styled.div`
  max-width: 80%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 12px;
  background: ${(props) => (props.$isUser ? "#20b2aa" : "#e0e0e0")};
  color: ${(props) => (props.$isUser ? "#fff" : "#333")};
  align-self: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  font-size: 0.9rem;
  line-height: 1.3;
`;

// ────────────────────────────────────────────────────────────────────────────────
// 채팅 입력창 + 전송 버튼 래퍼
// ────────────────────────────────────────────────────────────────────────────────
export const ChatInputWrapper = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 0.5rem;
  background: #fff;
`;

// ────────────────────────────────────────────────────────────────────────────────
// 텍스트 입력 필드
// ────────────────────────────────────────────────────────────────────────────────
export const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #002870;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// 전송(보내기) 버튼
// ────────────────────────────────────────────────────────────────────────────────
export const SendButton = styled.button`
  margin-left: 0.5rem;
  padding: 0 1rem;
  background: #002870;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: #1a3370;
  }
`;

// ────────────────────────────────────────────────────────────────────────────────
// 닫기 버튼 (헤더 우측 X)
// ────────────────────────────────────────────────────────────────────────────────
export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;
