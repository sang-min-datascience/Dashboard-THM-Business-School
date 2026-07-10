import * as fs from "fs";
import * as path from "path";
import { MODULES, MAJORS, EXAM_TYPE_DEFINITIONS } from "../src/data";
import { getReformProposal } from "../src/data/reformProposals";

// Process all modules and attach their custom reform proposals
const processedModules = MODULES.map(mod => {
  const proposal = getReformProposal(mod);
  return {
    ...mod,
    reformProposal: proposal
  };
});

// Build the global data object
const outputData = {
  EXAM_TYPE_DEFINITIONS,
  MAJORS,
  MODULES: processedModules
};

// Ensure destination directory exists
const destDir = path.join(process.cwd(), "html-app");
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Write the output file
const outputPath = path.join(destDir, "data.js");
fs.writeFileSync(
  outputPath,
  `// THM Gießen PO 2025 Study Planner & Exam Analysis Data
window.THM_DATA = ${JSON.stringify(outputData, null, 2)};
console.log("THM Gießen Data loaded successfully:", window.THM_DATA.MODULES.length, "modules.");
`,
  "utf-8"
);

console.log("Successfully generated html-app/data.js with complete reform proposals!");
