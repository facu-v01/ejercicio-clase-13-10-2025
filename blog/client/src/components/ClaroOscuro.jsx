import { useState, useEffect } from 'react';

const ClaroOscuro = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1a1a1a';
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: theme === 'light' ? '#1a1a1a' : '#ffffff',
        color: theme === 'light' ? '#ffffff' : '#1a1a1a',
        cursor: 'pointer'
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ClaroOscuro;