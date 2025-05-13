import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return navigate("/signin");
  return children;
};

export default ProtectedRoute;
