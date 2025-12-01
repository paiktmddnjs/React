import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserListFile";

function UserList() {
  const { users } = useContext(UserContext); //useContext : React의 Context에 저장된 값을 가져오는 훅

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 가로 중앙
        alignItems: "center",   
        fontSize: "30px",  // 세로 중앙
       width: "100vw"       // 화면 전체 높이
     
      }}
    >
      <div style={{ padding : "20px", border : "solid 3px black", textAlign: "center" }}> {/* 내부 텍스트 중앙 */}
        <h2>전체 유저 리스트</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          
          {users.map((user) => ( //반복해서 새로운 데이터를 만들어낸다.
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <Link to={`/user/${user.id}`} style= {{ color: "black"  }} >
              
                <strong>{user.name}</strong> ({user.age}세) — {" "}
                <span
                  style={{
                    color: user.status === "online" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {user.status === "online" ? "온라인" : "오프라인"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/user`}>
          유저 등록
        </Link>
      </div>
    </div>
  );
}


export default UserList;
