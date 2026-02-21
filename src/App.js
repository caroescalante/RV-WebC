import React from "react";
import Navbar from './components/Navbar';
import "./style.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacto from "./components/Contacto";


function App() {
  return (  
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contacto />
    </div>
  );
}

export default App;
