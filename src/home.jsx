import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const position = [51.505, -0.09]; // latitude, longitude

  return (
    <div className="container mt-5 text-center">
      <h1>🏠 Home Page</h1>
      <p>Here is a map embedded using Leaflet:</p>

      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={position}>
            <Popup>📍 This is the center marker!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
