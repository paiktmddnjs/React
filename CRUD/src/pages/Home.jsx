import { Container, Title, Desc, ButtonGroup, Button } from "./Home.styled";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
   const { user, logout } = useAuth();
   
  return (
    <Container>

       <div>
        <h3 style={{color : "orange"}}>{user.id}님 환영합니다!</h3>
    
      </div>

      <Title>🎮 게임 게시판 🎮</Title>

      <Desc>간단한 CRUD 기능을 제공하는 게시판 예제입니다.</Desc>

      <ButtonGroup>
        <Button to="board">글 목록 보기</Button>
        <Button to="write">글 작성하기</Button>
        <button onClick={logout}>로그아웃</button>
      </ButtonGroup>


    <Outlet />
    </Container>
  );
}

export default Home;
