import { useNavigate, Link } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
import {
  Container,
  WriteBox,
  StyledLink,
  List,
  Card,
  HomeLinkWrapper
} from "./BoardList.styled";

function BoardList() {
  const { posts, deleteBoard } = useBoard();
  const navigate = useNavigate();

  return (
    <Container>
      <h1>게임 게시판 목록</h1>

      <WriteBox>
        <StyledLink to="/write">글쓰기</StyledLink>
      </WriteBox>

      <List>
        {posts.map((post) => (
          <Card key={post.id} onClick={() => navigate(`/board/${post.id}`)}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Card>
        ))}
      </List>

      <HomeLinkWrapper>
        <StyledLink to="/">홈으로 가기</StyledLink>
      </HomeLinkWrapper>
    </Container>
  );
}

export default BoardList;

