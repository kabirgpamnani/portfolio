import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CenterContent from "./components/CenterContent";
import Projects from "./components/Projects";
import { Element } from "react-scroll";
import About from "./components/About";
import "./App.css";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Element name="home">
          <CenterContent />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </div>
    </ChakraProvider>
  );
}

export default App;
