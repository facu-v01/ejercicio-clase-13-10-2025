import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
 
const NewPost = () => { 
  const [formData, setFormData] = useState({ 
    title: '', 
    content: '', 
    author: '' 
  }); 
 
  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Artículo creado:\nTítulo: ${formData.title}\nAutor: ${formData.author}`); 
    // En una app real, aquí enviaríamos los datos a un servidor 
  }; 
 
  return ( 
    <div style={{ padding: '20px' }}> 
      <h1>Crear Nuevo Artículo</h1> 
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}> 
        <div style={{ marginBottom: '15px' }}> 
          <label>Título:</label> 
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          /> 
        </div> 
         
        <div style={{ marginBottom: '15px' }}> 
          <label>Autor:</label> 
          <input 
            type="text" 
            name="author" 
            value={formData.author} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px' }} 
            required 
          /> 
        </div> 
         
        <div style={{ marginBottom: '15px' }}> 
          <label>Contenido:</label> 
          <textarea 
            name="content" 
            value={formData.content} 
            onChange={handleChange} 
            style={{ width: '100%', padding: '8px', height: '150px' }} 
            required 
          /> 
        </div> 
         
        <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}> 
          Publicar Artículo 
        </button> 
        <Link to="/posts"> 
          <button type="button">Cancelar</button> 
        </Link> 
      </form> 
    </div> 
  ); 
}; 
 
export default NewPost;