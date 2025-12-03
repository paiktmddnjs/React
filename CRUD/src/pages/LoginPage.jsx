import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = login(id, pw);

    if (result) {
      alert("로그인 성공!");
      navigate("/"); // 메인 페이지로 이동
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다!");
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <br/>
        <button type="submit">로그인</button>
        <button type="button" onClick={() => navigate("/register")}>
  회원가입
</button>
      </form>
    </div>
  );
}
