import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserListFile";
import styled from "styled-components";

function UserRegistration() {
  const { users, setUsers } = useContext(UserContext); // useContext : 어떤 데이터를 *전역 공간(Context)*에 저장해두고 모든 컴포넌트가 바로 꺼내 쓸 수 있게 만들어 준다.
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("online");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault() // 폼 submit시 페이지를 새로고침하지 않아 초기화되지않게 할수 있다.
  
    // 유효성 검사
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }
    if (!age || isNaN(age)) {
      alert("나이를 숫자로 입력해주세요.");
      return;
    }

    const newUser = {
      id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name,
      age: Number(age),
      status,
      height: height ? Number(height) : 0,
    };

    setUsers([...users, newUser]);
    navigate("/"); // 목록 페이지로 이동
  };


    // onChange로 입력값이 바뀔떄 상태를 업데이트한다.
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",   width: "100vw"  }}>
      <form onSubmit={handleSubmit} style={{ width: "350px", padding: "20px", borderRadius: "10px", border: "1px solid #ccc" }}>
        <h2>유저 등록</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>이름:</label>
      
          <input type="text" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%" }} /> {/* e.target.value : 이벤트가 발생한 요소(target)에 사용자가 입력한 값(value)을 넣는다.  */}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>나이:</label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)} style={{ width: "100%" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>상태:</label>
          <select value={status} onChange={e => setStatus(e.target.value)} style={{ width: "100%" }}>
            <option value="online">온라인</option>
            <option value="offline">오프라인</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>키:</label>
          <input type="text" value={height} onChange={e => setHeight(e.target.value)} style={{ width: "100%" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="submit" style={{ padding: "5px 10px" }}>저장</button>
          <button type="button" onClick={() => navigate("/")} style={{ padding: "5px 10px" }}>취소</button>
        </div>
      </form>
    </div>
  );
}

export default UserRegistration;
