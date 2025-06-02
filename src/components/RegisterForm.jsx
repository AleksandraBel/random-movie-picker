import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const RegisterForm = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">Реєстрація</h2>
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
        className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition"
      >
        Зареєструватися
      </button>
      <p className="text-center text-sm">
        Вже є акаунт?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-green-400 hover:underline"
        >
          Увійти
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
