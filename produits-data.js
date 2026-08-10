// ============================================
// LA RUCHE GOURMANDE — Source unique des produits (Phase 3 : multilingue)
// Chaque produit a ses champs techniques communs (id, image, formats, prix)
// et un sous-objet i18n{fr,de,en,pt,it} pour le nom/description/tags.
// produits.js choisit automatiquement la langue via document.documentElement.lang.
// Pour ajouter une langue : ajouter une clé i18n ici, aucune page à modifier.
// ============================================

const PRODUCTS = {
  "miels": [
    {
      "id": "cremeux",
      "image": "32-crémeux_2026.png",
      "formats": [
        {
          "size": 250,
          "price": 5
        },
        {
          "size": 500,
          "price": 10
        },
        {
          "size": 1000,
          "price": 18
        }
      ],
      "available": true,
      "i18n": {
        "fr": {
          "name": "Miel de Printemps Crémeux",
          "badge": "Récolte 2026",
          "tags": [
            "🌸 Printemps",
            "🍶 Crémeux",
            "🐝 Artisanal",
            "📍 Villerupt"
          ],
          "desc": "Récolté et mis en pot par La Ruche Gourmande à Villerupt, ce miel de printemps crémeux 2026 offre une texture onctueuse et fondante, un délicat parfum floral et une douceur naturelle incomparable."
        },
        "de": {
          "name": "Cremiger Frühlingshonig",
          "badge": "Ernte 2026",
          "tags": [
            "🌸 Frühling",
            "🍶 Cremig",
            "🐝 Handwerklich",
            "📍 Villerupt"
          ],
          "desc": "Von La Ruche Gourmande in Villerupt geerntet und abgefüllt, bietet dieser cremige Frühlingshonig 2026 eine geschmeidige, zart schmelzende Textur, ein feines Blütenaroma und eine unvergleichliche natürliche Süße."
        },
        "en": {
          "name": "Creamy Spring Honey",
          "badge": "2026 Harvest",
          "tags": [
            "🌸 Spring",
            "🍶 Creamy",
            "🐝 Artisan",
            "📍 Villerupt"
          ],
          "desc": "Harvested and jarred by La Ruche Gourmande in Villerupt, this 2026 creamy spring honey offers a smooth, melting texture, a delicate floral aroma and an incomparable natural sweetness."
        },
        "pt": {
          "name": "Mel de Primavera Cremoso",
          "badge": "Colheita 2026",
          "tags": [
            "🌸 Primavera",
            "🍶 Cremoso",
            "🐝 Artesanal",
            "📍 Villerupt"
          ],
          "desc": "Colhido e engarrafado pela La Ruche Gourmande em Villerupt, este mel de primavera cremoso 2026 oferece uma textura suave e untuosa, um aroma floral delicado e uma doçura natural incomparável."
        },
        "it": {
          "name": "Miele di Primavera Cremoso",
          "badge": "Raccolto 2026",
          "tags": [
            "🌸 Primavera",
            "🍶 Cremoso",
            "🐝 Artigianale",
            "📍 Villerupt"
          ],
          "desc": "Raccolto e invasettato da La Ruche Gourmande a Villerupt, questo miele di primavera cremoso 2026 offre una consistenza morbida e vellutata, un delicato profumo floreale e una dolcezza naturale incomparabile."
        }
      }
    },
    {
      "id": "brut",
      "image": "33-brut_2026.png",
      "formats": [
        {
          "size": 250,
          "price": 5
        },
        {
          "size": 500,
          "price": 10
        },
        {
          "size": 1000,
          "price": 18
        }
      ],
      "available": true,
      "i18n": {
        "fr": {
          "name": "Miel de Printemps Brut",
          "badge": "Récolte 2026",
          "tags": [
            "🌸 Printemps",
            "💧 Liquide",
            "🐝 Artisanal",
            "📍 Villerupt"
          ],
          "desc": "Récolté et mis en pot par La Ruche Gourmande à Villerupt, ce miel de printemps 2026 est encore liquide et va naturellement cristalliser avec le temps, comme tout miel non chauffé et non transformé."
        },
        "de": {
          "name": "Roher Frühlingshonig",
          "badge": "Ernte 2026",
          "tags": [
            "🌸 Frühling",
            "💧 Flüssig",
            "🐝 Handwerklich",
            "📍 Villerupt"
          ],
          "desc": "Von La Ruche Gourmande in Villerupt geerntet und abgefüllt, ist dieser Frühlingshonig 2026 noch flüssig und wird mit der Zeit natürlich kristallisieren, wie jeder unerhitzte und unverarbeitete Honig."
        },
        "en": {
          "name": "Raw Spring Honey",
          "badge": "2026 Harvest",
          "tags": [
            "🌸 Spring",
            "💧 Liquid",
            "🐝 Artisan",
            "📍 Villerupt"
          ],
          "desc": "Harvested and jarred by La Ruche Gourmande in Villerupt, this 2026 spring honey is still liquid and will naturally crystallise over time, as any unheated, unprocessed honey does."
        },
        "pt": {
          "name": "Mel de Primavera Bruto",
          "badge": "Colheita 2026",
          "tags": [
            "🌸 Primavera",
            "💧 Líquido",
            "🐝 Artesanal",
            "📍 Villerupt"
          ],
          "desc": "Colhido e engarrafado pela La Ruche Gourmande em Villerupt, este mel de primavera 2026 ainda está líquido e irá cristalizar naturalmente com o tempo, como qualquer mel não aquecido e não processado."
        },
        "it": {
          "name": "Miele di Primavera Grezzo",
          "badge": "Raccolto 2026",
          "tags": [
            "🌸 Primavera",
            "💧 Liquido",
            "🐝 Artigianale",
            "📍 Villerupt"
          ],
          "desc": "Raccolto e invasettato da La Ruche Gourmande a Villerupt, questo miele di primavera 2026 è ancora liquido e cristallizzerà naturalmente col tempo, come ogni miele non riscaldato e non trasformato."
        }
      }
    },
    {
      "id": "ete",
      "image": "6-miel d'été 2.jpg",
      "formats": [
        {
          "size": 250,
          "price": 5
        },
        {
          "size": 500,
          "price": 10
        },
        {
          "size": 1000,
          "price": 18
        }
      ],
      "available": true,
      "i18n": {
        "fr": {
          "name": "Miel d'Été",
          "badge": "Récolte 2026",
          "tags": [
            "☀️ Été",
            "🌻 Ambré",
            "🐝 Artisanal",
            "📍 Villerupt"
          ],
          "desc": "Récolté en fin d'été dans les prairies et vergers du Pays Haut, ce miel plus ambré et corsé offre des arômes riches, typiques des floraisons estivales locales."
        },
        "de": {
          "name": "Sommerhonig",
          "badge": "Ernte 2026",
          "tags": [
            "☀️ Sommer",
            "🌻 Bernsteinfarben",
            "🐝 Handwerklich",
            "📍 Villerupt"
          ],
          "desc": "Am Ende des Sommers in den Wiesen und Obstgärten des Pays Haut geerntet, bietet dieser bernsteinfarbene, kräftigere Honig reiche Aromen, typisch für die lokale Sommerblüte."
        },
        "en": {
          "name": "Summer Honey",
          "badge": "2026 Harvest",
          "tags": [
            "☀️ Summer",
            "🌻 Amber",
            "🐝 Artisan",
            "📍 Villerupt"
          ],
          "desc": "Harvested at the end of summer in the meadows and orchards of the Pays Haut, this deeper amber, fuller-bodied honey offers rich aromas typical of the local summer blooms."
        },
        "pt": {
          "name": "Mel de Verão",
          "badge": "Colheita 2026",
          "tags": [
            "☀️ Verão",
            "🌻 Âmbar",
            "🐝 Artesanal",
            "📍 Villerupt"
          ],
          "desc": "Colhido no final do verão nos prados e pomares do Pays Haut, este mel mais âmbar e encorpado oferece aromas ricos, típicos das floradas de verão locais."
        },
        "it": {
          "name": "Miele Estivo",
          "badge": "Raccolto 2026",
          "tags": [
            "☀️ Estate",
            "🌻 Ambrato",
            "🐝 Artigianale",
            "📍 Villerupt"
          ],
          "desc": "Raccolto a fine estate nei prati e frutteti del Pays Haut, questo miele più ambrato e corposo offre aromi ricchi, tipici delle fioriture estive locali."
        }
      }
    }
  ],
  "gourmandises": [
    {
      "id": "noisimiel",
      "image": null,
      "formats": [
        {
          "size": 250,
          "price": 10
        },
        {
          "size": 500,
          "price": 20
        },
        {
          "size": 1000,
          "price": 39
        }
      ],
      "available": true,
      "i18n": {
        "fr": {
          "name": "Noisimiel",
          "badge": "Nouveauté",
          "tags": [
            "🌰 Noisettes",
            "🍶 À tartiner",
            "🐝 Artisanal"
          ],
          "desc": "Notre miel crémeux twisté aux noisettes concassées — la gourmandise à tartiner qui a le goût du verger et de la ruche. Préparé par La Ruche Gourmande à partir du miel crémeux et de noisettes légèrement torréfiées."
        },
        "de": {
          "name": "Noisimiel",
          "badge": "Neuheit",
          "tags": [
            "🌰 Haselnüsse",
            "🍶 Zum Streichen",
            "🐝 Handwerklich"
          ],
          "desc": "Unser cremiger Honig verfeinert mit gehackten Haselnüssen — der Brotaufstrich mit dem Geschmack von Obstgarten und Bienenstock. Von La Ruche Gourmande aus cremigem Honig und leicht gerösteten Haselnüssen hergestellt."
        },
        "en": {
          "name": "Noisimiel",
          "badge": "New",
          "tags": [
            "🌰 Hazelnuts",
            "🍶 Spreadable",
            "🐝 Artisan"
          ],
          "desc": "Our creamy honey twisted with crushed hazelnuts — a spreadable treat with the taste of the orchard and the hive. Made by La Ruche Gourmande from creamy honey and lightly roasted hazelnuts."
        },
        "pt": {
          "name": "Noisimiel",
          "badge": "Novidade",
          "tags": [
            "🌰 Avelãs",
            "🍶 Para barrar",
            "🐝 Artesanal"
          ],
          "desc": "O nosso mel cremoso com avelãs trituradas — a guloseima para barrar com sabor a pomar e a colmeia. Preparado pela La Ruche Gourmande a partir de mel cremoso e avelãs levemente torradas."
        },
        "it": {
          "name": "Noisimiel",
          "badge": "Novità",
          "tags": [
            "🌰 Nocciole",
            "🍶 Da spalmare",
            "🐝 Artigianale"
          ],
          "desc": "Il nostro miele cremoso arricchito con nocciole tritate — la golosità da spalmare dal gusto di frutteto e alveare. Preparato da La Ruche Gourmande con miele cremoso e nocciole leggermente tostate."
        }
      }
    },
    {
      "id": "nougat",
      "image": null,
      "onOrder": true,
      "leadTime_key": "5-7",
      "i18n": {
        "fr": {
          "name": "Nougat",
          "badge": "Sur commande",
          "tags": [
            "🍬 Fait main",
            "⏳ Délai 5-7 jours"
          ],
          "desc": "Nougat artisanal préparé par La Ruche Gourmande. Fabrication sur commande uniquement, pour garantir fraîcheur et qualité — comptez 5 à 7 jours de délai.",
          "leadTime": "5 à 7 jours"
        },
        "de": {
          "name": "Nougat",
          "badge": "Auf Bestellung",
          "tags": [
            "🍬 Handgemacht",
            "⏳ 5-7 Tage Lieferzeit"
          ],
          "desc": "Handwerklicher Nougat von La Ruche Gourmande. Ausschließlich auf Bestellung gefertigt, um Frische und Qualität zu garantieren — rechnen Sie mit 5 bis 7 Tagen Lieferzeit.",
          "leadTime": "5 bis 7 Tagen"
        },
        "en": {
          "name": "Nougat",
          "badge": "Made to order",
          "tags": [
            "🍬 Handmade",
            "⏳ 5-7 day lead time"
          ],
          "desc": "Artisan nougat made by La Ruche Gourmande. Made to order only, to guarantee freshness and quality — allow 5 to 7 days.",
          "leadTime": "5 to 7 days"
        },
        "pt": {
          "name": "Nougat",
          "badge": "Por encomenda",
          "tags": [
            "🍬 Feito à mão",
            "⏳ Prazo de 5-7 dias"
          ],
          "desc": "Nougat artesanal preparado pela La Ruche Gourmande. Fabrico exclusivamente por encomenda, para garantir frescura e qualidade — conte com um prazo de 5 a 7 dias.",
          "leadTime": "5 a 7 dias"
        },
        "it": {
          "name": "Torrone",
          "badge": "Su ordinazione",
          "tags": [
            "🍬 Fatto a mano",
            "⏳ Tempi di 5-7 giorni"
          ],
          "desc": "Torrone artigianale preparato da La Ruche Gourmande. Realizzato solo su ordinazione, per garantire freschezza e qualità — considera 5-7 giorni di tempo.",
          "leadTime": "5-7 giorni"
        }
      }
    },
    {
      "id": "pain-epices",
      "image": null,
      "onOrder": true,
      "i18n": {
        "fr": {
          "name": "Pain d'Épices au Miel",
          "badge": "Sur commande · Saisonnier",
          "tags": [
            "🎄 Décembre",
            "🍯 Fait main"
          ],
          "desc": "Pain d'épices artisanal au miel local, préparé sur commande, particulièrement adapté aux fêtes de fin d'année.",
          "leadTime": "5 à 7 jours",
          "seasonal": "Décembre"
        },
        "de": {
          "name": "Honig-Lebkuchen",
          "badge": "Auf Bestellung · Saisonal",
          "tags": [
            "🎄 Dezember",
            "🍯 Handgemacht"
          ],
          "desc": "Handwerklicher Lebkuchen mit lokalem Honig, auf Bestellung zubereitet, besonders passend für die Weihnachtszeit.",
          "leadTime": "5 bis 7 Tagen",
          "seasonal": "Dezember"
        },
        "en": {
          "name": "Honey Gingerbread",
          "badge": "Made to order · Seasonal",
          "tags": [
            "🎄 December",
            "🍯 Handmade"
          ],
          "desc": "Artisan gingerbread made with local honey, prepared to order, particularly suited to the end-of-year holidays.",
          "leadTime": "5 to 7 days",
          "seasonal": "December"
        },
        "pt": {
          "name": "Pão de Especiarias com Mel",
          "badge": "Por encomenda · Sazonal",
          "tags": [
            "🎄 Dezembro",
            "🍯 Feito à mão"
          ],
          "desc": "Pão de especiarias artesanal com mel local, preparado por encomenda, especialmente adequado para as festas de fim de ano.",
          "leadTime": "5 a 7 dias",
          "seasonal": "Dezembro"
        },
        "it": {
          "name": "Pan di Zenzero al Miele",
          "badge": "Su ordinazione · Stagionale",
          "tags": [
            "🎄 Dicembre",
            "🍯 Fatto a mano"
          ],
          "desc": "Pan di zenzero artigianale al miele locale, preparato su ordinazione, particolarmente adatto alle feste di fine anno.",
          "leadTime": "5-7 giorni",
          "seasonal": "Dicembre"
        }
      }
    }
  ],
  "coffrets": [
    {
      "id": "decouverte",
      "image": "32-crémeux_2026.png",
      "fixedPrice": 9,
      "available": true,
      "i18n": {
        "fr": {
          "name": "Pack Découverte",
          "badge": "Le plus populaire",
          "tags": [
            "🍶 Crémeux 250g",
            "💧 Brut 250g"
          ],
          "desc": "Un pot de miel crémeux et un pot de miel brut, format 250g chacun, pour découvrir les deux textures de notre récolte de printemps 2026."
        },
        "de": {
          "name": "Entdeckerpaket",
          "badge": "Am beliebtesten",
          "tags": [
            "🍶 Cremig 250g",
            "💧 Roh 250g"
          ],
          "desc": "Ein Glas cremiger Honig und ein Glas roher Honig, je 250g, um die beiden Texturen unserer Frühlingsernte 2026 zu entdecken."
        },
        "en": {
          "name": "Discovery Pack",
          "badge": "Most popular",
          "tags": [
            "🍶 Creamy 250g",
            "💧 Raw 250g"
          ],
          "desc": "One jar of creamy honey and one jar of raw honey, 250g each, to discover both textures of our 2026 spring harvest."
        },
        "pt": {
          "name": "Pack de Descoberta",
          "badge": "Mais popular",
          "tags": [
            "🍶 Cremoso 250g",
            "💧 Bruto 250g"
          ],
          "desc": "Um frasco de mel cremoso e um frasco de mel bruto, 250g cada, para descobrir as duas texturas da nossa colheita de primavera 2026."
        },
        "it": {
          "name": "Pacchetto Scoperta",
          "badge": "Il più popolare",
          "tags": [
            "🍶 Cremoso 250g",
            "💧 Grezzo 250g"
          ],
          "desc": "Un vasetto di miele cremoso e un vasetto di miele grezzo, 250g ciascuno, per scoprire le due consistenze del nostro raccolto di primavera 2026."
        }
      }
    },
    {
      "id": "gourmand",
      "image": "11-cadre-miel.jpg",
      "fixedPrice": 15,
      "available": true,
      "i18n": {
        "fr": {
          "name": "Coffret Gourmand",
          "badge": "Idée cadeau",
          "tags": [
            "🍯 Miel",
            "🌰 Noisimiel",
            "🎁 Emballage cadeau"
          ],
          "desc": "Un pot de miel au choix (250g) et un pot de Noisimiel (250g), présentés dans un emballage cadeau soigné. Parfait pour offrir."
        },
        "de": {
          "name": "Feinschmecker-Box",
          "badge": "Geschenkidee",
          "tags": [
            "🍯 Honig",
            "🌰 Noisimiel",
            "🎁 Geschenkverpackung"
          ],
          "desc": "Ein Glas Honig nach Wahl (250g) und ein Glas Noisimiel (250g), in einer sorgfältigen Geschenkverpackung. Perfekt zum Verschenken."
        },
        "en": {
          "name": "Gourmet Box",
          "badge": "Gift idea",
          "tags": [
            "🍯 Honey",
            "🌰 Noisimiel",
            "🎁 Gift wrapping"
          ],
          "desc": "One jar of honey of your choice (250g) and one jar of Noisimiel (250g), presented in elegant gift packaging. Perfect as a gift."
        },
        "pt": {
          "name": "Cesta Gourmet",
          "badge": "Ideia de presente",
          "tags": [
            "🍯 Mel",
            "🌰 Noisimiel",
            "🎁 Embalagem de presente"
          ],
          "desc": "Um frasco de mel à escolha (250g) e um frasco de Noisimiel (250g), apresentados numa embalagem de presente cuidada. Perfeito para oferecer."
        },
        "it": {
          "name": "Cofanetto Gourmet",
          "badge": "Idea regalo",
          "tags": [
            "🍯 Miele",
            "🌰 Noisimiel",
            "🎁 Confezione regalo"
          ],
          "desc": "Un vasetto di miele a scelta (250g) e un vasetto di Noisimiel (250g), presentati in una confezione regalo curata. Perfetto da regalare."
        }
      }
    },
    {
      "id": "entreprise",
      "image": "6-miel d'été 2.jpg",
      "devis": true,
      "i18n": {
        "fr": {
          "name": "Coffret Entreprises et Associations locales",
          "badge": "Sur devis",
          "tags": [
            "🏢 Secteur Villerupt",
            "📦 Quantité 20+",
            "🏷️ Personnalisation possible"
          ],
          "desc": "Vous représentez une entreprise ou une association du secteur de Villerupt ? La Ruche Gourmande propose des coffrets cadeaux personnalisés pour vos événements, vos vœux de fin d'année ou vos remerciements clients — toujours en retrait ou livraison locale."
        },
        "de": {
          "name": "Geschenkbox für Unternehmen und lokale Vereine",
          "badge": "Auf Anfrage",
          "tags": [
            "🏢 Raum Villerupt",
            "📦 Menge 20+",
            "🏷️ Individuell anpassbar"
          ],
          "desc": "Vertreten Sie ein Unternehmen oder einen Verein aus dem Raum Villerupt? La Ruche Gourmande bietet individuelle Geschenkboxen für Ihre Veranstaltungen, Ihre Weihnachtsgrüße oder Ihre Kundendanksagungen — stets mit Abholung oder lokaler Lieferung."
        },
        "en": {
          "name": "Gift Box for Local Businesses and Associations",
          "badge": "Quote on request",
          "tags": [
            "🏢 Villerupt area",
            "📦 20+ units",
            "🏷️ Customisation available"
          ],
          "desc": "Do you represent a business or association in the Villerupt area? La Ruche Gourmande offers customised gift boxes for your events, end-of-year greetings or client thank-yous — always with local pickup or delivery."
        },
        "pt": {
          "name": "Cesta para Empresas e Associações locais",
          "badge": "Sob orçamento",
          "tags": [
            "🏢 Zona de Villerupt",
            "📦 Quantidade 20+",
            "🏷️ Personalização possível"
          ],
          "desc": "Representa uma empresa ou associação da zona de Villerupt? A La Ruche Gourmande propõe cestas de presente personalizadas para os seus eventos, votos de fim de ano ou agradecimentos a clientes — sempre com levantamento ou entrega local."
        },
        "it": {
          "name": "Cofanetto per Aziende e Associazioni locali",
          "badge": "Su preventivo",
          "tags": [
            "🏢 Zona Villerupt",
            "📦 Quantità 20+",
            "🏷️ Personalizzazione possibile"
          ],
          "desc": "Rappresenti un'azienda o un'associazione della zona di Villerupt? La Ruche Gourmande propone cofanetti regalo personalizzati per i tuoi eventi, auguri di fine anno o ringraziamenti ai clienti — sempre con ritiro o consegna locale."
        }
      }
    }
  ]
};
