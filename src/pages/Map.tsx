import React from 'react';
import MapView from '../components/MapView';

const MapPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-primary">Mapa de Recolección</h2>
      <MapView />
    </div>
  );
};

export default MapPage;
