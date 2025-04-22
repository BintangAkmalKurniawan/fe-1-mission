import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import Home from "./pages/Home";
import Kategori from "./pages/Kategori";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
