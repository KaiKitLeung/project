import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geodata from '../Hong_Kong_Population_Density_2021.json';

export default function Home() {
  const position = [22.4, 114.2]; // latitude, longitude
  //console.log("GeoJSON data:", geodata);
  const getColor = (population) => {
  return population > 100000 ? '#800026' :
         population > 50000  ? '#BD0026' :
         population > 20000  ? '#E31A1C' :
         population > 10000  ? '#FC4E2A' :
         population > 5000   ? '#FD8D3C' :
         population > 2000   ? '#FEB24C' :
         population > 1000   ? '#FED976' :
                                 '#FFEDA0';
};
  const geoJsonStyle = {
    color: "blue",
    weight: 2,
    fillColor: "lightblue",
    fillOpacity: 0.5
  };
  return (
    <div className="container mt-5 text-center">
      <h1>🏠 Home Page</h1>

      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={position}>
            <Popup>📍 This is the center marker!</Popup>
          </Marker>
          <GeoJSON
            data={geodata}
            style={(feature) => ({
                color: "black",              // border color
                weight: 1,
                fillColor: getColor(feature.properties.Population_Density),  // fill color based on population
                fillOpacity: 0.7,
            })}
            />
        </MapContainer>
      </div>
    </div>
  );
}
