import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
