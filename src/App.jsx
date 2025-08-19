import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Project from './project.jsx';
import About from './about.jsx'
import Test from './Test.jsx'
import Contact from './contact.jsx'



export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/project" element={<Test />} />
        <Route path="/project/project" element={<Project />} />
        <Route path="/project/about" element={<About />} />
        <Route path="/project/contact" element={<Contact />} />
      </Routes>
    </Router>

    </>
  );
}
