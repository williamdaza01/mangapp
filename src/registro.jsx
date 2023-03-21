import { React, useState } from "react";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./registro.scss";
import { Navbarsup } from "./components/Navbar/navbarsup";

export function Registro() {
  const [inputApellido, setinputApellido] = useState("");
  const [inputNombre, setinputNombre] = useState("");
  const [inputNombreusuario, setinputNombreusuario] = useState("");
  const [inputContraseña, setinputContraseña] = useState("");
  const [inputVerificacioncontraseña, setinputVerificacioncontraseña] =
    useState("");
  const [inputEmail, setinputEmail] = useState("");

  const handleInputChanges = (e) => {
    const nombre = e.target.value;
    setinputNombre(nombre);
  };

  const cambiosapellido = (e) => {
    const apellido = e.target.value;
    setinputApellido(apellido);
  };

  const cambioNUser = (e) => {
    const nombreusuario = e.target.value;
    setinputNombreusuario(nombreusuario);
  };

  const cambioscontra = (e) => {
    const contraseña = e.target.value;
    setinputContraseña(contraseña);
  };

  const cambiosvericontra = (e) => {
    const verifiContraseña = e.target.value;
    setinputVerificacioncontraseña(verifiContraseña);
  };

  const cambiosemail = (e) => {
    const email = e.target.value;
    setinputEmail(email);
  };

  const savedData = () => {
    if (
      inputNombre.trim() === "" ||
      inputApellido.trim() === "" ||
      inputNombreusuario.trim() === "" ||
      inputContraseña.trim() === "" ||
      inputVerificacioncontraseña.trim() === "" ||
      inputEmail.trim() === ""
    ) {
      alert("Te faltan campos por completar");
    } else {
      localStorage.setItem("nombreData", inputNombre);
      localStorage.setItem("apellidoData", inputApellido);
      localStorage.setItem("nombreUserData", inputNombreusuario);
      localStorage.setItem("contraseñaData", inputContraseña);
      localStorage.setItem("verificontraseñaData", inputVerificacioncontraseña);
      localStorage.setItem("emailData", inputEmail);
      alert("guardado");
      history.push("/home");
    }
  };
  const history = useHistory();
  return (
    <div className="singup">
      <Navbarsup />
      <ArrowBackIos
        className="iconsarrowbackregistro"
        onClick={() => history.push("/")}
      ></ArrowBackIos>
      <div className="container">
        <form onSubmit>
          <b className="namereg">Usuario</b>
          <input type="text" onChange={handleInputChanges} />
          <b className="lastnamereg">Apellido</b>
          <input type="text" onChange={cambiosapellido} />
          <b className="userreg">Nombre Usuario</b>
          <input type="text" onChange={cambioNUser} />
          <b className="contraseñareg">Contraseña</b>
          <input type="text" onChange={cambioscontra} />
          <b className="vericontrareg">Verificacion Contraseña</b>
          <input type="text" onChange={cambiosvericontra} />
          <b className="emailreg">Email</b>
          <input type="text" onChange={cambiosemail} />

          <button className="buttonreg" onClick={savedData}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
