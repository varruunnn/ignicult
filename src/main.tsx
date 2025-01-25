import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import App from './App';
import './index.css';

const activeChain = "ethereum"; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);