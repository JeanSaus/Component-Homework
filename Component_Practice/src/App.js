import React, { Component } from 'react';
import Contact from "./components/Contacts.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import Navbar from "./components/Navbar.js";
import Project from "./components/Project.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import SocialLinks from "./components/SocialLinks.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
