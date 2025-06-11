import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, openAuthModal }) => {
  const { currentUser, loading } = useAuth();

  useEffect(() => {
    if (!loading && !currentUser && openAuthModal) {
      openAuthModal();
    }
  }, [loading, currentUser, openAuthModal]);

  if (loading || !currentUser) return null;

  return children;
};

export default ProtectedRoute;
