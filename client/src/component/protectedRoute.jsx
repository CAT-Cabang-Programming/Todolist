import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Kalau belum login redirect ke halaman login
    return <Navigate to="/login" replace />;
  }

  return children; // kalau ada token, lanjut ke halaman
};

export default ProtectedRoute;
