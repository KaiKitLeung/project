import React, { useEffect, useState } from 'react';
import './styles.css';

export default function App() {
  const [dark, setDark] = useState(() => 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">YourName</a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <button className="toggle" onClick={() => setDark(d => !d)} aria-label="Toggle dark mode">
          {dark ? '☀️' : '🌙'}
        </button>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="section hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div>
              <h1 id="hero-title">Hi, I’m Your Name 👋</h1>
              <p className="subtitle">Web GIS • Frontend • Data Visualization</p>
              <div className="cta">
                <a href="#projects" className="btn primary">View Work</a>
                <a href="#contact" className="btn">Contact Me</a>
              </div>
            </div>
            <img
              className="avatar"
              src="https://via.placeholder.com/240"
              alt="Portrait of Your Name"
              loading="lazy"
            />
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <h2 id="skills-title">Skills</h2>
            <ul className="tags" role="list">
              <li>React</li><li>Vite</li><li>TypeScript</li><li>Leaflet</li>
              <li>Mapbox GL</li><li>GeoJSON</li><li>PostGIS</li><li>Node.js</li>
              <li>REST APIs</li><li>Data Viz</li>
            </ul>
          </div>
        </section>

        {/* Contact */}

      </main>

      <footer className="footer">
        <div className="container narrow">© {new Date().getFullYear()} Your Name</div>
      </footer>
    </>
  );
}
