import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Tom";
  // const naver = { 
  //   name : "네이버",
  //   url : "https://www.naver.com",

  //  };
  //  const google = {
  //   name : "구글",
  //   url : "https://www.google.com/"
  //  }


  const sites = 
  [
      {name : "네이버" , url : "https://www.naver.com" , isLogin : true},
      {name : "구글" , url : "https://www.google.com", isLogin : false}
  ]

   const [count, setCount] = useState(0);


  return (

<div style={{
  display: "block"
}}
  
  
  className="App">

<h1 
style={{
  color : "#f0f",
  backgroundColor: "green",

}}
>

Hello , {name}.{count + 1}


</h1>
{/* <div><a href={naver.url}>{naver.name}</a></div>
<div><a href={google.url}>{google.name}</a></div> */}

{sites.map((s) => (
  <div style={{ display: "flex",justifyContent: "center",
    alignItems: "center", gap: "4px" }} 
  key = {s.url}>
    <a href={s.url} onClick={() => alert(`${s.name} 클릭됨`)}>{s.name} : </a>
   {s.isLogin ? <p>로그인됨</p> : <p>로그인 안됨</p>}
    </div>
))}

<button onClick={() => setCount(count + 1)}>
  클릭하면 증가: {count}
</button>
  </div>
);
}


export default App
