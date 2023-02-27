import { useState } from 'react'
import ReactDOM from "react-dom";
import { Login } from './login';
import './registro.css';

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
    
    <div className="phone">
<div className='head'>
        <h1 className='logo'>スリーブ</h1>
        
          <b className='namereg'>Usuario</b>
          <input className='inputreg1' type="text" 
          onChange={ handleInputChanges}/>
          <b className='lastnamereg'>Apellido</b>
          <input className='inputreg2' type="text" 
          onChange={cambiosapellido}/>
            <b className='userreg'>Nombre Usuario</b>
          <input className='inputreg3' type="text" 
          onChange={cambioNUser}/>
            <b className='contraseñareg'>Contraseña</b>
          <input className='inputreg4' type="text" 
          onChange={ cambioscontra}/>
            <b className='vericontrareg'>Verificacion Contraseña</b>
          <input className='inputreg5' type="text" 
          onChange={ cambiosvericontra}/>
            <b className='emailreg'>Email</b>
          <input className='inputreg6' type="text" 
          onChange={ cambiosemail}/>

    
          <button className='buttonreg' onClick={savedData}>Registrar</button>
          </div>
         
  </div>)
  
  }