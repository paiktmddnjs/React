import { useNavigate } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
import {
  Container,
  WriteBox,
  StyledLink,
  List,
  Card,
  HomeLinkWrapper,
  DateText
} from "./BoardList.styled";

function BoardList() {
  const { posts } = useBoard();
  const navigate = useNavigate();

  return (
    <Container>
      <h1>🍽️ 맛집 맛평가 게시판</h1>

      <WriteBox>
        <StyledLink to="/write">글쓰기</StyledLink>
      </WriteBox>

      <List>
        {posts.map((post) => (
          <Card key={post.id} onClick={() => navigate(`/board/${post.id}`)}>
            {/* 제목 */}
            <h2 style={{ color: "#A9A9A9" }}>{post.title}</h2>

            {/* 내용 */}
            <p>{post.content}</p>

            {/* ⭐ 평점 */}
            <p style={{ fontSize: "20px", margin: 0 }}>
              {"⭐".repeat(post.score)}
            </p>

            {/* 📅 날짜 오른쪽 */}
            <DateText>{post.date}</DateText>
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
