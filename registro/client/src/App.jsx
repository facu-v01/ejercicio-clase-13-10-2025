import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Register from './pages/Register'; 
import PersonalInfo from './pages/PersonalInfo'; 
import ContactInfo from './pages/ContactInfo'; 
import Confirmation from './pages/Confirmation'; 
import Navbar from './components/Navbar';
import User from './pages/User';
 
function App() { 
  return ( 
    <div className="app"> 
    
      <Navbar />

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} > 
          <Route path="personal" element={<PersonalInfo />} /> 
          <Route path="contact" element={<ContactInfo />} /> 
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
        <Route path="/user" element={<User />} />
      </Routes> 
    </div> 
  ); 
} 

export default App