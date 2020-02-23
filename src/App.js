import React from 'react';
import './App.css';

import NavBar from "./NavBar/NavBar.jsx"
import Title from "./Title/Title.jsx"
import About from "./About/About.jsx";
import Project from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Title />
     <About />
     <Project />
     <Footer />
    </div>
  );
}

export default App;
