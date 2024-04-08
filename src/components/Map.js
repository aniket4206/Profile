import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { Button } from 'react-bootstrap';

function Map({ workouts, addWorkout }) {
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);

  useEffect(() => {
    const newMap = L.map('map').setView([0, 0], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(newMap);

    setMap(newMap);

    return () => {
      newMap.remove();
    };
  }, []);
 
  const locateUser = () => {
    map.locate({ setView: true });
  };

  useEffect(() => {
    if (map) {
      map.on('locationfound', handleLocationFound);
    }

    return () => {
      if (map) {
        map.off('locationfound', handleLocationFound);
      }
    };
  }, [map]);

  const handleLocationFound = (e) => {
    if (userMarker) {
      userMarker.setLatLng(e.latlng);
    } else {
      const marker = L.marker(e.latlng).addTo(map);
      setUserMarker(marker);
    }
  };

  return (
    <div>
      
      <div id="map" style={{ height: '400px', margin: '20px', top: '30px' }}></div>
      <Button onClick={locateUser} style={{ margin: '20px'}} variant="secondary">Locate User</Button>
      
    </div>
  );
}

export default Map;
