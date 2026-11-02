// Genera /icons/*.svg, los logos, los PNG del ícono de la app y el bloque ICO de index.html.
// Uso: node tools/generar-iconos.js   (los PNG necesitan puppeteer-core y Google Chrome)
const fs = require('fs'), path = require('path');
const { ICONOS } = require('./iconos.js');
const RAIZ = path.join(__dirname, '..'), DIR = path.join(RAIZ, 'icons');
fs.mkdirSync(DIR, { recursive: true });

const cuerpo = b => b.replace(/class="a"/g, 'opacity=".45"');
const svg24 = (b, extra = '') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${extra}>${cuerpo(b)}</svg>\n`;

// 1 · Set de íconos
const SOLO_INTERNOS = ['inversiones', 'billetes'];
Object.entries(ICONOS).filter(([k]) => !SOLO_INTERNOS.includes(k)).forEach(([k, b]) => fs.writeFileSync(path.join(DIR, k + '.svg'), svg24(b)));

// 2 · Bancos (monogramas propios, no logos oficiales)
const NUNITO = `font-family="Nunito, 'Avenir Next', 'Helvetica Neue', Arial, sans-serif" font-weight="800"`;
const BANCOS = [
  ['guayaquil', 'BG', '#E5007E', '#fff'], ['pichincha', 'BP', '#F2C200', '#1A1A1A'], ['produbanco', 'PB', '#00843D', '#fff'],
  ['austro', 'BA', '#0B4F9C', '#fff'], ['internacional', 'BI', '#E8700A', '#fff'],
];
BANCOS.forEach(([id, t, bg, fg]) => fs.writeFileSync(path.join(DIR, `bank-${id}.svg`),
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="${bg}"/><text x="20" y="20.5" text-anchor="middle" dominant-baseline="central" font-size="15" letter-spacing="-.3" fill="${fg}" ${NUNITO}>${t}</text></svg>\n`));
const icoEn40 = (b, bg) => `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="${bg}"/><svg x="9" y="9" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${cuerpo(b)}</svg></svg>\n`;
fs.writeFileSync(path.join(DIR, 'bank-efectivo.svg'), icoEn40(ICONOS.billetes, '#2A2E36'));
fs.writeFileSync(path.join(DIR, 'bank-inversiones.svg'), icoEn40(ICONOS.inversiones, '#6250d6'));

// 3 · Logo de Inversiones
fs.writeFileSync(path.join(DIR, 'inversiones-line.svg'), svg24(ICONOS.inversiones));
const INV_COLOR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#g)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><defs><linearGradient id="g" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9085e9"/><stop offset="1" stop-color="#6250d6"/></linearGradient></defs>${cuerpo(ICONOS.inversiones)}</svg>\n`;
fs.writeFileSync(path.join(DIR, 'inversiones-color.svg'), INV_COLOR);

// 4 · Logo de Nexo («Ruta viva»): margen libre del 10 %
const nexoSvg = (linea, nodo, fondo) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">${fondo || ''}<path d="M22 78V22l56 56V22" stroke="${linea}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><circle cx="78" cy="22" r="11" fill="${nodo}"/></svg>\n`;
fs.writeFileSync(path.join(DIR, 'nexo.svg'), nexoSvg('#1f46ff', '#1f46ff'));
fs.writeFileSync(path.join(DIR, 'nexo-mono.svg'), nexoSvg('currentColor', 'currentColor'));

// 5 · Ícono de la app (concepto actual: fondo #14161A, anillo celeste incompleto, $)
const APP = s => `<g transform="translate(32 32) scale(${s}) translate(-32 -32)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M32 9.5a22.5 22.5 0 1 0 17.3 8.1" stroke="#7CC4FF" stroke-width="5.5"/><circle cx="49.3" cy="17.6" r="3.6" fill="#7CC4FF"/><path d="M38 24c-1.3-2.2-3.5-3.5-6.2-3.5-3.6 0-6 1.9-6 4.7 0 6.4 12.6 3.4 12.6 9.9 0 3-2.7 5-6.5 5-3 0-5.3-1.3-6.6-3.5M32 17v3.5M32 40.1v3.9" stroke="#ECEEF2" stroke-width="4.5"/></g>`;
// Ícono de la app: cerdito de alcancía rosado con moneda dorada (tools/piggy.svg). s<0.8 = versión con margen para máscara.
const PIGGY = fs.readFileSync(path.join(__dirname, 'piggy.svg'), 'utf8').trim();
const appSvg = s => s >= 0.8 ? PIGGY : PIGGY.replace(/(<rect width="512" height="512" fill="url\(#bg\)"\/>)/, `$1<g transform="translate(256 256) scale(${s/0.82*0.95}) translate(-256 -256)">`).replace(/<\/svg>$/, '</g></svg>');
fs.writeFileSync(path.join(DIR, 'app.svg'), appSvg(0.82) + '\n');

// 6 · Bloque ICO dentro de index.html (íconos en línea: heredan currentColor y funcionan sin internet)
const idx = path.join(RAIZ, 'index.html'); let html = fs.readFileSync(idx, 'utf8');
const ICO = {}; Object.entries(ICONOS).forEach(([k, b]) => { ICO[k] = cuerpo(b); });
const bloque = `/*ICO:inicio — generado por tools/generar-iconos.js; no editar a mano*/\nconst ICO=${JSON.stringify(ICO)};\n/*ICO:fin*/`;
if (/\/\*ICO:inicio[\s\S]*?\/\*ICO:fin\*\//.test(html)) { html = html.replace(/\/\*ICO:inicio[\s\S]*?\/\*ICO:fin\*\//, bloque); fs.writeFileSync(idx, html); console.log('index.html: bloque ICO actualizado'); }
else console.log('index.html: falta el marcador /*ICO:inicio*/ … /*ICO:fin*/');


// 6b · Service worker: caché nueva con los archivos de /icons
const swP = path.join(RAIZ, 'sw.js'); let sw = fs.readFileSync(swP, 'utf8');
const lista = fs.readdirSync(DIR).filter(f => /\.(svg|png)$/.test(f)).sort().map(f => `'icons/${f}'`);
sw = sw.replace(/const C='mis-finanzas-v\d+';/, "const C='mis-finanzas-v4';")
  .replace(/const CORE=\[[^\]]*\];/, `const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable.png','apple-touch-icon.png',${lista.join(',')}];`);
fs.writeFileSync(swP, sw);

// 7 · PNG (ícono de la app, Inversiones y Nexo)
(async () => {
  let puppeteer; try { puppeteer = require(require('os').homedir() + '/Library/Caches/nexo-video/node_modules/puppeteer-core'); } catch (_) { console.log('Sin puppeteer: no se generan los PNG'); return; }
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
  const p = await b.newPage();
  const png = async (svgTxt, px, out, transparente = false) => {
    await p.setViewport({ width: px, height: px, deviceScaleFactor: 1 });
    await p.setContent(`<html><body style="margin:0;background:${transparente ? 'transparent' : '#14161A'}">${svgTxt.replace('<svg ', `<svg width="${px}" height="${px}" `)}</body></html>`);
    await p.screenshot({ path: out, omitBackground: transparente });
  };
  await png(appSvg(0.82), 192, path.join(RAIZ, 'icon-192.png'));
  await png(appSvg(0.82), 512, path.join(RAIZ, 'icon-512.png'));
  await png(appSvg(0.6), 512, path.join(RAIZ, 'icon-maskable.png'));       // contenido dentro del 60 % central: margen seguro del 20 %
  await png(appSvg(0.82), 180, path.join(RAIZ, 'apple-touch-icon.png'));    // sin transparencia
  const enCuadro = (inner, vb) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#14161A"/><svg x="18" y="18" width="64" height="64" viewBox="${vb}">${inner}</svg></svg>`;
  await png(enCuadro(INV_COLOR.replace(/^<svg[^>]*>|<\/svg>\n$/g, '').replace('<defs>', '<defs>'), '0 0 24 24').replace('viewBox="0 0 24 24">', 'viewBox="0 0 24 24" fill="none" stroke="url(#g)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'), 512, path.join(DIR, 'inversiones-512.png'));
  await png(nexoSvg('#ffffff', '#8fa6ff', '<rect width="100" height="100" fill="#1f46ff"/>'), 512, path.join(DIR, 'nexo-512.png'));
  await b.close(); console.log('PNG listos');
})();
