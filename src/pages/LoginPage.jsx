import React from "react";
import { Link } from "react-router-dom";
import "../pages/PagesStyles.css";

export const LoginPage = () => {
  return (
    <>
      <form action="">
        <label htmlFor="">Inicio de sesión</label>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button type="submit"> Iniciar sesión </button>
      </form>
      <Link to="/register">No tienes cuenta? registrate aquí</Link>
    </>
  );
};
