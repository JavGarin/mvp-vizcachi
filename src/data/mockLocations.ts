export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  capacity: number;
  address: string;
}

export const mockLocations: Location[] = [
  {
    id: 1,
    name: "Punto Plaza de Armas",
    lat: -27.3668,
    lng: -70.3320,
    capacity: 85,
    address: "Colipí 500, Copiapó"
  },
  {
    id: 2,
    name: "Estación Parque Schneider",
    lat: -27.3735,
    lng: -70.3398,
    capacity: 30,
    address: "Av. Copayapu s/n"
  },
  {
    id: 3,
    name: "Mall Plaza Copiapó",
    lat: -27.3887,
    lng: -70.3377,
    capacity: 60,
    address: "Maipú 110"
  },
  {
    id: 4,
    name: "Universidad de Atacama",
    lat: -27.3579,
    lng: -70.3521,
    capacity: 15,
    address: "Av. Copayapu 485"
  },
  {
    id: 5,
    name: "Sede El Palomar",
    lat: -27.3956,
    lng: -70.3235,
    capacity: 95,
    address: "Av. El Palomar 1200"
  }
];