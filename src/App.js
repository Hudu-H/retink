import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar  from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
