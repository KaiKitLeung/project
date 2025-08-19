import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import geodata from '../Hong_Kong_Population_Density_2021.json';

export default function Home() {
  const position = [22.4, 114.2]; // Center of the map

  // Function to determine color based on population density
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

  // Extract chart data from GeoJSON
  const chartData = geodata.features.map(feature => ({
    district: feature.properties.District,
    populationDensity: feature.properties.Population_Density
  }));

  return (
    <div className="container mt-5 text-center">
      <h1>🏠 Hong Kong Population Density Map</h1>

      {/* Leaflet Map */}
      <div style={{ height: '500px', width: '100%' }}>
        <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={position}>
            <Popup>📍 Center of Hong Kong</Popup>
          </Marker>
          <GeoJSON
            data={geodata}
            style={(feature) => ({
              color: "black",
              weight: 1,
              fillColor: getColor(feature.properties.Population_Density),
              fillOpacity: 0.7,
            })}
            onEachFeature={(feature, layer) => {
              layer.bindPopup(
                `<b>${feature.properties.District}</b><br/>Population Density: ${feature.properties.Population_Density}`
              );
            }}
          />
        </MapContainer>
      </div>

      {/* Bar Chart */}
      <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="district" 
              angle={-45} 
              textAnchor="end" 
              height={100} 
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="populationDensity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
