import { Container, Title, Desc, ButtonGroup, Button, LogoutButton } from "./Home.styled"; // LogoutButton 추가
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, logout } = useAuth();
  
  return (
    <Container>

      {/* 사용자 환영 메시지 스타일 개선 */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ 
          color: "#00796B", /* 진한 청록색 */
          fontSize: "24px",
          backgroundColor: "#B2DFDB", /* 연한 배경 */
          padding: "10px",
          borderRadius: "10px",
          display: "inline-block"
        }}>
           **{user.id}**님 환영합니다!
        </h3>
      </div>

      <Title> 음식 리뷰 게시판 🍽️</Title>

      <Desc>음식의 평가점수를 공유하는 공간입니다!</Desc>

      <ButtonGroup>
        <Button to="board">글 목록 보기</Button>
        <Button to="best">BEST 3!</Button>
        {/* LogoutButton 적용 */}
        <LogoutButton onClick={logout}>로그아웃</LogoutButton> 
      </ButtonGroup>


      <Outlet />
    </Container>
  );
}

export default Home;