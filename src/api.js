const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://13.125.148.30:8080';

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include',
    ...options,
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || response.statusText);
  }
  if (response.status === 204) return null;
  return response.json();
}

export const getQnaList = (page = 0, size = 10) =>
  apiRequest(`/api/qna?page=${page}&size=${size}`);
export const getQna = (id) => apiRequest(`/api/qna/${id}`);
export const postQna = (data) =>
  apiRequest('/api/qna', { method: 'POST', body: JSON.stringify(data) });
export const updateQna = (id, data) =>
  apiRequest(`/api/qna/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteQna = (id) =>
  apiRequest(`/api/qna/${id}`, { method: 'DELETE' });
export const answerQna = (id, answer) =>
  apiRequest(`/api/qna/${id}/answer`, {
    method: 'PUT',
    body: JSON.stringify({ answer }),
  });

export const signup = (data) =>
  apiRequest('/api/signup', { method: 'POST', body: JSON.stringify(data) });
export const login = (data) =>
  apiRequest('/api/login', { method: 'POST', body: JSON.stringify(data) });

export const getNoticeList = (page = 0, size = 10) =>
  apiRequest(`/api/notices?page=${page}&size=${size}`);
export const getNotice = (id) => apiRequest(`/api/notices/${id}`);
export const createNotice = (data) =>
  apiRequest('/api/notices', { method: 'POST', body: JSON.stringify(data) });
export const updateNotice = (id, data) =>
  apiRequest(`/api/notices/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteNotice = (id) =>
  apiRequest(`/api/notices/${id}`, { method: 'DELETE' });

export const askChatbot = (question) =>
  apiRequest('/api/chatbot/question', {
    method: 'POST',
    body: JSON.stringify({ question }),
  });

export default apiRequest;
