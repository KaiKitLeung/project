import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar.jsx';
import Home from './home.jsx';

function About() {
  return <h2 className="mt-4 text-center">ℹ️ About Page</h2>;
}

function Contact() {
  return <h2 className="mt-4 text-center">📞 Contact Page</h2>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
