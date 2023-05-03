import type { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resolve = (p: string) => path.resolve(__dirname, p);

const getStyleSheets = async () => {
  try {
    const assetPath = resolve('dist/assets');
    const files = await fs.readdir(assetPath);
    const cssAssets = files.filter((l) => l.endsWith('.css'));
    const allContent: string[] = [];
    for (const asset of cssAssets) {
      const content = await fs.readFile(path.join(assetPath, asset), 'utf-8');
      allContent.push(`<style type="text/css">${content}</style>`);
    }
    return allContent.join('\n');
  } catch {
    return '';
  }
};

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  const requestHandler = express.static(resolve('assets'));
  app.use(requestHandler);
  app.use('/assets', requestHandler);
  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    const stylesheets = await getStyleSheets();
    try {
      // 1. Read index.html
      let template = await fs.readFile(resolve('index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);
      const html = template.replace(`<!--head-->`, stylesheets);

      const page = html.split('<!--app-html-->');

      const devBuildPath = path.join(__dirname, './src/client/entry-server.tsx');
      const { renderApp } = await vite.ssrLoadModule(devBuildPath);

      const { pipe } = await renderApp(url, {
        onShellReady() {
          res.write(page[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(page[1]);
          res.end();
        },

        onError(e: Error) {
          console.error(e);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  const port = process.env.PORT || 7456;
  app.listen(Number(port), () => {
    console.log(`App is listening on http://localhost:${port}`);
  });
}

createServer();
