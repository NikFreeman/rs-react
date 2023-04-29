// import type { Request, Response, NextFunction } from 'express';
// import fs from 'fs/promises';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import express from 'express';
// import { createServer as createViteServer } from 'vite';
// import renderApp from './dist/server/entry-server';

// const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const resolve = (p: string) => path.resolve(__dirname, p);

// const getStyleSheets = async () => {
//   try {
//     const assetPath = resolve('dist/assets');
//     const files = await fs.readdir(assetPath);
//     const cssAssets = files.filter((l) => l.endsWith('.css'));
//     const allContent: string[] = [];
//     for (const asset of cssAssets) {
//       const content = await fs.readFile(path.join(assetPath, asset), 'utf-8');
//       allContent.push(`<style type="text/css">${content}</style>`);
//     }
//     return allContent.join('\n');
//   } catch {
//     return '';
//   }
// };

// async function createServer(isProd = process.env.NODE_ENV === 'production') {
//   const app = express();
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom',
//     logLevel: isTest ? 'error' : 'info',
//   });
//   app.use(vite.middlewares);
//   const requestHandler = express.static(resolve('assets'));
//   app.use(requestHandler);
//   app.use('/assets', requestHandler);

//   const stylesheets = getStyleSheets();
//   app.use('*', async (req: Request, res: Response, next: NextFunction) => {
//     const url = req.originalUrl;
//     console.log(url);
//     // try {
//       // let template = await fs.readFile(
//       //   isProd ? resolve('dist/client/index.html') : resolve('index.html'),
//       //   'utf-8'
//       // );
//       const template = await fs
//         .readFile(path.resolve(__dirname, './dist/client/index.html'))
//         .toString();

//       const parts = template.split('not rendered');
//       app.use((req, res) => {
//         res.write(parts[0]);
//         const stream = renderApp(req.url, {
//           onShellReady() {
//             stream.pipe(res);
//           },
//           onShellError() {
//             // do error handling
//           },
//           onAllReady() {
//             // last thing to write
//             res.write(parts[1]);
//             res.end();
//           },
//           onError(err) {
//             console.error(err);
//           },
//         });
//       });
//       // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
//       //    also applies HTML transforms from Vite plugins, e.g. global preambles
//       //    from @vitejs/plugin-react
//       // template = await vite.transformIndexHtml(url, template);

//       // 3. Load the server entry. vite.ssrLoadModule automatically transforms
//       //    your ESM source code to be usable in Node.js! There is no bundling
//       //    required, and provides efficient invalidation similar to HMR.
//       // const productionBuildPath = path.join(__dirname, './dist/server/entry-server.mjs');
//       // const devBuildPath = path.join(__dirname, './src/client/entry-server.tsx');
//       // const { render } = await vite.ssrLoadModule(isProd ? productionBuildPath : devBuildPath);

//       // 4. render the app HTML. This assumes entry-server.js's exported `render`
//       //    function calls appropriate framework SSR APIs,
//       //    e.g. ReactDOMServer.renderToString()
//       // const appHtml = await render(url);
//       // const cssAssets = isProd ? '' : await stylesheets;

//       // 5. Inject the app-rendered HTML into the template.
//       // const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, cssAssets);

//       // 6. Send the rendered HTML back.
//       // res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
//      } catch (e: unknown) {
//       // !isProd && vite.ssrFixStacktrace(e as Error);
//       console.log(e);
//       // If an error is caught, let Vite fix the stack trace so it maps back to
//       // your actual source code.
//       // vite.ssrFixStacktrace(e as Error);
//       next(e);
//     }
//   });
//   const port = process.env.PORT || 7456;
//   app.listen(Number(port), '0.0.0.0', () => {
//     console.log(`App is listening on http://localhost:${port}`);
//   });
// }

// createServer();
