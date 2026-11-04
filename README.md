# Ola Latina — site du restaurant

Site statique (HTML / CSS / JavaScript, sans dépendance).

## Structure

```
SITE OLA LATINA/
├── index.html    Page d'accueil : accueil, carte, histoire, galerie, contact
├── menu.html     Menu complet (aussi imprimable via l'impression du navigateur)
├── politique-confidentialite.html  Politique de confidentialité (Loi 25), liée en bas des pages
├── conditions-utilisation.html     Conditions d'utilisation et mentions légales (prix, allergènes, alcool)
├── favicon.svg   Icône d'onglet du navigateur
├── 404.html      Page « introuvable » (utilisée automatiquement par GitHub Pages, Netlify, Vercel…)
├── menu-data.js  LES PLATS ET LES PRIX : seul fichier à modifier pour la carte
├── styles.css    Styles de l'accueil (couleurs dans :root en haut du fichier)
├── menu.css      Styles du menu complet
├── fonts.css     Polices (hébergées dans Assets/fonts, aucun appel à Google)
├── script.js     Menu mobile, génération de la carte, photos manquantes, année
├── menu.js       Génération du menu complet
├── Assets/       Photos, logo, images ; Assets/fonts : polices DM Sans et Fraunces
│   ├── plats/    Photos détourées des plats (WebP + PNG de secours), liées dans menu-data.js (champ « image »)
│   └── motifs/   Fleurs SVG et fond fleuri (inspirés de la table fleurie du restaurant)
├── _headers      En-têtes de sécurité pour Netlify / Cloudflare Pages
├── vercel.json   En-têtes de sécurité pour Vercel
├── .htaccess     En-têtes de sécurité + HTTPS forcé pour un hébergeur Apache (FTP)
└── README.md
```

## Pour commencer

1. Ouvrir `index.html` dans un navigateur pour prévisualiser.
2. Modifier les plats et les prix dans `menu-data.js` : la carte de l'accueil et `menu.html` se mettent à jour toutes les deux.
   Remplacer les autres textes d'exemple (histoire) dans `index.html`.
3. La galerie (3 cadres) et le cadre de l'histoire sont vides (« Photo à venir ») en attendant les photos.
   Déposer les photos dans `Assets/` (ex. `photo-1.jpg`, `histoire.jpg`), puis dans `index.html` remplacer chaque
   `<div class="photo-place" aria-hidden="true"></div>` par `<img src="Assets/photo-1.jpg" alt="description" loading="lazy">`
   et retirer la classe `photo-vide` du `<figure>`.
   Nouvelle photo détourée d'un plat (PNG transparent) : la convertir en 3 fichiers dans `Assets/plats/`,
   par exemple avec https://squoosh.app (gratuit, dans le navigateur) :
   - `nom.webp` : WebP, 900 px de large au plus, qualité 80 ;
   - `nom-400.webp` : WebP, 400 px de large au plus, qualité 80 ;
   - `nom.png` : PNG, 600 px de large au plus (secours pour les vieux navigateurs).
   Ne pas utiliser l'AVIF : sa transparence n'est pas bien gérée partout (fond noir).
   Puis ajouter `image: "nom"` au plat dans `menu-data.js`.
4. Ajuster les couleurs dans `styles.css` (`--color-primary`, `--color-secondary`, etc.).

## Mise en ligne

Après une modification de `styles.css`, `menu.css`, `fonts.css` ou d'un fichier `.js`, changer le numéro `?v=…`
dans les pages HTML (ex. `styles.css?v=20261104` → `?v=20261110`) : les visiteurs recevront la nouvelle version
au lieu de celle gardée en mémoire par leur navigateur.

Hébergement statique au choix (Netlify, Vercel, Cloudflare Pages ou hébergeur classique par FTP).
Le site ne contient pas de base de données : il suffit d'envoyer les fichiers.

Avant d'envoyer, supprimer les fichiers cachés `._*` que macOS crée sur le disque T7 :

```
dot_clean "/Volumes/T7 Shield/SITE OLA LATINA"
```

Le site doit être servi en **HTTPS** (certificat gratuit chez tous ces hébergeurs).
Une fois en ligne, vérifier la note sur https://securityheaders.com et https://observatory.mozilla.org (objectif : A ou A+).
GitHub Pages ne permet pas d'envoyer d'en-têtes : seule la politique de sécurité dans les `<meta>` des pages s'applique (protection plus faible).

## Sécurité (à respecter lors des modifications)

- **Aucun code dans le HTML** : pas de `<script>` ni de `<style>` en ligne, pas d'attribut `onclick`, `onerror` ou `style=`.
  La politique de sécurité (CSP) les bloque. Mettre le code dans les fichiers `.js` et `.css`.
- **Aucune ressource externe** (polices, scripts, images, cartes intégrées) : tout est servi depuis le site.
  Pour en ajouter une (ex. carte Google intégrée, widget de réservation), il faut l'autoriser dans la CSP
  à 5 endroits : les deux `<meta http-equiv="Content-Security-Policy">`, `_headers`, `vercel.json` et `.htaccess`.
- Les textes de `menu-data.js` sont échappés avant affichage : on peut y écrire `&`, `<`, guillemets sans risque.
- Liens externes : toujours `target="_blank" rel="noopener noreferrer"`.

Aperçu local : ouvrir `index.html` fonctionne ; en cas de souci (polices ou scripts bloqués),
lancer un petit serveur : `python3 -m http.server` dans le dossier, puis ouvrir http://localhost:8000.

## À compléter

- [ ] Vrais textes et photos
- [ ] Carte détaillée et prix
- [ ] Adresse, téléphone, email, horaires réels
- [ ] Lien Google Maps et réseaux sociaux
- [ ] Nom de domaine
- [ ] Conditions d'utilisation : remplir le nom légal, le NEQ et l'hébergeur (passages surlignés)
- [ ] Vérifier la note Google (4,7) affichée sur l'accueil avant la mise en ligne, puis de temps en temps
- [ ] Politique de confidentialité : remplir les passages surlignés (nom du responsable, courriel,
      durée des journaux de l'hébergeur) et la mettre à jour si on ajoute un formulaire, des statistiques ou un widget externe
- [ ] Icône « apple-touch-icon » (180 × 180 px) pour l'écran d'accueil iPhone / iPad
