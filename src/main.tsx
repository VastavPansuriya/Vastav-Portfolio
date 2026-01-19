import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";
import "./styles/responsive.css";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);