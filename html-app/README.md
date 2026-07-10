# THM Betriebswirtschaft B.Sc. - Standalone HTML-Version (Gießen PO 2025)

Diese Auskopplung stellt die komplette Anwendung als **regulären, selbstständigen HTML-Ordner** dar – völlig unabhängig von Node.js, React oder Entwicklungsservern.

## 🚀 Wie starte ich die App?

1. **Öffnen**: Doppelklicken Sie einfach auf die Datei `index.html` in diesem Ordner, um das Dashboard direkt in einem beliebigen Webbrowser (Chrome, Firefox, Safari, Edge) zu öffnen.
2. **Serverlos**: Es ist keine Installation (`npm install`), kein Node.js und kein lokaler Entwicklungsserver erforderlich!

## 📦 Wie kann ich diesen Ordner herunterladen?

Sie können das gesamte Projekt direkt in Ihr lokales System exportieren:
1. Klicken Sie in der AI-Studio-Benutzeroberfläche oben rechts auf das **Zahnrad-Symbol (Settings)**.
2. Wählen Sie **"Export to ZIP"** oder **"Export to GitHub"**.
3. Nach dem Entpacken befindet sich der einsatzbereite Ordner `html-app/` auf Ihrem Computer.

## 🛠️ Aufbau des Ordners

* **`index.html`**: Das visuelle Grundgerüst mit dem Studienplaner-Konfigurator, den Semestergittern, dem didaktischen Reform-Radar, dem Schwerpunkte-Explorer sowie den Detail-Modals.
* **`data.js`**: Die komplette Gießener PO 2025 Moduldatenbank (inklusive aller Leistungspunkte, Modulverantwortlichen, Prüfungsverhältnisse und MC-Hinweise) sowie die maßgeschneiderten **didaktischen Reformvorschläge** für jedes einzelne Modul.
* **`app.js`**: Der interaktive Client-Controller. Er berechnet in Echtzeit gewählte Schwerpunkte, summiert Leistungspunkte, validiert die Gießener Wahlpflicht-Regeln (z.B. max. 2 Module aus Kategorie B), steuert die Suchfilter und zeichnet die interaktiven Diagramme.

## 🎨 Verwendete Bibliotheken (über CDN geladen)

Um die Anwendung offline-fähig, performant und federleicht zu halten, werden folgende State-of-the-Art Tools direkt eingebunden:
* **Tailwind CSS**: Für das moderne, kontrastreiche Schiefergrau- und Blau-Design.
* **Chart.js**: Für die ansprechenden, animierten Kreis- und Balkendiagramme der Prüfungsformen und Semestertrends.
* **Lucide Icons**: Für gestochen scharfe Vektor-Symbole.
