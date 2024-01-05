import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ThemeContextProvider from './context/ThemeContext.tsx';
import LogicContextProvider from './context/LogicContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LogicContextProvider>
        <App />
      </LogicContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
