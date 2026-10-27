// Ola Latina — scripts de la page

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('open')));

  // Ferme le menu après un clic sur un lien (mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Ferme avec Échap ou un toucher en dehors du menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  // Rotation de la tablette / agrandissement de la fenêtre : on repasse au menu complet
  window.matchMedia('(min-width: 860px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

// Photos absentes : bloc de couleur + « Photo à venir » (remplace les onerror dans le HTML)
document.querySelectorAll('.photo-frame img').forEach((img) => {
  const manquante = () => img.classList.add('missing');
  if (img.complete && img.naturalWidth === 0) manquante();
  img.addEventListener('error', manquante);
  img.addEventListener('load', () => img.classList.remove('missing'));
});

// Carte : générée à partir de menu-data.js (même source que menu.html)
const menuEl = document.getElementById('menu-sections');

if (menuEl && window.MENU) {
  const m = window.MENU;
  const etiquettes = { vege: 'Végé', epice: 'Épicé', vedette: 'Vedette' };
  // 6 → « 6 $ », 2.5 → « 2,50 $ », { P: 25, G: 30 } → « P 25 $ / G 30 $ »
  const montant = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + ' $';
  const prix = (p) => {
    const texte = typeof p.prix === 'object'
      ? Object.entries(p.prix).map(([taille, n]) => `${taille} ${montant(n)}`).join(' / ')
      : montant(p.prix);
    return p.suffixe ? `${texte} ${p.suffixe}` : texte;
  };
  const echap = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Accueil : seulement les sections marquées « accueil: true » (le menu complet est dans menu.html)
  const sections = m.sections.filter((s) => s.accueil);

  menuEl.innerHTML = sections.map((s) => `
    <section class="menu-group">
      <h3>${echap(s.titre)}</h3>
      ${s.intro ? `<p class="menu-intro">${echap(s.intro)}</p>` : ''}
      <ul>
        ${s.plats.map((p) => `
          <li class="dish">
            <div class="dish-line">
              <span class="dish-name">${echap(p.nom)}</span>
              ${(p.tags || []).map((t) => `<span class="tag ${echap(t)}">${etiquettes[t] || echap(t)}</span>`).join('')}
              <span class="dots"></span>
              <span class="price">${echap(prix(p))}</span>
            </div>
            ${p.description ? `<p>${echap(p.description)}</p>` : ''}
          </li>`).join('')}
      </ul>
      ${s.note ? `<p class="menu-group-note">${echap(s.note)}</p>` : ''}
    </section>`).join('');

  const note = document.getElementById('menu-note');
  if (note) note.textContent = m.noteBasDePage || '';

  // Légende : seulement les étiquettes utilisées dans les sections affichées
  const legende = document.getElementById('menu-legend');
  if (legende) {
    const utilisees = new Set(sections.flatMap((s) => s.plats.flatMap((p) => p.tags || [])));
    legende.innerHTML = Object.keys(etiquettes)
      .filter((t) => utilisees.has(t))
      .map((t) => `<span class="tag ${t}">${etiquettes[t]}</span>`)
      .join('');
  }
}

// Année courante dans le pied de page
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
