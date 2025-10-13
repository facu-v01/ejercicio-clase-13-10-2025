import React from 'react'; 
import { useParams, Link } from 'react-router-dom'; 
 
const PostDetail = () => { 
  const { id } = useParams(); 
   
  // Datos de ejemplo - en una app real esto vendría de una API 
  const posts = { 
    1: { title: 'Mi primer artículo', content: 'Contenido completo del primer artículo...', author: 'Juan Pérez' }, 
    2: { title: 'React Router DOM', content: 'Aprendiendo sobre rutas en React...', author: 'María García' }, 
    3: { title: 'Formularios en React', content: 'Cómo manejar formularios...', author: 'Carlos López' } 
  }; 
 
  const post = posts[id]; 
 
  if (!post) { 
    return ( 
      <div style={{ padding: '20px' }}> 
        <h1>Artículo no encontrado</h1> 
        <Link to="/posts">Volver a los artículos</Link> 
      </div> 
    ); 
  } 
 
  return ( 
    <div style={{ padding: '20px' }}> 
      <Link to="/posts" style={{ marginBottom: '20px', display: 'block' }}> 
        ← Volver a los artículos 
      </Link> 
      <h1>{post.title}</h1> 
      <p><strong>Autor:</strong> {post.author}</p> 
      <div style={{ marginTop: '20px' }}> 
        <p>{post.content}</p> 
      </div> 
    </div> 
  ); 
}; 
 
export default PostDetail;