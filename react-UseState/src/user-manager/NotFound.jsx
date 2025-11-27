import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 ERROR</h1>
      <p>페이지를 찾을 수 없습니다!!!!</p>
      <button
        type="button"
        onClick={() => navigate("/")}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        홈으로 가기
      </button>
    </div>
  );
}

export default NotFound;
