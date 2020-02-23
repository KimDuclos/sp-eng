import React from 'react';
import './App.css';

import NavBar from "./NavBar/NavBar.jsx"
import TitleSection from "./TitleSection/TitleSection.jsx"
import AboutSection from "./AboutSection/AboutSection.jsx";
import ProjectSection from "./ProjectsSection/ProjectsSection.jsx";

function App() {
  return (
    <div className="App">
     <NavBar />
     <TitleSection />
     <AboutSection />
     <ProjectSection />
    </div>
  );
}

export default App;
