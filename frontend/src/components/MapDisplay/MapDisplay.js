import React, { useEffect, useRef, useState } from "react";
import "./MapDisplay.css";
import mapboxgl, { Marker } from "mapbox-gl";

const MapDisplay = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FuZGVlcDY3OCIsImEiOiJjbGJiejQ1czIxazdlM3BxcDdzbHN1eGN5In0.ZMBlU4n8bZeiZC2ePpc-rA";

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const lng = 81.633683;
    const lat = 21.237947;
    const succssLoaction = (position) => {
      console.log(position);
    };
    const errorLocation = () => {};
    navigator.geolocation.getCurrentPosition(succssLoaction, errorLocation, {
      enableHighAccuracy: true,
    });

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className="mapdisplay">
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};

export default MapDisplay;
