import React from 'react';
import './App.css';
import Nav from "./components/nav/nav.js";
import Block from './components/block/block.js';
import MainBlock from './components/MainBlock/mainblock.js';

function App() {
  return (
    <div className="App back">

      <Nav/>
      <Block/>
      <MainBlock/>

    </div>
  );
}

export default App;
