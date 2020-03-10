import React from "react";
import "./App.css";

import NavBar from "./NavBar/NavBar.jsx";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import Title from "./Title/Title.jsx";
import About from "./About/About.jsx";
// import Projects from "./Projects/Projects.jsx";
import Services from "./Services/Services.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BurgerMenu />
      <Title />
      <About />
      {/* <Projects /> */}
      <Services />
      <Footer />
    </div>
  );
}

export default App;
