import { Container, Title, Desc, ButtonGroup, Button } from "./Home.styled";

function Home() {
  return (
    <Container>
      <Title>🎮 게임 게시판 🎮</Title>

      <Desc>간단한 CRUD 기능을 제공하는 게시판 예제입니다.</Desc>

      <ButtonGroup>
        <Button to="board">글 목록 보기</Button>
        <Button to="write">글 작성하기</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Home;
