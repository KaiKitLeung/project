export default function About() {
  return <>
        <h2 className="mt-4 text-center">ℹ️ About Page</h2>;
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
  </>
  
}
