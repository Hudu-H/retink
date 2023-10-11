import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
