const fs = require('fs');
let file = fs.readFileSync('vite.config.ts', 'utf8');
file = file.replace('plugins: [react(), tailwindcss()],', \`// WICHTIG FÜR GITHUB PAGES:
    // Wenn das Repo z.B. "mein-curriculum" heißt, muss base auf "/mein-curriculum/" gesetzt werden.
    // Entferne die Kommentarzeichen in der folgenden Zeile und passe den Namen an:
    // base: '/dein-repo-name/',
    plugins: [react(), tailwindcss()],\`);
fs.writeFileSync('vite.config.ts', file);
