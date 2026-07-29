const fs = require('fs');
const html = fs.readFileSync('public/editor-advogado01.html', 'utf8');
const scriptMatch = html.match(/<script type="module">([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.log("No script found");
  process.exit(1);
}
let script = scriptMatch[1];
try {
  // Try to parse using new Function
  // Wait, import statements throw in new Function!
  // We need to use acorn or just remove imports.
  script = script.replace(/import .*;/, '');
  script = script.replace(/import .*;/, '');
  new Function(script);
  console.log("Syntax OK!");
} catch (e) {
  console.log("Syntax Error:");
  console.log(e);
}
