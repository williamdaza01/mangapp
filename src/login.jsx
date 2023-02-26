import { useRef } from "react";
import "./login.css";
export function Login(){
  const email = useRef;
  const contraseña = useRef;
  const hadlesubmit = () => {
    if (
      email.current.value == "juanjo.op1771@gmail.com" &&
      contraseña.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "juanjo.op1771@gmail.com");
      localStorage.setItem("contraseñaData", "12345");
    }
  };

  return(
    <div className="Login">
      <header className="Login-header">
        <h1>スリーブ</h1>
        <div>
          <b>Usuario</b>
          <input type="text" ref={email} />
        </div>
        <div>
          <b>contraseña</b>
          <input type="contraseña" ref={contraseña}/>
        </div>
        <div>
          <button>Login</button>
        </div>
      </header>
    </div>
  )

}

