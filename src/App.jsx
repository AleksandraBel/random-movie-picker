import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Modal from "./components/Modal";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [modalContent, setModalContent] = useState(null);

  const openLoginModal = () => {
    setModalContent(
      <LoginForm onClose={closeModal} onSwitchToRegister={openRegisterModal} />
    );
  };

  const openRegisterModal = () => {
    setModalContent(
      <RegisterForm onClose={closeModal} onSwitchToLogin={openLoginModal} />
    );
  };

  const closeModal = () => setModalContent(null);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home openAuthModal={openLoginModal} />} />
        </Routes>

        <Modal isOpen={modalContent !== null} onClose={closeModal}>
          {modalContent}
        </Modal>
      </Router>
    </AuthProvider>
  );
}

export default App;
