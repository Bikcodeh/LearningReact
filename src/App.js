import React from 'react';
import logo from './logo.svg';
import './App.css';

/** Como estamos importando el elemento por default, podemos darle un nombre al tag que usaremos para invocarlo */
import Title from './components/title';

/** cuando importamos un elemento que no es por default, tenemos que importalo con el nombre de el */
import { saludar } from './components/title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title></Title>
        { saludar() }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
