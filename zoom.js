// Ola Latina — photos des plats : elles grossissent au survol (zoom.css)
// et s'ouvrent en grand au clic ou au toucher (pratique sur téléphone).
(() => {
  // Les photos concernées : plats de la carte et du menu complet, boissons de la vitrine, grand plat de l'accueil
  const VISUELS = '.plat-visuel, .vitrine-item picture, .hero-plat picture';
  const texte = (cle, defaut) => (window.OLA ? window.OLA.texte(cle) : defaut);

  // Fenêtre d'agrandissement, créée une seule fois
  const fenetre = document.createElement('dialog');
  fenetre.className = 'zoom-plat';
  fenetre.innerHTML = `
    <button type="button" class="zoom-fermer"><span aria-hidden="true">×</span></button>
    <figure>
      <div class="zoom-image"><img alt=""></div>
      <figcaption></figcaption>
      <p class="zoom-aide"></p>
    </figure>`;
  document.body.appendChild(fenetre);
  const grande = fenetre.querySelector('img');
  const legende = fenetre.querySelector('figcaption');
  const fermer = fenetre.querySelector('.zoom-fermer');
  const aide = fenetre.querySelector('.zoom-aide');

  // Photo en grand : « Assets/plats/nom.png » → « Assets/plats/nom.webp » (900 px), PNG si le WebP manque
  grande.addEventListener('error', () => {
    const png = grande.dataset.secours;
    if (png && grande.getAttribute('src') !== png) grande.src = png;
  });

  let declencheur = null;
  const ouvrir = (visuel) => {
    const img = visuel.querySelector('img');
    if (!img || typeof fenetre.showModal !== 'function') return;
    const png = img.getAttribute('src');
    grande.dataset.secours = png;
    grande.src = png.replace(/(-400)?\.(png|webp)$/, '.webp');
    grande.alt = img.alt;
    // Nom court (grand plat de l'accueil) ou texte de la photo
    legende.textContent = img.dataset.zoom ? texte(img.dataset.zoom, img.alt) : img.alt;
    fermer.setAttribute('aria-label', texte('ui.zoom-fermer', 'Fermer la photo'));
    aide.textContent = texte('ui.zoom-aide', "Touchez ou cliquez n'importe où pour fermer");
    declencheur = visuel;
    fenetre.showModal();
  };

  // Un clic n'importe où dans la fenêtre (photo, fond, ×) la ferme
  fenetre.addEventListener('click', () => fenetre.close());
  fenetre.addEventListener('close', () => {
    if (declencheur && document.contains(declencheur)) declencheur.focus({ preventScroll: true });
    declencheur = null;
  });

  document.addEventListener('click', (e) => {
    const visuel = e.target.closest(VISUELS);
    if (visuel && !fenetre.contains(visuel)) ouvrir(visuel);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const visuel = e.target.closest && e.target.closest(VISUELS);
    if (visuel) { e.preventDefault(); ouvrir(visuel); }
  });

  // Accessibilité : chaque photo devient un bouton (clavier : Tab puis Entrée)
  const preparer = () => {
    document.querySelectorAll(VISUELS).forEach((visuel) => {
      const img = visuel.querySelector('img');
      if (!img) return;
      const nom = img.dataset.zoom ? texte(img.dataset.zoom, img.alt) : img.alt;
      visuel.setAttribute('tabindex', '0');
      visuel.setAttribute('role', 'button');
      visuel.setAttribute('aria-label', `${texte('ui.zoom-agrandir', 'Agrandir la photo :')} ${nom}`);
    });
  };
  preparer();
  // Après un changement de langue, la carte est redessinée : on prépare les nouvelles photos
  document.addEventListener('ola:langue', preparer);
})();
