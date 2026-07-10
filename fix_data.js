const fs = require('fs');
let file = fs.readFileSync('src/data.ts', 'utf8');

// I will just use regex to fix this.
// Wait, I appended to EXAM_TYPES. So let's find the mistake.
// "Wissenschaftliche Arbeit" is the last exam type.
// Let's replace:
//   {
//     name: "Wissenschaftliche Arbeit",
//     description: "Systematisch gegliederte textliche Ausarbeitung zur Schaffung und transparenten Darstellung neuen Wissens unter Einhaltung wissenschaftlicher Standards."
//   }
// 
// 
//   // ============================================
//   // MASTER DIGITAL AND INTERNATIONAL MARKETING (M.Sc.) MODULES
//   // ============================================

let toReplace = `  {
    name: "Wissenschaftliche Arbeit",
    description: "Systematisch gegliederte textliche Ausarbeitung zur Schaffung und transparenten Darstellung neuen Wissens unter Einhaltung wissenschaftlicher Standards."
  }


  // ============================================
  // MASTER DIGITAL AND INTERNATIONAL MARKETING (M.Sc.) MODULES
  // ============================================`;

let replacement = `  {
    name: "Wissenschaftliche Arbeit",
    description: "Systematisch gegliederte textliche Ausarbeitung zur Schaffung und transparenten Darstellung neuen Wissens unter Einhaltung wissenschaftlicher Standards."
  }
];`;

file = file.replace(toReplace, replacement);

// Now let's find the end of MODULES array.
// It ends around line 3195. Let's just find the end of the file.
// The end of the file is currently `];\n];\n` maybe? Because I appended `];` manually.
// Let's remove the extra `];` at the end and then insert the DIM modules at the end of MODULES.

