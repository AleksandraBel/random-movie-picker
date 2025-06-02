import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-2xl hover:text-red-400"
        >
          &times;
        </button>
        {isLogin ? (
          <LoginForm
            onClose={onClose}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onClose={onClose}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
