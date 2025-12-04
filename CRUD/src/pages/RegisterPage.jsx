// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Form, Input, Button } from "./RegisterPage.styled";

export default function RegisterPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  // 💡 수정된 로직: localStorage의 모든 'user_' 키를 검사하여 전화번호 중복 확인
  const isPhoneDuplicate = (newPhone) => {
    // localStorage의 모든 키를 순회
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // 'user_'로 시작하는 키만 확인
      if (key.startsWith('user_')) {
        const userString = localStorage.getItem(key);
        try {
          const user = JSON.parse(userString);
          // 저장된 사용자의 전화번호가 새로 입력된 전화번호와 같은지 확인
          if (user && user.phone === newPhone) {
            return true; // 중복 발견
          }
        } catch (e) {
          console.error("Failed to parse user data from localStorage:", key, userString);
        }
      }
    }
    return false; // 중복 없음
  };


  const handleRegister = () => {
    if (!id || !pw || !phone) {
      alert("아이디, 비밀번호, 전화번호를 모두 입력하세요.");
      return;
    }

    // 1. 전화번호 형식 검사
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      alert("전화번호 형식이 올바르지 않습니다. xxx-xxxx-xxxx 형태로 입력해주세요.");
      return;
    }

    // 2. 아이디 중복 검사
    const existingUser = localStorage.getItem(`user_${id}`);
    if (existingUser) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    // 3. 전화번호 중복 검사 (수정된 로직 적용)
    if (isPhoneDuplicate(phone)) {
      alert("이미 존재하는 전화번호입니다.");
      return;
    }

    // 4. 새 사용자 저장
    const newUser = { id, pw, phone };
    // 아이디를 키로 사용하여 저장
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