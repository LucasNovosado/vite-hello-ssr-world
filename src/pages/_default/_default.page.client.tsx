
import ReactDOM from 'react-dom/client';
import React from 'react';
import { PageContextProvider } from '../_app';
import type { PageContextClient } from './types';

export { render };

async function render(pageContext: PageContextClient) {
  const { Page } = pageContext;
  const container = document.getElementById('root')!;
  
  const root = ReactDOM.createRoot(container);
  root.render(
    <PageContextProvider>
      <Page />
    </PageContextProvider>
  );
}
