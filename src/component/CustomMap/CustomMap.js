import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export default function CustomMap() {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 26.22017773045157, lng: 33.130859375000014 }}
      >
        <Marker
          position={{ lat: 26.22017773045157, lng: 33.130859375000014 }}
        />
      </GoogleMap>
    ))
  );
  return (
    <div>
      <MapWithAMarker
        googleMapURL=" https://maps.googleapis.com/maps/api/js?key=AIzaSyD017M6hIYH7wqssOlEDzwzKApuA6VrAVE&v=beta&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    
    </div>
  );
}
