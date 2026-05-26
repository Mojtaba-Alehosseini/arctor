export interface Project {
  slug: string;
  year: string;
  yearShort: string;
  category: "Architecture" | "Interior" | "Showroom" | "Research" | "Hospitality";
  location: string;
  role: string;
  tools: string[];
  /** Hero cover — full-bleed image */
  cover: string;
  /** Optional second supporting image inside the case study */
  detail?: string;
  featured?: boolean;
  /** Translations are keyed by locale. Falls back to en if missing. */
  i18n: Record<
    string,
    {
      title: string;
      subtitle: string;
      brief: string;
      body: string[];
    }
  >;
}

export const projects: Project[] = [
  {
    slug: "windcatcher-thesis",
    year: "2025",
    yearShort: "2025",
    category: "Research",
    location: "United Arab Emirates / Genova",
    role: "Master's thesis, architectural design",
    tools: ["Rhino", "Revit", "V-Ray", "CFD analysis", "Hand drawing"],
    cover: "https://images.unsplash.com/photo-1715688532112-9f27cf022c81?w=2000&q=82&auto=format&fit=crop",
    detail: "https://images.unsplash.com/photo-1603800372963-4510ab0185a9?w=1600&q=80&auto=format&fit=crop",
    featured: true,
    i18n: {
      en: {
        title: "Nature-Inspired Architecture",
        subtitle: "Termite mounds + Persian windcatchers for future UAE dwellings",
        brief:
          "A biomimetic typology for self-cooled housing in the Emirates — braiding ancient bâdgir intelligence with the airflow logic of termite mounds.",
        body: [
          "The brief was simple and impossible: design a dwelling for the Emirati climate that does not depend on mechanical air-conditioning. The answer came from looking sideways — at the mound built by a termite colony, and at the wind-towers (bâdgir) that have cooled Persian homes for two thousand years.",
          "Both solutions share a single principle: orchestrate pressure differentials so the building breathes itself cool. The thesis develops a hybrid section — a stack of shaded courts capped by a contemporary bâdgir, with a thermal chimney pulling hot air upward as cooler air enters at ground level. CFD modelling validates a 6–8°C interior gain over a sealed equivalent.",
          "Beyond the technical, the project is a quiet argument: that the most modern architecture often begins with the oldest answers.",
        ],
      },
      it: {
        title: "Architettura ispirata alla natura",
        subtitle: "Termitai + torri del vento persiane per l'abitare futuro negli Emirati",
        brief:
          "Una tipologia biomimetica per case auto-raffrescate negli Emirati — intreccia l'intelligenza dell'antico bâdgir con la logica dei flussi d'aria del termitaio.",
        body: [
          "Il brief era semplice e impossibile: progettare un'abitazione per il clima emiratino che non dipenda dal condizionamento meccanico. La risposta è arrivata guardando di lato — al tumulo costruito da una colonia di termiti e alle torri del vento (bâdgir) che da duemila anni rinfrescano le case persiane.",
          "Entrambe le soluzioni condividono un principio: orchestrare differenze di pressione affinché l'edificio si raffreddi da sé. La tesi sviluppa una sezione ibrida — una pila di corti ombreggiate culminanti in un bâdgir contemporaneo, con un camino termico che tira l'aria calda verso l'alto mentre l'aria più fresca entra a livello del suolo. L'analisi CFD convalida un guadagno interno di 6–8°C rispetto a un equivalente sigillato.",
          "Oltre la tecnica, il progetto è un argomento sommesso: che l'architettura più moderna spesso comincia dalle risposte più antiche.",
        ],
      },
      de: {
        title: "Natur­inspirierte Architektur",
        subtitle: "Termitenhügel + persische Windtürme für künftige VAE-Wohnhäuser",
        brief:
          "Eine biomimetische Typologie selbstkühlender Häuser in den Emiraten — verflicht die Intelligenz des alten bâdgir mit der Strömungslogik des Termitenhügels.",
        body: [
          "Die Aufgabe war einfach und unmöglich: Ein Wohnhaus für das emiratische Klima entwerfen, das nicht von mechanischer Klimatechnik abhängt. Die Antwort kam aus seitlichem Blick — auf den Hügel einer Termitenkolonie und auf die Windtürme (bâdgir), die seit zweitausend Jahren persische Häuser kühlen.",
          "Beide Lösungen teilen ein Prinzip: Druckdifferenzen so zu orchestrieren, dass das Gebäude sich selbst kühl atmet. Die Arbeit entwickelt einen hybriden Schnitt — gestapelte Schattenhöfe, gekrönt von einem zeitgenössischen bâdgir, mit einem thermischen Kamin, der heiße Luft nach oben zieht, während kühlere Luft auf Bodenniveau eintritt. CFD-Modellierung bestätigt einen Innenraumgewinn von 6–8 °C gegenüber einem geschlossenen Äquivalent.",
          "Über das Technische hinaus ist das Projekt ein leises Argument: dass die modernste Architektur oft mit den ältesten Antworten beginnt.",
        ],
      },
      fr: {
        title: "Architecture inspirée du vivant",
        subtitle: "Termitières + tours à vent persanes pour l'habitat futur aux Émirats",
        brief:
          "Une typologie biomimétique pour un habitat auto-rafraîchi aux Émirats — tresse l'intelligence de l'ancien bâdgir avec la logique des flux d'air de la termitière.",
        body: [
          "Le brief était simple et impossible : concevoir un habitat pour le climat émirien qui ne dépende pas de la climatisation mécanique. La réponse est venue d'un regard de côté — vers le monticule construit par une colonie de termites, et vers les tours à vent (bâdgir) qui rafraîchissent les maisons persanes depuis deux mille ans.",
          "Les deux solutions partagent un même principe : orchestrer des différences de pression pour que le bâtiment se rafraîchisse lui-même. Le mémoire développe une coupe hybride — une pile de cours ombragées couronnées d'un bâdgir contemporain, avec une cheminée thermique qui tire l'air chaud vers le haut tandis que l'air plus frais entre au niveau du sol. La modélisation CFD valide un gain intérieur de 6–8 °C par rapport à un équivalent étanche.",
          "Au-delà de la technique, le projet est un argument discret : l'architecture la plus moderne commence souvent par les réponses les plus anciennes.",
        ],
      },
      fa: {
        title: "معماری الهام‌گرفته از طبیعت",
        subtitle: "تپه‌های موریانه و بادگیر پارسی برای مسکن آیندهٔ امارات",
        brief:
          "گونه‌ای بایومیمتیک برای مسکن خودخنک‌شونده در امارات — درهم‌بافتنِ خرد کهن بادگیر با منطق جریان هوای تپهٔ موریانه.",
        body: [
          "صورت مسئله ساده بود و ناممکن: خانه‌ای برای اقلیم امارات طراحی کن که به تهویهٔ مطبوع مکانیکی وابسته نباشد. پاسخ از نگاه به کناره برخاست — به تپه‌ای که کلونی موریانه می‌سازد، و به بادگیرهایی که دو هزار سال است خانه‌های پارس را خنک نگه داشته‌اند.",
          "هر دو راه‌حل بر یک اصل مشترک‌اند: ساماندهی اختلاف فشار تا خود ساختمان به سوی خنکی نَفَس بکشد. این پایان‌نامه برشی ترکیبی پیشنهاد می‌دهد — انباشتی از حیاط‌های سایه‌دار که با یک بادگیر معاصر تاج می‌گیرند، و دودکشی حرارتی که هوای گرم را به بالا می‌کشد در حالی که هوای خنک‌تر در تراز زمین وارد می‌شود. مدل‌سازیِ CFD افزایش دمای داخلی ۶ تا ۸ درجه‌ای را نسبت به نمونهٔ مهر و موم‌شده تأیید می‌کند.",
          "فراتر از فن، این پروژه یک ادعای آرام است: مدرن‌ترین معماری اغلب از کهن‌ترین پاسخ‌ها آغاز می‌شود.",
        ],
      },
    },
  },
  {
    slug: "k-cafe-factory",
    year: "2021",
    yearShort: "2021",
    category: "Architecture",
    location: "Kermanshah, Iran",
    role: "Architectural designer",
    tools: ["Revit", "V-Ray", "AutoCAD"],
    cover: "https://images.unsplash.com/photo-1621511075938-f03482369feb?w=2000&q=82&auto=format&fit=crop",
    detail: "https://images.unsplash.com/photo-1635702422154-2b8fc4fac930?w=1600&q=80&auto=format&fit=crop",
    featured: true,
    i18n: {
      en: {
        title: "K Cafe — production house",
        subtitle: "A small coffee-roasting factory near Kermanshah",
        brief:
          "Architecture for a young coffee-roasting brand: a single rammed-earth volume that hosts roasting, packaging, tasting, and a public-facing café in one continuous section.",
        body: [
          "K Cafe asked for a building that would do three things at once: roast coffee at industrial volume, host the small team that runs the operation, and welcome customers from the road. The site is windy, flat, and visible from a long distance.",
          "The design proposes a single long volume of rammed earth and oxidised steel, oriented to receive the prevailing wind and shade the south façade with a deep brise-soleil. Inside, the production line runs down one half of the plan; the other half — separated by a glass partition — holds the tasting bar and a small library of coffee origins.",
          "The point of the building is to make production visible without being noisy about it. The customer drinks an espresso while watching beans tumble in the roaster, three meters away.",
        ],
      },
      it: {
        title: "K Cafe — casa di produzione",
        subtitle: "Una piccola torrefazione vicino a Kermanshah",
        brief:
          "Architettura per un giovane marchio di torrefazione: un unico volume in terra battuta che ospita torrefazione, confezionamento, degustazione e un caffè aperto al pubblico in un'unica sezione continua.",
        body: [
          "K Cafe chiedeva un edificio capace di fare tre cose insieme: tostare caffè in volumi industriali, ospitare il piccolo team operativo e accogliere i clienti dalla strada. Il sito è ventoso, piatto e visibile da lontano.",
          "Il progetto propone un unico volume lungo in terra battuta e acciaio ossidato, orientato a ricevere il vento prevalente e a ombreggiare la facciata sud con un profondo brise-soleil. All'interno, la linea di produzione corre su metà della pianta; l'altra metà — separata da una partizione vetrata — accoglie il banco di degustazione e una piccola biblioteca di origini del caffè.",
          "Il punto dell'edificio è rendere la produzione visibile senza ostentazione. Il cliente beve un espresso mentre osserva i chicchi rotolare nella torrefatrice, a tre metri di distanza.",
        ],
      },
      de: {
        title: "K Cafe — Produktionshaus",
        subtitle: "Eine kleine Kaffeerösterei nahe Kermanshah",
        brief:
          "Architektur für eine junge Röstereimarke: ein einziges Stampflehm-Volumen für Röstung, Verpackung, Verkostung und ein zur Straße offenes Café in einem zusammenhängenden Schnitt.",
        body: [
          "K Cafe verlangte ein Gebäude, das drei Dinge zugleich kann: Kaffee in industriellem Maßstab rösten, das kleine Team beherbergen und Gäste von der Straße empfangen. Das Grundstück ist windig, flach und weit sichtbar.",
          "Der Entwurf schlägt ein einziges, langgestrecktes Volumen aus Stampflehm und oxidiertem Stahl vor, ausgerichtet zum vorherrschenden Wind und mit tiefem Brise-Soleil an der Südfassade. Im Inneren läuft die Produktionslinie über die eine Hälfte des Grundrisses; die andere Hälfte — durch eine Glaswand getrennt — nimmt die Verkostungstheke und eine kleine Bibliothek der Kaffeeursprünge auf.",
          "Der Sinn des Gebäudes ist, Produktion sichtbar zu machen, ohne damit zu lärmen. Der Gast trinkt einen Espresso, während er drei Meter entfernt die Bohnen in der Röstmaschine wandern sieht.",
        ],
      },
      fr: {
        title: "K Cafe — maison de production",
        subtitle: "Une petite torréfaction près de Kermanshah",
        brief:
          "Architecture pour une jeune maison de torréfaction : un seul volume en pisé qui accueille torréfaction, conditionnement, dégustation et un café ouvert sur la rue, dans une coupe continue.",
        body: [
          "K Cafe demandait un bâtiment capable de faire trois choses à la fois : torréfier en volume industriel, accueillir la petite équipe, et inviter les clients depuis la route. Le site est venteux, plat et visible de loin.",
          "Le projet propose un seul long volume en pisé et acier oxydé, orienté pour recevoir le vent dominant et ombrer la façade sud d'un profond brise-soleil. À l'intérieur, la ligne de production occupe une moitié du plan ; l'autre — séparée par une cloison vitrée — accueille le bar de dégustation et une petite bibliothèque d'origines.",
          "L'enjeu du bâtiment est de rendre la production visible sans s'en vanter. Le client boit un espresso en regardant les grains tourner dans le torréfacteur, trois mètres plus loin.",
        ],
      },
      fa: {
        title: "کافه ک — خانهٔ تولید",
        subtitle: "کارگاهی کوچک برای رست قهوه نزدیک کرمانشاه",
        brief:
          "معماری برای برند جوان رست قهوه: یک حجم پیوستهٔ خشت‌رس که رست، بسته‌بندی، چشایی و کافهٔ رو به مردم را در یک برشِ یگانه گرد می‌آورد.",
        body: [
          "کافه ک ساختمانی می‌خواست که سه کار را یک‌جا انجام دهد: رستِ قهوه در حجم صنعتی، میزبانیِ تیم کوچکِ عملیات، و پذیراییِ مشتری از کنار جاده. سایت بادخیز، تخت، و از دور دیدنی‌ست.",
          "طرح، یک حجم بلندِ یگانه از خشتِ کوبیده و فولاد اکسیدشده پیشنهاد می‌کند که در جهت بادِ غالب گرفته و نمای جنوبی را با یک شکنندهٔ نور عمیق سایه می‌اندازد. درون، خطِ تولید نیمی از پلان را می‌گیرد؛ نیمهٔ دیگر — که با پارتیشن شیشه‌ای جدا شده — میز چشایی و کتابخانه‌ای کوچک از منشأهای قهوه را در خود جای می‌دهد.",
          "نکتهٔ ساختمان آن است که تولید را دیدنی کند بی‌آنکه فریاد بزند. مشتری اسپرسو می‌نوشد در حالی که از سه‌متری چرخیدنِ دانه‌ها را در رستر تماشا می‌کند.",
        ],
      },
    },
  },
  {
    slug: "casaviore-showroom",
    year: "2018",
    yearShort: "2018",
    category: "Showroom",
    location: "Tehran, Iran",
    role: "Interior designer & showroom manager",
    tools: ["AutoCAD", "SketchUp", "V-Ray", "InDesign"],
    cover: "https://images.unsplash.com/photo-1690489965043-ec15758cce71?w=2000&q=82&auto=format&fit=crop",
    detail: "https://images.unsplash.com/photo-1591931681345-16b532514cde?w=1600&q=80&auto=format&fit=crop",
    featured: true,
    i18n: {
      en: {
        title: "Casaviore — flagship showroom",
        subtitle: "Two years curating Poliform, Flexform, Baxter for Tehran",
        brief:
          "Showroom curation and seasonal interior re-staging for the Casaviore flagship — Iran's primary point of contact with Italian luxury furniture.",
        body: [
          "From 2017 to 2019 I led the interior of Casaviore's Tehran flagship, the city's most demanding stage for Italian luxury furniture. The work alternated between two registers: the day-to-day care of an active showroom, and the seasonal re-staging that introduced each new Poliform, Flexform, Baxter, Antonio Lupi, and Paolo Castelli collection to Iranian clients.",
          "Each set required a small fiction: an apartment in Milan, a country villa in Tuscany, a quiet office near the Brera. The challenge was to convey the European object without flattening its context — to show why a Flexform sofa is shaped the way it is, why a Baxter leather is dyed the way it is.",
          "Two years of this is the closest thing to a Master's in Italian design culture. It shapes how I plan rooms today.",
        ],
      },
      it: {
        title: "Casaviore — showroom flagship",
        subtitle: "Due anni a curare Poliform, Flexform, Baxter a Tehran",
        brief:
          "Curatela del showroom e re-staging stagionale degli interni del flagship Casaviore — il principale punto di contatto dell'Iran con l'arredo italiano di lusso.",
        body: [
          "Dal 2017 al 2019 ho diretto gli interni del flagship Casaviore di Tehran, il palcoscenico più esigente della città per il mobile italiano di lusso. Il lavoro si alternava tra due registri: la cura quotidiana di uno showroom attivo e il re-staging stagionale che introduceva ogni nuova collezione di Poliform, Flexform, Baxter, Antonio Lupi e Paolo Castelli al pubblico iraniano.",
          "Ogni set richiedeva una piccola finzione: un appartamento a Milano, una villa in Toscana, un ufficio silenzioso vicino a Brera. La sfida era trasmettere l'oggetto europeo senza appiattirne il contesto — mostrare perché un divano Flexform ha quella forma, perché un cuoio Baxter è tinto in quel modo.",
          "Due anni così sono la cosa più vicina a un master nella cultura del design italiano. Plasmano ancora oggi il modo in cui distribuisco le stanze.",
        ],
      },
      de: {
        title: "Casaviore — Flagship-Showroom",
        subtitle: "Zwei Jahre Kuratierung von Poliform, Flexform, Baxter in Tehran",
        brief:
          "Showroom-Kuration und saisonales Re-Staging der Innenräume des Casaviore-Flagships — Irans wichtigster Berührungspunkt mit italienischer Luxusmöblierung.",
        body: [
          "Von 2017 bis 2019 leitete ich die Innenräume des Casaviore-Flagships in Tehran, der anspruchsvollsten Bühne der Stadt für italienische Luxusmöbel. Die Arbeit pendelte zwischen zwei Registern: der täglichen Pflege eines aktiven Showrooms und dem saisonalen Re-Staging, das jede neue Kollektion von Poliform, Flexform, Baxter, Antonio Lupi und Paolo Castelli dem iranischen Publikum vorstellte.",
          "Jedes Setting verlangte eine kleine Fiktion: eine Wohnung in Mailand, eine Villa in der Toskana, ein stilles Büro nahe der Brera. Die Herausforderung lag darin, das europäische Objekt zu vermitteln, ohne seinen Kontext zu flachen — zu zeigen, warum ein Flexform-Sofa so geformt ist, warum ein Baxter-Leder so gefärbt wird.",
          "Zwei Jahre davon sind das Nächste zu einem Master in italienischer Designkultur. Sie prägen bis heute, wie ich Räume plane.",
        ],
      },
      fr: {
        title: "Casaviore — showroom phare",
        subtitle: "Deux ans à curer Poliform, Flexform, Baxter pour Téhéran",
        brief:
          "Curation du showroom et remise en scène saisonnière des intérieurs du flagship Casaviore — principal point de contact de l'Iran avec le mobilier italien de luxe.",
        body: [
          "De 2017 à 2019, j'ai dirigé les intérieurs du flagship Casaviore de Téhéran, la scène la plus exigeante de la ville pour le mobilier italien de luxe. Le travail alternait entre deux registres : l'entretien quotidien d'un showroom actif et la remise en scène saisonnière qui présentait chaque nouvelle collection Poliform, Flexform, Baxter, Antonio Lupi et Paolo Castelli au public iranien.",
          "Chaque mise en scène demandait une petite fiction : un appartement à Milan, une villa en Toscane, un bureau silencieux près de la Brera. Le défi consistait à transmettre l'objet européen sans aplatir son contexte — montrer pourquoi un canapé Flexform a cette forme, pourquoi un cuir Baxter est teint ainsi.",
          "Deux ans de cela sont ce qui ressemble le plus à un master en culture du design italien. Cela façonne encore aujourd'hui la manière dont je plane les pièces.",
        ],
      },
      fa: {
        title: "کازا ویوره — شورومِ فلگ‌شیپ",
        subtitle: "دو سال کوریتِ پولیفورم، فلکسفورم و بَکستر برای تهران",
        brief:
          "کوریتِ شوروم و چینشِ فصلیِ داخلیِ فلگ‌شیپ کازا ویوره — اصلی‌ترین نقطهٔ تماس ایران با مبلمان لاکچری ایتالیایی.",
        body: [
          "از ۱۳۹۶ تا ۱۳۹۸ سرپرستی داخلیِ فلگ‌شیپ کازا ویوره در تهران را برعهده داشتم؛ سختگیرترین صحنهٔ شهر برای مبلمان لاکچری ایتالیایی. کار میان دو رجیستر می‌رفت: مراقبتِ روزمره از یک شورومِ فعال، و چینشِ فصلی که هر مجموعهٔ تازهٔ پولیفورم، فلکسفورم، بَکستر، آنتونیو لوپی و پائولو کاستلی را به مخاطب ایرانی معرفی می‌کرد.",
          "هر صحنه نیازمند یک قصهٔ کوچک بود: یک آپارتمان در میلان، یک ویلا در توسکانی، دفتری آرام نزدیک برِرا. چالش این بود که شیءِ اروپایی را منتقل کنی بی‌آنکه بسترش را تخت کنی — نشان دهی چرا مبلِ فلکسفورم این‌گونه فرم گرفته، چرا چرمِ بَکستر این‌گونه رنگ شده است.",
          "دو سال از این کار، نزدیک‌ترین چیز به یک کارشناسی ارشد در فرهنگ طراحیِ ایتالیایی‌ست. هنوز شیوهٔ پلان‌کشیدنم را شکل می‌دهد.",
        ],
      },
    },
  },
  {
    slug: "hamko-spaces",
    year: "2020",
    yearShort: "2020",
    category: "Interior",
    location: "Tehran, Iran",
    role: "Architect & CEO assistant",
    tools: ["Revit", "AutoCAD", "V-Ray"],
    cover: "https://images.unsplash.com/photo-1706689656095-168768dc20a5?w=2000&q=82&auto=format&fit=crop",
    detail: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=1600&q=80&auto=format&fit=crop",
    i18n: {
      en: {
        title: "HAMKO group — interiors",
        subtitle: "Workplace, hospitality, and brand spaces for a diversified holding",
        brief:
          "Three years of interior architecture across HAMKO's group: workplace, retail, hospitality and brand-flagship spaces — paired with executive-level project coordination.",
        body: [
          "HAMKO is a Tehran-based holding with arms in cosmetics, real estate, restaurants, fashion and architecture. As architect and CEO assistant I sat at the meeting point of these worlds: translating the operational logic of each business into interior space, and the spatial logic back into briefs the CEO could act on.",
          "Concretely, the work meant designing offices that the founders would actually live in for ten hours a day; planning a restaurant kitchen whose flow matched the chef's pace; staging a fashion shoot inside an unfinished retail shell. Less concretely, it meant learning to think like a client.",
          "It is rare to be trusted with that range at that age. It has shaped how I read briefs ever since.",
        ],
      },
      it: {
        title: "Gruppo HAMKO — interni",
        subtitle: "Workplace, ospitalità e spazi brand per una holding diversificata",
        brief:
          "Tre anni di architettura d'interni nel gruppo HAMKO: workplace, retail, hospitality e flagship di marca — affiancati dal coordinamento progetti a livello executive.",
        body: [
          "HAMKO è una holding di Tehran con braccia in cosmetica, immobiliare, ristorazione, moda e architettura. Come architetta e assistente del CEO mi trovavo al punto d'incontro di questi mondi: traducendo la logica operativa di ciascun business in spazio interno e la logica spaziale in brief su cui il CEO potesse agire.",
          "In concreto, il lavoro significava progettare uffici in cui i fondatori avrebbero davvero vissuto dieci ore al giorno; pianificare la cucina di un ristorante il cui flusso corrispondesse al ritmo dello chef; allestire uno shooting di moda dentro un retail ancora grezzo. Meno concretamente, significava imparare a pensare come un cliente.",
          "È raro che ti venga affidata questa estensione a quell'età. Plasma il modo in cui leggo i brief da allora.",
        ],
      },
      de: {
        title: "HAMKO-Gruppe — Interieurs",
        subtitle: "Workplace, Hospitality und Markenräume für eine diversifizierte Holding",
        brief:
          "Drei Jahre Innenarchitektur im HAMKO-Konzern: Workplace, Retail, Hospitality und Marken-Flagships — gepaart mit Projektkoordination auf Executive-Ebene.",
        body: [
          "HAMKO ist eine Holding aus Tehran mit Armen in Kosmetik, Immobilien, Gastronomie, Mode und Architektur. Als Architektin und CEO-Assistentin saß ich an der Schnittstelle dieser Welten: Ich übersetzte die operative Logik jedes Geschäfts in Innenraum und die räumliche Logik zurück in Briefs, mit denen der CEO arbeiten konnte.",
          "Konkret hieß das, Büros zu entwerfen, in denen die Gründer tatsächlich zehn Stunden täglich leben würden; eine Restaurantküche zu planen, deren Fluss dem Tempo des Küchenchefs entsprach; ein Mode-Shooting in einer noch rohen Retail-Hülle zu inszenieren. Weniger konkret hieß es: lernen, wie ein Kunde zu denken.",
          "Es ist selten, in diesem Alter eine solche Bandbreite anvertraut zu bekommen. Es prägt seitdem, wie ich Briefs lese.",
        ],
      },
      fr: {
        title: "Groupe HAMKO — intérieurs",
        subtitle: "Espaces de travail, hôtellerie et marques pour un holding diversifié",
        brief:
          "Trois ans d'architecture d'intérieur dans le groupe HAMKO : workplace, retail, hôtellerie et flagships de marque — doublés de coordination de projets au niveau exécutif.",
        body: [
          "HAMKO est un holding de Téhéran aux bras dans la cosmétique, l'immobilier, la restauration, la mode et l'architecture. En tant qu'architecte et assistante du PDG, je me trouvais au point de rencontre de ces mondes : traduire la logique opérationnelle de chaque métier en espace intérieur, et la logique spatiale en briefs sur lesquels le PDG pouvait agir.",
          "Concrètement, le travail consistait à concevoir des bureaux où les fondateurs vivraient vraiment dix heures par jour ; planifier la cuisine d'un restaurant dont le flux correspondait au rythme du chef ; mettre en scène une séance de mode dans une coque retail encore brute. Moins concrètement, il s'agissait d'apprendre à penser comme un client.",
          "Il est rare qu'on vous confie cette amplitude à cet âge. Cela façonne depuis ma manière de lire les briefs.",
        ],
      },
      fa: {
        title: "گروه هامکو — داخلی",
        subtitle: "محیط کار، مهمان‌نوازی و فضاهای برند برای یک هلدینگ متنوع",
        brief:
          "سه سال معماری داخلی در گروه هامکو: محیط کار، خرده‌فروشی، مهمان‌نوازی و فلگ‌شیپِ برند — همراه با هماهنگیِ پروژه در سطح مدیر ارشد.",
        body: [
          "هامکو هلدینگی تهرانی است با شاخه‌هایی در آرایشی، املاک، رستوران، مد و معماری. به‌عنوان معمار و دستیار مدیرعامل، در نقطهٔ تلاقی این جهان‌ها می‌نشستم: منطقِ عملیاتیِ هر کسب‌وکار را به فضای داخلی ترجمه می‌کردم، و منطقِ فضایی را به بریف‌هایی که مدیرعامل بتواند بر اساسشان عمل کند.",
          "به‌طور عینی، کار یعنی طراحیِ دفترهایی که بنیان‌گذاران واقعاً ده ساعت در روز در آن‌ها زندگی می‌کنند؛ برنامه‌ریزیِ آشپزخانهٔ رستورانی که جریانش با ریتمِ سرآشپز همراه باشد؛ صحنه‌چینیِ یک عکاسیِ مد در پوسته‌ای از خرده‌فروشیِ هنوز خام. به‌طور انتزاعی‌تر، یعنی یاد گرفتم مثل یک کارفرما فکر کنم.",
          "کم پیش می‌آید کسی در این سن آن دامنه از کار را به دست بگیرد. از آن پس، شیوهٔ خواندنِ بریف‌هایم را شکل می‌دهد.",
        ],
      },
    },
  },
  {
    slug: "green-roofs-chekadbam",
    year: "2014",
    yearShort: "2014",
    category: "Architecture",
    location: "Tehran, Iran",
    role: "Junior designer",
    tools: ["AutoCAD", "SketchUp"],
    cover: "https://images.unsplash.com/photo-1559681125-bb99bd424b63?w=2000&q=82&auto=format&fit=crop",
    detail: "https://images.unsplash.com/photo-1642522366375-cf22eaba6b58?w=1600&q=80&auto=format&fit=crop",
    i18n: {
      en: {
        title: "Green roofs — Chekadbam",
        subtitle: "Early studio work on rooftop greening across Tehran",
        brief:
          "Junior designer on a series of green-roof retrofits for residential and commercial roofs in Tehran — a first encounter with passive cooling and biophilic strategy.",
        body: [
          "Chekadbam designs and installs green roofs across Tehran. The studio operates somewhere between landscape, architecture and building physics — turning the city's flat, white-membrane roofs into garden floors that cool the building underneath.",
          "I worked on a handful of residential and small commercial roofs: drainage layouts, planting plans, the details that decide whether a roof garden survives its first August. The work seeded an interest in passive cooling that surfaces, a decade later, in the windcatcher thesis.",
        ],
      },
      it: {
        title: "Tetti verdi — Chekadbam",
        subtitle: "Primi lavori di studio su coperture verdi a Tehran",
        brief:
          "Designer junior in una serie di retrofit di tetti verdi per coperture residenziali e commerciali a Tehran — primo incontro con il raffrescamento passivo e la strategia biofila.",
        body: [
          "Chekadbam progetta e installa tetti verdi a Tehran. Lo studio opera tra paesaggio, architettura e fisica dell'edificio — trasformando i tetti piatti a membrana bianca della città in piani-giardino che raffreddano l'edificio sottostante.",
          "Ho lavorato su alcune coperture residenziali e piccole commerciali: schemi di drenaggio, piani di piantumazione, i dettagli che decidono se un giardino sul tetto sopravvive al suo primo agosto. Il lavoro ha piantato un interesse per il raffrescamento passivo che riemerge, dieci anni dopo, nella tesi sui bâdgir.",
        ],
      },
      de: {
        title: "Gründächer — Chekadbam",
        subtitle: "Frühe Studioarbeit zur Dachbegrünung in Tehran",
        brief:
          "Junior-Designerin bei einer Reihe von Gründachsanierungen für Wohn- und Gewerbedächer in Tehran — erste Begegnung mit passiver Kühlung und biophiler Strategie.",
        body: [
          "Chekadbam plant und installiert Gründächer in ganz Tehran. Das Büro arbeitet zwischen Landschaft, Architektur und Bauphysik — und verwandelt die flachen weißen Membrandächer der Stadt in Gartenebenen, die das Gebäude darunter kühlen.",
          "Ich arbeitete an einigen Wohn- und kleinen Gewerbedächern: Entwässerungslayouts, Bepflanzungspläne, die Details, die entscheiden, ob ein Dachgarten seinen ersten August überlebt. Die Arbeit pflanzte ein Interesse für passive Kühlung, das zehn Jahre später in der Bâdgir-Arbeit wieder auftaucht.",
        ],
      },
      fr: {
        title: "Toitures végétalisées — Chekadbam",
        subtitle: "Premiers travaux d'atelier sur la végétalisation de toitures à Téhéran",
        brief:
          "Designer junior sur une série de rétrofits de toitures végétalisées pour des toits résidentiels et commerciaux à Téhéran — première rencontre avec le rafraîchissement passif et la stratégie biophile.",
        body: [
          "Chekadbam conçoit et installe des toitures végétalisées à travers Téhéran. L'atelier travaille entre paysage, architecture et physique du bâtiment — transformant les toits plats à membrane blanche de la ville en planchers-jardin qui rafraîchissent l'édifice en dessous.",
          "J'ai travaillé sur quelques toitures résidentielles et petites toitures commerciales : schémas de drainage, plans de plantation, les détails qui décident si un jardin sur toit survit à son premier mois d'août. Le travail a planté un intérêt pour le rafraîchissement passif qui ressurgit, dix ans plus tard, dans le mémoire sur les bâdgir.",
        ],
      },
      fa: {
        title: "بام‌های سبز — چکادبام",
        subtitle: "نخستین کارهای استودیویی روی بام‌سازی سبز در تهران",
        brief:
          "طراح جونیور در چند بازسازی بام سبز برای پشت‌بام‌های مسکونی و تجاری در تهران — نخستین مواجهه با سرمایش غیرفعال و راهبرد بایوفیلیک.",
        body: [
          "چکادبام در سراسر تهران بام‌های سبز طراحی و اجرا می‌کند. استودیو میان منظر، معماری و فیزیکِ ساختمان کار می‌کند — و پشت‌بام‌های صافِ ایزوگامِ سفیدِ شهر را به طبقاتی از باغ بدل می‌کند که ساختمانِ زیرین را خنک می‌کنند.",
          "روی چند بامِ مسکونی و تجاریِ کوچک کار کردم: نقشهٔ زهکشی، پلانِ کاشت، همان جزئیاتی که تعیین می‌کنند یک باغِ بام از نخستین مردادش جان به‌در ببرد یا نه. این کار، علاقه‌ای به سرمایش غیرفعال در من کاشت که ده سال بعد، در پایان‌نامهٔ بادگیر دوباره سر بر می‌آورد.",
        ],
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
