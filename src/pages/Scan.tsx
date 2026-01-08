import React, { useState, useRef } from 'react';
import Container from '../components/Container';


// Using inline SVGs to match Home.tsx approach and strictly avoid import errors if heroicons isn't available.
const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
);

const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const Scan: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setResult(null); // Reset result on new image
        }
    };

    const handleAnalyze = () => {
        if (!selectedImage) return;

        setIsAnalyzing(true);
        // Simulate API call delay
        setTimeout(() => {
            setIsAnalyzing(false);
            setResult('Pila (Tipo AA)');
        }, 2000);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
             const file = e.dataTransfer.files[0];
             // Simple validation for image types could go here
             if(file.type.startsWith('image/')) {
                 const imageUrl = URL.createObjectURL(file);
                 setSelectedImage(imageUrl);
                 setResult(null);
             }
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] py-12 bg-background">
            <Container className="max-w-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Escáner de Residuos</h1>
                    <p className="text-text-secondary text-lg">Sube una foto de tu residuo para clasificarlo automáticamente.</p>
                </div>

                <div className="bg-surface rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="p-8">
                        {/* Image Upload Area */}
                        {!selectedImage ? (
                            <div 
                                className="border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => fileInputRef.current?.click()}
                                onDragOver={(e) => e.preventDefault()}
                                onDrop={handleDrop}
                            >
                                <UploadIcon />
                                <p className="mt-4 text-lg font-medium text-text-primary">Haz clic para subir o arrastra una imagen</p>
                                <p className="text-sm text-text-secondary mt-2">Soporta JPG, PNG</p>
                            </div>
                        ) : (
                            <div className="relative rounded-2xl overflow-hidden bg-black/5 shadow-inner">
                                <img src={selectedImage} alt="Preview" className="w-full h-64 md:h-80 object-contain mx-auto" />
                                <button 
                                    onClick={() => { setSelectedImage(null); setResult(null); }}
                                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm hover:bg-white text-gray-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleImageChange} 
                            accept="image/*" 
                            className="hidden" 
                        />

                        {/* Analysis Action */}
                        <div className="mt-8">
                            <button
                                onClick={handleAnalyze}
                                disabled={!selectedImage || isAnalyzing || result !== null}
                                className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all transform flex items-center justify-center gap-3
                                    ${!selectedImage 
                                        ? 'bg-gray-300 cursor-not-allowed' 
                                        : isAnalyzing 
                                            ? 'bg-primary/70 cursor-wait'
                                            : result 
                                                ? 'bg-green-500 cursor-default'
                                                : 'bg-primary hover:bg-primary-dark hover:-translate-y-1 shadow-lg hover:shadow-primary/30'
                                    }`}
                            >
                                {isAnalyzing ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analizando...
                                    </>
                                ) : result ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                        Análisis Completado
                                    </>
                                ) : (
                                    'Analizar Residuo'
                                )}
                            </button>
                        </div>
                    </div>
                    
                    {/* Results Section */}
                    {result && (
                        <div className="bg-green-50/50 border-t border-green-100 p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <BoltIcon />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Material Identificado</h3>
                                    <p className="text-2xl font-bold text-green-700 mb-2">{result}</p>
                                    <p className="text-sm text-gray-600">
                                        Este residuo es apto para reciclaje. Puedes depositarlo en el punto de acopio más cercano.
                                    </p>
                                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 mr-1">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                                        </svg>
                                        Clasificación simulada para demo MVP
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Scan;
