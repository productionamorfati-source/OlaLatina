// MENU D'OLA LATINA : la seule partie à modifier.
// Le site (index.html, section « La carte ») et le menu complet (menu.html)
// lisent tous les deux ce fichier.
// Source : document « Réviser les menus Ola Latina » du 25 octobre 2026, textes corrigés.
//
// Pour chaque section :
//   titre   : le nom de la catégorie
//   intro   : une phrase sous le titre (facultatif)
//   note    : une phrase après les plats (facultatif)
//   allergene : avertissement d'allergène pour toute la section (facultatif)
//   image   : photo de la catégorie, quand elle ne montre pas un plat précis (facultatif)
//   vitrine : true pour montrer les boissons avec photo dans la vitrine de l'accueil
//   accueil : true pour afficher cette section sur la page d'accueil
//             (toutes les sections sont toujours dans menu.html)
//
// Pour chaque plat :
//   nom         : le nom du plat
//   description : une courte phrase (facultatif)
//   allergene   : avertissement d'allergène, affiché en évidence (facultatif)
//   image       : nom de la photo dans Assets/plats, sans extension (facultatif)
//                 ex. "empanada" → empanada.avif, empanada-400.avif et empanada.png
//   prix        : le prix en dollars, avec un point (ex. 1.50)
//                 ou plusieurs formats : { P: 25, G: 30 } ou { Verre: 9, Bouteille: 35 }
//   suffixe     : texte après le prix (facultatif)
//   tags        : facultatif, parmi "vege", "epice", "vedette"

window.MENU = {
  restaurant: "Ola Latina",
  sousTitre: "Saveurs mexicaines et salvadoriennes · Montréal-Nord",
  telephone: "514-656-5060",
  adresse: "10701 Av. Bellevois, Montréal-Nord",

  // Notes affichées sous le menu (une ligne chacune)
  notes: [
    "Ajoutez à votre commande une boisson en canette et des frites pour seulement 4,99 $ !",
    "Un pourboire de 15 % est automatiquement ajouté aux tables de 6 personnes ou plus. Merci de votre compréhension !",
    "Nous sommes fermés tous les mardis.",
    "Taxes en sus. Avisez-nous de toute allergie."
  ],

  sections: [
    {
      titre: "Offres de la semaine",
      plats: [
        { nom: "Lundi : 2 pupusas, soupe du jour et boisson en canette", image: "2-pupusas-soupe", prix: 20 },
        { nom: "Lundi : 2 pupusas et boisson", prix: 13 },
        { nom: "Mercredi : assiette de porc frit et boisson en canette", image: "2-assiette-porc-frit", description: "Porc frit, salade, bananes plantains, haricots noirs, riz blanc et 2 tortillas.", prix: 20 },
        { nom: "Jeudi : 3 quesabirrias et boisson en canette", prix: 20 },
        { nom: "Vendredi, samedi et dimanche : tacos, soupe du jour et boisson en canette", image: "2-tacos-soupe", description: "Tacos al pastor ou au poulet.", prix: 25 }
      ]
    },
    {
      titre: "Entrées",
      intro: "Commencez votre expérience gastronomique avec nos délicieuses entrées.",
      accueil: true,
      plats: [
        { nom: "Empanadas", image: "empanada", description: "Chaussons à base de pâte de blé, farcis de poulet ou de bœuf : des merveilles croustillantes et savoureuses. Choix de viande : poulet ou bœuf.", allergene: "la pâte de blé contient du gluten.", prix: 6 },
        { nom: "Tamal salvadorien ou mexicain", image: "tamal", description: "Pâte de maïs moelleuse farcie de poulet ou de porc et de pommes de terre. Choix de viande : poulet ou porc. Le salvadorien est nappé de sauce pipián, le mexicain de sauce mole.", allergene: "le pipián et le mole contiennent des arachides.", prix: 7 },
        { nom: "Mini soupe au bœuf", description: "Soupe au bœuf mijotée lentement avec des légumes frais, garnie d'oignons et de coriandre. Servie avec des croustilles de maïs et un quartier de lime.", prix: 10 },
        { nom: "Mini soupe aux fruits de mer", description: "Soupe préparée avec un mélange de crevettes, de poisson et de fruits de mer frais, garnie d'oignons et de coriandre. Servie avec un quartier de lime.", prix: 10 },
        { nom: "Maniocs frits avec chicharrón", description: "Maniocs frits et porc frit (chicharrón), salade maison et sauce tomate.", prix: 22 }
      ]
    },
    {
      titre: "Déjeuners gourmets",
      intro: "Servis jusqu'à 13 h. Œufs, chorizo (saucisse de porc haché), bananes plantains, avocat, deux tortillas, haricots noirs et quelques croustilles, crème sure, fromage feta, fruits frais et café maison.",
      plats: [
        { nom: "Déjeuner gourmet Ola Latina", image: "dejeuner-ola-latina", description: "Deux œufs brouillés, mélangés avec du chorizo, des tomates et des oignons blancs.", prix: 28 },
        { nom: "Déjeuner gourmet El Ranchero", image: "dejeuner-el-ranchero", description: "Deux œufs tournés accompagnés de chorizo, nappés de sauce tomate maison moyennement piquante, d'oignons et de coriandre.", prix: 28, tags: ["epice"] }
      ]
    },
    {
      titre: "Déjeuners chilaquiles",
      intro: "Servis jusqu'à 13 h. Nachos de maïs nappés de sauce tomate épicée, accompagnés de fromage mozzarella, de deux œufs tournés, de crème sure, de fruits frais et d'un café maison.",
      plats: [
        { nom: "Chilaquiles nature", description: "Protéines : œufs.", prix: 20, tags: ["epice"] },
        { nom: "Chilaquiles al pastor", description: "Protéines : porc mariné et ananas.", prix: 25, tags: ["epice"] },
        { nom: "Chilaquiles au poulet", prix: 25, tags: ["epice"] },
        { nom: "Chilaquiles au steak", prix: 28, tags: ["epice"] },
        { nom: "Chilaquiles campechano", description: "Protéines : chorizo (saucisse de porc haché) et steak.", prix: 28, tags: ["epice"] },
        { nom: "Chilaquiles mixtes", description: "Protéines : crevettes et poulet.", prix: 32, tags: ["epice"] },
        { nom: "Chilaquiles mar y tierra", description: "Protéines : crevettes et steak.", prix: 35, tags: ["epice"] }
      ]
    },
    {
      titre: "Petits déjeuners",
      intro: "Servis jusqu'à 13 h.",
      plats: [
        { nom: "Déjeuner pour enfant", image: "2-dejeuner-enfant", description: "Une quesadilla au fromage, un œuf tourné, des fruits frais et un petit jus.", prix: 10 },
        { nom: "Mini déjeuner", image: "2-mini-dejeuner", description: "Deux œufs tournés, deux saucisses à déjeuner, deux tortillas, des fruits frais et un café maison.", prix: 10 }
      ]
    },
    {
      titre: "Tacos",
      intro: "Tous nos tacos sont garnis d'oignons et de coriandre et accompagnés d'un quartier de citron ou de lime. Nos tortillas de maïs ne contiennent pas de gluten.",
      accueil: true,
      plats: [
        { nom: "Tacos au poulet", description: "Poulet et avocat.", prix: 20 },
        { nom: "Tacos al pastor", description: "Porc mariné, accompagné d'ananas.", prix: 20 },
        { nom: "Tacos au steak", prix: 22 },
        { nom: "Tacos au chorizo et fromage", description: "Chorizo (saucisse de porc haché) et fromage fondant.", prix: 23 },
        { nom: "Tacos au poisson", image: "2-tacos-poisson", description: "Tortillas de maïs molles garnies de poisson pané, de champignons, d'oignons blancs, d'avocat et de légumes frais avec des oignons marinés, le tout nappé d'une sauce crémeuse au chipotle et à la mayonnaise.", prix: 25 },
        { nom: "Tacos quesabirria", image: "2-tacos-quesabirria", description: "Tortillas croustillantes garnies de bœuf et de fromage fondant.", prix: 28 },
        { nom: "Tacos aux crevettes", image: "2-tacos-crevettes", description: "Tortillas de maïs molles garnies de crevettes, d'avocat, de fromage fondant, de laitue croquante et de champignons sautés avec oignons blancs.", prix: 28 }
      ]
    },
    {
      titre: "Quesadillas",
      intro: "Toutes nos quesadillas sont farcies de la viande de votre choix et de fromage fondant.",
      allergene: "les tortillas des quesadillas sont faites de blé et contiennent du gluten.",
      plats: [
        { nom: "Quesadilla au chorizo", description: "Chorizo (saucisse de porc haché).", prix: 25 },
        { nom: "Quesadilla au poulet", prix: 25 },
        { nom: "Quesadilla al pastor", description: "Porc mariné, accompagné d'ananas.", prix: 25 },
        { nom: "Quesadilla au steak", prix: 28 }
      ]
    },
    {
      titre: "Nachos",
      image: "2-nachos",
      intro: "Nos nachos croustillants sont faits de maïs et garnis de haricots noirs, de fromage fondant, de crème sure, d'oignons et de coriandre, et accompagnés d'un quartier de citron ou de lime.",
      note: "Promotion : nachos au fromage + lot de 5 bières, 45 $.",
      plats: [
        { nom: "Nachos au fromage et avocat", prix: 15, tags: ["vege"] },
        { nom: "Nachos au poulet", prix: 20 },
        { nom: "Nachos au chorizo", description: "Chorizo (saucisse de porc haché).", prix: 20 },
        { nom: "Nachos al pastor", description: "Porc mariné, accompagné d'ananas.", prix: 20 },
        { nom: "Nachos au steak", prix: 22 },
        { nom: "Nachos campechano", description: "Steak et chorizo (saucisse de porc haché).", prix: 25 }
      ]
    },
    {
      titre: "Burritos",
      image: "burrito",
      intro: "Nos burritos sont garnis de riz blanc, de haricots noirs, de fromage râpé, de laitue et de crème sure, et accompagnés d'un quartier de citron ou de lime.",
      accueil: true,
      plats: [
        { nom: "Burrito végétarien", description: "Champignons sautés et avocat.", prix: 20, tags: ["vege"] },
        { nom: "Burrito au poulet", prix: 20 },
        { nom: "Burrito al pastor", description: "Porc mariné, accompagné d'ananas.", prix: 20 },
        { nom: "Burrito au chorizo", description: "Chorizo (saucisse de porc haché).", prix: 20 },
        { nom: "Burrito au steak", prix: 22 },
        { nom: "Burrito campechano", description: "Steak et chorizo (saucisse de porc haché).", prix: 25 }
      ]
    },
    {
      titre: "Pupusas",
      image: "pupusas",
      intro: "Pâte de maïs farcie de fromage et de la garniture de votre choix, accompagnée de curtido (salade de chou marinée), de sauce tomate et d'une sauce piquante à part.",
      accueil: true,
      plats: [
        { nom: "Pupusa revuelta", description: "Porc et fromage.", prix: 6 },
        { nom: "Pupusa au fromage", prix: 6, tags: ["vege"] },
        { nom: "Pupusa birria (nouveauté)", description: "Bœuf effiloché à la mexicaine et fromage fondant.", prix: 7 }
      ]
    },
    {
      titre: "Soupes-repas",
      image: "soupe-boeuf",
      intro: "Nos soupes-repas sont servies avec deux tortillas de maïs molles, du riz blanc, des oignons, de la coriandre et un quartier de citron ou de lime.",
      plats: [
        { nom: "Mercredi et jeudi : soupe au bœuf", description: "Rôti de palette de bœuf et légumes frais.", prix: { P: 25, G: 30 } },
        { nom: "Vendredi : soupe au mondongo", description: "Tripes de bœuf et légumes frais.", prix: { P: 25, G: 30 } },
        { nom: "Samedi et dimanche : soupe aux fruits de mer", description: "Crevettes, crabe et mélange de fruits de mer.", prix: { P: 28, G: 35 } }
      ]
    },
    {
      titre: "Salades-repas",
      intro: "Toutes nos salades contiennent de la laitue romaine, du concombre, des champignons sautés, des oignons, du fromage feta et un quartier de citron ou de lime.",
      plats: [
        { nom: "Salade au poulet", image: "2-salade-poulet", prix: 20 },
        { nom: "Salade végétarienne", prix: 20, tags: ["vege"] },
        { nom: "Salade au steak", prix: 25 },
        { nom: "Salade aux crevettes", prix: 25 }
      ]
    },
    {
      titre: "Assiettes à la plancha",
      intro: "Toutes nos assiettes à la plancha sont servies avec du riz, des bananes plantains, des haricots noirs et quelques croustilles de maïs, deux tortillas, une salade maison et un quartier de citron ou de lime.",
      plats: [
        { nom: "Assiette végétarienne", prix: 20, tags: ["vege"] },
        { nom: "Assiette de poulet", prix: 23 },
        { nom: "Assiette de chicharrón", description: "Porc frit.", prix: 23 },
        { nom: "Assiette de steak", prix: 25 },
        { nom: "Assiette de crevettes", prix: 25 },
        { nom: "Assiette de poisson frit", prix: 30 },
        { nom: "Assiette mixte", description: "Crevettes et poulet.", prix: 33 },
        { nom: "Assiette mar y tierra", description: "Crevettes et steak.", prix: 35 }
      ]
    },
    {
      titre: "Combos festin à partager",
      plats: [
        { nom: "Combo Latina", image: "2-combo-latina", description: "Bananes plantains frites, yuca (manioc) frite, chicharrón (porc frit), 4 tacos al pastor (porc mariné et ananas) et 2 canettes de Coca-Cola.", prix: 50 }
      ]
    },
    {
      titre: "Fête de tacos",
      plats: [
        { nom: "Ronda de tacos (24 unités)", description: "4 tacos al pastor, 8 tacos au poulet, 8 tacos au chorizo, 4 tacos au steak et 2 canettes de Coca-Cola.", prix: 90 },
        { nom: "Ronda de quesatacos (12 unités)", image: "2-ronda-quesatacos", description: "4 quesabirrias, 4 tacos aux crevettes avec des morceaux d'avocat, 4 tacos au steak et fromage, et 1 pichet de limonade.", prix: 90 }
      ]
    },
    {
      titre: "Viandes à tacos pour emporter",
      intro: "Servies avec des oignons, de la coriandre, du citron ou de la lime, des sauces verte et rouge, et 16 tortillas de maïs molles.",
      plats: [
        { nom: "1 kg de birria", prix: 100 },
        { nom: "1 kg de bœuf", prix: 95 },
        { nom: "1 kg de poulet", prix: 75 },
        { nom: "1 kg de carnitas", prix: 75 },
        { nom: "1 kg d'al pastor", prix: 75 }
      ]
    },
    {
      titre: "Boissons",
      vitrine: true,
      plats: [
        { nom: "Horchata", image: "horchata", prix: { P: 5, G: 9 } },
        { nom: "Jamaica", image: "jamaica", prix: { P: 5, G: 9 } },
        { nom: "Limonade", image: "limonade", prix: { P: 5, G: 9 } },
        { nom: "Coca-Cola", prix: 5 },
        { nom: "Jarritos", prix: 5 },
        { nom: "Kolashanpan (20 oz)", prix: 5 },
        { nom: "Sangría Señorial", description: "Boisson gazeuse sans alcool.", prix: 5 }
      ]
    },
    {
      titre: "Boissons alcoolisées",
      vitrine: true,
      plats: [
        { nom: "Piña colada", image: "pina-colada", prix: { "Sans alcool": 10, Simple: 14, Double: 18 } },
        { nom: "Margarita à la mangue", image: "margarita-mangue", prix: { "Sans alcool": 8, Simple: 12, Double: 15 } },
        { nom: "Mojito", prix: { "Sans alcool": 7, Simple: 12, Double: 15 } },
        { nom: "Vin rouge", prix: { Verre: 9, Bouteille: 35 } },
        { nom: "Vin blanc", prix: { Verre: 9, Bouteille: 35 } },
        { nom: "Corona (bouteille)", prix: 9 },
        { nom: "Modelo (bouteille)", prix: 9 },
        { nom: "Michelada (verre)", image: "michelada", prix: 15 },
        { nom: "Licuachela (pichet)", image: "licuachela", prix: 18 },
        { nom: "Shooter de tequila", prix: 5 },
        { nom: "Café Baileys", prix: 12 }
      ]
    },
    {
      titre: "Desserts",
      accueil: true,
      plats: [
        { nom: "Churro", image: "churro", description: "Beignet frit fourré au dulce de leche (confiserie traditionnelle à base de lait concentré caramélisé).", prix: 4 },
        { nom: "Alfajor", image: "2-alfajor", description: "Deux biscuits sablés enrobés de noix de coco et garnis de dulce de leche.", prix: 5 },
        { nom: "Pouding au riz", image: "pouding-riz", description: "Riz cuit dans du lait condensé et de la vanille, saupoudré de cannelle.", prix: 5 },
        { nom: "Quesadilla salvadorienne", image: "quesadilla-salvadorienne", description: "Pain aux 5 fromages (feta, mozzarella, parmesan, mascarpone et ricotta), saupoudré de graines de sésame.", prix: { P: 5, G: 15 } },
        { nom: "Tiramisu", image: "tiramisu", description: "Dessert italien composé de couches de biscuits imbibés de café et de crème au mascarpone.", prix: 5 }
      ]
    },
    {
      titre: "Extras",
      plats: [
        { nom: "Fromage à tacos", prix: 3 },
        { nom: "Lime", prix: 1.5 },
        { nom: "Avocat", prix: 2 },
        { nom: "4 tortillas", prix: 1.25 },
        { nom: "Salsas rouge et verte", prix: 1.5 }
      ]
    }
  ]
};
