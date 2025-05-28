
import React, { ReactNode } from 'react';
import '../index.css';

export { PageContextProvider };

function PageContextProvider({ children }: { children: ReactNode }) {
  return (
    <div className="font-poppins">
      {children}
    </div>
  );
}
