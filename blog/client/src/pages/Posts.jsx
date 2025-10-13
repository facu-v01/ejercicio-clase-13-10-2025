import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Posts = ({posts}) => { 

  const stats = posts.reduce((auth, post) => {
    auth[post.author] = (auth[post.author] || 0) + 1;
    return auth;
  }, {});
 
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

      <h2>Estadísticas</h2> 
      <p>Cantidad de posts: {posts.length}</p>
      <p>Cantidad de posts por autor: </p>
      <ul>
        {Object.entries(stats).map(([author, count]) => (
          <li key={author}>
            {author}: {count} post{count > 1 ? 's' : ''}
          </li>
        ))}
      </ul>
    </div> 
  ); 
}; 
 
export default Posts;