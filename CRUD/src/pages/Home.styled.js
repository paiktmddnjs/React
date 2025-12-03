import { Link } from "react-router-dom";
import styled from "styled-components";

// 전역 폰트 설정 (더 부드러운 느낌을 위해)
export const Container = styled.div`
  width: 100vw;
  // height: 100vh; // 뷰포트 전체 높이를 사용하도록 수정 (100vw는 오타로 보입니다)
  min-height: 100vh; // 내용이 적을 때도 최소한의 높이를 유지
  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  background-color: #FFF8E1; /* 밝은 크림색/아이보리색 계열 (따뜻한 배경) */
  padding: 30px 20px; /* 상하 여백 추가 */
  box-sizing: border-box; /* 패딩이 너비/높이에 포함되도록 설정 */
`;

// 메인 제목 스타일
export const Title = styled.h1`
  font-size: 48px;
  color: #FF5722; /* 주황색 계열 (음식/식욕을 돋우는 색) */
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
`;

// 설명 텍스트 스타일
export const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  color: #795548; /* 갈색 계열 (차분하고 따뜻한 느낌) */
  font-style: italic; /* 이탤릭체로 강조 */
`;

// 버튼 그룹 스타일
export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 버튼 간격 증가 */
`;

// Link 기반의 버튼 스타일 (글 목록, 글 작성)
export const Button = styled(Link)`
  padding: 12px 25px;
  background-color: #4CAF50; /* 초록색 계열 (신선하고 건강한 느낌) */
  color: white;
  text-decoration: none;
  border-radius: 8px; /* 모서리를 둥글게 */
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease; /* 호버 효과 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */

  &:hover {
    background-color: #66BB6A; /* 마우스 오버 시 색상 변경 */
    transform: translateY(-2px); /* 살짝 위로 이동 */
  }
`;

// 로그아웃 버튼 스타일을 위한 별도 정의 (HTML button 태그)
export const LogoutButton = styled.button`
  padding: 12px 25px;
  background-color: #F44336; /* 빨간색 계열 (로그아웃 강조) */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #E57373;
    transform: translateY(-2px);
  }
`;