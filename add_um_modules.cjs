const fs = require('fs');
let file = fs.readFileSync('src/data.ts', 'utf8');

const umModules = `
  // ============================================
  // MASTER UNTERNEHMENSSTEUERUNG (M.Sc.) MODULES
  // ============================================

  // --- Semester 1 ---
  {
    id: "1202",
    name: "Business Intelligence",
    englishName: "Business Intelligence",
    semester: 1,
    sws: 4,
    crp: 6,
    type: "pflicht",
    responsible: "Prof. Dr. Sven Keller",
    teachers: ["M.A. Alisa Lorenz", "M.A. Manuel Niklos", "Prof. Dr. Sven Keller"],
    contents: "Definition und Einordnung der Thematik, Architekturen von BI-Systemen, Basistechnologien zur Realisierung von BI-Systemen, Phasen zur Datenaufbereitung in BI-Systemen, Anwendung durch Informationsnutzung / Reporting / Dashboards, Erweiterte Anwendungsmöglichkeiten auf Basis von Big Data, vorlesungsbegleitende Bearbeitung einer praxisnahen Fallstudie.",
    objectives: "Die Studierenden können die Bedeutung von Business Intelligence für die datenbasierte Unterstützung von Managemententscheidungen verstehen und die Bedeutung des Fachgebiets für datengetriebene Geschäftsmodelle erklären.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Minuten) mit theoretischem und praktischem Teil" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },
  {
    id: "1206",
    name: "Kommunikation und Selbstmanagement",
    englishName: "Communication and self management",
    semester: 1,
    sws: 4,
    crp: 6,
    type: "pflicht",
    responsible: "Prof. Dr. Martina Höber",
    teachers: ["Prof. Dr. Martina Höber"],
    contents: "Mindset, Mindfulness, Selbststeuerung, Professionelle, wertschätzende Beziehungsgestaltung (auch in Führungssituationen), Wirkung des eigenen verbalen und nonverbalen Kommunikationsverhaltens, Kommunikatives Handwerkszeug auch für den Umgang mit Konflikten.",
    objectives: "Die Studierenden verstehen die Bedeutung von bewusster Haltung und bewusstem Verhalten. Sie haben vertiefte Kenntnisse diverser kommunikatorischer Konzepte sowie von Modellen zur Konfliktentstehung und –handhabung.",
    exams: [
      { type: "Portfolio", weight: 100, details: "3 Tests zu je 20 Minuten, Video Mitarbeitergespräch (10-15 Minuten) incl. fachlicher Reflexion" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },
  {
    id: "1204",
    name: "Jahresabschlusspolitik und -analyse",
    englishName: "Accounting policies and financial statement analysis",
    semester: 1,
    sws: 4,
    crp: 6,
    type: "pflicht",
    responsible: "Prof. Dr. Frank Althoff",
    teachers: ["Prof. Dr. Frank Althoff", "Prof. Dr. Katharina Dillkötter"],
    contents: "Jahresabschlusspolitik: Jahresabschlussarten und -funktionen, Zusammenhang zwischen Handels- und Steuerbilanz. Jahresabschlussanalyse nach HGB und IFRS.",
    objectives: "Bilanzpolitische Gestaltungsmöglichkeiten in Handels- und Steuerbilanz erkennen, selbstständig erarbeiten und ihre Auswirkungen analysieren.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Minuten)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },

  // --- Semester 2 ---
  {
    id: "2202",
    name: "Finanzmanagement",
    englishName: "Financial Management",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "pflicht",
    responsible: "Prof. Dr. Christoph Gallus",
    teachers: ["Prof. Dr. Christoph Gallus", "Prof. Dr. Anke Haag", "Dr. Mark Hill"],
    contents: "Grundlegende Konzepte und Bewertungsmethoden der Finanzwirtschaft. Theoretische Ansätze der Finanzierungstheorie.",
    objectives: "Die Studierenden kennen die wichtigsten Finanzierungstheorien und -methoden und können diese anhand ihrer empirischen Relevanz einordnen und beurteilen.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Minuten)" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },
  {
    id: "2203",
    name: "Internationale Rechnungslegung",
    englishName: "International Financial Accounting",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "pflicht",
    responsible: "Prof. Dr. Frank Althoff",
    teachers: ["Prof. Dr. Frank Althoff", "Prof. Dr. Katharina Dillkötter"],
    contents: "Ziele, Anwendungsbereiche und Rahmenkonzept der internationalen Rechnungslegung nach IAS/IFRS, Jahresabschluss, Konzernabschluss.",
    objectives: "Die Studierenden sollen vertraut sein mit dem Abschluss nach den International Financial Reporting Standards (IFRS).",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Minuten, teilweise oder komplett durch Antwort-Wahl-Verfahren)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },

  // Schwerpunkte - Controlling & Management
  {
    id: "2201",
    name: "Advanced Controlling",
    englishName: "Advanced Controlling",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "schwerpunkt",
    majorId: "cm",
    responsible: "Prof. Dr. Gero Holthoff",
    teachers: ["Prof. Dr. Gero Holthoff"],
    contents: "Concepts of Performance, Value Management, Capital Allocation, Benchmarking, Foreing exchange effects, Communication aspects, Digitalization.",
    objectives: "Die Studierenden können verschiedene Performance-Konzepte verstehen und einordnen. Value Management KPI erklären, berechnen und kritisch reflektieren.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 min.; kann Antwort-Wahl-Verfahren beinhalten)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch/Englisch",
    degrees: ["um_msc"]
  },
  {
    id: "4201",
    name: "Business Analytics im Controlling",
    englishName: "Business Analytics in Management Accounting",
    semester: 3,
    sws: 4,
    crp: 6,
    type: "schwerpunkt",
    majorId: "cm",
    responsible: "Prof. Dr. Gero Holthoff",
    teachers: ["Prof. Dr. Gero Holthoff"],
    contents: "Business Analytics Konzepte, Use Cases für Business Analytics, Business Analytics als Prozess, Datenklassifizierung.",
    objectives: "Die Studierenden können die diversen Business Analytics Konzepte verstehen und einordnen.",
    exams: [
      { type: "Präsentation", weight: 100, details: "Fallstudienbearbeitung und -präsentation (15-20 Minuten)" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch/Englisch",
    degrees: ["um_msc"]
  },

  // Schwerpunkte - Tax & Accounting
  {
    id: "2207",
    name: "Steuerplanung",
    englishName: "Tax Planning",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "schwerpunkt",
    majorId: "ta",
    responsible: "Prof. Dr. Frank Althoff",
    teachers: ["Prof. Dr. Frank Althoff", "Prof. Dr. Katharina Dillkötter", "Prof. Dr. Oliver Voß"],
    contents: "Grundlagen, Ziele und Kriterien der Steuerplanung, Auswirkungen der Unternehmensbesteuerung auf betriebliche Entscheidungen.",
    objectives: "Notwendigkeit, Auswirkungen sowie Risiken der unternehmensbezogenen Steuerplanung im Rahmen der Unternehmenssteuerung erkennen.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Minuten)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },
  {
    id: "2206",
    name: "Case Studies zum Steuerrecht",
    englishName: "Case Studies on Tax Law",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "schwerpunkt",
    majorId: "ta",
    responsible: "Prof. Dr. Oliver Voß",
    teachers: ["Prof. Dr. Frank Althoff", "Prof. Dr. Katharina Dillkötter", "Prof. Dr. Oliver Voß"],
    contents: "Bearbeitung verschiedener Fallstudien (Case Studies) zu ausgewählten Themenkomplexen der Unternehmensbesteuerung.",
    objectives: "Die fachliche und methodische Lösungskompetenz der Studierenden im Hinblick auf Beratungssituationen in der Steuerberatung zur Beurteilung gegebener Sachverhalte zu stärken.",
    exams: [
      { type: "Klausur", weight: 100, details: "Klausur (90 Min.)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },
  {
    id: "4202",
    name: "Ausgewählte Themen Prüfung und Berichterstattung",
    englishName: "Selected Topics Auditing and Reporting",
    semester: 3,
    sws: 4,
    crp: 6,
    type: "schwerpunkt",
    majorId: "ta",
    responsible: "Prof. Dr. Katharina Dillkötter",
    teachers: ["Prof. Dr. Frank Althoff", "Prof. Dr. Katharina Dillkötter", "Prof. Dr. Oliver Voß"],
    contents: "Vertiefung Jahresabschlussprüfung, Qualitätssicherung, Besonderheiten Konzernabschluss-Prüfung, Sonderprüfungen, Prüfung des Lageberichts.",
    objectives: "Die Studierenden können die Bedeutung der Berichterstattung und Prüfung für die Unternehmenssteuerung erklären.",
    exams: [
      { type: "Präsentation", weight: 100, details: "Fallstudienbearbeitung und -präsentation" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch",
    degrees: ["um_msc"]
  },

  // Wahlpflichtmodul - 2205 (the other Wahlpflichtmodule are already added)
  {
    id: "2005",
    name: "Aktuelle Themen der Unternehmenssteuerung",
    englishName: "Current issues in management control",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "wahlpflicht_a",
    responsible: "Prof. Dr. Katharina Dillkötter",
    teachers: ["N.N."],
    contents: "Wechselnde, aktuelle Themen aus dem Bereich der Unternehmenssteuerung.",
    objectives: "Studierende erarbeiten sich eigenständig aktuelle Themen aus dem Bereich der Unternehmenssteuerung/des Managements.",
    exams: [
      { type: "Hausarbeit", weight: 100, details: "Hausarbeit (10-20 Seiten) mit Präsentation (10-15 Minuten)" }
    ],
    hasMc: false,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Deutsch/Englisch",
    degrees: ["um_msc"]
  },
`;

let toReplace = `  }
];`;

let replacement = `  },
${umModules}
];`;

// Also we need to add 'um_msc' to the existing modules: 1001, 1205, 2204_pm, 2008_pm, 1102_pm, 2009_pm, 3013_pm, 4101_pm, 3120, 3121
// Oh wait, 2204 in PM is 2204_pm? Let's check how I replaced them before.
// I appended `_pm` to 2008, 2204, 3013
// 1001 and 1205 don't have _pm suffix because they were not duplicated yet? 
// Wait, 1001, 1205, 1304, 1302, 1305, 2301, 2304, 2305, 2204, 2009, 2007, 2008, 3013, 4301, 4101_pm, 3120, 3121 were added for PM.
// Let's just append "um_msc" to the ones we need using regex or parsing.

// Since I have a small script, I will just add the umModules string before `];`
// Then I will manually update the degrees arrays of existing modules using regex.
file = file.replace(toReplace, replacement);

function addDegreeToModule(fileStr, moduleIdStr) {
  let startIndex = fileStr.indexOf(moduleIdStr);
  if (startIndex !== -1) {
    let degreesIndex = fileStr.indexOf('degrees: [', startIndex);
    if (degreesIndex !== -1 && degreesIndex - startIndex < 1500) {
      let bracketEnd = fileStr.indexOf(']', degreesIndex);
      let degreesStr = fileStr.substring(degreesIndex, bracketEnd + 1);
      if (!degreesStr.includes('"um_msc"')) {
        let newDegreesStr = degreesStr.replace(']', ', "um_msc"]');
        fileStr = fileStr.substring(0, degreesIndex) + newDegreesStr + fileStr.substring(bracketEnd + 1);
      }
    }
  }
  return fileStr;
}

file = addDegreeToModule(file, 'id: "1001"');
file = addDegreeToModule(file, 'id: "1205"');
file = addDegreeToModule(file, 'id: "2204_pm"'); // Let's check if 2204_pm exists. If not, 2204
file = addDegreeToModule(file, 'id: "2204"');
file = addDegreeToModule(file, 'id: "2008_pm"');
file = addDegreeToModule(file, 'id: "2008"');
file = addDegreeToModule(file, 'id: "1102_pm"');
file = addDegreeToModule(file, 'id: "2009"');
file = addDegreeToModule(file, 'id: "3013_pm"');
file = addDegreeToModule(file, 'id: "3013"');
file = addDegreeToModule(file, 'id: "4101_pm"');
file = addDegreeToModule(file, 'id: "3120"');
file = addDegreeToModule(file, 'id: "3121"');


fs.writeFileSync('src/data.ts', file);
console.log("UM Modules added!");
