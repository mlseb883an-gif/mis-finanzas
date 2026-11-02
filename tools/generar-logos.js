// Inserta los logos de bancos (icons/logo-*.png, 120×120) en index.html como data URI,
// para que funcionen sin internet y también dentro del tablero de Claude.
// Uso: node tools/generar-logos.js
const fs = require('fs'), path = require('path');
const RAIZ = path.join(__dirname, '..'), DIR = path.join(RAIZ, 'icons');
const LOGO = {};
fs.readdirSync(DIR).filter(f => /^logo-[\w-]+\.png$/.test(f)).sort().forEach(f => {
  LOGO[f.slice(5, -4)] = 'data:image/png;base64,' + fs.readFileSync(path.join(DIR, f)).toString('base64');
});
const idx = path.join(RAIZ, 'index.html'); let html = fs.readFileSync(idx, 'utf8');
const bloque = `/*LOGOS:inicio — generado por tools/generar-logos.js; no editar a mano*/\nconst LOGO=${JSON.stringify(LOGO)};\n/*LOGOS:fin*/`;
if (/\/\*LOGOS:inicio[\s\S]*?\/\*LOGOS:fin\*\//.test(html)) html = html.replace(/\/\*LOGOS:inicio[\s\S]*?\/\*LOGOS:fin\*\//, bloque);
else html = html.replace('/*ICO:inicio', bloque + '\n/*ICO:inicio');
fs.writeFileSync(idx, html); console.log('Logos insertados:', Object.keys(LOGO).join(', '));
