import { createContext , useState  } from "react";

// createContext : 컴포넌트 간 데이터를 전역처럼 공유할 수 있는 React 기능
export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "김철수", age: 25, status: "online", height: 175 },
    { id: 2, name: "이영희", age: 30, status: "offline", height: 162 },
    { id: 3, name: "박민수", age: 28, status: "online", height: 180 },
    { id: 4, name: "홍길동", age: 22, status: "offline", height: 170 },
  ]);


  //Provider는 Context를 하위 컴포넌트들에게 전달하는 역할
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider };