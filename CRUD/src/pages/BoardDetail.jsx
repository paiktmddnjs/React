import { useParams, Link, useNavigate } from "react-router-dom";
import { useBoard } from "../context/BoardContext";
import {
  Wrapper,
  Content,
  Title,
  Text,
  BtnGroup,
  EditButton,
  DeleteButton,
  HomeLink,
} from "./BoardDetail.styled";

function BoardDetail() {
  const { id } = useParams();
  const { posts, deleteBoard } = useBoard();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <Wrapper>❌ 게시글을 찾을 수 없습니다.</Wrapper>;

  return (
    <Wrapper>
      <Content>
        <Title>{post.title}</Title>
        <Text>{post.content}</Text>

        <BtnGroup>
          <EditButton onClick={() => navigate(`/edit/${id}`)}>수정하기</EditButton>
          <DeleteButton onClick={() => { deleteBoard(Number(id)); navigate("/board"); }}>
            삭제하기
          </DeleteButton>
        </BtnGroup>

        <HomeLink to="/board">← 목록으로 돌아가기</HomeLink>
      </Content>
    </Wrapper>
  );
}

export default BoardDetail;

