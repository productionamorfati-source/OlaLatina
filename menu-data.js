// MENU D'OLA LATINA : la seule partie à modifier.
// Le site (index.html, section « La carte ») et le menu complet (menu.html)
// lisent tous les deux ce fichier.
// Source : menu de olalatina.ca (octobre 2026), textes corrigés.
//
// Pour chaque section :
//   titre   : le nom de la catégorie
//   intro   : une phrase sous le titre (facultatif)
//   note    : une phrase après les plats (facultatif)
//   accueil : true pour afficher cette section sur la page d'accueil
//             (toutes les sections sont toujours dans menu.html)
//
// Pour chaque plat :
//   nom         : le nom du plat
//   description : une courte phrase (facultatif)
//   prix        : le prix en dollars, avec un point (ex. 2.50)
//                 ou deux formats : { P: 25, G: 30 }
//   suffixe     : texte après le prix (facultatif, ex. "chacune")
//   tags        : facultatif, parmi "vege", "epice", "vedette"

window.MENU = {
  restaurant: "Ola Latina",
  sousTitre: "Cuisine latino-américaine · Montréal-Nord",
  telephone: "514-656-5060",
  adresse: "10701 Av. Bellevois, Montréal-Nord",
  noteBasDePage: "Taxes en sus. Avisez-nous de toute allergie.",

  sections: [
    {
      titre: "Entrées",
      intro: "Commencez votre expérience gastronomique avec nos délicieuses entrées.",
      accueil: true,
      plats: [
        { nom: "Empanada", description: "Empanada croustillante, farcie au choix de bœuf ou de poulet, offrant une texture dorée à l'extérieur et un cœur savoureux et juteux.", prix: 6 },
        { nom: "Tamal salvadorien ou mexicain", description: "Tamal à base de pâte de maïs moelleuse, garni de poulet ou de porc, de pommes de terre et de sauce pipián.", prix: 6 },
        { nom: "Mini soupe au bœuf", description: "Soupe de bœuf mijotée lentement avec des légumes frais, offrant un bouillon riche et réconfortant. Servie avec des chips de maïs croustillantes.", prix: 10 },
        { nom: "Mini soupe aux fruits de mer", description: "Soupe préparée avec des crevettes, du poisson et des fruits de mer frais, aux saveurs marines riches et authentiques. Servie avec des chips de maïs croquantes.", prix: 10 }
      ]
    },
    {
      titre: "Déjeuners d'Amérique latine",
      intro: "Tous les déjeuners sont servis jusqu'à 13 h.",
      plats: [
        { nom: "Déjeuner gourmet Ola Latina", description: "Deux œufs brouillés mélangés avec chorizo, tomate et oignon blanc. Accompagnés de fromage feta, de crème sure, de plantains, de haricots noirs, d'avocat, de fruits frais, de quatre tortillas et d'un café mélange maison.", prix: 27 },
        { nom: "Déjeuner gourmet El Ranchero", description: "Deux œufs tournés nappés de sauce tomate piquante maison, accompagnés de chorizo, de fromage feta, de crème sure, de plantains, de haricots noirs, d'avocat, de fruits frais, de quatre tortillas et d'un café mélange maison.", prix: 27, tags: ["epice"] },
        { nom: "Déjeuner enfant (10 ans et moins)", description: "Quesadilla au fromage, œuf tourné, fruits frais et petit jus.", prix: 10 }
      ]
    },
    {
      titre: "Chilaquiles",
      plats: [
        { nom: "Chilaquiles naturales", description: "Chilaquiles nature, garnis de nachos de maïs croustillants nappés d'une sauce tomate piquante maison, accompagnés de deux œufs tournés. Servis avec avocat, fromage, fruits frais et un café mélange maison.", prix: 20, tags: ["epice"] },
        { nom: "Chilaquiles pastor", description: "Chilaquiles al pastor, garnis de nachos de maïs croustillants nappés d'une sauce tomate épicée maison, accompagnés de deux œufs tournés et de porc al pastor savoureux. Servis avec avocat, fromage, crème sure, fruits frais et un café mélange maison.", prix: 25, tags: ["epice"] },
        { nom: "Chilaquiles poulet", description: "Chilaquiles au poulet, garnis de nachos de maïs croustillants nappés d'une sauce tomate épicée maison, accompagnés de deux œufs tournés et de poulet savoureux. Servis avec fromage, crème sure, fruits frais et un café mélange maison.", prix: 25, tags: ["epice"] },
        { nom: "Chilaquiles steak", description: "Chilaquiles au steak, garnis de nachos de maïs croustillants nappés d'une sauce tomate épicée maison, accompagnés de deux œufs tournés et de bœuf savoureux. Servis avec fromage, crème sure, fruits frais et un café mélange maison.", prix: 28, tags: ["epice"] },
        { nom: "Chilaquiles mixto", description: "Chilaquiles mixtes, garnis de nachos de maïs croustillants nappés d'une sauce tomate épicée maison, accompagnés de deux œufs tournés, de bœuf savoureux et de crevettes ou de chorizo. Servis avec fromage, crème sure, fruits frais et un café mélange maison.", prix: 32, tags: ["epice"] }
      ]
    },
    {
      titre: "Tacos",
      intro: "Les tacos mexicains sont une explosion de saveurs et de traditions à chaque bouchée : une tortilla chaude et tendre qui enveloppe un mélange irrésistible de viandes juteuses. Toutes nos assiettes de tacos sont garnies d'oignon et de coriandre.",
      accueil: true,
      plats: [
        { nom: "Quesadillas", description: "Quesadillas croustillantes garnies de viande assaisonnée, servies avec une salade fraîche et un quartier de citron.", prix: 25 },
        { nom: "Tacos au poulet", description: "Tacos garnis de poulet savoureux, d'oignons frais, de coriandre et d'avocat, servis avec du citron vert.", prix: 20 },
        { nom: "Tacos al pastor", description: "Tacos garnis de porc mariné savoureux, d'oignons frais et d'ananas, servis avec du citron vert.", prix: 20 },
        { nom: "Tacos au chorizo et fromage", description: "Tacos au chorizo et au fromage fondant, servis avec oignons frais, coriandre et citron vert.", prix: 20 },
        { nom: "Tacos au steak de bœuf", description: "Tortillas de maïs molles garnies de steak de bœuf.", prix: 22 },
        { nom: "Tacos quesabirria", prix: 28 },
        { nom: "Yuca frita con chicharrón", description: "Manioc et porc frits, salade maison et sauce tomate.", prix: 22 },
        { nom: "Tacos aux crevettes", description: "Quatre tacos aux crevettes : tortillas chaudes garnies de crevettes savoureuses, de fromage fondant, de laitue croquante, d'oignons frais, de champignons sautés et d'avocat.", prix: 28 },
        { nom: "Tacos au poisson", description: "Tacos de poisson croustillants garnis de légumes frais, d'oignons marinés et d'une sauce crémeuse relevée, servis avec un quartier de citron.", prix: 25 }
      ]
    },
    {
      titre: "Nachos",
      intro: "Toutes nos assiettes de nachos sont garnies de haricots noirs, de crème sure, de fromage et de pico de gallo (tomate, oignon et jus de citron).",
      plats: [
        { nom: "Nachos fromage", description: "Garnis d'avocat.", prix: 14, tags: ["vege"] },
        { nom: "Nachos poulet", prix: 20 },
        { nom: "Nachos chorizo", prix: 20 },
        { nom: "Nachos mixto (steak et chorizo)", prix: 25 },
        { nom: "Nachos pastor", prix: 20 },
        { nom: "Nachos steak", prix: 22 }
      ]
    },
    {
      titre: "Burritos",
      intro: "Tous nos burritos sont garnis de riz blanc, de haricots noirs, de fromage, de laitue et de crème sure.",
      note: "Faites-en un combo avec une boisson et des frites pour seulement 4,99 $.",
      accueil: true,
      plats: [
        { nom: "Burrito poulet", prix: 20 },
        { nom: "Burrito pastor", prix: 25 },
        { nom: "Burrito chorizo", prix: 25 },
        { nom: "Burrito steak", prix: 25 },
        { nom: "Burrito végétarien", prix: 25, tags: ["vege"] },
        { nom: "Burrito mixto (steak et chorizo)", prix: 25 }
      ]
    },
    {
      titre: "Soupes-repas",
      intro: "Laissez-vous tenter par l'une de nos délicieuses soupes. Toutes les soupes-repas sont servies avec deux tortillas de maïs molles, du riz, de l'oignon, de la coriandre et du citron.",
      plats: [
        { nom: "Mercredi et jeudi : soupe au bœuf", description: "Rôti de palette de bœuf et légumes frais.", prix: { P: 25, G: 30 } },
        { nom: "Vendredi : soupe de mondongo", description: "Tripes de bœuf et légumes frais.", prix: { P: 25, G: 30 } },
        { nom: "Samedi et dimanche : soupe aux fruits de mer", description: "Crevettes, crabe et mélange de fruits de mer.", prix: { P: 27, G: 34 } }
      ]
    },
    {
      titre: "Salades-repas",
      intro: "Toutes nos salades contiennent de la laitue romaine, du concombre, de l'avocat, de l'oignon, du fromage feta et du citron.",
      plats: [
        { nom: "Salade au poulet", prix: 20 },
        { nom: "Salade au steak", prix: 25 },
        { nom: "Salade aux crevettes", prix: 23 },
        { nom: "Salade végétarienne", prix: 20, tags: ["vege"] }
      ]
    },
    {
      titre: "Plats principaux à la plancha",
      intro: "Tous nos plats principaux sont servis avec du riz blanc, des légumes sautés, deux tortillas de maïs et une salade maison.",
      plats: [
        { nom: "Assiette mixto", description: "Poulet et crevettes.", prix: 33 },
        { nom: "Assiette de crevettes", prix: 25 },
        { nom: "Assiette de poulet", prix: 23 },
        { nom: "Assiette de steak", prix: 25 },
        { nom: "Assiette de porc frit", prix: 22 },
        { nom: "Assiette de poisson frit", prix: 30 },
        { nom: "Assiette mar y tierra", description: "Steak et crevettes.", prix: 35 },
        { nom: "Pupusas", prix: 6, suffixe: "chacune" }
      ]
    },
    {
      titre: "Combos festin à partager",
      plats: [
        { nom: "Combo Latina", description: "Plantain frit, yuca frite avec chicharrón, quatre tacos al pastor et deux canettes de Coca-Cola.", prix: 47 }
      ]
    },
    {
      titre: "Fête de tacos",
      intro: "Combos de tacos à partager.",
      plats: [
        { nom: "Ronda tacos (24 unités)", description: "Quatre tacos al pastor, huit tacos au poulet, huit tacos au chorizo, quatre tacos au steak et deux canettes.", prix: 90 },
        { nom: "Ronda quesatacos (12 unités)", description: "Quatre quesabirrias, quatre tacos aux crevettes, quatre tacos au steak avec fromage et un pichet de limonade.", prix: 90 }
      ]
    },
    {
      titre: "Viande à tacos pour emporter",
      intro: "Servie avec oignon, coriandre, citron, salsas verte et rouge, et 16 tortillas de maïs molles.",
      plats: [
        { nom: "1 kg de birria", prix: 95 },
        { nom: "1 kg de bœuf", prix: 90 },
        { nom: "1 kg de poulet", prix: 75 },
        { nom: "1 kg de carnitas", prix: 75 },
        { nom: "1 kg de pastor", prix: 75 }
      ]
    },
    {
      titre: "Boissons",
      plats: [
        { nom: "Horchata", prix: { P: 5, G: 8 } },
        { nom: "Jamaica", prix: { P: 5, G: 8 } },
        { nom: "Limonade", prix: { P: 5, G: 8 } },
        { nom: "Coca-Cola, Sprite", prix: 2.5 },
        { nom: "Jarritos", prix: 5 },
        { nom: "Kolashanpan", prix: 5 },
        { nom: "Sangría Señorial", prix: 5 }
      ]
    },
    {
      titre: "Desserts",
      intro: "Les desserts les plus traditionnels et les plus délicieux.",
      accueil: true,
      plats: [
        { nom: "Churros au caramel", description: "Beignet frit fourré au dulce de leche.", prix: 4 },
        { nom: "Biscuit alfajor", description: "Deux biscuits sablés fourrés au dulce de leche et enrobés de noix de coco.", prix: 5 },
        { nom: "Pouding au riz", prix: 5 },
        { nom: "Quesadilla salvadorienne", description: "Gâteau aux quatre fromages. Demandez-nous la disponibilité.", prix: { P: 5, G: 15 } },
        { nom: "Tiramisu", description: "Demandez-nous la disponibilité.", prix: 5 }
      ]
    },
    {
      titre: "Extras",
      intro: "Extras pour les plats.",
      plats: [
        { nom: "Fromage (tacos)", prix: 3 },
        { nom: "Citron", prix: 1.5 },
        { nom: "Avocat", prix: 2 },
        { nom: "4 tortillas", prix: 1.25 },
        { nom: "Salsas rouge et verte", prix: 1.25 }
      ]
    }
  ]
};
