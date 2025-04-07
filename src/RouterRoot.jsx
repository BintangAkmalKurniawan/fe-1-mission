import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/Home"; // Shell layout
import Formdata from "./pages/Home/Formdata";
import Profile from "./pages/profile";
import Home from "./pages/Home/Home"; // Isi dari dashboard

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Semua route yang ada sidebar & navbar-nya */}
        <Route path="/home" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="formdata" element={<Formdata />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
