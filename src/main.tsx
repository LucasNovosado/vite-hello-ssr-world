
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';

// Componente de fallback simples para desenvolvimento
const DevFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <h1 className="text-4xl font-poppins font-medium text-black text-center">
      Hello World
    </h1>
  </div>
);

// Em desenvolvimento, renderiza diretamente
if (typeof window !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<DevFallback />);
  }
}
