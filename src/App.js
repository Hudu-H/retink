import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Projects from './components/projects/Projects';
import './global.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//yet to build and connect
import SidebarMobile from "./components/sidebar/sidebar.mobile";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Sidebar />
        <Hero />
        <Projects />
        <Navbar />
        {/* <SidebarMobile /> */} 
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
