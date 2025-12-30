// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, allowedRole, userRole }) => {
  if (userRole !== allowedRole) {
    return <Navigate to="/" />;
  }
  return children;
};