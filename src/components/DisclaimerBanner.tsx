import React from 'react';

const DisclaimerBanner: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-50 border-t border-yellow-200 p-2 z-[100] shadow-md-up">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs md:text-sm text-yellow-800 font-medium">
          ⚠️ Esta es una web demo de Vizcachi. Las funcionalidades mostradas son simuladas y forman parte de un MVP para fines de validación y financiamiento.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
