import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Link to="/login">Iniciar sesión</Link>
    </>
  );
};
