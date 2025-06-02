import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginForm = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">Увійти</h2>
      <input
        type="email"
        placeholder="Email"
        className="p-2 rounded text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Пароль"
        className="p-2 rounded text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-500 p-2 rounded hover:bg-green-600 transition"
      >
        Увійти
      </button>
      <p className="text-center text-sm">
        Не маєш акаунту?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-blue-400 hover:underline"
        >
          Зареєструватися
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
