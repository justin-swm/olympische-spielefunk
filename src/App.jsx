import React, { useState } from 'react';
import SportsTable from './SportsTable';
import './App.css';

function App() {
  // x ist der aktuelle Zählerstand, setX aktualisiert ihn.
  // useState(1) legt den Startwert auf 1 fest.
  const [x, setX] =useState(1)

  // Wird beim Klick auf den Button ausgeführt.
  function countUp(){
    // Erhöht den bisherigen Wert um 1 und löst eine neue Darstellung aus.
    setX(prevX => prevX + 1); // Arrow Function (Kurzschreibweise für eine Funktion)
  }


  return (
    <div className="App">
      {/* Zeigt den aktuellen Wert von x im Text an. */}
      <p >Zählerstand: {x}</p>

      {/* Übergibt countUp als Funktion, die beim Klicken ausgeführt wird. */}
      <button onClick={countUp}>hochzählen</button>

      
      <h1>Athletes Table</h1>
      {/* Bindet die Komponente SportsTable ein*/}
      <SportsTable />
    </div>
  );
}

// Exportiert App als Standardexport, damit andere Dateien die Komponente importieren können.
export default App;

