import React from 'react'; 
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'; 
 
const Register = () => { 
  const location = useLocation(); 
   
  const steps = [ 
    { path: 'personal', label: 'Información Personal' }, 
    { path: 'contact', label: 'Información de Contacto' }, 
    { path: 'confirmation', label: 'Confirmación' } 
  ]; 
 
  const currentStep = steps.findIndex(step =>  
    location.pathname.includes(step.path) 
  ); 
 
  return ( 
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}> 
      <h1>Registro de Usuario</h1> 
       
      {/* Indicador de pasos */} 
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}> 
        {steps.map((step, index) => ( 
          <div key={step.path} style={{ textAlign: 'center', flex: 1 }}> 
            <div 
              style={{ 
                width: '30px', 
                height: '30px', 
                borderRadius: '50%', 
                backgroundColor: index <= currentStep ? '#007bff' : '#ccc', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 10px' 
              }} 
            > 
              {index + 1} 
            </div> 
            <span style={{ fontSize: '12px' }}>{step.label}</span> 
          </div> 
        ))} 
      </div> 
 
      {/* Formulario actual */} 
      <Outlet /> 
      
      {location.pathname === '/register' &&
      <>
        <h2>¡Bienvenido a la página de registro!</h2>
        <p>Presione el botón iniciar para comenzar el proceso.</p>
        
        <Link to="/register/personal">
          <button type='button'>Iniciar</button>
        </Link>
      </>}
    </div> 
  ); 
}; 
 
export default Register;