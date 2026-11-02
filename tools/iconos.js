// Línea gráfica «Burbuja» de Mis finanzas.
// Cada ícono es el contenido de un <svg viewBox="0 0 24 24"> con trazo de 2 px redondeado y currentColor.
// La clase «a» marca el trazo de acento: el mismo color con opacidad 0,45.
// Fuente única: `node tools/generar-iconos.js` crea /icons/*.svg y actualiza el bloque ICONOS de index.html.

const engranaje = (() => { // engranaje de 8 dientes redondeados, calculado
  const c = 12, R = 9, r = 6.6, n = 8, p = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2, w = Math.PI / n * 0.5;
    [[r, a - w * 1.55], [R, a - w * 0.75], [R, a + w * 0.75], [r, a + w * 1.55]].forEach(([rad, t]) => p.push([c + rad * Math.cos(t), c + rad * Math.sin(t)]));
  }
  return 'M' + p.map(([x, y]) => x.toFixed(2) + ' ' + y.toFixed(2)).join('L') + 'z';
})();

const ICONOS = {
  // ---------- Gastos
  'cat-super': '<path d="M3 4.5h1.6c.8 0 1.4.5 1.6 1.3L8 13.6c.2 1 1.1 1.7 2.1 1.7h7c1 0 1.9-.7 2.1-1.7l1.1-4.6c.2-.9-.5-1.6-1.3-1.6H6.5"/><circle cx="10" cy="19.5" r="1.6"/><circle cx="17" cy="19.5" r="1.6"/><path class="a" d="M10.8 11h5.6"/>',
  'cat-gas': '<path d="M5 20.5V7a3.5 3.5 0 0 1 7 0v13.5M3.5 20.5h10M12 10h1.8a2.2 2.2 0 0 1 2.2 2.2v3.3a1.75 1.75 0 0 0 3.5 0V9.6c0-.8-.3-1.6-.9-2.2L17 6"/><path class="a" d="M7.5 8h2"/>',
  'cat-farmacia': '<rect x="2.6" y="8.2" width="18.8" height="7.6" rx="3.8" transform="rotate(-45 12 12)"/><path d="M10.1 10.1l3.8 3.8"/><path class="a" d="M13.4 8.4l1.7-1.7"/>',
  'cat-seguros': '<path d="M12 3.2 6 5.4c-.7.3-1.2.9-1.2 1.7v4.2c0 4.3 3 7.6 7.2 9.5 4.2-1.9 7.2-5.2 7.2-9.5V7.1c0-.8-.5-1.4-1.2-1.7z"/><rect x="9.6" y="7.8" width="4.8" height="7.8" rx="1.6"/><path class="a" d="M11.4 13.6h1.2"/>',
  'cat-restaurantes': '<path d="M3.5 11.5h17c0 4.4-3.6 8-8 8h-1c-4.4 0-8-3.6-8-8z"/><path d="M9 19.5v1h6v-1M14.5 11.5l4.5-6.5"/><path class="a" d="M8 8.6c-.9-1 .9-2 0-3.1M11.5 8.6c-.9-1 .9-2 0-3.1"/>',
  'cat-hogar': '<path d="M3.5 11.2 10.4 5a2.4 2.4 0 0 1 3.2 0l6.9 6.2M5.5 9.7v8.3a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V9.7"/><path d="M10 21v-3.5a2 2 0 0 1 4 0V21"/>',
  'cat-viajes': '<path d="M21 12c0-.9-.8-1.6-1.8-1.6h-4.4L10.4 4H8.6l2.2 6.4H6.2L4.6 8H3l1 4-1 4h1.6l1.6-2.4h4.6L8.6 20h1.8l4.4-6.4h4.4c1 0 1.8-.7 1.8-1.6z"/>',
  'cat-suscripciones': '<rect x="2.5" y="3.5" width="19" height="14" rx="4.8"/><path d="M9 21h6M10.6 8.2c0-.6.7-1 1.2-.7l3.4 2.1c.5.3.5 1.1 0 1.4l-3.4 2.1c-.5.3-1.2-.1-1.2-.7z"/>',
  'cat-vestimenta': '<path d="M8.5 3.8 4.4 5.8a1.6 1.6 0 0 0-.8 1.8l.6 2.4a1 1 0 0 0 1.3.7l1.6-.6V19a1.6 1.6 0 0 0 1.6 1.6h6.6a1.6 1.6 0 0 0 1.6-1.6v-8.9l1.6.6a1 1 0 0 0 1.3-.7l.6-2.4a1.6 1.6 0 0 0-.8-1.8l-4.1-2"/><path class="a" d="M8.5 3.8a3.5 3.5 0 0 0 7 0"/>',
  'cat-tecnologia': '<path d="M4 15V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 18 7v.5M2 18.5h10.5"/><rect x="14.5" y="9" width="7" height="11.5" rx="2.4"/><path class="a" d="M17.4 18h1.2"/>',
  'cat-diferidos': '<path d="M11.5 15.5h-6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2.5M2.5 9h15"/><rect x="12.5" y="12" width="9" height="9" rx="2.6"/><path d="M15 10.8v2M19 10.8v2"/><path class="a" d="M12.5 15.2h9"/>',
  'cat-compra_diferida': '<path d="M5.2 8.5h13.6l-.9 10.2a2.5 2.5 0 0 1-2.5 2.3H8.6a2.5 2.5 0 0 1-2.5-2.3z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/><path class="a" d="M9.3 13.1l1.2-.9v5.3M13 13.4a1.4 1.4 0 0 1 2.6.6c0 1.4-2.8 2.2-2.8 3.5h2.9"/>',
  'cat-avances': '<rect x="3" y="3.5" width="18" height="9" rx="3.2"/><path d="M6.5 8h11M8 8v10.5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8"/><circle class="a" cx="12" cy="14.5" r="1.6"/>',
  'cat-cargos': '<path d="M10.3 4.2a2 2 0 0 1 3.4 0l7.4 12.9a2 2 0 0 1-1.7 3H4.6a2 2 0 0 1-1.7-3z"/><path d="M14 11.4 10 16.6"/><circle cx="10.2" cy="12" r=".9"/><circle cx="13.8" cy="16" r=".9"/>',
  'cat-otros': '<path d="M4 8.2 12 4l8 4.2v8.1L12 20.5 4 16.3z"/><path d="M4 8.2l8 4.2 8-4.2M12 12.4v8.1"/><path class="a" d="M8 6.1l8 4.2"/>',
  // ---------- Ingresos
  'ing-sueldo': '<rect x="2.5" y="7" width="19" height="13.5" rx="4.8"/><path d="M8.5 7V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1"/><path class="a" d="M2.5 12.5c3 1.5 6 2 9.5 2s6.5-.5 9.5-2"/>',
  'ing-fondos': '<path d="M14.5 11.2c-.6-2.8-3.2-4.7-6.3-4.7C4.6 6.5 2 8.9 2 12c0 1.8.9 3.3 2.3 4.4V19a1 1 0 0 0 1 1h1.4a1 1 0 0 0 1-1v-1.1c.6.1 1.2.1 1.8 0"/><path d="M18 12.5l-3.2 1.3v2.2c0 2.1 1.4 3.6 3.2 4.5 1.8-.9 3.2-2.4 3.2-4.5v-2.2z"/><path class="a" d="M6.5 9.3h3"/>',
  'ing-nexo': '<path d="M6 18V6l12 12V6"/><circle cx="18" cy="6" r="1.9" fill="currentColor"/>',
  'ing-otro': '<path d="M11 3.5c.5 4.3 2.7 6.5 7 7-4.3.5-6.5 2.7-7 7-.5-4.3-2.7-6.5-7-7 4.3-.5 6.5-2.7 7-7z"/><path class="a" d="M19 16.5v4M17 18.5h4"/>',
  // ---------- Deudas
  'deu-auto': '<path d="M4 15.5v-3.2c0-.6.2-1.2.5-1.7l2-3.2A3 3 0 0 1 9 6h6a3 3 0 0 1 2.5 1.4l2 3.2c.3.5.5 1.1.5 1.7v3.2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15.5z"/><path d="M6.5 17v1.5M17.5 17v1.5M4.8 11h14.4"/><path class="a" d="M7.5 14h1M15.5 14h1"/>',
  'deu-administrativos': '<path d="M14 3.5H7.5A2.5 2.5 0 0 0 5 6v12a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18V8.5z"/><path d="M14 3.5v3a2 2 0 0 0 2 2h3"/><path class="a" d="M8.5 12.5h7M8.5 16h4.5"/>',
  'deu-banco': '<path d="M4 9.5 11 4.8a1.8 1.8 0 0 1 2 0l7 4.7M4 9.5h16M4 20.5h16"/><path d="M6.8 12.5v5M10.4 12.5v5M13.6 12.5v5M17.2 12.5v5"/><circle class="a" cx="12" cy="7.2" r=".6"/>',
  'deu-familia': '<circle cx="7.5" cy="7.5" r="2.8"/><circle cx="16.5" cy="7.5" r="2.8"/><path d="M2.5 19v-.5a4.5 4.5 0 0 1 4.5-4.5h1M21.5 19v-.5a4.5 4.5 0 0 0-4.5-4.5h-1"/><path d="M12 20.2c-1.8-1.2-2.9-2.3-2.9-3.6a1.45 1.45 0 0 1 2.9-.4 1.45 1.45 0 0 1 2.9.4c0 1.3-1.1 2.4-2.9 3.6z"/>',
  'deu-tarjeta': '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M2.5 9.5h19"/><path class="a" d="M6 15h4"/>',
  // ---------- Metas
  'meta-fondo': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.2"/><path d="M5.6 5.6l3.4 3.4M15 15l3.4 3.4M18.4 5.6 15 9M9 15l-3.4 3.4"/><path class="a" d="M7 12a5 5 0 0 1 2.2-4.1"/>',
  'meta-recompensa': '<path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 6H6a2 2 0 0 0 0 4h1.8M16.5 6H18a2 2 0 0 1 0 4h-1.8M12 13.5V17M8.5 20.5h7a3.5 3.5 0 0 0-7 0z"/><path class="a" d="M10.2 6.5v2"/>',
  'meta-inversion': '<path d="M12 20.5V12"/><path d="M12 12c0-3.6-2.6-6-6.5-6 0 3.6 2.6 6 6.5 6zM12 10c0-3.3 2.4-5.5 6.5-5.5 0 3.3-2.4 5.5-6.5 5.5z"/><path class="a" d="M8 20.5h8"/>',
  'meta-vestimenta': '<path d="M12 9.5v-.8c0-.6.4-1 .9-1.3a2 2 0 1 0-2.9-1.8"/><path d="M12 9.5 3.7 15.3c-1 .7-.5 2.2.7 2.2h15.2c1.2 0 1.7-1.5.7-2.2z"/>',
  // ---------- Navegación
  'nav-inicio': '<path d="M3.5 11.2 10.4 5a2.4 2.4 0 0 1 3.2 0l6.9 6.2M5.5 9.7v8.3a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V9.7"/><path class="a" d="M10 17h4"/>',
  'nav-gastos': '<circle cx="9" cy="14" r="6"/><circle cx="17.5" cy="7" r="3.5"/><circle cx="18.6" cy="17.6" r="2.4"/><path class="a" d="M6 13a3 3 0 0 1 3-3"/>',
  'nav-movimientos': '<path d="M9.5 6.5h10M9.5 17.5h10"/><path class="a" d="M9.5 12h10"/><circle cx="5" cy="6.5" r="1.3"/><circle cx="5" cy="12" r="1.3"/><circle cx="5" cy="17.5" r="1.3"/>',
  'nav-metas': '<circle cx="12" cy="12" r="8.5"/><circle class="a" cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.2"/>',
  'nav-mas': `<path d="${engranaje}"/><circle cx="12" cy="12" r="2.8"/>`,
  // ---------- Acciones
  'acc-gasto': '<rect x="2.5" y="6.5" width="13" height="11" rx="3.8"/><circle cx="9" cy="12" r="2"/><path d="M15.5 12h6M19 9.5l2.5 2.5-2.5 2.5"/>',
  'acc-ingreso': '<rect x="8.5" y="6.5" width="13" height="11" rx="3.8"/><circle cx="15" cy="12" r="2"/><path d="M2.5 12h6M6 9.5 8.5 12 6 14.5"/>',
  'acc-pago': '<path d="M6.5 3.5h11a1.5 1.5 0 0 1 1.5 1.5v15.1a.6.6 0 0 1-1 .5l-1.5-1.1-1.8 1.2a1 1 0 0 1-1.1 0L12 19.5l-1.6 1.2a1 1 0 0 1-1.1 0l-1.8-1.2L6 20.6a.6.6 0 0 1-1-.5V5a1.5 1.5 0 0 1 1.5-1.5z"/><path d="m8.8 11.4 2.2 2.2 4.2-4.4"/>',
  'acc-ahorro': '<path d="M19 10.6c-.6-3-3.6-5.1-7.2-5.1-4.2 0-7.6 2.9-7.6 6.5 0 1.9.9 3.6 2.4 4.8V19a1.5 1.5 0 0 0 1.5 1.5h.9a1.5 1.5 0 0 0 1.5-1.5v-.6c.8.1 1.6.1 2.4 0v.6a1.5 1.5 0 0 0 1.5 1.5h.9a1.5 1.5 0 0 0 1.5-1.5v-1.9c.9-.6 1.6-1.3 2.1-2.1h.6a1 1 0 0 0 1-1v-2.4a1 1 0 0 0-1-1z"/><circle cx="15.5" cy="10.4" r=".5"/><path class="a" d="M9.5 8h3.5"/>',
  'acc-exportar': '<path d="M12 3.5v10M8 9.8l4 4 4-4"/><path d="M3.5 14.5V17a3.5 3.5 0 0 0 3.5 3.5h10a3.5 3.5 0 0 0 3.5-3.5v-2.5"/>',
  'acc-importar': '<path d="M12 14V4M8 7.8l4-4 4 4"/><path d="M3.5 14.5V17a3.5 3.5 0 0 0 3.5 3.5h10a3.5 3.5 0 0 0 3.5-3.5v-2.5"/>',
  'acc-copiar': '<rect x="8.5" y="8.5" width="12" height="12" rx="3.5"/><path d="M15.5 8.5V7a3.5 3.5 0 0 0-3.5-3.5H7A3.5 3.5 0 0 0 3.5 7v5A3.5 3.5 0 0 0 7 15.5h1.5"/>',
  'acc-pegar': '<rect x="5" y="4.5" width="14" height="16.5" rx="3.5"/><path d="M9 4.5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5A1.5 1.5 0 0 1 13.5 6h-3A1.5 1.5 0 0 1 9 4.5z"/><path class="a" d="M8.5 11h7M8.5 14.5h5"/>',
  'acc-sync': '<path d="M19.5 10A8 8 0 0 0 6 6.3L4.5 7.8"/><path d="M4.5 3.8v4h4"/><path d="M4.5 14A8 8 0 0 0 18 17.7l1.5-1.5"/><path d="M19.5 20.2v-4h-4"/><circle class="a" cx="12" cy="12" r="1.6"/>',
  'acc-hecho': '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  'acc-deshacer': '<path d="M9 14.5 4.5 10 9 5.5"/><path d="M4.5 10h10a5 5 0 0 1 0 10H11"/>',
  'acc-borrar': '<path d="M4 6.5h16M9.5 6.5V5A1.5 1.5 0 0 1 11 3.5h2A1.5 1.5 0 0 1 14.5 5v1.5M6 6.5l.9 12a2.5 2.5 0 0 0 2.5 2.3h5.2a2.5 2.5 0 0 0 2.5-2.3l.9-12"/><path class="a" d="M10 10.5v6M14 10.5v6"/>',
  'acc-agregar': '<path d="M12 5v14M5 12h14"/>',
  // ---------- Estados
  'est-vencido': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  'est-alerta': '<path d="M10.3 4.2a2 2 0 0 1 3.4 0l7.4 12.9a2 2 0 0 1-1.7 3H4.6a2 2 0 0 1-1.7-3z"/><path d="M12 9.5v4M12 16.6h.01"/>',
  'est-cumplido': '<circle cx="12" cy="12" r="8.5"/><path d="m8.3 12.3 2.5 2.5 5-5.2"/>',
  'est-bloqueado': '<rect x="4.5" y="10.5" width="15" height="10.5" rx="3.8"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5V17"/>',
  'est-desbloqueado': '<rect x="3.5" y="11" width="13" height="10.5" rx="3.8"/><path d="M6.8 11V8a3.2 3.2 0 0 1 6.2-1.2M10 15v2.5"/><path class="a" d="M19.5 3v3.5M17.75 4.75h3.5M20.5 10.2v1.6M19.7 11h1.6"/>',
  'est-racha': '<path d="M12 2.8c1 3.2 3.4 4.8 5 7.1 1 1.4 1.7 3 1.7 4.8A6.7 6.7 0 0 1 12 21.5a6.7 6.7 0 0 1-6.7-6.8c0-1.9.7-3.4 1.6-4.6.8 1 1.8 1.7 2.9 1.9-.4-3.6.4-6.7 2.2-9.2z"/><path class="a" d="M12 21.5a2.9 2.9 0 0 1-2.9-2.9c0-1.7 1.6-3 2.9-4.3 1.3 1.3 2.9 2.6 2.9 4.3a2.9 2.9 0 0 1-2.9 2.9z"/>',
  // ---------- Espacios
  'esp-personal': '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20c.6-3.6 3.6-6 7.5-6s6.9 2.4 7.5 6"/>',
  // ---------- Inversiones (logo en línea) y efectivo
  'inversiones': '<path d="M19.6 7A9 9 0 1 0 21 12"/><path d="M7 15.6c2-.4 3-2.6 4.6-2.6 1.4 0 1.8 1.4 3.2 1.4 1.6 0 2.6-2.2 4-4.4M16 9.6h3.2v3.2"/>',
  'billetes': '<rect x="2.5" y="6.5" width="16" height="10" rx="3.2"/><circle cx="10.5" cy="11.5" r="2"/><path d="M5.5 19.5h13a3 3 0 0 0 3-3V10"/>',
};
ICONOS['ing-inversiones'] = ICONOS['inversiones'];
ICONOS['esp-inversiones'] = ICONOS['inversiones'];
ICONOS['esp-nexo'] = ICONOS['ing-nexo'];

// Alternativas para elegir (comida y racha)
const ALTERNATIVAS = {
  'comida-1 Tazón': ICONOS['cat-restaurantes'],
  'comida-2 Hamburguesa': '<path d="M4 10.5C4 7 7.6 4.5 12 4.5s8 2.5 8 6z"/><path class="a" d="M3.5 14c1.4 0 1.4 1.2 2.8 1.2S7.7 14 9.1 14s1.4 1.2 2.9 1.2 1.4-1.2 2.8-1.2 1.4 1.2 2.9 1.2 1.4-1.2 2.8-1.2"/><path d="M4.5 17.8h15v.2a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 18z"/><path d="M9 7.7h.01M12.5 7.1h.01M15.2 8.3h.01"/>',
  'comida-3 Campana': '<path d="M4 17a8 8 0 0 1 16 0z"/><path d="M2.5 17h19M12 9V7M10.5 6.5h3"/><path class="a" d="M7.6 14a5 5 0 0 1 2.4-2.9"/>',
  'racha-1 Gota': ICONOS['est-racha'],
  'racha-2 Doble lengua': '<path d="M8.6 8.4C7 10 5.5 12 5.5 14.8A6.5 6.5 0 0 0 12 21.5a6.5 6.5 0 0 0 6.5-6.7c0-4.2-3-7.3-6-12.3-.7 3-1.5 4.6-2.6 6.2"/><path class="a" d="M12 21.5c-1.5 0-2.7-1.3-2.7-2.9 0-2 1.6-3.4 2.7-5.1 1.1 1.7 2.7 3.1 2.7 5.1 0 1.6-1.2 2.9-2.7 2.9z"/>',
  'racha-3 En círculo': '<circle cx="12" cy="12" r="9"/><path d="M12 17.5a3.6 3.6 0 0 1-3.6-3.7c0-2.6 2.3-3.9 3-6.8 1.6 1 4.2 3.6 4.2 6.8a3.6 3.6 0 0 1-3.6 3.7z"/>',
};

if (typeof module !== 'undefined') module.exports = { ICONOS, ALTERNATIVAS };
