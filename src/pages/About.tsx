import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-primary">Acerca de Vizcachi</h2>
      <p className="text-lg mb-6">
        Vizcachi es una demostración de una aplicación de reciclaje de pilas y baterías en el hogar.
        Utiliza datos simulados y muestra un mapa interactivo con los puntos de recolección.
      </p>
    </div>
  );
};

export default About;
