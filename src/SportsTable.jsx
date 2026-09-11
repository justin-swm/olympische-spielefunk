import React, { useState } from 'react';
import AthleteRow from './AthleteRow';


// Gibt eine neue Liste zurück: Ändert beim Sportler am index die gewählte Medaille um change (mindestens 0).
function updateMedal(athletes, index, medal, change) {
  return athletes.map((athlete, i) => {
    if (i === index) {
      return { ...athlete, [medal]: Math.max(0, athlete[medal] + change) };
    }
    return athlete;
  });
}


// Sortiert die übergebene Liste absteigend nach Gold, bei Gleichstand nach Silber und dann Bronze.
function sortAthletes(athletes) {
  return athletes.sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);
}

// Hauptkomponente SportsTable
function SportsTable() {
  // Der State enthält ein JavaScript-Array mit Objekten.
  // athletes ist die aktuelle Liste, setAthletes aktualisiert sie; das Array legt die Startwerte fest.
  const [athletes, setAthletes] = useState([
    { name: "Lukas Märtens", age: 22, discipline: "400m Freistil" ,gold:0,silver:0,bronze:0},
    { name: "Florian Wellbrock", age: 27, discipline: "10km Freistil" ,gold:0,silver:0,bronze:0},
    { name: "Josha Salchow", age: 25, discipline: "100m Freistil" ,gold:0,silver:0,bronze:0},
    { name: "Summer MCINTOSH", age: 17, discipline: "400m Lagen" ,gold:0,silver:0,bronze:0},
    {name: "Klaus Maus",age:20,discipline: "Treibgut",gold:0,silver:0,bronze:0}
  ]);

  
  // Übernimmt die von updateMedal berechnete Liste als neuen State und löst eine neue Darstellung aus.
  const handleUpdateMedal = (index, medal, change) => {
    setAthletes(prevAthletes => updateMedal(prevAthletes, index, medal, change));
  };

  // Wird bei jeder Darstellung erneut berechnet – auch nach einer State-Änderung.
  const sortedAthletes = sortAthletes(athletes);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Discipline</th>
            <th>Gold</th>
            <th>Silver</th>
            <th>Bronze</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* map erzeugt für jeden Sportler eine Zeile; index ist seine Listenposition (ab 0). */}
          {/* key dient React zur Zuordnung; athleteRowProps übergibt Sportler, Position und Änderungsfunktion. */}
          {sortedAthletes.map((athlete, index) => (
            <AthleteRow
              key={index}
              athleteRowProps={{ athlete, index, updateMedal: handleUpdateMedal }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SportsTable;

