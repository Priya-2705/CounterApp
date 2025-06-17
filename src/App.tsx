import { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app-dark' : 'app'}>
      <button onClick={toggleTheme} className='theme-toggle'>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
      <h1 style={{ textAlign: 'center', marginTop: '30px'}}>React Counter App</h1>
      <Counter initialCount={0}/>
    </div>
  );
}

export default App;