const fs = require('fs');
let file = fs.readFileSync('src/data.ts', 'utf8');

// 1. Remove "pm_msc" from 1107 (Digitales Marketing)
let target1107 = `degrees: ["dim_digital_msc", "dim_international_msc", "pm_msc"]`;
let replacement1107 = `degrees: ["dim_digital_msc", "dim_international_msc"]`;
file = file.replace(target1107, replacement1107);

// 2. Add 1102_pm (International Marketing)
const module1102_pm = `  {
    id: "1102_pm",
    name: "International Marketing",
    englishName: "International Marketing",
    semester: 2,
    sws: 4,
    crp: 6,
    type: "wahlpflicht_a",
    responsible: "Prof. Dr. Juliane Staubach",
    teachers: ["Prof. Dr. Juliane Staubach", "Prof. Dr. Stefanie Wannow"],
    contents: "Global marketing environment, goals and role of international marketing. Internationalization strategies, standardization vs differentiation, global branding.",
    objectives: "Deep, advanced and comprehensive understanding of aspects related to international marketing. Ability to analyze situations and recommend actions.",
    exams: [
      { type: "Klausur", weight: 100, details: "Exam (can include Multiple Choice)" }
    ],
    hasMc: true,
    workloadTotal: 180,
    workloadPresence: 60,
    workloadSelfStudy: 120,
    language: "Englisch",
    degrees: ["pm_msc"]
  },`;

// insert before the end of the file where pm_msc modules are
file = file.replace('  // --- Semester 3 ---', module1102_pm + '\n\n  // --- Semester 3 ---');

// 3. Fix duplicate IDs for PM modules
// The duplicates are at the very bottom (in the MASTER PERSONALMANAGEMENT section)
let startIndex = file.indexOf('// MASTER PERSONALMANAGEMENT (M.Sc.) MODULES');

let firstPart = file.substring(0, startIndex);
let pmPart = file.substring(startIndex);

pmPart = pmPart.replace('id: "2008"', 'id: "2008_pm"');
pmPart = pmPart.replace('id: "2204"', 'id: "2204_pm"');
pmPart = pmPart.replace('id: "3013"', 'id: "3013_pm"');

file = firstPart + pmPart;

fs.writeFileSync('src/data.ts', file);
console.log("Fixed!");
