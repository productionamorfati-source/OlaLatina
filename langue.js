// Ola Latina — choix de la langue : français (par défaut), anglais, espagnol
// Les textes traduits sont dans traductions.js (pages) et menu-traductions.js (plats).
// Le choix du visiteur est gardé dans son navigateur (aucun témoin / cookie).
(() => {
  const LANGUES = ['fr', 'en', 'es'];
  const CLE = 'ola-langue';

  const lire = () => { try { return localStorage.getItem(CLE); } catch (e) { return null; } };
  const garder = (l) => { try { localStorage.setItem(CLE, l); } catch (e) { /* navigation privée : tant pis */ } };

  // 1) ?lang=en dans l'adresse  2) choix déjà fait sur le site  3) langue du navigateur  4) français
  const demandee = new URLSearchParams(location.search).get('lang');
  const navigateur = (navigator.languages || [navigator.language || ''])
    .map((l) => String(l).slice(0, 2).toLowerCase())
    .find((l) => LANGUES.includes(l));
  let langue = [demandee, lire(), navigateur, 'fr'].find((l) => LANGUES.includes(l));

  const pages = () => window.TRADUCTIONS || {};
  const plats = () => window.TRADUCTIONS_MENU || {};

  // Texte d'une clé de traductions.js ; « francais » = le texte d'origine écrit dans le HTML
  const texte = (cle, francais) => {
    const t = pages()[cle] || {};
    if (langue === 'fr') return francais !== undefined ? francais : (t.fr !== undefined ? t.fr : cle);
    return t[langue] || (francais !== undefined ? francais : t.fr) || cle;
  };

  // Texte de menu-data.js (le français sert de clé dans menu-traductions.js)
  const menu = (francais) => {
    if (langue === 'fr' || francais === undefined || francais === null) return francais;
    const t = plats()[String(francais)];
    return (t && t[langue]) || francais;
  };

  // Prix : 6 → « 6 $ » (fr, es) ou « $6 » (en) ; 2.5 → « 2,50 $ » ou « $2.50 »
  const montant = (n) => {
    const chiffre = Number.isInteger(n) ? String(n) : n.toFixed(2);
    return langue === 'en' ? '$' + chiffre : chiffre.replace('.', ',') + ' $';
  };

  // Textes du HTML : data-i18n (contenu), data-i18n-alt / -label / -content (attributs)
  const ATTRIBUTS = { i18nAlt: 'alt', i18nLabel: 'aria-label', i18nContent: 'content' };
  const origines = new WeakMap();
  const origine = (el, quoi, lireOrigine) => {
    let o = origines.get(el);
    if (!o) { o = {}; origines.set(el, o); }
    if (!(quoi in o)) o[quoi] = lireOrigine();
    return o[quoi];
  };

  const appliquer = () => {
    document.documentElement.lang = langue;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const fr = origine(el, 'html', () => el.innerHTML);
      el.innerHTML = texte(el.dataset.i18n, fr);
    });
    Object.entries(ATTRIBUTS).forEach(([cleData, attribut]) => {
      const selecteur = '[data-' + cleData.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()) + ']';
      document.querySelectorAll(selecteur).forEach((el) => {
        const fr = origine(el, attribut, () => el.getAttribute(attribut));
        el.setAttribute(attribut, texte(el.dataset[cleData], fr));
      });
    });

    // Boutons FR / EN / ES
    document.querySelectorAll('[data-langue]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.langue === langue));
    });

    // Les scripts de la page (carte, menu complet, zoom) se mettent à jour
    document.dispatchEvent(new CustomEvent('ola:langue', { detail: langue }));
  };

  const changer = (l) => {
    if (!LANGUES.includes(l) || l === langue) return;
    langue = l;
    garder(l);
    // ?lang= dans l'adresse n'a plus de sens après un changement : on le retire sans recharger
    if (demandee && history.replaceState) {
      const url = new URL(location.href);
      url.searchParams.delete('lang');
      history.replaceState(null, '', url);
    }
    appliquer();
  };

  document.addEventListener('click', (e) => {
    const bouton = e.target.closest('[data-langue]');
    if (bouton) changer(bouton.dataset.langue);
  });

  window.OLA = {
    get langue() { return langue; },
    texte: (cle) => texte(cle),
    menu,
    montant,
    changer
  };

  // Traduction immédiate (le script est chargé en bas de page : le HTML est déjà là)
  if (langue !== 'fr') appliquer();
  else document.querySelectorAll('[data-langue]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langue === 'fr')));
})();
