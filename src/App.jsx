import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthModal from "./components/AuthModal";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home openAuthModal={() => setShowAuthModal(true)} />
              </ProtectedRoute>
            }
          />
        </Routes>

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
