import React from 'react';
import './App.css';
import Homepage from './Components/Homepage/index.js'
import Header from './Components/Header/index.js'
import Project from './Components/Project/index.js'



function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Project />
    </div>
  );
}

export default App;
