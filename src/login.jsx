import { useRef } from 'react';
import "./login.css";
import { Registro } from './registro';


export function Login(){
  const email = useRef()
  const contraseña = useRef()
  const getEmail=localStorage.getItem("emailData")
  const getContraseña = localStorage.getItem("contraseñaData")
 if (getEmail == null && getContraseña ==null){ alert('No se puede iniciar')}
else{
    alert("Se ha iciado automaticamente")
}
  return(
     <div>
          
        {
        getEmail && getContraseña?<Registro/>: 
        
        <form onSubmit>
          <h1>スリーブ</h1>
                <b>Email o Correo</b>
                <input type="text" ref={email}/>
            
                <b>Contraseña</b>
                <input type="password" ref={contraseña}/>
                <button>Login</button>
        </form>
        }
    </div>
  ); 
}

