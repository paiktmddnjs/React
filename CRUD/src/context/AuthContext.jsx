// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (id, pw) => {
    const savedUser = localStorage.getItem(`user_${id}`);

    if (!savedUser) return false;

    const parsed = JSON.parse(savedUser);
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

export const useAuth = () => useContext(AuthContext);
