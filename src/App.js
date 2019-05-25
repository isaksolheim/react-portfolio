import React from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Landing />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
