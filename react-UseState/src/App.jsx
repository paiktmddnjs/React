import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./user-manager/UserList";
import UserDetail from "./user-manager/UserDetail";  
import { UserProvider } from "./user-manager/UserListFile";
import UserRegistration from "./user-manager/UserRegistration";
import NotFound from "./user-manager/NotFound";


function App() {
  return (
    <UserProvider>
  
     <BrowserRouter>    {/* 브라우저 주소창이 변화하면 React Router가 이를 감지해서 해당하는 컴포넌트를 보여준다. */}
      <Routes>
        <Route path="/" element={<UserList />} />  {/* 유저목록페이지 */}
        <Route path="/user/:id" element={<UserDetail />} /> {/* 유저상세페이지 */}
        <Route path="/user" element={<UserRegistration />} />  {/* 유저등록페이지 */}
        <Route path="*" element={<NotFound />} />   {/* 에러 페이지 */ }
      </Routes>
     </BrowserRouter>
    </UserProvider>
  );
}

export default App;
