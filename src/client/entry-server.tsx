import React from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../routes/routes';
import '../index.css';

export function renderApp(url: string, opts: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </React.StrictMode>,
    opts
  );
}
