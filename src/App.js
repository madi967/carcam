import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
       <scroll>
       <Header/> 
       <Body/>
       <Footer/>
       </scroll>
    </div>
  );
}

export default App;
