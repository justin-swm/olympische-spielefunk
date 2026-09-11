import React from 'react';
import PropTypes from 'prop-types';

// Nimmt die von SportsTable übergebene Prop athleteRowProps entgegen.
function AthleteRow({ athleteRowProps }) {
  // Objekt-Destrukturierung: Liest Sportler, Listenposition und Rückruffunktion aus.
  const { athlete, index, updateMedal } = athleteRowProps;

  // Ruft handleUpdateMedal aus SportsTable auf: gewählte Medaille für diese Position +1.
  const handleIncrement = (medal) => {
    updateMedal(index, medal, 1);
  };

  // Gleicher Aufruf mit -1 zum Verringern der Medaillenzahl.
  const handleDecrement = (medal) => {
    updateMedal(index, medal, -1);
  };

  // Gibt eine einzelne Tabellenzeile zurück.
  return (
    <tr>
      {/* Setzt die Eigenschaften des Sportlers in die jeweiligen Spalten ein. */}
      <td>{athlete.name}</td>
      <td>{athlete.age}</td>
      <td>{athlete.discipline}</td>
      <td>
        {/* onClick ruft die Funktion erst beim Klicken auf; 'gold' bestimmt die Medaillenart. */}
        <button onClick={() => handleDecrement('gold')}>-</button>
        {athlete.gold}
        <button onClick={() => handleIncrement('gold')}>+</button>
      </td>
      <td>
        <button onClick={() => handleDecrement('silver')}>-</button>
        {athlete.silver}
        <button onClick={() => handleIncrement('silver')}>+</button>
      </td>
      <td>
        <button onClick={() => handleDecrement('bronze')}>-</button>
        {athlete.bronze}
        <button onClick={() => handleIncrement('bronze')}>+</button>
      </td>
      <td>
        {/* Berechnet die Gesamtzahl direkt aus den Medaillenwerten, ohne eigenen State. */}
        {athlete.bronze + athlete.silver +athlete.gold}
      </td>
    </tr>
  );
}

// Prüft in dieser React-18-App die Props während der Entwicklung und warnt bei Abweichungen.
// shape beschreibt die Objekteigenschaften; isRequired kennzeichnet Pflichtangaben.
AthleteRow.propTypes = {
  athleteRowProps: PropTypes.shape({
    athlete: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      discipline: PropTypes.string.isRequired,
      gold: PropTypes.number.isRequired,
      silver: PropTypes.number.isRequired,
      bronze: PropTypes.number.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    updateMedal: PropTypes.func.isRequired
  }).isRequired
};

// Exportiert die Komponente, damit SportsTable sie importieren kann.
export default AthleteRow;

