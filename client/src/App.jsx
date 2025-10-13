import React from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home'; 
import Posts from './components/Posts'; 
import NewPost from './components/NewPost'; 
import PostDetail from './components/PostDetail'; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <div className="app"> 
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}> 
          <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link> 
          <Link to="/posts" style={{ marginRight: '15px' }}>Artículos</Link> 
          <Link to="/new-post">Nuevo Artículo</Link> 
        </nav> 
 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/posts" element={<Posts />} /> 
          <Route path="/new-post" element={<NewPost />} /> 
          <Route path="/posts/:id" element={<PostDetail />} /> 
        </Routes> 
      </div> 
    </BrowserRouter> 
  ); 
} 
 
export default App;