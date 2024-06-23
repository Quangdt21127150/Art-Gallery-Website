import React, { useState, useEffect } from "react";
import axios from "axios";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import "./MapSection.css";
import "leaflet/dist/leaflet.css";

import icon from "../../assets/images/icon-location.svg";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";

const getIcon = (_iconWidth, _iconHeight) => {
  return L.icon({
    iconUrl: icon,
    iconSize: [_iconWidth, _iconHeight],
  });
};

const MapSection = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          "https://nominatim.openstreetmap.org/search",
          {
            params: {
              q: "99 King Street",
              format: "json",
            },
          }
        );

        const data = response.data;
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          if (lat && lon) {
            setMarkerPosition([parseFloat(lat), parseFloat(lon)]);
          } else {
            console.error("Invalid coordinates received from API");
          }
        } else {
          console.error("No results found for the specified address");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <section className="map">
      <Link to="/" className="location-button">
        back to home
        <img src={arrowLeft} alt="" className="location-button-icon" />
      </Link>
      <MapContainer
        center={[51.511306, -0.13146]} // Default center position (London)
        zoom={13}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markerPosition && (
          <Marker position={markerPosition} icon={getIcon(60, 80)} />
        )}
        <MapUpdater position={markerPosition} />
      </MapContainer>
    </section>
  );
};

const MapUpdater = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [map, position]);

  return null;
};

export default MapSection;
