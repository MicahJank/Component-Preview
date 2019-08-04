import React from 'react';
import './App.css';


import Footer from './components/Footer.js';
import CodeSection from './components/CodeSection.js';
import ElementSection from './components/ElementSection.js';
import ComponentSection from './components/ComponentSection.js';

function App() {
  return (
    <div className="App">
      <ElementSection />
      <ComponentSection />
      <CodeSection />
      <Footer />
    </div>
  );
}

export default App;
