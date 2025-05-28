
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { PageContextProvider } from '../_app';
import type { PageContextServer } from './types';

export { render };

async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;
  
  const pageHtml = ReactDOMServer.renderToString(
    <PageContextProvider>
      <Page />
    </PageContextProvider>
  );

  const documentHtml = `<!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SSR Vite Project</title>
        <meta name="description" content="Projeto Vite com SSR" />
        
        <!-- Google Fonts - Poppins -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background-color: white; color: black;">
        <div id="root">${pageHtml}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which will be serialized and passed to the browser
    }
  };
}
