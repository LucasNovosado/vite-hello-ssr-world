
// Arquivo de servidor para produção SSR
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  
  // Criar servidor Vite em modo middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  app.use(vite.ssrLoadModule);
  
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      
      // Renderizar página
      const template = `<!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SSR Vite Project</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Poppins', sans-serif; background-color: white; color: black;">
            <div id="root">
              <div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background-color: white;">
                <h1 style="font-size: 2.25rem; font-family: 'Poppins', sans-serif; font-weight: 500; color: black; text-align: center; margin: 0;">
                  Hello World
                </h1>
              </div>
            </div>
          </body>
        </html>`;
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      console.error(e);
      res.status(500).end('Internal Server Error');
    }
  });
  
  return app;
}

createServer().then(app => {
  app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
  });
});
