import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBoard } from "../context/BoardContext";

import { 
  Wrapper, Container, FormBox, Input, Textarea, Button 
} from "./WriteBoard.styled";

function EditBoard() {
  const { posts, updateBoard } = useBoard();
  const navigate = useNavigate();
  const { id } = useParams();

  const boardItem = posts.find((item) => item.id === Number(id));

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 기존 데이터 불러오기
  useEffect(() => {
    if (boardItem) {
      setTitle(boardItem.title);
      setContent(boardItem.content);
    }
  }, [boardItem]);

  const handleUpdate = () => {
    updateBoard(Number(id), title, content);
    navigate("/board");
  };

  if (!boardItem) return <div>❌ 해당 게시글을 찾을 수 없습니다.</div>;

  return (
    <Wrapper>
      <Container>
        <h1>🎮 게시글 수정</h1>

        <FormBox>
          <Input
            type="text"
            placeholder="제목 입력"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="내용 입력"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <Button onClick={handleUpdate}>
            수정 완료
          </Button>
        </FormBox>

        <div style={{ paddingRight: "20px" }}>
          <Link to="/board">목록으로 돌아가기</Link>
        </div>
      </Container>
    </Wrapper>
  );
}

export default EditBoard;
