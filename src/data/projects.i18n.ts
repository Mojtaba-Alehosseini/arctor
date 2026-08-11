import type { Locale } from "../i18n/config";

export interface ProjectCopy {
  title: string;
  subtitle: string;
  brief: string;
  body: string[];
}

type Entry = Record<Locale, ProjectCopy>;

export const copy: Record<string, Entry> = {
  /* ─────────────────────────────────────────────────────────────────── */
  "house-of-future": {
    en: {
      title: "House of the Future",
      subtitle: "A self-cooling dwelling for Abu Dhabi, learned from termite mounds and Persian windcatchers",
      brief: "Master's thesis. A house that cools itself — up to 20 °C below the outside air, with almost no air conditioning.",
      body: [
        "Designed for a competition organised by the government of the United Arab Emirates, the brief asked for a house rooted in Emirati culture and tradition, and honest about the climate it sits in. The answer was to stop treating cooling as a machine problem.",
        "The section borrows from two systems that had already solved it: the self-ventilating mound of a termite colony, and the bâdgir — the windcatcher that has cooled Persian houses for centuries. Cool air enters through the north and north-west vents and up through the shaded floor of the majlis. A solar chimney with mirrored panels heats air and drives it upward. A central shaft, taken from the termite house, keeps the whole octagonal plan in convection, and a patterned canopy shades the courtyard.",
        "Conventional windcatchers were studied for orientation and performance and their weaknesses corrected. Modelled across the year, the house holds an interior up to 20 °C below the outside air without extensive mechanical cooling.",
      ],
    },
    it: {
      title: "Casa del Futuro",
      subtitle: "Un'abitazione che si raffresca da sé ad Abu Dhabi, imparando dai termitai e dai bâdgir persiani",
      brief: "Tesi di laurea magistrale. Una casa che si raffresca da sola — fino a 20 °C sotto l'aria esterna, quasi senza climatizzazione.",
      body: [
        "Progettata per un concorso indetto dal governo degli Emirati Arabi Uniti, la richiesta era una casa radicata nella cultura e nella tradizione emiratina, e onesta rispetto al clima in cui si trova. La risposta è stata smettere di considerare il raffrescamento un problema meccanico.",
        "La sezione prende in prestito due sistemi che il problema l'avevano già risolto: il termitaio autoventilante e il bâdgir, la torre del vento che da secoli rinfresca le case persiane. L'aria fresca entra dalle bocchette a nord e nord-ovest e dal pavimento ombreggiato del majlis. Un camino solare con pannelli specchianti riscalda l'aria e la spinge verso l'alto. Un condotto centrale, ripreso dal termitaio, mantiene in convezione l'intera pianta ottagonale, mentre una copertura traforata ombreggia la corte.",
        "Le torri del vento tradizionali sono state studiate per orientamento e prestazioni, correggendone i limiti. Simulata sull'arco dell'anno, la casa mantiene all'interno fino a 20 °C in meno rispetto all'esterno senza raffrescamento meccanico esteso.",
      ],
    },
    de: {
      title: "Haus der Zukunft",
      subtitle: "Ein sich selbst kühlendes Wohnhaus für Abu Dhabi — gelernt von Termitenhügeln und persischen Windtürmen",
      brief: "Masterarbeit. Ein Haus, das sich selbst kühlt — bis zu 20 °C unter der Außenluft, fast ohne Klimatechnik.",
      body: [
        "Entworfen für einen Wettbewerb der Regierung der Vereinigten Arabischen Emirate: gefragt war ein Haus, das in emiratischer Kultur und Tradition wurzelt und dem Klima ehrlich begegnet. Die Antwort war, Kühlung nicht länger als Maschinenaufgabe zu behandeln.",
        "Der Schnitt entleiht sich zwei Systeme, die das Problem längst gelöst hatten: den selbstlüftenden Termitenhügel und den bâdgir, den Windturm, der persische Häuser seit Jahrhunderten kühlt. Kühle Luft tritt über die Nord- und Nordwestöffnungen sowie den beschatteten Boden des Majlis ein. Ein Solarkamin mit Spiegelpaneelen erwärmt Luft und treibt sie nach oben. Ein zentraler Schacht, dem Termitenbau entnommen, hält den gesamten achteckigen Grundriss in Konvektion; ein gemustertes Schattendach überspannt den Hof.",
        "Konventionelle Windtürme wurden auf Ausrichtung und Leistung untersucht und ihre Schwächen behoben. Über das Jahr simuliert hält das Haus innen bis zu 20 °C unter der Außenluft — ohne umfangreiche mechanische Kühlung.",
      ],
    },
    fr: {
      title: "Maison du futur",
      subtitle: "Un habitat qui se rafraîchit seul à Abou Dabi, appris des termitières et des bâdgirs persans",
      brief: "Mémoire de master. Une maison qui se rafraîchit d'elle-même — jusqu'à 20 °C sous l'air extérieur, presque sans climatisation.",
      body: [
        "Conçue pour un concours organisé par le gouvernement des Émirats arabes unis, la commande demandait une maison enracinée dans la culture émirienne et honnête vis-à-vis de son climat. La réponse a été de cesser de traiter le rafraîchissement comme un problème de machine.",
        "La coupe emprunte à deux systèmes qui l'avaient déjà résolu : la termitière autoventilée et le bâdgir, la tour à vent qui rafraîchit les maisons persanes depuis des siècles. L'air frais entre par les prises nord et nord-ouest et par le sol ombragé du majlis. Une cheminée solaire à panneaux réfléchissants chauffe l'air et le tire vers le haut. Un conduit central, repris de la termitière, maintient tout le plan octogonal en convection, et une canopée ajourée ombrage la cour.",
        "Les tours à vent traditionnelles ont été étudiées pour leur orientation et leurs performances, et leurs faiblesses corrigées. Simulée sur l'année, la maison conserve un intérieur jusqu'à 20 °C sous l'air extérieur sans rafraîchissement mécanique étendu.",
      ],
    },
    fa: {
      title: "خانهٔ آینده",
      subtitle: "خانه‌ای خودخنک‌شونده برای ابوظبی، با الهام از تپه‌های موریانه و بادگیر ایرانی",
      brief: "پایان‌نامهٔ کارشناسی ارشد. خانه‌ای که خودش را خنک می‌کند — تا ۲۰ درجه خنک‌تر از هوای بیرون، تقریباً بدون تهویهٔ مطبوع.",
      body: [
        "این پروژه برای مسابقه‌ای طراحی شد که دولت امارات متحدهٔ عربی برگزار کرد؛ خواسته، خانه‌ای بود ریشه‌دار در فرهنگ و سنت اماراتی و صادق نسبت به اقلیمی که در آن می‌نشیند. پاسخ این بود که خنک‌سازی دیگر مسئله‌ای مکانیکی تلقی نشود.",
        "برش ساختمان از دو سامانه وام می‌گیرد که این مسئله را پیش‌تر حل کرده‌اند: تپهٔ خودتهویهٔ موریانه، و بادگیر که قرن‌هاست خانه‌های ایرانی را خنک نگه می‌دارد. هوای خنک از دریچه‌های شمالی و شمال‌غربی و از کف سایه‌دار مجلس وارد می‌شود؛ دودکش خورشیدی با صفحات آینه‌ای هوا را گرم و به بالا هدایت می‌کند؛ و شفت مرکزی، برگرفته از خانهٔ موریانه، کل پلان هشت‌ضلعی را در جابه‌جایی همرفتی نگه می‌دارد. سایبانی با نقش گره حیاط مرکزی را سایه می‌اندازد.",
        "بادگیرهای متعارف از نظر جهت‌گیری و عملکرد بررسی و ضعف‌هایشان اصلاح شد. در شبیه‌سازی یک‌سالهٔ اقلیمی، دمای داخل تا ۲۰ درجه پایین‌تر از هوای بیرون باقی می‌ماند، بدون سرمایش مکانیکی گسترده.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "castelnuovo-davane": {
    en: {
      title: "Castelnuovo d'Avane",
      subtitle: "Bringing an abandoned Tuscan hill village back into use",
      brief: "A regeneration plan for an abandoned village — hotels, galleries, housing — and seven new towers to make it walkable again.",
      body: [
        "Castelnuovo d'Avane had been left empty. The proposal turns the historic settlement into a tourist destination and a residential community for ENEL employees, without erasing what makes it itself.",
        "The hardest problem was the slope. Taking a cue from Tuscany's medieval towers, seven vertical elements were placed across the site; each carries a stair and a lift, and together they stitch the village into somewhere you can actually move through. The programme layers boutique hotels, a museum, artists' accommodation, workshops, retail and staff housing, with pedestrian and vehicle access resolved separately.",
        "Terracotta and clay-based finishes keep the new work in the same family as the old. Developed in the Architectural Design Studio IV course in collaboration with Archea Associati, under the supervision of Marco Casamonti.",
      ],
    },
    it: {
      title: "Castelnuovo d'Avane",
      subtitle: "Rimettere in uso un borgo toscano abbandonato",
      brief: "Un piano di rigenerazione per un borgo abbandonato — alberghi, gallerie, residenze — e sette nuove torri per renderlo di nuovo percorribile.",
      body: [
        "Castelnuovo d'Avane era stato lasciato vuoto. La proposta trasforma l'insediamento storico in una destinazione turistica e in una comunità residenziale per i dipendenti ENEL, senza cancellare ciò che lo rende sé stesso.",
        "Il problema più difficile era il pendio. Prendendo spunto dalle torri medievali toscane, sette elementi verticali sono stati distribuiti sul sito; ciascuno porta una scala e un ascensore e insieme ricuciono il borgo in un luogo davvero percorribile. Il programma sovrappone boutique hotel, museo, residenze per artisti, laboratori, commercio e alloggi per il personale, con accessi pedonali e veicolari risolti separatamente.",
        "Terracotta e finiture a base di argilla tengono il nuovo nella stessa famiglia dell'antico. Sviluppato nel corso di Progettazione Architettonica IV in collaborazione con Archea Associati, sotto la supervisione di Marco Casamonti.",
      ],
    },
    de: {
      title: "Castelnuovo d'Avane",
      subtitle: "Ein verlassenes toskanisches Bergdorf wieder in Gebrauch nehmen",
      brief: "Ein Regenerationsplan für ein verlassenes Dorf — Hotels, Galerien, Wohnungen — und sieben neue Türme, die es wieder begehbar machen.",
      body: [
        "Castelnuovo d'Avane stand leer. Der Vorschlag verwandelt die historische Siedlung in ein touristisches Ziel und eine Wohngemeinschaft für ENEL-Mitarbeitende, ohne zu tilgen, was den Ort ausmacht.",
        "Das schwierigste Problem war die Hanglage. Nach dem Vorbild der toskanischen Geschlechtertürme wurden sieben vertikale Elemente im Gelände verteilt; jedes trägt eine Treppe und einen Aufzug, gemeinsam nähen sie das Dorf zu einem wirklich begehbaren Ort zusammen. Das Programm schichtet Boutiquehotels, Museum, Künstlerunterkünfte, Werkstätten, Handel und Personalwohnungen; Fuß- und Fahrverkehr sind getrennt gelöst.",
        "Terrakotta und tonbasierte Oberflächen halten das Neue in derselben Familie wie das Alte. Entwickelt im Kurs Architekturentwurf IV in Zusammenarbeit mit Archea Associati unter der Leitung von Marco Casamonti.",
      ],
    },
    fr: {
      title: "Castelnuovo d'Avane",
      subtitle: "Remettre en usage un village toscan abandonné",
      brief: "Un plan de régénération pour un village abandonné — hôtels, galeries, logements — et sept tours nouvelles pour le rendre à nouveau praticable.",
      body: [
        "Castelnuovo d'Avane était vide. La proposition transforme le bourg historique en destination touristique et en communauté résidentielle pour les employés d'ENEL, sans effacer ce qui fait son identité.",
        "La pente était le problème le plus difficile. S'inspirant des tours médiévales toscanes, sept éléments verticaux ont été répartis sur le site ; chacun porte un escalier et un ascenseur et, ensemble, ils recousent le village en un lieu réellement praticable. Le programme superpose hôtels de charme, musée, résidences d'artistes, ateliers, commerces et logements du personnel, avec des accès piétons et véhicules traités séparément.",
        "Terre cuite et finitions à base d'argile maintiennent le neuf dans la même famille que l'ancien. Développé dans le cours de Projet d'architecture IV en collaboration avec Archea Associati, sous la direction de Marco Casamonti.",
      ],
    },
    fa: {
      title: "کاستل‌نوئوو داوانه",
      subtitle: "بازگرداندنِ یک روستای متروکِ توسکانی به زندگی",
      brief: "طرح احیای یک روستای متروک — هتل، گالری و مسکن — به‌همراه هفت برج تازه که دوباره آن را قابل‌پیمودن می‌کند.",
      body: [
        "کاستل‌نوئوو داوانه سال‌ها خالی مانده بود. این طرح، بافت تاریخی را به مقصدی گردشگری و سکونتگاهی برای کارکنان شرکت انل بدل می‌کند، بی‌آنکه آنچه آن را «خودش» می‌کند پاک شود.",
        "دشوارترین مسئله شیب زمین بود. با الهام از برج‌های سده‌های میانهٔ توسکانی، هفت عنصر عمودی در پهنهٔ سایت نشانده شد؛ هر یک پله و آسانسور دارد و با هم روستا را به جایی بدل می‌کنند که واقعاً می‌توان در آن حرکت کرد. برنامه شامل هتل‌های بوتیک، موزه، اقامتگاه هنرمندان، کارگاه‌ها، تجاری و مسکن کارکنان است و دسترسی سواره و پیاده جداگانه حل شده‌اند.",
        "سفال و اندودهای رُسی، ساخته‌های تازه را در همان خانوادهٔ مصالح کهن نگه می‌دارد. این پروژه در درس طراحی معماری ۴ با همکاری دفتر آرکئا آسوچاتی و زیر نظر مارکو کازامونتی توسعه یافت.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "k-cafe-factory": {
    en: {
      title: "K-Cafe Factory",
      subtitle: "A coffee roasting and packing plant in the Zagros",
      brief: "4,000 m² of production and administration for a coffee brand, shaped by the rock face at Bisotun.",
      body: [
        "Two buildings on one site in the Zagros industrial town near Kermanshah: a workshop for processing and packing coffee, and an administrative block for the team that runs it.",
        "The form takes its cue from the historic monument at Bisotun and the mountains behind it — a long, quiet mass with a folded, angular screen that reads as rock from the road. Inside, the roasting hall, warehouses and packing line are arranged to keep the workflow short, while the offices face a planted courtyard with stepped seating.",
        "Delivered while leading design for Hamko's industrial facilities: layout, architecture, and the interiors of the reception and offices.",
      ],
    },
    it: {
      title: "K-Cafe Factory",
      subtitle: "Uno stabilimento di torrefazione e confezionamento nello Zagros",
      brief: "4.000 m² tra produzione e uffici per un marchio di caffè, con la parete rocciosa di Bisotun come riferimento.",
      body: [
        "Due edifici su un unico lotto nella zona industriale dello Zagros, vicino a Kermanshah: un'officina per la lavorazione e il confezionamento del caffè e un blocco amministrativo per la squadra che lo gestisce.",
        "La forma prende spunto dal monumento storico di Bisotun e dalle montagne alle sue spalle — una massa lunga e silenziosa con uno schermo piegato e spigoloso che dalla strada si legge come roccia. All'interno la sala di tostatura, i magazzini e la linea di confezionamento sono disposti per accorciare il flusso di lavoro, mentre gli uffici affacciano su una corte piantumata con sedute a gradoni.",
        "Realizzato dirigendo il design degli impianti industriali di Hamko: layout, architettura e interni di reception e uffici.",
      ],
    },
    de: {
      title: "K-Cafe Factory",
      subtitle: "Eine Rösterei und Verpackungsanlage im Zagros",
      brief: "4.000 m² Produktion und Verwaltung für eine Kaffeemarke, geformt nach der Felswand von Bisotun.",
      body: [
        "Zwei Gebäude auf einem Grundstück im Zagros-Industriegebiet bei Kermanschah: eine Halle für Verarbeitung und Verpackung von Kaffee und ein Verwaltungsbau für das Team dahinter.",
        "Die Form nimmt Bezug auf das historische Monument von Bisotun und die Berge dahinter — ein langer, ruhiger Baukörper mit gefalteter, kantiger Schirmfassade, die von der Straße wie Fels wirkt. Innen sind Röstsaal, Lager und Verpackungslinie auf kurze Wege gelegt, während die Büros zu einem bepflanzten Hof mit Sitzstufen orientiert sind.",
        "Entstanden während der Leitung des Designs für Hamkos Industrieanlagen: Layout, Architektur sowie die Innenräume von Empfang und Büros.",
      ],
    },
    fr: {
      title: "K-Cafe Factory",
      subtitle: "Une usine de torréfaction et de conditionnement dans le Zagros",
      brief: "4 000 m² de production et d'administration pour une marque de café, façonnés par la paroi rocheuse de Bisotun.",
      body: [
        "Deux bâtiments sur un même site, dans la zone industrielle du Zagros près de Kermanshah : un atelier de transformation et de conditionnement du café, et un bloc administratif pour l'équipe qui le fait tourner.",
        "La forme s'inspire du monument historique de Bisotun et des montagnes qui le dominent — une masse longue et calme, avec un écran plié et anguleux qui, depuis la route, se lit comme de la roche. À l'intérieur, salle de torréfaction, entrepôts et ligne de conditionnement sont disposés pour raccourcir le flux, tandis que les bureaux s'ouvrent sur une cour plantée à gradins.",
        "Réalisé en dirigeant le design des installations industrielles de Hamko : implantation, architecture et intérieurs de l'accueil et des bureaux.",
      ],
    },
    fa: {
      title: "کارخانهٔ کِی‌کافه",
      subtitle: "کارخانهٔ فرآوری و بسته‌بندی قهوه در زاگرس",
      brief: "۴٬۰۰۰ مترمربع تولید و اداری برای یک برند قهوه، با ارجاع به صخره‌های بیستون.",
      body: [
        "دو ساختمان در یک سایت، در شهرک صنعتی زاگرسِ کرمانشاه: کارگاهی برای فرآوری و بسته‌بندی قهوه و بلوکی اداری برای تیمی که آن را می‌گرداند.",
        "فرم از بنای تاریخی بیستون و کوه‌های پشتش الهام گرفته است — حجمی کشیده و آرام با نمایی تاشده و زاویه‌دار که از جاده مثل صخره خوانده می‌شود. در داخل، سالن رُست، انبارها و خط بسته‌بندی طوری چیده شده‌اند که مسیر کار کوتاه بماند، و ساختمان اداری رو به حیاطی کاشته‌شده با نشیمن پلکانی باز می‌شود.",
        "این پروژه در دورهٔ مدیریت طراحی تأسیسات صنعتی هامکو انجام شد: چیدمان، معماری و طراحی داخلی پذیرش و دفاتر.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "kamran-4": {
    en: {
      title: "Kamran Street N°4",
      subtitle: "Interiors for a nine-storey residence in northern Tehran",
      brief: "Apartments and common areas for a luxury building in the Fereshteh quarter.",
      body: [
        "A nine-storey apartment house in Fereshteh, one of the most expensive quarters of northern Tehran, tailored to affluent couples. From outside, the building is a three-dimensional façade of mobile metal-weave screens — modern readings of traditional ornament that shield the private from the public sphere.",
        "The interior work carries the idea inward: quiet white volumes, a linear fireplace set into the wall, brushed brass and marble in the shared areas, and lighting positioned to let the material do the talking. Layouts, material selection, furniture specification and site coordination.",
      ],
    },
    it: {
      title: "Kamran Street N°4",
      subtitle: "Interni per un edificio di nove piani nella Tehran nord",
      brief: "Appartamenti e spazi comuni per un edificio di lusso nel quartiere Fereshteh.",
      body: [
        "Un edificio residenziale di nove piani a Fereshteh, uno dei quartieri più costosi della Tehran settentrionale, pensato per coppie benestanti. Dall'esterno è una facciata tridimensionale di schermi mobili in tessuto metallico — letture contemporanee dell'ornamento tradizionale, che schermano il privato dalla sfera pubblica.",
        "Il lavoro sugli interni porta l'idea all'interno: volumi bianchi silenziosi, un camino lineare incassato nella parete, ottone spazzolato e marmo negli spazi comuni, e una luce collocata per lasciar parlare la materia. Layout, scelta dei materiali, capitolato d'arredo e coordinamento in cantiere.",
      ],
    },
    de: {
      title: "Kamran Street N°4",
      subtitle: "Innenräume für ein neungeschossiges Wohnhaus im Norden Teherans",
      brief: "Wohnungen und Gemeinschaftsflächen für ein Luxusgebäude im Viertel Fereshteh.",
      body: [
        "Ein neungeschossiges Apartmenthaus in Fereshteh, einem der teuersten Viertel im Norden Teherans, zugeschnitten auf wohlhabende Paare. Von außen ist es eine dreidimensionale Fassade aus beweglichen Metallgewebe-Schirmen — zeitgenössische Lesarten traditionellen Ornaments, die das Private von der Öffentlichkeit abschirmen.",
        "Die Innenraumarbeit trägt diesen Gedanken nach innen: ruhige weiße Volumen, ein linearer Kamin in der Wand, gebürstetes Messing und Marmor in den Gemeinschaftsbereichen, Licht so gesetzt, dass das Material spricht. Grundrisse, Materialwahl, Möblierungsspezifikation und Baustellenkoordination.",
      ],
    },
    fr: {
      title: "Kamran Street N°4",
      subtitle: "Intérieurs pour un immeuble de neuf étages au nord de Téhéran",
      brief: "Appartements et parties communes d'un immeuble de standing dans le quartier de Fereshteh.",
      body: [
        "Un immeuble de neuf étages à Fereshteh, l'un des quartiers les plus chers du nord de Téhéran, destiné à des couples aisés. De l'extérieur, c'est une façade tridimensionnelle d'écrans mobiles en tissage métallique — lectures contemporaines de l'ornement traditionnel, qui protègent le privé de la sphère publique.",
        "Le travail intérieur prolonge cette idée : volumes blancs silencieux, cheminée linéaire encastrée, laiton brossé et marbre dans les parties communes, et un éclairage placé pour laisser parler la matière. Plans, choix des matériaux, prescription du mobilier et coordination de chantier.",
      ],
    },
    fa: {
      title: "خیابان کامران، شمارهٔ ۴",
      subtitle: "طراحی داخلی یک ساختمان نُه‌طبقه در شمال تهران",
      brief: "واحدها و فضاهای مشترک یک ساختمان لوکس در محلهٔ فرشته.",
      body: [
        "ساختمانی مسکونی و نُه‌طبقه در فرشته، از گران‌ترین محله‌های شمال تهران، برای زوج‌های مرفه. از بیرون، نما سه‌بعدی است و از صفحه‌های متحرک با بافت فلزی ساخته شده — خوانشی امروزی از تزیین سنتی که حریم خصوصی را از عرصهٔ عمومی جدا می‌کند.",
        "کار داخلی همان ایده را به درون می‌آورد: حجم‌های سفید و آرام، شومینه‌ای خطی در دل دیوار، برنجِ براش‌خورده و سنگ مرمر در فضاهای مشترک، و نوری که چیده شده تا مصالح حرف بزند. پلان‌بندی، انتخاب مصالح، مشخصات مبلمان و هماهنگی اجرا.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "alvand-tower": {
    en: {
      title: "Alvand Tower",
      subtitle: "A façade designed inside the constraints of Tehran's building code",
      brief: "Façade study for an administrative building — architectural quality within a tight regulatory envelope.",
      body: [
        "The brief for Alvand was mostly made of limits: Tehran's construction rules and regulations on one side, the client's taste on the other. The interesting question was how much architecture is still possible in that space.",
        "The answer is a disciplined grid of deep frames in warm stone, with recessed terracotta panels and horizontal shading fins that give the elevation depth and a shadow line that moves through the day. Detail drawings, an exploded assembly and the installation sequence were produced for construction.",
      ],
    },
    it: {
      title: "Torre Alvand",
      subtitle: "Una facciata progettata dentro i vincoli del regolamento edilizio di Tehran",
      brief: "Studio di facciata per un edificio direzionale — qualità architettonica dentro un involucro normativo stretto.",
      body: [
        "Il brief di Alvand era fatto soprattutto di limiti: da un lato le norme edilizie di Tehran, dall'altro il gusto del committente. La domanda interessante era quanta architettura resti possibile in quello spazio.",
        "La risposta è una griglia disciplinata di telai profondi in pietra calda, con pannelli in terracotta arretrati e lame orizzontali di ombreggiamento che danno profondità al prospetto e una linea d'ombra che si muove nell'arco della giornata. Sono stati prodotti dettagli costruttivi, un assonometrico esploso e la sequenza di montaggio.",
      ],
    },
    de: {
      title: "Alvand-Turm",
      subtitle: "Eine Fassade, entworfen innerhalb der Grenzen der Teheraner Bauordnung",
      brief: "Fassadenstudie für ein Verwaltungsgebäude — architektonische Qualität in einem engen regulatorischen Rahmen.",
      body: [
        "Die Aufgabe bei Alvand bestand vor allem aus Grenzen: auf der einen Seite Teherans Bauvorschriften, auf der anderen der Geschmack des Bauherrn. Die interessante Frage war, wie viel Architektur in diesem Spielraum noch möglich ist.",
        "Die Antwort ist ein diszipliniertes Raster tiefer Rahmen aus warmem Stein, mit zurückgesetzten Terrakottapaneelen und horizontalen Verschattungslamellen, die der Ansicht Tiefe geben und eine Schattenlinie, die im Tagesverlauf wandert. Für die Ausführung entstanden Detailzeichnungen, eine Explosionsaxonometrie und die Montagefolge.",
      ],
    },
    fr: {
      title: "Tour Alvand",
      subtitle: "Une façade conçue dans les contraintes du code de la construction de Téhéran",
      brief: "Étude de façade pour un immeuble administratif — qualité architecturale dans une enveloppe réglementaire serrée.",
      body: [
        "Le programme d'Alvand était surtout fait de limites : d'un côté les règles de construction de Téhéran, de l'autre le goût du maître d'ouvrage. La question intéressante était de savoir combien d'architecture reste possible dans cet intervalle.",
        "La réponse est une trame disciplinée de cadres profonds en pierre chaude, avec des panneaux de terre cuite en retrait et des lames d'ombrage horizontales qui donnent de la profondeur à l'élévation et une ligne d'ombre mobile au fil du jour. Détails d'exécution, éclaté axonométrique et séquence de pose ont été produits pour le chantier.",
      ],
    },
    fa: {
      title: "برج الوند",
      subtitle: "نمایی که درون محدودیت‌های ضوابط ساختمانی تهران طراحی شد",
      brief: "مطالعهٔ نمای یک ساختمان اداری — کیفیت معماری در دل پوسته‌ای پُر از ضابطه.",
      body: [
        "صورت‌مسئلهٔ الوند بیشتر از محدودیت ساخته شده بود: از یک سو ضوابط و مقررات ساختمانی تهران و از سوی دیگر سلیقهٔ کارفرما. پرسش جذاب این بود که در آن فاصله چقدر معماری هنوز ممکن است.",
        "پاسخ، شبکه‌ای منضبط از قاب‌های عمیق با سنگی گرم است، با پانل‌های سفالی عقب‌نشسته و لَبه‌های افقی سایه‌انداز که به نما عمق می‌دهند و خط سایه‌ای می‌سازند که در طول روز جابه‌جا می‌شود. نقشه‌های اجرایی، اکسپلود مونتاژ و توالی نصب برای ساخت تهیه شد.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "ashvan-house": {
    en: {
      title: "Ashvan House",
      subtitle: "A white villa cut into the rock above the Caspian",
      brief: "A private house at Noshahr: stacked white volumes, a glazed room pushed out over the water, and a pool level below.",
      body: [
        "The site is a rock shelf on the Caspian coast at Noshahr, where the sea already does most of the work. The house answers with plain white planes and a single gesture: a glazed room pushed out over the edge, framing the water like a window cut in a wall.",
        "The living level holds kitchen, dining and living rooms with the master bedroom to the north; below, a basement carries a pool, sauna and gym, reached by an external stair that folds down through the terraces. Inside, a book-matched stone wall runs the length of the living space and everything else stays white.",
      ],
    },
    it: {
      title: "Casa Ashvan",
      subtitle: "Una villa bianca incisa nella roccia sopra il Caspio",
      brief: "Una casa privata a Noshahr: volumi bianchi sovrapposti, una stanza vetrata a sbalzo sull'acqua e un livello piscina sotto.",
      body: [
        "Il sito è un terrazzo roccioso sulla costa del Caspio a Noshahr, dove è il mare a fare quasi tutto il lavoro. La casa risponde con piani bianchi essenziali e un solo gesto: una stanza vetrata spinta oltre il bordo, che inquadra l'acqua come una finestra tagliata nel muro.",
        "Il livello giorno ospita cucina, pranzo e soggiorno con la camera padronale a nord; sotto, un piano interrato accoglie piscina, sauna e palestra, raggiunti da una scala esterna che scende piegandosi tra le terrazze. All'interno una parete in pietra a libro attraversa tutto il soggiorno; il resto resta bianco.",
      ],
    },
    de: {
      title: "Haus Ashvan",
      subtitle: "Eine weiße Villa, in den Fels über dem Kaspischen Meer geschnitten",
      brief: "Ein Privathaus in Noschahr: gestapelte weiße Volumen, ein verglaster Raum über dem Wasser und darunter eine Poolebene.",
      body: [
        "Das Grundstück ist ein Felsvorsprung an der kaspischen Küste bei Noschahr, wo das Meer bereits die meiste Arbeit übernimmt. Das Haus antwortet mit schlichten weißen Flächen und einer einzigen Geste: einem verglasten Raum, der über die Kante hinausgeschoben ist und das Wasser rahmt wie ein in die Wand geschnittenes Fenster.",
        "Die Wohnebene fasst Küche, Ess- und Wohnraum mit dem Hauptschlafzimmer im Norden; darunter liegen Pool, Sauna und Fitnessraum, erschlossen über eine Außentreppe, die sich durch die Terrassen nach unten faltet. Innen läuft eine spiegelgeschnittene Natursteinwand durch den gesamten Wohnraum, alles andere bleibt weiß.",
      ],
    },
    fr: {
      title: "Maison Ashvan",
      subtitle: "Une villa blanche taillée dans la roche au-dessus de la Caspienne",
      brief: "Une maison privée à Nowshahr : volumes blancs empilés, une pièce vitrée en porte-à-faux sur l'eau, un niveau piscine en dessous.",
      body: [
        "Le site est une terrasse rocheuse sur la côte caspienne de Nowshahr, où la mer fait déjà l'essentiel du travail. La maison répond par des plans blancs sobres et un seul geste : une pièce vitrée poussée au-delà du bord, qui cadre l'eau comme une fenêtre découpée dans un mur.",
        "Le niveau de jour réunit cuisine, salle à manger et séjour, la chambre principale au nord ; en dessous, un sous-sol accueille piscine, sauna et salle de sport, desservis par un escalier extérieur qui descend en se pliant entre les terrasses. À l'intérieur, un mur de pierre en ouverture de livre traverse tout le séjour ; le reste demeure blanc.",
      ],
    },
    fa: {
      title: "خانهٔ اَشوان",
      subtitle: "ویلایی سفید، بریده در صخره‌های بالای دریای خزر",
      brief: "خانه‌ای خصوصی در نوشهر: حجم‌های سفید روی هم، اتاقی شیشه‌ای بیرون‌زده بر آب، و طبقهٔ استخر در زیر.",
      body: [
        "سایت، سکویی صخره‌ای بر ساحل خزر در نوشهر است؛ جایی که دریا خودش بیشتر کار را انجام می‌دهد. خانه با صفحه‌های سفید و ساده پاسخ می‌دهد و یک حرکت: اتاقی شیشه‌ای که از لبه بیرون رانده شده و آب را مثل پنجره‌ای بریده در دیوار قاب می‌گیرد.",
        "طبقهٔ اصلی آشپزخانه، ناهارخوری و نشیمن را در خود دارد و اتاق‌خواب اصلی رو به شمال است؛ در زیر، طبقه‌ای شامل استخر، سونا و باشگاه از راه پلکانی بیرونی که میان تراس‌ها پایین می‌آید در دسترس است. در داخل، دیواری از سنگِ کتابی‌بریده در طول نشیمن کشیده می‌شود و باقی همه سفید می‌ماند.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "iran-palace-hotel": {
    en: {
      title: "Iran Palace Hotel",
      subtitle: "A hotel lobby drawn in curves, with Persian geometry overhead",
      brief: "Lobby and public areas for a Tehran hotel — an Iranian approach carried through form, material and furniture.",
      body: [
        "The client asked for a lobby that read as Iranian and used curved lines throughout. Rather than applying ornament to a rectangular room, the plan itself curves: circular seating islands, a spiral stair, and a floor pattern of concentric rings that organises movement across the whole space.",
        "Above the reception, a girih-patterned shell in perforated brass glows over the lounge; backlit onyx and warm timber balance the white plaster. Layout, material selection and furniture were developed together to serve that single idea.",
      ],
    },
    it: {
      title: "Iran Palace Hotel",
      subtitle: "Una hall disegnata per curve, con geometria persiana sopra la testa",
      brief: "Hall e spazi pubblici per un hotel di Tehran — un approccio iraniano portato avanti da forma, materia e arredo.",
      body: [
        "Il committente chiedeva una hall che si leggesse come iraniana e usasse linee curve ovunque. Invece di applicare ornamento a una stanza rettangolare, è la pianta stessa a curvare: isole di seduta circolari, una scala elicoidale e un disegno a terra di anelli concentrici che organizza il movimento nell'intero spazio.",
        "Sopra la reception, un guscio traforato in ottone con motivo girih risplende sulla lounge; onice retroilluminato e legno caldo bilanciano l'intonaco bianco. Layout, materiali e arredo sono stati sviluppati insieme per servire quell'unica idea.",
      ],
    },
    de: {
      title: "Iran Palace Hotel",
      subtitle: "Eine Hotellobby in Kurven gezeichnet, mit persischer Geometrie über dem Kopf",
      brief: "Lobby und öffentliche Bereiche eines Teheraner Hotels — ein iranischer Ansatz durch Form, Material und Möblierung.",
      body: [
        "Der Bauherr wünschte eine Lobby, die als iranisch lesbar ist und durchgehend mit gekrümmten Linien arbeitet. Statt Ornament auf einen rechteckigen Raum zu legen, krümmt sich der Grundriss selbst: kreisförmige Sitzinseln, eine Wendeltreppe und ein Bodenmuster aus konzentrischen Ringen, das die Bewegung im ganzen Raum ordnet.",
        "Über dem Empfang leuchtet eine perforierte Messingschale mit Girih-Muster über der Lounge; hinterleuchteter Onyx und warmes Holz halten dem weißen Putz die Waage. Grundriss, Materialien und Möblierung wurden gemeinsam auf diese eine Idee hin entwickelt.",
      ],
    },
    fr: {
      title: "Iran Palace Hotel",
      subtitle: "Un hall dessiné en courbes, avec une géométrie persane au-dessus",
      brief: "Hall et espaces publics d'un hôtel de Téhéran — une approche iranienne portée par la forme, la matière et le mobilier.",
      body: [
        "Le client demandait un hall qui se lise comme iranien et emploie des lignes courbes partout. Plutôt que d'appliquer l'ornement à une salle rectangulaire, c'est le plan lui-même qui s'incurve : îlots d'assises circulaires, escalier hélicoïdal et motif de sol en anneaux concentriques qui organise le mouvement dans tout l'espace.",
        "Au-dessus de la réception, une coque de laiton perforé à motif girih rayonne sur le salon ; onyx rétroéclairé et bois chaud équilibrent l'enduit blanc. Plan, matériaux et mobilier ont été développés ensemble au service de cette seule idée.",
      ],
    },
    fa: {
      title: "هتل ایران‌پالاس",
      subtitle: "لابی‌ای که با منحنی کشیده شده و هندسهٔ ایرانی بالای سر دارد",
      brief: "لابی و فضاهای عمومی یک هتل در تهران — رویکردی ایرانی که در فرم، مصالح و مبلمان دنبال شده است.",
      body: [
        "کارفرما لابی‌ای می‌خواست که ایرانی خوانده شود و سراسر با خطوط منحنی کار کند. به‌جای نشاندن تزیین بر اتاقی مستطیل، خودِ پلان منحنی می‌شود: جزیره‌های نشیمن دایره‌ای، پلکانی مارپیچ، و نقشی از حلقه‌های هم‌مرکز روی کف که حرکت را در کل فضا سامان می‌دهد.",
        "بالای پذیرش، پوسته‌ای مشبک از برنج با نقش گره روی لانژ می‌درخشد؛ اونیکس نورپردازی‌شده و چوب گرم، سفیدیِ گچ را متعادل می‌کنند. پلان، مصالح و مبلمان همه با هم و در خدمت همان یک ایده توسعه یافتند.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  aspian: {
    en: {
      title: "Aspian",
      subtitle: "A rehabilitation and development centre for teenagers in conflict with the law",
      brief: "A correctional centre reframed as a school — classes, workshops, and a building that does not feel like a punishment.",
      body: [
        "Under-18s in conflict with the law are held for correction and education, not punishment. The project takes that at its word and treats development-oriented prevention as the real brief.",
        "Classes and workshops teach individual and social skills so a resident can return to family and community with something to offer. The building answers with a screen of vertical timber fins that peels away from the mass and curls down to the ground — enclosure without bars, daylight without exposure. Behind the filter sit the dining hall, workshops and classrooms; a sports field and open ground complete the site.",
      ],
    },
    it: {
      title: "Aspian",
      subtitle: "Un centro di riabilitazione e crescita per adolescenti in conflitto con la legge",
      brief: "Un centro correzionale riletto come scuola — lezioni, laboratori e un edificio che non somiglia a una punizione.",
      body: [
        "I minori di diciotto anni in conflitto con la legge sono accolti per correzione ed educazione, non per punizione. Il progetto prende sul serio questa premessa e assume la prevenzione orientata allo sviluppo come vero tema.",
        "Lezioni e laboratori insegnano competenze individuali e sociali, perché chi esce possa tornare alla famiglia e alla comunità con qualcosa da offrire. L'edificio risponde con uno schermo di lame verticali in legno che si stacca dalla massa e si arriccia fino a terra: recinto senza sbarre, luce senza esposizione. Dietro il filtro stanno mensa, laboratori e aule; un campo sportivo completa il lotto.",
      ],
    },
    de: {
      title: "Aspian",
      subtitle: "Ein Rehabilitations- und Entwicklungszentrum für Jugendliche im Konflikt mit dem Gesetz",
      brief: "Eine Erziehungsanstalt, neu gedacht als Schule — Unterricht, Werkstätten und ein Gebäude, das sich nicht wie Strafe anfühlt.",
      body: [
        "Unter Achtzehnjährige im Konflikt mit dem Gesetz werden zur Besserung und Bildung untergebracht, nicht zur Bestrafung. Das Projekt nimmt das beim Wort und behandelt entwicklungsorientierte Prävention als die eigentliche Aufgabe.",
        "Unterricht und Werkstätten vermitteln individuelle und soziale Fähigkeiten, damit Bewohner mit etwas in der Hand zu Familie und Gemeinschaft zurückkehren. Das Gebäude antwortet mit einem Schirm vertikaler Holzlamellen, der sich vom Baukörper löst und bis zum Boden einrollt — Umschließung ohne Gitter, Tageslicht ohne Preisgabe. Hinter dem Filter liegen Speisesaal, Werkstätten und Klassenräume; ein Sportfeld ergänzt das Grundstück.",
      ],
    },
    fr: {
      title: "Aspian",
      subtitle: "Un centre de réhabilitation et de développement pour adolescents en conflit avec la loi",
      brief: "Un centre correctionnel repensé en école — cours, ateliers, et un bâtiment qui ne ressemble pas à une punition.",
      body: [
        "Les mineurs en conflit avec la loi sont accueillis pour être corrigés et instruits, non punis. Le projet prend cette phrase au sérieux et fait de la prévention orientée vers le développement le véritable programme.",
        "Cours et ateliers enseignent des compétences individuelles et sociales, pour que l'on reparte vers sa famille et sa communauté avec quelque chose à offrir. Le bâtiment répond par un écran de lames de bois verticales qui se détache de la masse et s'enroule jusqu'au sol : clôture sans barreaux, lumière sans exposition. Derrière ce filtre se trouvent le réfectoire, les ateliers et les salles de classe ; un terrain de sport complète le site.",
      ],
    },
    fa: {
      title: "آسپیان",
      subtitle: "مرکز بازپروری و رشد نوجوانانِ درگیر با قانون",
      brief: "کانون اصلاح، بازخوانی‌شده به‌مثابهٔ مدرسه — کلاس، کارگاه، و ساختمانی که حس مجازات ندارد.",
      body: [
        "نگهداری کودکان زیر هجده سالِ درگیر با قانون تنها برای اصلاح و تربیت است، نه کیفر. این پروژه همین جمله را جدی می‌گیرد و پیشگیریِ رشدمحور را صورت‌مسئلهٔ واقعی می‌داند.",
        "کلاس‌ها و کارگاه‌ها مهارت‌های فردی و اجتماعی می‌آموزند تا نوجوان بتواند با چیزی در دست به خانواده و جامعه بازگردد. ساختمان با پوسته‌ای از تیغه‌های چوبی عمودی پاسخ می‌دهد که از حجم جدا می‌شود و تا زمین می‌پیچد: محصوریت بدون میله، نور روز بدون در معرض بودن. پشت این صافی، سالن غذاخوری، کارگاه‌ها و کلاس‌ها قرار دارند و زمین ورزشی سایت را کامل می‌کند.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "shams-tomb": {
    en: {
      title: "Shams Tomb",
      subtitle: "Competition proposal for the setting of a historic monument",
      brief: "Reorganising access, passage and collective space around the tomb of Shams — with +Caat Studio.",
      body: [
        "The competition asked for the reorganisation and redesign of the Shams tomb. Most of the problem lay outside the monument itself: how people arrive, where they pass, and where they are able to stop.",
        "The proposal lays a folded brick landscape across the site — ramps, stepped terraces and bridges that carry visitors around the tower and leave it free at the centre, with sheltered collective space underneath. The historic building is preserved and emphasised rather than competed with.",
      ],
    },
    it: {
      title: "Tomba di Shams",
      subtitle: "Proposta di concorso per l'ambito di un monumento storico",
      brief: "Riorganizzare accessi, percorsi e spazio collettivo attorno alla tomba di Shams — con +Caat Studio.",
      body: [
        "Il concorso chiedeva la riorganizzazione e il ridisegno della tomba di Shams. Gran parte del problema stava fuori dal monumento: come si arriva, dove si passa e dove è possibile fermarsi.",
        "La proposta stende sul sito un paesaggio di mattoni piegato — rampe, terrazze a gradoni e ponti che accompagnano i visitatori attorno alla torre lasciandola libera al centro, con spazi collettivi riparati al di sotto. L'edificio storico viene conservato ed enfatizzato, non messo in concorrenza.",
      ],
    },
    de: {
      title: "Grabmal des Schams",
      subtitle: "Wettbewerbsbeitrag für das Umfeld eines historischen Denkmals",
      brief: "Zugänge, Wege und Gemeinschaftsraum um das Grabmal des Schams neu ordnen — mit +Caat Studio.",
      body: [
        "Der Wettbewerb verlangte die Neuordnung und Umgestaltung des Grabmals von Schams. Der größere Teil der Aufgabe lag außerhalb des Denkmals: wie man ankommt, wo man vorbeigeht und wo man stehen bleiben kann.",
        "Der Entwurf legt eine gefaltete Ziegellandschaft über das Gelände — Rampen, gestufte Terrassen und Brücken, die Besucher um den Turm führen und ihn in der Mitte frei lassen, mit geschütztem Gemeinschaftsraum darunter. Das historische Bauwerk wird bewahrt und betont, statt mit ihm zu konkurrieren.",
      ],
    },
    fr: {
      title: "Tombeau de Shams",
      subtitle: "Proposition de concours pour les abords d'un monument historique",
      brief: "Réorganiser accès, passages et espace collectif autour du tombeau de Shams — avec +Caat Studio.",
      body: [
        "Le concours demandait la réorganisation et le redessin du tombeau de Shams. L'essentiel du problème se situait hors du monument : comment on arrive, par où l'on passe et où l'on peut s'arrêter.",
        "La proposition déploie sur le site un paysage de brique plié — rampes, terrasses en gradins et passerelles qui conduisent les visiteurs autour de la tour et la laissent libre au centre, avec des espaces collectifs abrités en dessous. Le bâtiment historique est préservé et mis en valeur plutôt que concurrencé.",
      ],
    },
    fa: {
      title: "آرامگاه شمس",
      subtitle: "طرح مسابقه برای محوطهٔ یک بنای تاریخی",
      brief: "سامان‌دادن به دسترسی، گذر و فضای جمعی پیرامون آرامگاه شمس — با دفتر مثبت‌کات.",
      body: [
        "مسابقه، ساماندهی و بازطراحی آرامگاه شمس را می‌خواست. بخش عمدهٔ مسئله بیرون از خود بنا بود: مردم چگونه می‌رسند، از کجا می‌گذرند و کجا می‌توانند بایستند.",
        "طرح، منظری آجری و تاخورده روی سایت می‌گستراند — رمپ‌ها، تراس‌های پلکانی و پل‌هایی که بازدیدکننده را گرد برج می‌چرخانند و مرکز را آزاد می‌گذارند، با فضاهای جمعیِ سرپوشیده در زیر. بنای تاریخی به‌جای رقابت، حفظ و برجسته می‌شود.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────────────── */
  "secret-garden": {
    en: {
      title: "Secret Garden Kindergarten",
      subtitle: "Spatial design for children under twelve",
      brief: "A kindergarten built from shapes a child already recognises, with circulation that refuses to be a corridor.",
      body: [
        "The starting point was the child's own understanding of what a home is: a pitched roof, a door, a window. The plan repeats that simple, tangible shape across the site and lets the roofs run together into one long ridge line.",
        "Circulation is deliberately non-linear — you find rooms rather than being marched past them. Classrooms, activity centres, napping and eating areas open onto a garden and a water-play court, and colour is used to tell one part of the building from another.",
      ],
    },
    it: {
      title: "Asilo Secret Garden",
      subtitle: "Progetto spaziale per bambini sotto i dodici anni",
      brief: "Un asilo costruito con forme che un bambino riconosce già, e una circolazione che si rifiuta di essere un corridoio.",
      body: [
        "Il punto di partenza è l'idea che un bambino ha di casa: un tetto a falde, una porta, una finestra. La pianta ripete quella forma semplice e tangibile sul lotto e lascia che le coperture si uniscano in un'unica lunga linea di colmo.",
        "La circolazione è volutamente non lineare: le stanze si trovano, non si attraversano in fila. Aule, centri di attività, aree per il riposo e i pasti si aprono su un giardino e su una corte d'acqua, e il colore serve a distinguere una parte dell'edificio dall'altra.",
      ],
    },
    de: {
      title: "Kindergarten Secret Garden",
      subtitle: "Raumkonzept für Kinder unter zwölf",
      brief: "Ein Kindergarten aus Formen, die ein Kind bereits kennt, mit einer Erschließung, die sich weigert, Flur zu sein.",
      body: [
        "Ausgangspunkt war die kindliche Vorstellung von Haus: Satteldach, Tür, Fenster. Der Grundriss wiederholt diese einfache, greifbare Form über das Grundstück und lässt die Dächer zu einer langen Firstlinie zusammenlaufen.",
        "Die Erschließung ist bewusst nicht linear — man findet Räume, statt an ihnen vorbeigeführt zu werden. Gruppenräume, Aktivitätszonen, Schlaf- und Essbereiche öffnen sich zu einem Garten und einem Wasserspielhof; Farbe unterscheidet die Gebäudeteile voneinander.",
      ],
    },
    fr: {
      title: "Jardin d'enfants Secret Garden",
      subtitle: "Conception spatiale pour des enfants de moins de douze ans",
      brief: "Une école maternelle faite de formes qu'un enfant reconnaît déjà, avec une circulation qui refuse d'être un couloir.",
      body: [
        "Le point de départ est l'idée que l'enfant se fait d'une maison : un toit à deux pentes, une porte, une fenêtre. Le plan répète cette forme simple et tangible sur le site et laisse les toitures se rejoindre en une seule longue ligne de faîtage.",
        "La circulation est volontairement non linéaire : on trouve les salles au lieu d'être conduit devant elles. Salles de classe, espaces d'activité, zones de sieste et de repas s'ouvrent sur un jardin et une cour d'eau, et la couleur sert à distinguer les parties du bâtiment.",
      ],
    },
    fa: {
      title: "مهدکودک باغ پنهان",
      subtitle: "طراحی فضایی برای کودکان زیر دوازده سال",
      brief: "مهدکودکی ساخته‌شده از شکل‌هایی که کودک از پیش می‌شناسد، با گردشی که حاضر نیست راهرو باشد.",
      body: [
        "نقطهٔ شروع، تصور خودِ کودک از خانه بود: شیروانی، در، پنجره. پلان همان شکل ساده و ملموس را در سایت تکرار می‌کند و می‌گذارد بام‌ها در یک خط تیزهٔ بلند به هم بپیوندند.",
        "گردش عمداً غیرخطی است — اتاق‌ها را پیدا می‌کنی، نه اینکه از کنارشان رژه بروی. کلاس‌ها، کانون‌های فعالیت و فضاهای خواب و غذا رو به باغ و محوطهٔ بازی با آب باز می‌شوند، و رنگ، بخش‌های ساختمان را از هم تمیز می‌دهد.",
      ],
    },
  },
};
