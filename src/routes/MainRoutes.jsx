import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import DashboardLayout from "../layout/DashboardLayout";

const MainRoutes = () => {
  const token = localStorage.getItem("token");

  const isAuth = !!token; // true if token exists

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route element={isAuth ? <DashboardLayout /> : <Navigate to="/login" />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;