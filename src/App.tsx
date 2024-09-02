// import ConfettiLauncher from './components/ConfettiLauncher/ConfettiLauncher';

// function App() {
//   return (
//     <div className="App">
//         <ConfettiLauncher />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import ConfettiLauncher from './components/ConfettiLauncher/ConfettiLauncher';
import './App.css'; // メインスタイルシート

function App() {
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
      document.body.className = theme;  // themeは 'light' または 'dark'
  }, [theme]);
  
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ConfettiLauncher />
        </div>
    );
}

export default App;
