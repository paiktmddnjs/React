import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routePaths";
import { BoardProvider } from "../context/BoardContext";
import { AuthProvider } from "../context/AuthContext";

import Home from "../pages/Home";
import BoardList from "../pages/BoardList";
import EditBoard from "../pages/EditBoard";
import WriteBoard from "../pages/WriteBoard";
import BoardDetail from "../pages/BoardDetail";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../routes/ProtectedRoute";


function AppRoutes() {
  return (
    <AuthProvider> {/* Routes 밖 */}
      <BoardProvider> {/* Routes 밖 */}
        <BrowserRouter>
          <Routes>
            {/* 독립 페이지 */}
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.EDIT(":id")} element={<EditBoard />} />
            
            {/* 홈 + 중첩 라우트 */}
            <Route
              path={ROUTES.HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            >
              <Route path="board" element={<BoardList />} />
              <Route path="board/:id" element={<BoardDetail />} />
              <Route path="write" element={<WriteBoard />} />
              <Route path="write/:id" element={<WriteBoard />} />
               
            </Route>
             <Route path="*" element={<NotFound />} /> 
          </Routes>
        </BrowserRouter>
      </BoardProvider>
    </AuthProvider>
  );
}

export default AppRoutes;
