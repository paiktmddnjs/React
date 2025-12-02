import { useState } from "react";
import { Link } from "react-router-dom";

function BoardList() {
  // 임시 게시글 데이터 (state)
  const [posts, setPosts] = useState([
    { id: 1, title: "첫 번째 글", content: "내용입니다." },
    { id: 2, title: "두 번째 글", content: "이것은 테스트 글입니다." },
  ]);

  return (
    <div style={styles.container}>
      <h1>게시판 목록</h1>

      {/* 글쓰기 버튼 */}
      <div style={styles.writeBox}>
        <Link to="/write" style={styles.writeBtn}>
          글쓰기
        </Link>
      </div>

      {/* 게시글 목록 */}
      <div style={styles.list}>
        {posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <div style={styles.btnBox}>
              <button style={styles.btn}>수정</button>
              <button style={styles.deleteBtn}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 임시 스타일
const styles = {
  container: {
    width: "600px",
    margin: "50px auto",
    fontFamily: "Arial",
  },
  writeBox: {
    textAlign: "right",
    marginBottom: "20px",
  },
  writeBtn: {
    padding: "8px 15px",
    background: "#4f8cff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
  list: {
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    marginBottom: "15px",
  },
  btnBox: {
    marginTop: "10px",
  },
  btn: {
    padding: "5px 10px",
    marginRight: "10px",
  },
  deleteBtn: {
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
  },
};

export default BoardList;
