import React from "react";
import { Navigate } from "react-router-dom";
import { getRole } from "./localStorageUtils.js";

const ProtectedRoute = ({ children, requiredRole }) => {
  const role = getRole();
  
  if (!role || role !== requiredRole) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
