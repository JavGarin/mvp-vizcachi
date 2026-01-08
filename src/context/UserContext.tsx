import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HistoryItem {
  id: number;
  action: string;
  points: number;
  date: string;
  location?: string;
}

interface UserContextType {
  userName: string; // Added userName
  points: number;
  history: HistoryItem[];
  recycle: (locationName: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userName] = useState("Usuario Demo"); // Mock User Name
  const [points, setPoints] = useState(120); // Initial mock points
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: 1, action: 'Reciclaje de Pilas', points: 10, date: '2024-01-05', location: 'Mall Plaza Copiapó' },
    { id: 2, action: 'Reciclaje de Batería', points: 50, date: '2024-01-07', location: 'Punto Plaza de Armas' },
  ]);

  const recycle = (locationName: string) => {
    const pointsEarned = 10; // Fixed points for demo
    setPoints((prev) => prev + pointsEarned);
    
    const newItem: HistoryItem = {
      id: Date.now(),
      action: 'Entrega de Residuos',
      points: pointsEarned,
      date: new Date().toISOString().split('T')[0],
      location: locationName,
    };
    
    setHistory((prev) => [newItem, ...prev]);
  };

  return (
    <UserContext.Provider value={{ userName, points, history, recycle }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
