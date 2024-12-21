import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const defaultIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={13}
      style={{ height: "250px", width: "100%", zIndex: 10 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        style={{zIndex:10}}
      />
      <Marker position={[12.9716, 77.5946]} icon={defaultIcon}>
        <Popup>Bangalore, India</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
