import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import DashboardLayout from "../layout/DashboardLayout";

const MainRoutes = () => {
  const [auth, setAuth] = useState(null);

  const checkAuth = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/me`,
        { withCredentials: true }
      );

      setAuth(res.data.loggedIn);
    } catch (err) {
      setAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (auth === null) return <p>Loading...</p>;

  return (
    <Routes>
 
<Route
  path="/"
  element={auth ? <Navigate to="/dashboard" replace /> : <Login />}
/>

<Route
  path="/login"
  element={auth ? <Navigate to="/dashboard" replace /> : <Login />}
/>
 
      <Route
        element={auth ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        <Route path="/dashboard" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

 
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default MainRoutes;
