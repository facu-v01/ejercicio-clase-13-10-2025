import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home'; 
import Posts from './pages/Posts'; 
import NewPost from './pages/NewPost'; 
import PostDetail from './components/PostDetail'; 
import Stats from './pages/Stats';
 
function App() { 

  const [posts, setPosts] = useState([ 
      { id: 1, title: 'Mi primer artículo', content: 'Contenido del primer artículo...', author: 'Juan Pérez' }, 
      { id: 2, title: 'React Router DOM', content: 'Aprendiendo sobre rutas en React...', author: 'María García' }, 
      { id: 3, title: 'Formularios en React', content: 'Cómo manejar formularios...', author: 'Carlos López' } 
    ]); 

  return (
      <div className="app"> 
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}> 
          <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link> 
          <Link to="/posts" style={{ marginRight: '15px' }}>Artículos</Link> 
          <Link to="/new-post" style={{ marginRight: '15px' }}>Nuevo Artículo</Link> 
          <Link to="/stats" style={{ marginRight: '15px' }}>Estadísticas</Link> 
        </nav> 
 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/posts" element={<Posts />} /> 
          <Route path="/new-post" element={<NewPost />} /> 
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} /> 
          <Route path="/stats" element={<Stats posts={posts} />} /> 
        </Routes> 
      </div>
  ); 
} 
 
export default App;