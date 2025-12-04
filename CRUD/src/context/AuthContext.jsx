// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (id, pw) => {
    const savedUser = localStorage.getItem(`user_${id}`);

    if (!savedUser) return false;

    const parsed = JSON.parse(savedUser); //객체로 변환하는 함수이다.
    if (parsed.pw !== pw) return false;

    setUser(parsed);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


