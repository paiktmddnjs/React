import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";
import { BoardProvider } from "../context/BoardContext";

import Home from "../pages/Home";
import BoardList from "../pages/BoardList";
import WriteBoard from "../pages/WriteBoard";

function AppRoutes() {
  return (
    <BoardProvider>
     <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃 */}
        <Route path={ROUTES.HOME}>
          
          {/* index = 기본 화면 */}
          <Route index element={<Home />} />

          {/* 게시판 목록 */}
          <Route path="board" element={<BoardList />} />

          {/* 글 작성/수정 */}
          <Route path="write/:id" element={<WriteBoard />} />
          <Route path="write" element={<WriteBoard />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </BoardProvider>
  );
}

export default AppRoutes;
