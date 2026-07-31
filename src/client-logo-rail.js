/* ============================================================
   CLIENT LOGO RAIL
   Shared component. Include client-logo-rail.css in <head> and
   drop <div id="client-logo-rail"></div> where the rail should
   appear, then load this script — it injects the section markup
   automatically. Update the LOGOS list below to add/remove clients.
   ============================================================ */
(function () {
  var LOGOS = [
    { file: 'auraglance-logo.jpeg', alt: 'Aura Glance' },
    { file: 'lcofs-logo.jpg',       alt: 'LCOFS' },
    { file: 'marwaa-logo.jpg',      alt: 'Marwaa Memorials' },
    { file: 'milestone-logo.jpg',   alt: 'Milestone' },
    { file: 'plantopia-logo.jpg',   alt: 'Plantopia' },
    { file: 'prolink-logo.png',     alt: 'Prolink Partners' },
    { file: 'sanaolzen-logo.png',   alt: 'Sana Olzen' },
    { file: 'zebenaz-logo.jpeg',    alt: 'Zebenaz' }
  ];
  var LOGO_PATH = 'assets/client-logo/';

  function buildTile(logo, hidden) {
    return '<div class="client-logo-tile"' + (hidden ? ' aria-hidden="true"' : '') + '>' +
      '<img src="' + LOGO_PATH + logo.file + '" alt="' + logo.alt + '" loading="lazy" />' +
      '</div>';
  }

  function init() {
    var mount = document.getElementById('client-logo-rail');
    if (!mount) return;

    var tiles = LOGOS.map(function (l) { return buildTile(l, false); }).join('');
    var tilesDup = LOGOS.map(function (l) { return buildTile(l, true); }).join('');

    mount.innerHTML =
      '<section class="client-logo-section">' +
        '<div class="container">' +
          '<div class="client-logo-rail">' +
            '<div class="client-logo-track">' + tiles + tilesDup + '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
