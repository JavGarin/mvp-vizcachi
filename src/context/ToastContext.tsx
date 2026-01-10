import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import Toast, { ToastType } from '../components/Toast';

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
    message: '',
    type: 'success',
    visible: false,
  });

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    setToast({ message, type, visible: true });
    // Auto-hide logic is handled in the Toast component or here if preferred. 
    // Implementing it in the component allows for animation control on exit.
    // For simplicity, we can just let the Toast component handle its own lifetime or 
    // simply set visible to false after a timeout here if we controlled it fully.
    // However, to allow animation out, we usually need a state that triggers the exit animation.
    
    // Simple approach: Close automatically after 3 seconds
    setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  const hideToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={hideToast} 
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
