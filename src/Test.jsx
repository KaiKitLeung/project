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
          <a href="#contact">Contact</a>
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

        {/* About */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container narrow">
            <h2 id="about-title">About</h2>
            <p>
              I’m a developer focused on interactive maps and data-driven UI. I love turning GeoJSON,
              tiles, and APIs into clean, accessible experiences. Currently exploring React-Leaflet,
              Mapbox GL, and Vite for fast, modern web GIS apps.
            </p>
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

        {/* Projects */}
        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <h2 id="projects-title">Projects</h2>
            <div className="grid">
              <article className="card">
                <h3>HK Population Density Map</h3>
                <p>Choropleth with React-Leaflet + GeoJSON, popups & legend.</p>
                <div className="card-actions">
                  <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
                  <a className="btn ghost" href="#" target="_blank" rel="noreferrer">Code</a>
                </div>
              </article>
              <article className="card">
                <h3>Vector Tile Explorer</h3>
                <p>Mapbox style layers, filters, and hover tooltips.</p>
                <div className="card-actions">
                  <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
                  <a className="btn ghost" href="#" target="_blank" rel="noreferrer">Code</a>
                </div>
              </article>
              <article className="card">
                <h3>Route Finder</h3>
                <p>Isochrones + routing API demo with caching and loading states.</p>
                <div className="card-actions">
                  <a className="btn" href="#" target="_blank" rel="noreferrer">Live</a>
                  <a className="btn ghost" href="#" target="_blank" rel="noreferrer">Code</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container narrow">
            <h2 id="contact-title">Contact</h2>
            <p>
              Want to collaborate? Email me at{' '}
              <a href="mailto:you@example.com">you@example.com</a> or find me on
              {' '}<a href="#" target="_blank" rel="noreferrer">GitHub</a> ·
              {' '}<a href="#" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container narrow">© {new Date().getFullYear()} Your Name</div>
      </footer>
    </>
  );
}
