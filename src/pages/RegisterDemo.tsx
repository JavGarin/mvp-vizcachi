import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';

const RegisterDemo: React.FC = () => {
    const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to register (mock)
    navigate('/demo');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <Container className="max-w-md w-full">
        <div className="bg-surface p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-text-primary mb-2 text-center">Únete a la Demo</h2>
            <p className="text-text-secondary text-center mb-8">Ingresa tus datos para empezar a reciclar.</p>
            
            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="tu@email.com" required />
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Nombre</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Tu nombre" required />
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl transition-all shadow-lg hover:shadow-primary/30 active:scale-[0.98]">
                    Ingresar a la Demo
                </button>
            </form>
            
             <p className="mt-6 text-center text-sm text-text-secondary">
                ¿Ya tienes cuenta? <span className="text-primary font-medium cursor-pointer hover:underline">Iniciar Sesión</span>
            </p>
        </div>
      </Container>
    </div>
  );
};

export default RegisterDemo;
