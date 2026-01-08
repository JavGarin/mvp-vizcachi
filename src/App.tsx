import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import MapPage from './pages/Map';
import Dashboard from './pages/Dashboard';
import RegisterDemo from './pages/RegisterDemo';
import ScanPage from './pages/Scan'; // Import Scan Page
import Header from './components/Header';
import Container from './components/Container';
import DisclaimerBanner from './components/DisclaimerBanner';
// import About from './pages/About'; // Removed for now or keep if needed

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-background flex flex-col pb-12"> {/* Added padding for banner */}
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register-demo" element={<RegisterDemo />} />
              <Route path="/demo" element={<MapPage />} />
              <Route path="/scan" element={<ScanPage />} /> {/* Add Scan Route */}
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          {/* Simple Footer */}
          <footer className="bg-surface py-6 border-t border-gray-200 mt-auto">
             <Container>
                <p className="text-center text-text-secondary text-sm">© 2024 Vizcachi - Reciclaje Inteligente</p>
             </Container>
          </footer>
          <DisclaimerBanner />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
