import { useState } from 'react'
import ReactDOM from "react-dom";
import { Login } from './login';

export function Registro () {
    const[inputApellido,setinputApellido] = useState("")
    const [inputNombre,setinputNombre] = useState('');
    const [inputNombreusuario,setinputNombreusuario] = useState('');
    const [inputContraseña,setinputContraseña] = useState('');
    const [inputVerificacioncontraseña,setinputVerificacioncontraseña] = useState('');
    const [inputEmail,setinputEmail] = useState('');

    const handleInputChanges = (e) =>{
        const nombre =e.target.value
        setinputNombre(nombre)}

        const cambiosapellido= (e) =>{
        const apellido =e.target.value
        setinputApellido(apellido)}

        const cambioNUser= (e) =>{
        const nombreusuario =e.target.value
        setinputNombreusuario(nombreusuario);}

        const cambioscontra= (e) =>{
        const contraseña =e.target.value
        setinputContraseña(contraseña);}

        const cambiosvericontra= (e) =>{
        const verifiContraseña =e.target.value
        setinputVerificacioncontraseña(verifiContraseña);}

        const cambiosemail= (e) =>{
        const email =e.target.value
        setinputEmail(email);}
        
    
    const savedData = ()=> {
        localStorage.setItem('nombreData',inputNombre);
        localStorage.setItem('apellidoData',inputApellido);
        localStorage.setItem('nombreUserData',inputNombreusuario);
        localStorage.setItem('contraseñaData',inputContraseña);
        localStorage.setItem('verificontraseñaData',inputVerificacioncontraseña);
        localStorage.setItem('emailData',inputEmail);
        alert('guardado')
    
    }
  

   

    
    
  return (
    
    <div className="Login">

        <h1>スリーブ</h1>
        
          <b>Usuario</b>
          <input type="text" 
          onChange={ handleInputChanges}/>
          <b>Apellido</b>
          <input type="text" 
          onChange={cambiosapellido}/>
            <b>Nombre Usuario</b>
          <input type="text" 
          onChange={cambioNUser}/>
            <b>Contraseña</b>
          <input type="text" 
          onChange={ cambioscontra}/>
            <b>Verificacion Contraseña</b>
          <input type="text" 
          onChange={ cambiosvericontra}/>
            <b>Email</b>
          <input type="text" 
          onChange={ cambiosemail}/>

    
          <button className='button' onClick={savedData}>Registrar</button>
        
         
  </div>)
  
  }