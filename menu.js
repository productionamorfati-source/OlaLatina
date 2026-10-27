// Ola Latina — menu complet (menu.html), généré à partir de menu-data.js
const m = window.MENU;
const etiquettes = { vege: "Végé", epice: "Épicé", vedette: "Vedette" };
// 6 → « 6 $ », 2.5 → « 2,50 $ », { P: 25, G: 30 } → « P 25 $ / G 30 $ »
const montant = n => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ",")) + " $";
const prix = p => {
  const texte = typeof p.prix === "object"
    ? Object.entries(p.prix).map(([taille, n]) => taille + " " + montant(n)).join(" / ")
    : montant(p.prix);
  return p.suffixe ? texte + " " + p.suffixe : texte;
};
const echap = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// "Ola Latina" : le dernier mot en couleur, comme sur le site
const mots = m.restaurant.split(" ");
document.getElementById("nom").innerHTML = mots.length > 1
  ? echap(mots.slice(0, -1).join(" ")) + " <span>" + echap(mots.at(-1)) + "</span>"
  : echap(m.restaurant);
document.getElementById("sous-titre").textContent = m.sousTitre;
document.getElementById("contact").textContent = m.adresse + " · " + m.telephone;
document.getElementById("note").textContent = m.noteBasDePage;

// Légende : seulement les étiquettes utilisées dans le menu
const utilisees = new Set(m.sections.flatMap(s => s.plats.flatMap(p => p.tags || [])));
document.getElementById("legende").innerHTML = Object.keys(etiquettes)
  .filter(t => utilisees.has(t))
  .map(t => `<span class="tag ${t}">${etiquettes[t]}</span>`)
  .join(" ");

document.getElementById("sections").innerHTML = m.sections.map(s => `
  <section>
    <h2>${echap(s.titre)}</h2>
    ${s.intro ? `<p class="intro">${echap(s.intro)}</p>` : ""}
    ${s.plats.map(p => `
      <div class="plat">
        <div class="ligne">
          <span>${echap(p.nom)}${(p.tags || []).map(t => ` <span class="tag ${echap(t)}">${etiquettes[t] || echap(t)}</span>`).join("")}</span>
          <span class="points"></span>
          <span class="prix">${echap(prix(p))}</span>
        </div>
        ${p.description ? `<p class="desc">${echap(p.description)}</p>` : ""}
      </div>`).join("")}
    ${s.note ? `<p class="note-section">${echap(s.note)}</p>` : ""}
  </section>`).join("");

// Bouton « Imprimer le menu » (pas de onclick dans le HTML : compatible avec la CSP)
document.querySelector(".imprimer").addEventListener("click", () => window.print());
