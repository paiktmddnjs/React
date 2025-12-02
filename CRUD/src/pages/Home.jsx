import { Link } from "react-router-dom";
import "./Home.styled";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">📌 React 게시판</h1>

      <p className="home-desc">
        간단한 CRUD 기능을 제공하는 게시판 예제입니다.
      </p>

      <div className="home-buttons">
        <Link to="/board" className="home-btn">
          글 목록 보기
        </Link>

        <Link to="/write" className="home-btn">
          글 작성하기
        </Link>

    
      </div>
    </div>
  );
}

export default Home;
