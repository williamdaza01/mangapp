import { useRef } from 'react';
import './login.css';
import { Registro } from './registro';


export function Login(){
  const email = useRef()
  const contraseña = useRef()
  const getEmail=localStorage.getItem("emailData")
  const getContraseña = localStorage.getItem("contraseñaData")
 if (getEmail == null && getContraseña ==null){ alert('No se puede iniciar')}
else{
    alert("Se ha iniciado automaticamente")
}
  return(
     <div className='phone'>
          <div className='head'>
        {
        getEmail && getContraseña?<Registro/>: 
        
        <form onSubmit>
          <h1 className='logo'>スリーブ</h1>
                <b className='email'>Email o Correo</b>
                <input className='input1' type="text" ref={email}/>
            
                <b className='contraseña'>Contraseña</b>
                <input className='input2' type="password" ref={contraseña}/>
                <button className='button'>Login</button>
                <p className='registrarse'>Registrarse</p>
        </form>
        }
        </div>
    </div>
  ); 
}

