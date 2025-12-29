import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

function App() {
  const nav = useNavigate();

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>
      <div>
        <button onClick={() => nav("/new")}>New로 이동</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
