import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppRoutes from './routes/routes'
import BoardList from "./pages/BoardList";
import WriteBoard from "./pages/BoardList";
import { BoardProvider } from "./context/BoardContext";

function App() {

  return (
    <BoardProvider>
      <AppRoutes />
    </BoardProvider>
  )
}

export default App;
