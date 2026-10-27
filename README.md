# Ola Latina — site du restaurant

Site statique (HTML / CSS / JavaScript, sans dépendance).

## Structure

```
SITE OLA LATINA/
├── index.html    Page d'accueil : accueil, carte, histoire, galerie, contact
├── menu.html     Menu complet, version imprimable (bouton « Imprimer le menu »)
├── menu-data.js  LES PLATS ET LES PRIX : seul fichier à modifier pour la carte
├── styles.css    Styles de l'accueil (couleurs dans :root en haut du fichier)
├── menu.css      Styles du menu complet
├── fonts.css     Polices (hébergées dans Assets/fonts, aucun appel à Google)
├── script.js     Menu mobile, génération de la carte, photos manquantes, année
├── menu.js       Génération du menu complet
├── Assets/       Photos, logo, images ; Assets/fonts : polices DM Sans et Fraunces
├── _headers      En-têtes de sécurité pour Netlify / Cloudflare Pages
├── vercel.json   En-têtes de sécurité pour Vercel
├── .htaccess     En-têtes de sécurité + HTTPS forcé pour un hébergeur Apache (FTP)
└── README.md
```

## Pour commencer

1. Ouvrir `index.html` dans un navigateur pour prévisualiser.
2. Modifier les plats et les prix dans `menu-data.js` : la carte de l'accueil et `menu.html` se mettent à jour toutes les deux.
   Remplacer les autres textes d'exemple (histoire) dans `index.html`.
3. Déposer les photos dans `Assets/` avec les noms `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`
   (ou modifier les `src` dans la galerie).
4. Ajuster les couleurs dans `styles.css` (`--color-primary`, `--color-secondary`, etc.).

## Mise en ligne

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
- [ ] Nom de domaine et favicon
- [ ] Politique de confidentialité et responsable des renseignements personnels (Loi 25, Québec),
      à prévoir surtout si on ajoute un formulaire, des statistiques de visite ou un widget externe
- [ ] Icône « apple-touch-icon » (180 × 180 px) pour l'écran d'accueil iPhone / iPad
