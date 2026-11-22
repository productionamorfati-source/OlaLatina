// Ola Latina — scripts de la page

// Langue (langue.js) : si le fichier manque, le site reste en français
const L = window.OLA || {
  texte: (cle) => ({ 'ui.menu-ouvrir': 'Ouvrir le menu', 'ui.menu-fermer': 'Fermer le menu', 'ui.allergene': 'Allergène :', 'ui.des': 'dès', 'ui.tag-vege': 'Végé', 'ui.tag-epice': 'Épicé', 'ui.tag-vedette': 'Vedette' }[cle] || cle),
  menu: (s) => s,
  montant: (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + '\u00a0$'
};

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', L.texte(open ? 'ui.menu-fermer' : 'ui.menu-ouvrir'));
  };
  setOpen(false);
  document.addEventListener('ola:langue', () => setOpen(nav.classList.contains('open')));

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

// Carte : générée à partir de menu-data.js (même source que menu.html), dans la langue choisie
const menuEl = document.getElementById('menu-sections');

const afficherCarte = () => {
  const m = window.MENU;
  const t = L.menu; // texte de menu-data.js → langue choisie (menu-traductions.js)
  const etiquette = (tag) => ({ vege: L.texte('ui.tag-vege'), epice: L.texte('ui.tag-epice'), vedette: L.texte('ui.tag-vedette') }[tag] || tag);
  // 6 → « 6 $ » / « $6 », { P: 25, G: 30 } → « P 25 $ / G 30 $ » / « S $25 / L $30 »
  const montant = L.montant;
  // Formats longs (« Sans alcool », « Verre »…) : affichés sur une ligne à part, sous le nom
  const prixCourt = (p) => typeof p.prix !== 'object' || Object.keys(p.prix).every((k) => k.length <= 2);
  const prix = (p) => {
    const texte = typeof p.prix === 'object'
      ? Object.entries(p.prix).map(([taille, n]) => `${t(taille)}\u00a0${montant(n)}`).join(prixCourt(p) ? ' / ' : ' · ')
      : montant(p.prix);
    return p.suffixe ? `${texte} ${t(p.suffixe)}` : texte;
  };
  const echap = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const allergene = (a, renvoi) => (a ? `<p class="allergene"><strong>${echap((renvoi || '') + L.texte('ui.allergene'))}</strong> ${echap(t(a))}</p>` : '');
  // Description : une phrase, ou une liste de phrases (une ligne chacune), puis les variantes du plat
  const descriptions = (p) => [].concat(p.description || []).map((d) => `<p>${echap(t(d))}</p>`).join('')
    + (p.variantes || []).map((v) => `<p class="variante"><strong>${echap(t(v.nom))}</strong> – ${echap(t(v.texte))}</p>`).join('');

  // Photo détourée d'un plat (Assets/plats) : WebP léger, PNG pour les vieux navigateurs
  const photo = (img, alt, sizes) => `
    <picture>
      <source type="image/webp" srcset="Assets/plats/${echap(img)}-400.webp 400w, Assets/plats/${echap(img)}.webp 900w" sizes="${sizes}">
      <img src="Assets/plats/${echap(img)}.png" alt="${echap(alt)}" loading="lazy" decoding="async">
    </picture>`;
  const visuel = (img, alt, sizes) => `<div class="plat-visuel">${photo(img, alt, sizes)}</div>`;

  // Accueil : seulement les sections marquées « accueil: true » (le menu complet est dans menu.html)
  const sections = m.sections.filter((s) => s.accueil);

  menuEl.innerHTML = sections.map((s) => {
    // Photo de la catégorie, sinon celle du premier plat qui en a une
    const avecPhoto = s.image ? { image: s.image, nom: s.titre } : s.plats.find((p) => p.image);
    return `
    <section class="menu-group">
      ${avecPhoto ? `<div class="menu-group-visuel">${visuel(avecPhoto.image, t(avecPhoto.nom), '(min-width: 760px) 170px, 130px')}</div>` : ''}
      <h3>${echap(t(s.titre))}</h3>
      ${s.intro ? `<p class="menu-intro">${echap(t(s.intro))}</p>` : ''}
      ${allergene(s.allergene)}
      <ul>
        ${s.plats.map((p) => `
          <li class="dish">
            <div class="dish-line">
              <span class="dish-name">${echap(t(p.nom))}</span>
              ${(p.tags || []).map((tag) => `<span class="tag ${echap(tag)}">${echap(etiquette(tag))}</span>`).join('')}
              ${prixCourt(p) ? `<span class="dots"></span><span class="price">${echap(prix(p))}</span>` : ''}
            </div>
            ${prixCourt(p) ? '' : `<p class="price-variants">${echap(prix(p))}</p>`}
            ${descriptions(p)}
            ${allergene(p.allergene, p.renvoi)}
          </li>`).join('')}
      </ul>
      ${s.note ? `<p class="menu-group-note">${echap(t(s.note))}</p>` : ''}
    </section>`;
  }).join('');

  // Vitrine des boissons : les boissons avec photo des sections « vitrine: true »
  const vitrine = document.getElementById('vitrine-boissons');
  if (vitrine) {
    const des = (p) => (typeof p.prix === 'object' ? `${L.texte('ui.des')} ${montant(Math.min(...Object.values(p.prix)))}` : montant(p.prix));
    vitrine.innerHTML = m.sections
      .filter((s) => s.vitrine)
      .flatMap((s) => s.plats.filter((p) => p.image))
      .map((p) => `
        <li class="vitrine-item">
          ${photo(p.image, t(p.nom), '(min-width: 760px) 200px, 45vw')}
          <span class="vitrine-nom">${echap(t(p.nom))}</span>
          <span class="vitrine-prix">${echap(des(p))}</span>
        </li>`).join('');
  }

  // Sous la carte : l'offre en évidence, puis l'encadré des avis (pourboire, fermeture, taxes)
  const notes = document.getElementById('menu-note');
  if (notes) {
    notes.innerHTML = (m.offre ? `<p class="offre">${echap(t(m.offre))}</p>` : '')
      + ((m.avis || []).length ? `<div class="avis"><p class="avis-titre">${echap(L.texte('ui.avis'))}</p><ul>${m.avis.map((n) => `<li>${echap(t(n))}</li>`).join('')}</ul></div>` : '');
  }
};

if (menuEl && window.MENU) {
  afficherCarte();
  document.addEventListener('ola:langue', afficherCarte);
}

// Année courante dans le pied de page
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
