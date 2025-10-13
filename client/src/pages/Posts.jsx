import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Posts = () => { 
  const [posts] = useState([ 
    { id: 1, title: 'Mi primer artículo', content: 'Contenido del primer artículo...' }, 
    { id: 2, title: 'React Router DOM', content: 'Aprendiendo sobre rutas en React...' }, 
    { id: 3, title: 'Formularios en React', content: 'Cómo manejar formularios...' } 
  ]); 
 
  return ( 
    <div style={{ padding: '20px' }}> 
      <h1>Artículos del Blog</h1> 
      <div> 
        {posts.map(post => ( 
          <div key={post.id} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0' }}> 
            <h3>{post.title}</h3> 
            <p>{post.content.substring(0, 100)}...</p> 
            <Link to={`/posts/${post.id}`}>Leer más</Link> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
 
export default Posts;