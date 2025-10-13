import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
 
const Posts = ({posts}) => { 
 
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