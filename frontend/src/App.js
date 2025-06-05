import React from 'react';
import Header from './components/Header';
import CatFact from './components/CatFact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CatFact />
      </main>
      <footer>
        <p>Powered by catfact.ninja API</p>
      </footer>
    </div>
  );
}

export default App;