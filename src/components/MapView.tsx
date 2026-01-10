import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { mockLocations } from '../data/mockLocations';
import L from 'leaflet';
import { useUser } from '../context/UserContext';
import { useToast } from '../context/ToastContext';

// Fix for default marker icon in React Leaflet
// delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const center: [number, number] = [-27.3665, -70.3323];  // Copiapó, Chile

const MapView: React.FC = () => {
    const { recycle } = useUser();
    const { showToast } = useToast();

    const handleConfirm = (locationName: string) => {
        recycle(locationName);
        showToast(`¡Entrega confirmada en ${locationName}! (+10 puntos)`, 'success');
    };

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-xl border-2 border-surface">
      <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockLocations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg mb-1">{loc.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{loc.address}</p>
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div 
                        className={`h-2.5 rounded-full ${loc.capacity > 80 ? 'bg-red-500' : loc.capacity > 50 ? 'bg-yellow-400' : 'bg-green-500'}`} 
                        style={{ width: `${loc.capacity}%` }}
                      ></div>
                   </div>
                   <span className="text-xs font-semibold">{loc.capacity}%</span>
                </div>
                <button 
                  onClick={() => handleConfirm(loc.name)}
                  className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors shadow-sm"
                >
                  Confirmar entrega
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
