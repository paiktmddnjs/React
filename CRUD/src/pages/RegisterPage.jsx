// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Form, Input, Button } from "./RegisterPage.styled";

export default function RegisterPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!id || !pw || !phone) {
      alert("아이디, 비밀번호, 전화번호를 모두 입력하세요.");
      return;
    }

    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      alert("전화번호 형식이 올바르지 않습니다. xxx-xxxx-xxxx 형태로 입력해주세요.");
      return;
    }

    const existingUser = localStorage.getItem(`user_${id}`);
    if (existingUser) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    const newUser = { id, pw, phone };
    localStorage.setItem(`user_${id}`, JSON.stringify(newUser));

    alert("회원가입 완료! 로그인해 주세요.");
    navigate("/login");
  };

  return (
    <Container>
      <Title>회원가입</Title>

      <Form>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <Input
          type="tel"
          placeholder="전화번호 : xxx-xxxx-xxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Button onClick={handleRegister}>회원가입</Button>
        <Button type="button" onClick={() => navigate("/login")}>
          로그인으로 돌아가기
        </Button>
      </Form>
    </Container>
  );
}

