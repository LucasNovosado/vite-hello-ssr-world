
import React from 'react';
import { PageContextProvider } from '../_app';

export { Page };

function Page() {
  return (
    <PageContextProvider>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-poppins font-medium text-black text-center">
          Hello World
        </h1>
      </div>
    </PageContextProvider>
  );
}
