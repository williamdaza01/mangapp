import React from 'react'
import { useRef } from "react";
import "./login.scss";
import { useHistory } from "react-router-dom";

export function Login() {
  const history = useHistory();
  const email = useRef();
  const contraseña = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getContraseña = localStorage.getItem("contraseñaData");

  const verificarLogin = () => {
    const inputEmail = email.current.value;
    const inputContraseña = contraseña.current.value;
    if (!inputEmail || !inputContraseña) {
      alert("Por favor llene los campos");
      return false;
    } else if (inputEmail !== getEmail || inputContraseña !== getContraseña) {
      alert("Email o contraseña incorrectos");
    } else {
      history.push("/home");
      alert("Se ha iniciado sesion");
    }
  };

  return (
    <div className="phone">
      <div className="head">
        <form onSubmit>
          <h1 className="logoo">スリーブ</h1>
          <b className="email">Email o Correo</b>
          <input className="input1" type="text" ref={email} />

          <b className="contraseña">Contraseña</b>
          <input className="input2" type="password" ref={contraseña} />
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              const loginCorrecto = verificarLogin();
              if (loginCorrecto) {
                history.push("/home");
              }
            }}
          >
            Login
          </button>
          <label
            className="registrarse"
            onClick={() => history.push("/registro")}
          >
            Crear Cuenta
          </label>
        </form>
      </div>
    </div>
  );
}
