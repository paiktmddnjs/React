import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBoard } from '../context/BoardContext';

import { 
  Wrapper, Container, FormBox, Input, Textarea, Button 
} from './WriteBoard.styled';

function WriteBoard() {
  const { addBoard, updateBoard } = useBoard();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate();

  // -----------------------
  // 글 작성 처리
  // -----------------------
  const handleAdd = () => {
    addBoard(title, content);
    navigate("/board");
  };

  // -----------------------
  // 글 수정 처리
  // -----------------------
  const handleUpdate = () => {
    updateBoard(editingId, title, content);
    navigate("/board");
  };

  return (
    <Wrapper>
      <Container>
        <h1>📌 React 게시판 CRUD</h1>

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

          {editingId ? (
            <Button onClick={handleUpdate}>
              수정 완료
            </Button>
          ) : (
            <Button onClick={handleAdd}>
              글 작성
            </Button>
          )}
        </FormBox>

        <div style={{ paddingRight: "20px" }}>
          <Link to="/">홈으로 가기</Link>
        </div>
      </Container>
    </Wrapper>
  );
}

export default WriteBoard;
