import { useParams, useNavigate } from "react-router-dom";
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
      <Content
        style={{
          background: "#fff7e6",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        {/* 상단 정보 */}
        <div style={{ marginBottom: "15px" }}>
          <h2 style={{ margin: 0, color: "#ff6b00" }}>{post.store}</h2>
          <p style={{ margin: "5px 0", color: "#666" }}>
            카테고리: <b>{post.category}</b>
          </p>
        </div>

        <div>

  {post.image ? (
    <img 
      src={post.image} 
      alt={post.title} 
      style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "15px" }} 
    />
  ) : (
    <p style={{ color: "#aaa" }}>이미지 없음</p>
  )}

</div>

        {/* ⭐ 맛 점수 표시 */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#f3e62aff",
            marginBottom: "15px",
          }}
        >
          {post.score
            ? "⭐".repeat(Number(post.score))
            : "점수 없음"}
        </div>

        {/* 제목 */}
        <Title style={{ color: "#333", borderBottom: "1px solid #ddd" }}>
          {post.title}
        </Title>

        {/* 내용 */}
        <Text style={{ lineHeight: "1.6", marginTop: "10px" }}>
          {post.content}
        </Text>

        {/* 버튼 */}
        <BtnGroup>
          <EditButton onClick={() => navigate(`/edit/${id}`)}>수정하기</EditButton>
          <DeleteButton
            onClick={() => {
              deleteBoard(Number(id));
              navigate("/board");
            }}
          >
            삭제하기
          </DeleteButton>
        </BtnGroup>

        <HomeLink to="/board">← 맛평가 목록으로 돌아가기</HomeLink>
      </Content>
    </Wrapper>
  );
}

export default BoardDetail;
