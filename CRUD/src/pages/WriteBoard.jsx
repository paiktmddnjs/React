import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Wrapper, Container, FormBox, Input, Textarea, Button, SmallButton, DeleteButton, PostCard } from './WriteBoard.styled';

function WriteBoard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const navigate = useNavigate(); // 페이지 이동용



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
            className="input"
          />

          <Textarea
            placeholder="내용 입력"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea"
          />

          {editingId ? (
            <Button onClick={handleUpdate} >
              수정 완료
            </Button>
          ) : (
            <Button onClick={handleCreate} >
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
