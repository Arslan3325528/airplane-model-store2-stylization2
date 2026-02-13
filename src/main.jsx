// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

// import App from './App.jsx'; //! ванільний CSS
// import { App } from './components/App/App.jsx'; //! CSS-модулі
import { App } from '@/components/App/App.jsx' //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

createRoot(document.getElementById('root')).render(
  // <StrictMode>.
    <BrowserRouter basename="/airplane-model-store2-stylization2">
      <App />
    </BrowserRouter>
  // </StrictMode >
);

