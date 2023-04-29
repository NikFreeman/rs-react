import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import AppRoutes from '../routes/routes';
import '../index.css';

// export default function renderApp(url: string,/') {
//   return renderToPipeableStream(
//     <React.StrictMode>
//       <StaticRouter location={url}>
//         <AppRoutes />
//       </StaticRouter>
//     </React.StrictMode>
//   );
// }
