import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import styled from "styled-components"
import Hero from './components/Hero';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
