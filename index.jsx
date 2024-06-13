import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import { HelmetProvider } from 'react-helmet-async';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

