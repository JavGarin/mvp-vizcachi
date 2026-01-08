import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-surface text-gray-100 p-4 shadow-md">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="hover:text-primary transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/mapa" className="hover:text-primary transition">
            Mapa
          </Link>
        </li>
        <li>
          <Link to="/acerca" className="hover:text-primary transition">
            Acerca
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
