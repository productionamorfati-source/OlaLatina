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
  const montant = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + '\u00a0$';
  // Formats longs (« Sans alcool », « Verre »…) : affichés sur une ligne à part, sous le nom
  const prixCourt = (p) => typeof p.prix !== 'object' || Object.keys(p.prix).every((k) => k.length <= 2);
  const prix = (p) => {
    const texte = typeof p.prix === 'object'
      ? Object.entries(p.prix).map(([taille, n]) => `${taille}\u00a0${montant(n)}`).join(prixCourt(p) ? ' / ' : ' · ')
      : montant(p.prix);
    return p.suffixe ? `${texte} ${p.suffixe}` : texte;
  };
  const allergene = (a) => (a ? `<p class="allergene"><strong>Allergène :</strong> ${echap(a)}</p>` : '');
  const echap = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Photo détourée d'un plat (Assets/plats) : WebP léger, PNG pour les vieux navigateurs
  const photo = (img, alt, sizes) => `
    <picture>
      <source type="image/webp" srcset="Assets/plats/${echap(img)}-400.webp 400w, Assets/plats/${echap(img)}.webp 900w" sizes="${sizes}">
      <img src="Assets/plats/${echap(img)}.png" alt="${echap(alt)}" loading="lazy" decoding="async">
    </picture>`;
  const visuel = (img, alt, sizes) => `<div class="plat-visuel">${photo(img, alt, sizes)}</div>`;

  // Accueil : seulement les sections marquées « accueil: true » (le menu complet est dans menu.html)
  const sections = m.sections.filter((s) => s.accueil);

  menuEl.innerHTML = sections.map((s, i) => {
    // Photo de la catégorie, sinon celle du premier plat qui en a une
    const avecPhoto = s.image ? { image: s.image, nom: s.titre } : s.plats.find((p) => p.image);
    return `
    <section class="menu-group">
      ${avecPhoto ? `<div class="menu-group-visuel">${visuel(avecPhoto.image, avecPhoto.nom, '(min-width: 760px) 170px, 130px')}</div>` : ''}
      <h3>${echap(s.titre)}</h3>
      ${s.intro ? `<p class="menu-intro">${echap(s.intro)}</p>` : ''}
      ${allergene(s.allergene)}
      <ul>
        ${s.plats.map((p) => `
          <li class="dish">
            <div class="dish-line">
              <span class="dish-name">${echap(p.nom)}</span>
              ${(p.tags || []).map((t) => `<span class="tag ${echap(t)}">${etiquettes[t] || echap(t)}</span>`).join('')}
              ${prixCourt(p) ? `<span class="dots"></span><span class="price">${echap(prix(p))}</span>` : ''}
            </div>
            ${prixCourt(p) ? '' : `<p class="price-variants">${echap(prix(p))}</p>`}
            ${p.description ? `<p>${echap(p.description)}</p>` : ''}
            ${allergene(p.allergene)}
          </li>`).join('')}
      </ul>
      ${s.note ? `<p class="menu-group-note">${echap(s.note)}</p>` : ''}
    </section>`;
  }).join('');

  // Vitrine des boissons : les boissons avec photo des sections « vitrine: true »
  const vitrine = document.getElementById('vitrine-boissons');
  if (vitrine) {
    const des = (p) => (typeof p.prix === 'object' ? `dès ${montant(Math.min(...Object.values(p.prix)))}` : montant(p.prix));
    vitrine.innerHTML = m.sections
      .filter((s) => s.vitrine)
      .flatMap((s) => s.plats.filter((p) => p.image))
      .map((p) => `
        <li class="vitrine-item">
          ${photo(p.image, p.nom, '(min-width: 760px) 200px, 45vw')}
          <span class="vitrine-nom">${echap(p.nom)}</span>
          <span class="vitrine-prix">${echap(des(p))}</span>
        </li>`).join('');
  }

  // Notes sous la carte (pourboire, fermeture, combo…)
  const notes = document.getElementById('menu-note');
  if (notes) notes.innerHTML = (m.notes || []).map((n) => `<p>${echap(n)}</p>`).join('');
}

// Année courante dans le pied de page
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
