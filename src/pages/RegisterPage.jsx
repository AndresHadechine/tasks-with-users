import React from 'react'
import { useState } from "react";
import { registerUser } from "../services/Api";
import { Link } from "react-router-dom";


export const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const saveRegister = async (e) => {
    e.preventDefault();
    
    const userData = {
      username: username,
      password: password,
      email: email
    }

    const newUser = await registerUser(userData);
    newUser.ok? alert(`Usuario registrado con éxito`) : alert(`error al registrar usuario`);
  };

  return (
    <>
      <form onSubmit={saveRegister}>
        <label htmlFor="">Registro de usuario</label>
        <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <input type="email" placeholder="Correo Electrónico" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={saveRegister}> Registrarse </button>
      </form>
      <Link to="/login">Ya tienes una cuenta? inicia sesión</Link>
    </>
  )
}
