import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = () => {
  const position = [49.2332, 28.4567];
  const customMarkerIcon = L.icon({
    iconUrl:
      "https://i0.wp.com/www.worth.com/wp-content/uploads/2017/09/map-marker-icon.png?fit=724%2C724&ssl=1",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <MapContainer
      center={position}
      zoom={18}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          м. Вінниця, <br /> пл. Калічанська, 2
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
