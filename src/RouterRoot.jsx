import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Index";
import Kategori from "./pages/Kategori";
import Order from "./pages/Order/Order.jsx";
import PaymentType from "./pages/Order/paymentType.jsx";
import Navbar from "./pages/Order/component/Navbar.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />

        {/* Gunakan Navbar sebagai layout untuk rute order dan payment */}
        <Route element={<Navbar />}>
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<PaymentType />} />
        </Route>

        <Route path="/kategori" element={<Kategori />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
