// TRADUCTIONS DES PAGES (anglais et espagnol)
// Le français reste écrit directement dans les pages HTML : ce fichier ne contient que l'anglais (en) et l'espagnol (es).
// Chaque texte traduisible du HTML porte un attribut data-i18n="clé" (ou data-i18n-alt, data-i18n-label,
// data-i18n-content pour un attribut). La clé renvoie à une ligne ci-dessous.
// Une traduction absente ? Le texte français s'affiche à la place : rien ne casse.
// Les plats et les prix sont traduits dans menu-traductions.js.

window.TRADUCTIONS = {
  // ---------- Textes utilisés par les scripts (le français est aussi ici) ----------
  "ui.menu-ouvrir": { fr: "Ouvrir le menu", en: "Open menu", es: "Abrir el menú" },
  "ui.menu-fermer": { fr: "Fermer le menu", en: "Close menu", es: "Cerrar el menú" },
  "ui.allergene": { fr: "Allergène :", en: "Allergen:", es: "Alérgeno:" },
  "ui.des": { fr: "dès", en: "from", es: "desde" },
  "ui.tag-vege": { fr: "Végé", en: "Veggie", es: "Vegetariano" },
  "ui.tag-epice": { fr: "Épicé", en: "Spicy", es: "Picante" },
  "ui.tag-vedette": { fr: "Vedette", en: "Featured", es: "Destacado" },
  "ui.zoom-agrandir": { fr: "Agrandir la photo :", en: "Enlarge photo:", es: "Ampliar la foto:" },
  "ui.zoom-fermer": { fr: "Fermer la photo", en: "Close photo", es: "Cerrar la foto" },
  "ui.zoom-aide": { fr: "Touchez ou cliquez n'importe où pour fermer", en: "Tap or click anywhere to close", es: "Toque o haga clic en cualquier lugar para cerrar" },

  // ---------- Commun à plusieurs pages ----------
  "commun.retour": { en: "← Back to the site", es: "← Volver al sitio" },
  "commun.confidentialite": { en: "Privacy policy", es: "Política de privacidad" },
  "commun.conditions": { en: "Terms of use", es: "Condiciones de uso" },
  "commun.droits": { en: "All rights reserved.", es: "Todos los derechos reservados." },

  // ---------- Accueil (index.html) ----------
  "accueil.titre": { en: "Ola Latina — Restaurant", es: "Ola Latina — Restaurante" },
  "accueil.description": {
    en: "Ola Latina, a Latin American restaurant in Montréal-Nord: Mexican flavours and Salvadoran specialties. Discover our menu, our story and our hours.",
    es: "Ola Latina, restaurante latinoamericano en Montréal-Nord: sabores mexicanos y especialidades salvadoreñas. Descubra nuestro menú, nuestra historia y nuestro horario."
  },
  "accueil.evitement": { en: "Skip to content", es: "Ir al contenido" },
  "nav.carte": { en: "Menu", es: "Menú" },
  "nav.histoire": { en: "Our story", es: "Nuestra historia" },
  "nav.galerie": { en: "Gallery", es: "Galería" },
  "nav.contact": { en: "Contact", es: "Contacto" },
  "nav.appeler": { en: "Call", es: "Llamar" },

  "hero.bienvenue": { en: "Welcome to", es: "Bienvenidos a" },
  "hero.cuisine": { en: "Latin American cuisine", es: "Cocina latinoamericana" },
  "hero.sous-titre": { en: "Mexican flavours and Salvadoran specialties, in Montréal-Nord.", es: "Sabores mexicanos y especialidades salvadoreñas, en Montréal-Nord." },
  "hero.voir-carte": { en: "See the menu", es: "Ver el menú" },
  "hero.nous-trouver": { en: "Find us", es: "Encuéntrenos" },
  "hero.photo-alt": {
    en: "El Ranchero gourmet breakfast: eggs over easy in tomato sauce, chorizo, plantains, black beans, avocado and fresh fruit",
    es: "Desayuno gourmet El Ranchero: huevos volteados en salsa de tomate, chorizo, plátanos, frijoles negros, aguacate y fruta fresca"
  },
  "hero.photo-nom": { fr: "Déjeuner gourmet El Ranchero", en: "El Ranchero gourmet breakfast", es: "Desayuno gourmet El Ranchero" },
  "hero.note-label": { en: "Rated 4.7 out of 5 on Google", es: "Calificación de 4,7 sobre 5 en Google" },
  "hero.note": { en: "4.7 ★", es: "4,7 ★" },
  "hero.sur-google": { en: "on Google", es: "en Google" },

  "carte.surtitre": { en: "Our must-haves", es: "Nuestros imprescindibles" },
  "carte.titre": { en: "The <em>menu</em>", es: "El <em>menú</em>" },
  "carte.menu-complet": { en: "See the full menu", es: "Ver el menú completo" },

  "boissons.surtitre": { en: "Horchata, jamaica, cocktails…", es: "Horchata, jamaica, cócteles…" },
  "boissons.titre": { en: "Something <em>to&nbsp;drink?</em>", es: "¿Algo <em>de&nbsp;beber?</em>" },
  "boissons.toutes": { en: "All drinks", es: "Todas las bebidas" },

  "histoire.surtitre": { en: "Our story · Montréal-Nord", es: "Nuestra historia · Montréal-Nord" },
  "histoire.titre": { en: "Flavours <em>from&nbsp;home</em>", es: "Los sabores <em>de&nbsp;nuestra&nbsp;tierra</em>" },
  "histoire.p1": {
    en: "At Ola Latina, cooking is a story of passion, sharing and discovery. Of Salvadoran origin, our culinary inspiration has grown richer over the years, especially through a deep connection with Mexican culture and food traditions: the flavours of Mexico, inspired by our Salvadoran roots.",
    es: "En Ola Latina, la cocina es una historia de pasión, de compartir y de descubrimientos. De origen salvadoreño, nuestra inspiración culinaria se ha enriquecido con los años, sobre todo gracias a un vínculo profundo con la cultura y las tradiciones gastronómicas mexicanas: los sabores de México, inspirados por nuestras raíces salvadoreñas."
  },
  "histoire.p2": {
    en: "Today, we offer a menu that celebrates Mexican flavours, alongside a few Salvadoran specialties that are close to our hearts.",
    es: "Hoy les ofrecemos un menú que celebra los sabores mexicanos, acompañados de algunas especialidades salvadoreñas que llevamos en el corazón."
  },
  "histoire.p3": {
    en: "Every dish reflects our love of good food, our wish to make you happy and our taste for generous flavours. Whether you come back for a dish you love or to discover a new specialty, we are happy to welcome you.",
    es: "Cada plato refleja nuestro amor por la buena cocina, nuestro deseo de complacerle y nuestro gusto por los sabores generosos. Ya sea para reencontrar un plato que le encanta o para descubrir una nueva especialidad, será un placer recibirle en nuestra casa."
  },
  "histoire.decouvrir": { en: "Discover", es: "Descubrir" },
  "histoire.photo-alt": {
    en: "The Ola Latina logo painted on the restaurant window, decorated with paper rosettes",
    es: "El logo de Ola Latina pintado en la vitrina del restaurante, decorada con rosetas de papel"
  },
  "histoire.legende": { en: "Welcome to our home", es: "Bienvenidos a nuestra casa" },

  "galerie.titre": { en: "Fresh <em>out of</em> the kitchen", es: "Recién <em>salido de</em> la cocina" },
  "galerie.devanture-alt": {
    en: "Ola Latina's brick storefront, with its sign and patio, at 10701 Bellevois Avenue",
    es: "La fachada de ladrillo de Ola Latina, con su letrero y su terraza, en el 10701 de la avenida Bellevois"
  },
  "galerie.devanture": { en: "The storefront", es: "La fachada" },
  "galerie.comptoir-alt": { en: "The order counter and its jars of Latin American candy", es: "El mostrador de pedidos y sus frascos de dulces latinoamericanos" },
  "galerie.comptoir": { en: "At the counter", es: "En el mostrador" },
  "galerie.cuisine-alt": { en: "In the kitchen: carrots cut by hand on the board", es: "En la cocina: zanahorias cortadas a mano en la tabla" },
  "galerie.cuisine": { en: "Homemade", es: "Hecho en casa" },

  "contact.surtitre": { en: "Find us", es: "Encuéntrenos" },
  "contact.titre": { en: "Come <em>see us</em>", es: "Venga <em>a vernos</em>" },
  "contact.itineraire": { en: "Directions", es: "Cómo llegar" },
  "contact.horaires": { en: "Hours", es: "Horario" },
  "jour.lundi": { en: "Monday", es: "Lunes" },
  "jour.mardi": { en: "Tuesday", es: "Martes" },
  "jour.mercredi-samedi": { en: "Wednesday – Saturday", es: "Miércoles – Sábado" },
  "jour.dimanche": { en: "Sunday", es: "Domingo" },
  "heures.lundi": { en: "9 a.m. – 5 p.m.", es: "9 h – 17 h" },
  "heures.ferme": { en: "Closed", es: "Cerrado" },
  "heures.mercredi-samedi": { en: "10 a.m. – 9 p.m.", es: "10 h – 21 h" },
  "heures.dimanche": { en: "10 a.m. – 6 p.m.", es: "10 h – 18 h" },

  "commander.surtitre": { en: "Delivery", es: "Entrega a domicilio" },
  "commander.titre": { en: "Order <em>online</em>", es: "Pida <em>en línea</em>" },
  "commander.texte": { en: "Get our dishes delivered to your door with Uber Eats or DoorDash.", es: "Nuestros platos llegan a su casa con Uber Eats o DoorDash." },
  "commander.uber": { en: "Order on Uber Eats", es: "Pedir en Uber Eats" },
  "commander.doordash": { en: "Order on DoorDash", es: "Pedir en DoorDash" },

  // ---------- Menu complet (menu.html) ----------
  "menu.titre": { en: "Menu · Ola Latina", es: "Menú · Ola Latina" },
  "menu.description": { en: "Full menu of Ola Latina, a Latin American restaurant in Montréal-Nord.", es: "Menú completo de Ola Latina, restaurante latinoamericano en Montréal-Nord." },

  // ---------- Page introuvable (404.html) ----------
  "404.titre": { en: "Page not found · Ola Latina", es: "Página no encontrada · Ola Latina" },
  "404.h1": { en: "This page is <span>not on the menu</span>", es: "Esta página no está <span>en el menú</span>" },
  "404.texte": {
    en: "The link may be wrong, or the page has moved. Don't worry, the kitchen is still open!",
    es: "Puede que el enlace sea incorrecto o que la página se haya movido. ¡No se preocupe, la cocina sigue abierta!"
  },
  "404.accueil": { en: "Back to home", es: "Volver al inicio" },
  "404.menu": { en: "See the menu", es: "Ver el menú" },
  "404.aide": {
    en: "Any questions? Call us at <a href=\"tel:+15146565060\">514-656-5060</a>.",
    es: "¿Alguna pregunta? Llámenos al <a href=\"tel:+15146565060\">514-656-5060</a>."
  },

  // ---------- Politique de confidentialité ----------
  "confidentialite.titre": { en: "Privacy policy · Ola Latina", es: "Política de privacidad · Ola Latina" },
  "confidentialite.description": {
    en: "Privacy policy of the Ola Latina website, a Latin American restaurant in Montréal-Nord.",
    es: "Política de privacidad del sitio de Ola Latina, restaurante latinoamericano en Montréal-Nord."
  },
  "confidentialite.h1": { en: "Privacy <span>policy</span>", es: "Política de <span>privacidad</span>" },
  "confidentialite.corps": {
    en: `
      <p>Last updated: November 6, 2026</p>
      <p class="note-traduction">This is a translation provided for convenience. In case of discrepancy, the French version prevails.</p>
      <p>Ola Latina respects your privacy. This policy explains what personal information is collected when you visit our website or contact us, how we use it and what your rights are, in accordance with Québec's <em>Act respecting the protection of personal information in the private sector</em> (Law 25).</p>

      <section>
        <h2>What the website collects</h2>
        <p>Our website is only used to present the restaurant, the menu and our hours. It contains <strong>no forms, no customer accounts, no analytics tools and no advertising</strong>.</p>
        <ul>
          <li><strong>No cookies</strong> are placed on your device. Your language choice is only remembered in your own browser.</li>
          <li>Fonts, images and scripts are served from our own website: your browsing is not shared with Google Fonts or any other third-party service.</li>
          <li>As with any website, our host may automatically record technical data (IP address, browser type, date and time of the visit, page viewed). These logs are only used to keep the website secure and working properly, and are kept by our host, GitHub (GitHub Pages service), under its own <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">privacy statement</a>. We do not have access to them.</li>
        </ul>
      </section>

      <section>
        <h2>When you contact us</h2>
        <p>If you call us (for an order, a reservation or a question), we may write down your name, your phone number and the details of your request. This information is only used to handle your request. It is never sold, rented or used for advertising, and it is deleted when it is no longer needed.</p>
      </section>

      <section>
        <h2>Links to other websites</h2>
        <p>The “Directions” link and the links to our address open Google Maps. Once on that website, Google's privacy rules apply. We encourage you to read them.</p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>At any time, you may:</p>
        <ul>
          <li>ask whether we hold information about you and access it;</li>
          <li>have it corrected if it is inaccurate or incomplete;</li>
          <li>withdraw your consent or ask for it to be deleted.</li>
        </ul>
        <p>We answer every request within 30 days. If you are not satisfied with our answer, you may file a complaint with the <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">Commission d'accès à l'information du Québec</a>.</p>
      </section>

      <section>
        <h2>Person in charge of the protection of personal information</h2>
        <p>For any question or request about your personal information:</p>
        <p>
          Emerita Castaneda, owner<br>
          Ola Latina, 10701 Av. Bellevois, Montréal-Nord, QC H1H 3C7<br>
          Phone: <a href="tel:+15146565060">514-656-5060</a><br>
          Email: <a href="mailto:olalatina10701@gmail.com">olalatina10701@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>We may change this policy, for example if we add online ordering or a contact form. The update date at the top of the page shows the version in effect.</p>
      </section>`,
    es: `
      <p>Última actualización: 6 de noviembre de 2026</p>
      <p class="note-traduction">Esta es una traducción ofrecida por comodidad. En caso de discrepancia, prevalece la versión en francés.</p>
      <p>Ola Latina respeta su privacidad. Esta política explica qué datos personales se recopilan cuando visita nuestro sitio o se comunica con nosotros, cómo los usamos y cuáles son sus derechos, conforme a la <em>Ley sobre la protección de los datos personales en el sector privado</em> de Quebec (Ley 25).</p>

      <section>
        <h2>Lo que recopila el sitio</h2>
        <p>Nuestro sitio solo sirve para presentar el restaurante, el menú y nuestro horario. No contiene <strong>ningún formulario, ninguna cuenta de cliente, ninguna herramienta de estadísticas ni publicidad</strong>.</p>
        <ul>
          <li><strong>No se instala ninguna cookie</strong> en su dispositivo. La elección de idioma solo se guarda en su propio navegador.</li>
          <li>Las fuentes, imágenes y scripts se sirven desde nuestro propio sitio: su navegación no se transmite a Google Fonts ni a otros servicios de terceros.</li>
          <li>Como en cualquier sitio web, nuestro proveedor de alojamiento puede registrar automáticamente datos técnicos (dirección IP, tipo de navegador, fecha y hora de la visita, página consultada). Estos registros solo sirven para garantizar la seguridad y el buen funcionamiento del sitio, y los conserva nuestro proveedor, GitHub (servicio GitHub Pages), según su propia <a href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">declaración de privacidad</a>. Nosotros no tenemos acceso a ellos.</li>
        </ul>
      </section>

      <section>
        <h2>Cuando se comunica con nosotros</h2>
        <p>Si nos llama (para un pedido, una reservación o una pregunta), podemos anotar su nombre, su número de teléfono y los detalles de su solicitud. Estos datos solo sirven para atender su solicitud. No se venden, no se alquilan ni se usan con fines publicitarios, y se eliminan cuando ya no son necesarios.</p>
      </section>

      <section>
        <h2>Enlaces a otros sitios</h2>
        <p>El enlace «Cómo llegar» y los enlaces a nuestra dirección abren Google Maps. Una vez en ese sitio, se aplican las reglas de privacidad de Google. Le invitamos a consultarlas.</p>
      </section>

      <section>
        <h2>Sus derechos</h2>
        <p>En cualquier momento, usted puede:</p>
        <ul>
          <li>preguntar si tenemos datos sobre usted y acceder a ellos;</li>
          <li>hacerlos corregir si son inexactos o están incompletos;</li>
          <li>retirar su consentimiento o pedir que se eliminen.</li>
        </ul>
        <p>Respondemos a toda solicitud en un plazo de 30 días. Si no está satisfecho con nuestra respuesta, puede presentar una queja ante la <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer">Commission d'accès à l'information du Québec</a>.</p>
      </section>

      <section>
        <h2>Responsable de la protección de los datos personales</h2>
        <p>Para cualquier pregunta o solicitud sobre sus datos personales:</p>
        <p>
          Emerita Castaneda, propietaria<br>
          Ola Latina, 10701 Av. Bellevois, Montréal-Nord, QC H1H 3C7<br>
          Teléfono: <a href="tel:+15146565060">514-656-5060</a><br>
          Correo electrónico: <a href="mailto:olalatina10701@gmail.com">olalatina10701@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Cambios</h2>
        <p>Podemos modificar esta política, por ejemplo si añadimos pedidos en línea o un formulario de contacto. La fecha de actualización en la parte superior de la página indica la versión vigente.</p>
      </section>`
  },

  // ---------- Conditions d'utilisation ----------
  "conditions.titre": { en: "Terms of use · Ola Latina", es: "Condiciones de uso · Ola Latina" },
  "conditions.description": {
    en: "Terms of use and legal notice of the Ola Latina website, a Latin American restaurant in Montréal-Nord.",
    es: "Condiciones de uso y aviso legal del sitio de Ola Latina, restaurante latinoamericano en Montréal-Nord."
  },
  "conditions.h1": { en: "Terms <span>of use</span>", es: "Condiciones <span>de uso</span>" },
  "conditions.corps": {
    en: `
      <p>Last updated: November 6, 2026</p>
      <p class="note-traduction">This is a translation provided for convenience. In case of discrepancy, the French version prevails.</p>
      <p>By using this website, you accept the terms below. Their main purpose is to give you clear information about the menu, prices and allergens.</p>

      <section>
        <h2>Who publishes this website</h2>
        <p>
          Restaurant Olalatina inc., operating the Ola Latina restaurant<br>
          10701 Av. Bellevois, Montréal-Nord, QC H1H 3C7<br>
          Phone: <a href="tel:+15146565060">514-656-5060</a><br>
          Québec enterprise number (NEQ): 1174575648<br>
          Website hosting: GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States
        </p>
      </section>

      <section>
        <h2>Menu and prices</h2>
        <ul>
          <li>Prices are in Canadian dollars, <strong>taxes extra</strong>. They may change without notice: the price displayed in the restaurant when you order applies.</li>
          <li>Some dishes, specials and drinks may not be available on certain days.</li>
          <li>Photos are for illustration only; presentation may vary slightly.</li>
          <li>A 15% tip is added for groups of 6 or more, as shown on the menu.</li>
        </ul>
      </section>

      <section>
        <h2>Allergies and dietary restrictions</h2>
        <p>The main allergens are shown on the menu for information. Our dishes are prepared in a kitchen that handles, among other things, gluten, dairy, eggs, seafood, peanuts and tree nuts: we cannot guarantee the absence of traces.</p>
        <p><strong>If you have an allergy, always tell our staff before ordering.</strong></p>
      </section>

      <section>
        <h2>Alcoholic drinks</h2>
        <p>Alcoholic drinks are only served to people aged 18 and over. ID may be requested. Please drink responsibly.</p>
      </section>

      <section>
        <h2>Website content</h2>
        <p>The texts, photos, logo and illustrations on this website belong to Ola Latina or are used with permission. Please do not reproduce them without our consent. The fonts (DM Sans and Fraunces) are used under the free SIL Open Font License.</p>
        <p>We do our best to keep the information on the website (hours, prices, menu) accurate and up to date. If in doubt, give us a call.</p>
      </section>

      <section>
        <h2>Links to other websites</h2>
        <p>The website contains links to external services, such as Google Maps. We are not responsible for their content or practices.</p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>This website places no cookies and collects no data through forms. To learn more, read our <a href="politique-confidentialite.html">privacy policy</a>.</p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of Québec and Canada. Nothing in these terms limits the rights granted to you by the <em>Consumer Protection Act</em>.</p>
      </section>`,
    es: `
      <p>Última actualización: 6 de noviembre de 2026</p>
      <p class="note-traduction">Esta es una traducción ofrecida por comodidad. En caso de discrepancia, prevalece la versión en francés.</p>
      <p>Al consultar este sitio, usted acepta las condiciones siguientes. Su objetivo principal es informarle claramente sobre el menú, los precios y los alérgenos.</p>

      <section>
        <h2>Quién publica este sitio</h2>
        <p>
          Restaurant Olalatina inc., que explota el restaurante Ola Latina<br>
          10701 Av. Bellevois, Montréal-Nord, QC H1H 3C7<br>
          Teléfono: <a href="tel:+15146565060">514-656-5060</a><br>
          Número de empresa de Quebec (NEQ): 1174575648<br>
          Alojamiento del sitio: GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Estados Unidos
        </p>
      </section>

      <section>
        <h2>El menú y los precios</h2>
        <ul>
          <li>Los precios están en dólares canadienses, <strong>impuestos no incluidos</strong>. Pueden cambiar sin previo aviso: se aplica el precio indicado en el restaurante al momento del pedido.</li>
          <li>Algunos platos, ofertas y bebidas pueden no estar disponibles ciertos días.</li>
          <li>Las fotos son ilustrativas; la presentación puede variar ligeramente.</li>
          <li>Se agrega una propina del 15 % a los grupos de 6 personas o más, como se indica en el menú.</li>
        </ul>
      </section>

      <section>
        <h2>Alergias y restricciones alimentarias</h2>
        <p>Los principales alérgenos se indican en el menú a título informativo. Nuestros platos se preparan en una cocina donde se manipulan, entre otros, gluten, productos lácteos, huevos, mariscos, cacahuates (maní) y nueces: no podemos garantizar la ausencia de trazas.</p>
        <p><strong>Si tiene una alergia, avise siempre a nuestro personal antes de pedir.</strong></p>
      </section>

      <section>
        <h2>Bebidas alcohólicas</h2>
        <p>Las bebidas alcohólicas solo se sirven a personas de 18 años o más. Se puede solicitar una identificación. Consuma con moderación.</p>
      </section>

      <section>
        <h2>Contenido del sitio</h2>
        <p>Los textos, fotos, logo e ilustraciones de este sitio pertenecen a Ola Latina o se usan con permiso. Le pedimos no reproducirlos sin nuestro acuerdo. Las fuentes tipográficas (DM Sans y Fraunces) se usan bajo la licencia libre SIL Open Font License.</p>
        <p>Hacemos todo lo posible para que la información del sitio (horario, precios, menú) sea exacta y esté al día. En caso de duda, llámenos.</p>
      </section>

      <section>
        <h2>Enlaces a otros sitios</h2>
        <p>El sitio contiene enlaces a servicios externos, como Google Maps. No somos responsables de su contenido ni de sus prácticas.</p>
      </section>

      <section>
        <h2>Privacidad</h2>
        <p>Este sitio no instala ninguna cookie y no recopila datos mediante formularios. Para saber más, consulte nuestra <a href="politique-confidentialite.html">política de privacidad</a>.</p>
      </section>

      <section>
        <h2>Ley aplicable</h2>
        <p>Estas condiciones se rigen por las leyes de Quebec y de Canadá. Nada en estas condiciones limita los derechos que le otorga la <em>Ley de protección del consumidor</em>.</p>
      </section>`
  }
};
