// import React, { useEffect, useRef } from "react";
// import { useAuth } from "../contexts/AuthContext";

// const ProtectedRoute = ({ children, openAuthModal }) => {
//   const { currentUser, loading } = useAuth();
//   const hasCheckedAuth = useRef(false);

//   useEffect(() => {
//     if (!loading && !currentUser && openAuthModal && !hasCheckedAuth.current) {
//       hasCheckedAuth.current = true;
//       openAuthModal();
//     }
//   }, [loading, currentUser, openAuthModal]);

//   if (loading) return null;

//   if (!currentUser) return null;

//   return children;
// };

// export default ProtectedRoute;
