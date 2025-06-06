import React, { useState, useRef, useEffect } from "react";
import {
  ChatbotButton,
  ChatWindowWrapper,
  ChatWindowHeader,
  ChatWindowBody,
  ChatMessage,
  ChatInputWrapper,
  ChatInput,
  SendButton,
  CloseButton,
} from "../styles/Chatbot.styles.js";

// API 함수 임포트
import { askChatbot } from "../api/api";

export default function Chatbot() {
  // 채팅창 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);

  // 대화 리스트: { sender: "user"|"bot", text: "내용" }
  const [messages, setMessages] = useState([]);

  // 사용자가 현재 입력 중인 텍스트
  const [inputValue, setInputValue] = useState("");

  // 메시지 영역 스크롤 자동으로 맨 아래로 내려주기 위한 ref
  const messagesEndRef = useRef(null);

  // 메시지 영역이 업데이트될 때마다 스크롤을 아래로 자동 이동
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // 채팅창 토글
  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  // “보내기” 버튼 클릭 또는 Enter 키 누를 때 호출
  const handleSend = async () => {
    const trimmed = inputValue.trim();
    if (trimmed === "") return;

    // 1) 사용자가 보낸 메시지 추가
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInputValue("");

    // 디버깅: 사용자 메시지 직후 콘솔 로그
    console.log("📤 [Chatbot] User message:", trimmed);

    // 2) API 호출하여 봇 응답 받아오기
    try {
      // 디버깅: 요청 보내기 직전 로그
      console.log("🌐 [Chatbot] askChatbot 호출 시작, payload:", {
        question: trimmed,
      });

      const res = await askChatbot({ question: trimmed });
      console.log("✅ [Chatbot] askChatbot 응답:", res);

      // 가정: 서버가 { answer: "..." } 형태로 응답한다고 가정
      const botReply = res.data.answer ?? "서버 응답이 없습니다.";

      // 3) 봇 메시지 추가
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);

      // 디버깅: 봇 응답 콘솔 로그
      console.log("📥 [Chatbot] Bot reply:", botReply);
    } catch (err) {
      console.error("❌ [Chatbot] askChatbot 에러:", err);

      // 에러가 났을 때 보여줄 메시지
      const errorMsg = "죄송해요, 응답을 가져오지 못했어요.";
      setMessages((prev) => [...prev, { sender: "bot", text: errorMsg }]);
    }
  };

  // Enter 키로도 전송할 수 있게 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* 하단 우측 고정 챗봇 버튼 */}
      <ChatbotButton onClick={toggleChat}>{isOpen ? "✖️" : "💬"}</ChatbotButton>

      {/* 채팅창: isOpen=true일 때만 표시 */}
      {isOpen && (
        <ChatWindowWrapper>
          {/* 헤더 */}
          <ChatWindowHeader>
            <span>챗봇</span>
            <CloseButton onClick={toggleChat}>✖️</CloseButton>
          </ChatWindowHeader>

          {/* 대화 내용 */}
          <ChatWindowBody>
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} $isUser={msg.sender === "user"}>
                {msg.text}
              </ChatMessage>
            ))}
            <div ref={messagesEndRef} />
          </ChatWindowBody>

          {/* 입력창 + 보내기 버튼 */}
          <ChatInputWrapper>
            <ChatInput
              type="text"
              placeholder="메시지를 입력하세요..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <SendButton onClick={handleSend}>전송</SendButton>
          </ChatInputWrapper>
        </ChatWindowWrapper>
      )}
    </>
  );
}
