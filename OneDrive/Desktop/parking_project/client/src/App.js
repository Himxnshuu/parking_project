import React from 'react';
import './App.css';  
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1 className="main-heading">Welcome to My App</h1>  
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
