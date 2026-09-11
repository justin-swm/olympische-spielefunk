# Olympische Spiele – React-Demo

Eine kleine React-Demo mit Funktionskomponenten für den Einstieg in die Webentwicklung.

## Funktionen

- Sportler mit Alter, Disziplin und Medaillen anzeigen.
- Gold-, Silber- und Bronzemedaillen über Plus- und Minus-Schaltflächen ändern.
- Nach Gold, bei Gleichstand nach Silber und Bronze sortieren.
- Einen einfachen Zähler als Beispiel für State und Klickereignisse zeigen.

Die Daten stehen im Quellcode. Änderungen werden beim Neuladen zurückgesetzt. Die Demo verwendet keine Datenbank.

## Voraussetzungen

- Node.js mit npm (die Demo wurde mit Node.js 22.18.0 und npm 10.9.3 geprüft).
- Einen Webbrowser und zum Bearbeiten einen Code-Editor, beispielsweise Visual Studio Code.

Die vorhandene Demo nutzt React 18 und Create React App (`react-scripts` 5). React wird als Projektpaket installiert.

## Lokal starten

1. Das Repository klonen oder als ZIP herunterladen und entpacken.
2. Im Projektordner ein Terminal öffnen. Dort muss `package.json` liegen.
3. Die Projektpakete installieren:

   ```sh
   npm install
   ```

4. Die Demo starten:

   ```sh
   npm start
   ```

5. Im Browser http://localhost:3000 öffnen.

`Strg + C` beendet den Entwicklungsserver. Ist Port 3000 belegt, den dort noch laufenden Entwicklungsserver zuerst beenden.

Die Installation ist nicht vor jedem Start nötig. `package-lock.json` bleibt im Projekt: Sie hält die aufgelösten Paketversionen fest. Zum normalen Start weder diese Datei noch `node_modules` löschen.

## Aufbau

| Datei | Aufgabe |
| --- | --- |
| `public/index.html` | Enthält das HTML-Element `root` als Einstiegspunkt. |
| `src/index.jsx` | Verbindet React mit diesem Element und rendert `App`. |
| `src/App.jsx` | Enthält die Überschrift, den Zähler und `SportsTable`. |
| `src/SportsTable.jsx` | Verwaltet die Sportler im State, aktualisiert Medaillen und erzeugt die Tabellenzeilen. |
| `src/AthleteRow.jsx` | Zeigt einen Sportler und ruft bei Klicks die übergebene Aktualisierungsfunktion auf. |

## Weitere Befehle

| Befehl | Zweck |
| --- | --- |
| `npm run build` | Erstellt die Dateien zur Veröffentlichung im Ordner `build`. |
| `npm install PAKETNAME` | Fügt ein zusätzliches Paket hinzu. |
| `npm uninstall PAKETNAME` | Entfernt ein direkt eingebundenes Paket aus dem Projekt. |

`PAKETNAME` durch den gewünschten Paketnamen ersetzen.

## Dateien im Repository

`src`, `public`, `package.json`, `package-lock.json`, `.gitignore` und diese README gehören ins Repository. Die lokal installierten Pakete in `node_modules` und die erzeugten Dateien in `build` sind durch `.gitignore` ausgeschlossen.

Die fest eingetragene Entwicklungsabhängigkeit `typescript` in Version 4.9.5 gehört zur bestehenden Werkzeugkonfiguration und behebt einen zuvor aufgetretenen ESLint/Jest-Ladefehler.
