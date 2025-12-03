// 경로 상수 : 라우팅 경로를 한 곳에서 관리하기 위해 만든것이다.
export const ROUTES = {
  HOME: "/",               // 홈
  LOGIN: "/login",         // 로그인
  REGISTER: "/register",   // 회원가입
  BOARD: "/board",         // 글 목록
  BOARD_DETAIL: (id) => `/board/${id}`,   // 글 상세
  WRITE: "/write",         // 글 작성
  WRITE_DETAIL: (id) => `/write/${id}`,   // 글 작성 / 수정
  EDIT: (id) => `/edit/${id}`,            // 글 수정
};
