import { useState } from 'react'
import JavaScript from './components/JavaScript'
import './App.css'
import Product from './components/Product'
import styled from 'styled-components'

import ProfileCard from "./components/ProfileCard";

function App() {
  const users = [
    { name: "Tom", age: 25, isOnline: true },
    { name: "Jane", age: 30, isOnline: false },
    { name: "Mike", age: 28, isOnline: true },
    { name: "Paik", age: 25, isOnline: true }
  ];

  return (
   <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <h1>사용자 프로필</h1>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "center",
    }}
  >
    {users.map((user, index) => (
      <ProfileCard key={index} {...user} />
    ))}
  </div>
</div>
  );
}

export default App;
