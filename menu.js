// Ola Latina — menu complet (menu.html), généré à partir de menu-data.js
const m = window.MENU;
const etiquettes = { vege: "Végé", epice: "Épicé", vedette: "Vedette" };
// 6 → « 6 $ », 2.5 → « 2,50 $ », { P: 25, G: 30 } → « P 25 $ / G 30 $ »
const montant = n => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ",")) + "\u00a0$";
// Formats longs (« Sans alcool », « Verre »…) : affichés sur une ligne à part, sous le nom
const prixCourt = p => typeof p.prix !== "object" || Object.keys(p.prix).every(k => k.length <= 2);
const prix = p => {
  const texte = typeof p.prix === "object"
    ? Object.entries(p.prix).map(([taille, n]) => taille + "\u00a0" + montant(n)).join(prixCourt(p) ? " / " : " · ")
    : montant(p.prix);
  return p.suffixe ? texte + " " + p.suffixe : texte;
};
const echap = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const allergene = a => a ? `<p class="allergene"><strong>Allergène :</strong> ${echap(a)}</p>` : "";

// Photo détourée du plat (Assets/plats) : WebP léger, PNG pour les vieux navigateurs
const visuel = (img, alt, classe) => `
  <div class="plat-visuel ${classe}">
    <picture>
      <source type="image/webp" srcset="Assets/plats/${echap(img)}-400.webp">
      <img src="Assets/plats/${echap(img)}.png" alt="${echap(alt)}" loading="lazy" decoding="async">
    </picture>
  </div>`;

// "Ola Latina" : le dernier mot en couleur, comme sur le site
const mots = m.restaurant.split(" ");
document.getElementById("nom").innerHTML = mots.length > 1
  ? echap(mots.slice(0, -1).join(" ")) + " <span>" + echap(mots.at(-1)) + "</span>"
  : echap(m.restaurant);
document.getElementById("sous-titre").textContent = m.sousTitre;
document.getElementById("contact").textContent = m.adresse + " · " + m.telephone;
// Notes sous le menu (pourboire, fermeture, combo…)
document.getElementById("note").innerHTML = (m.notes || []).map(n => `<p>${echap(n)}</p>`).join("");

// Légende : seulement les étiquettes utilisées dans le menu
const utilisees = new Set(m.sections.flatMap(s => s.plats.flatMap(p => p.tags || [])));
document.getElementById("legende").innerHTML = Object.keys(etiquettes)
  .filter(t => utilisees.has(t))
  .map(t => `<span class="tag ${t}">${etiquettes[t]}</span>`)
  .join(" ");

document.getElementById("sections").innerHTML = m.sections.map(s => `
  <section>
    ${s.image ? visuel(s.image, s.titre, "visuel-section") : ""}
    <h2>${echap(s.titre)}</h2>
    ${s.intro ? `<p class="intro">${echap(s.intro)}</p>` : ""}
    ${allergene(s.allergene)}
    ${s.plats.map(p => `
      <div class="plat${p.image ? " avec-photo" : ""}">
        <div class="plat-texte">
        <div class="ligne">
          <span><span class="nom-plat">${echap(p.nom)}</span>${(p.tags || []).map(t => ` <span class="tag ${echap(t)}">${etiquettes[t] || echap(t)}</span>`).join("")}</span>
          ${prixCourt(p) ? `<span class="points"></span><span class="prix">${echap(prix(p))}</span>` : ""}
        </div>
        ${prixCourt(p) ? "" : `<p class="prix-variantes">${echap(prix(p))}</p>`}
        ${p.description ? `<p class="desc">${echap(p.description)}</p>` : ""}
        ${allergene(p.allergene)}
        </div>
        ${p.image ? visuel(p.image, p.nom, "visuel-plat") : ""}
      </div>`).join("")}
    ${s.note ? `<p class="note-section">${echap(s.note)}</p>` : ""}
  </section>`).join("");
