import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Hero />
        <Projects />
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
