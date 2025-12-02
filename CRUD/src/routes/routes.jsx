import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";
import { BoardProvider } from "../context/BoardContext";

import Home from "../pages/Home";
import BoardList from "../pages/BoardList";
import EditBoard from "../pages/EditBoard";
import WriteBoard from "../pages/WriteBoard";
import BoardDetail from "../pages/BoardDetail";   // ✅ 추가!

function AppRoutes() {
  return (
    <BoardProvider>
     <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME}>
          
          <Route index element={<Home />} />

          <Route path="board" element={<BoardList />} />
          <Route path="board/:id" element={<BoardDetail />} /> {/* 상세 페이지 */}

          <Route path="/edit/:id" element={<EditBoard />} />
          
          <Route path="write/:id" element={<WriteBoard />} />
          <Route path="write" element={<WriteBoard />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </BoardProvider>
  );
}

export default AppRoutes;
