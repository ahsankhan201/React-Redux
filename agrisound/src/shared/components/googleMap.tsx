
import React from 'react';
import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { API_KEY } from "../constants/mapApi";
const containerStyle = {
  width: '1350px',
  height: '500px'
};
const center = {
  lat: 0,
  lng: -180
}
const position = {
  lat: 37.772,
  lng: -122.214
}

function GoogleMapComp() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <Marker
      position={position}
    />
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapComp)