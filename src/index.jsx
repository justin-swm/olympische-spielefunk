// Importiert React und ReactDOM für die Darstellung im Browser.
import React from 'react';
import ReactDOM from 'react-dom/client';
// Lädt die allgemeinen CSS-Regeln und die Hauptkomponente App.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Verbindet React mit dem HTML-Element mit der ID "root".
const root = ReactDOM.createRoot(document.getElementById('root'));
// Stellt App dar; StrictMode aktiviert zusätzliche Prüfungen während der Entwicklung.
root.render(
 <React.StrictMode>
    <App />
</React.StrictMode>
);

// Gibt Leistungsmetriken in der Browserkonsole aus (für die Darstellung nicht nötig).
reportWebVitals(console.log);
