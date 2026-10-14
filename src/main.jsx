import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import App from './App.jsx'; //! ванільний CSS
// import { App } from './components/App/App.jsx'; //! CSS-модулі
import { App } from '@/components/App/App.jsx' //! CSS-модулі --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

//todo: var.1  Підключення Normalize (npm i normalize.css)
// import 'normalize.css';  //! var.1 підключення тільки Normalize
// import './index1.css'; //! підключення тільки Reset CSS

//todo: var.2  Підключення Normalize (npm i -D postcss-normalize + postcss.config.js)
import './index.css'; //! підключення Normalize і Reset CSS


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/airplane-model-store2-stylization2">
      <App />
    </BrowserRouter>
  </StrictMode >
);

