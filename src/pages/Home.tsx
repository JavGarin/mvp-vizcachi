import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';


const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface pt-20 pb-32 lg:pt-32 lg:pb-40">
        {/* Background blobs for premium feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
        </div>

        <Container className="relative z-10 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">MVP 1.0 Disponible</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-8 leading-tight">
                Recicla pilas y baterías, <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">gana puntos</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                Únete a la revolución del reciclaje inteligente. Vizcachi conecta tus residuos con premios reales. 
                Ayuda al planeta y obtén beneficios en tus comercios favoritos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                    onClick={() => navigate('/register-demo')}
                    className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/40 focus:ring-4 focus:ring-primary/20 transition-all transform hover:-translate-y-1"
                >
                    Probar Demo
                </button>
                 <button 
                    onClick={() => navigate('/about')} 
                    className="hidden w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-text-primary border border-gray-200 text-lg font-semibold rounded-xl transition-all"
                >
                    Saber más
                </button>
            </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background relative">
        <Container>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Encuentra Puntos Cercanos</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Nuestro mapa interactivo te muestra los contenedores inteligentes Vizcachi más próximos a tu ubicación en tiempo real.
                    </p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Gana Puntos Reales</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Escanea el código QR en el contenedor y recibe puntos instantáneos en tu billetera digital por cada entrega válida.
                    </p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-surface p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">Canjea y Ahorra</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Accede al Marketplace y canjea tus puntos por descuentos en transporte, comida y productos sustentables.
                    </p>
                </div>
            </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
