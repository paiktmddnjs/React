import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserListFile";

function UserDetail() {
  const { id } = useParams();
  const { users, setUsers } = useContext(UserContext);
  const navigate = useNavigate();


  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>유저를 찾을 수 없습니다.</p>
        <button onClick={() => navigate("/users")}>뒤로가기</button>
      </div>
    );
  }
  



  const deleteUser = (id) => {
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
    navigate("/");
  };

  const styles = {
    wrapper: { display: "flex", justifyContent: "center", alignItems: "center",   width: "100vw"  },
    card: { width: "350px", padding: "20px", borderRadius: "10px" },
  };

  return (

    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>유저 상세 정보</h2>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>이름:</strong> {user.name}</p>
        <p><strong>나이:</strong> {user.age}</p>
        <p><strong>상태:</strong> {user.status}</p>
        <p><strong>키:</strong> {user.height}</p>

        <button
          onClick={() => navigate(-1)}
          style={{ marginTop: "20px", padding: "10px 15px", cursor: "pointer", borderRadius: "5px", border: "none" }}
        >
          뒤로가기
        </button>

        <button
          onClick={() => deleteUser(user.id)}
          style={{ padding: "5px 10px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default UserDetail;
