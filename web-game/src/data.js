export const NODES = [
  { id: "N01", name: "Nodo del Fuoco Ancestrale", element: "Fuoco/Terra", requirements: { Fuoco: 4, Terra: 2 }, flavour: "La montagna ricorda ogni scintilla." },
  { id: "N02", name: "Nodo delle Maree Sospese", element: "Acqua/Vento", requirements: { Acqua: 4, Vento: 2 }, flavour: "Un oceano immobile attende il primo respiro." },
  { id: "N03", name: "Nodo del Bosco Magnetico", element: "Terra/Vento", requirements: { Terra: 3, Vento: 3 }, flavour: "Le radici puntano verso il cielo." },
  { id: "N04", name: "Nodo della Forgia Nebulare", element: "Fuoco/Acqua", requirements: { Fuoco: 3, Acqua: 3 }, flavour: "Vapore e brace battono lo stesso ritmo." },
  { id: "N05", name: "Nodo del Prisma Eterico", element: "Universale", universal: true, flavour: "Ogni colore e un frammento di memoria." }
];

export const CATALYSTS = [
  ["C01", "Scintilla Risonante", "Fuoco", 1, "Dopo averla incanalata puoi guardare la prima carta del mazzo.", "Un piccolo sole tascabile."],
  ["C02", "Braci Guidate", "Fuoco", 1, "Se giochi questa carta su un Nodo con almeno 1 Terra pesca 1 carta poi scarta 1 carta.", "Le braci seguono sentieri invisibili."],
  ["C03", "Fiamma di Rame", "Fuoco", 1, "Nessun effetto.", "Calore stabile, volonta precisa."],
  ["C04", "Lama Termica", "Fuoco", 2, "Puoi spostare 1 tua potenza Fuoco da un altro Nodo a questo.", "Taglia il freddo prima della materia."],
  ["C05", "Sigillo Vulcanico", "Fuoco", 2, "Se questo Nodo viene stabilizzato in questo turno questa carta vale +1 per la maggioranza.", "Il sigillo si chiude solo nel momento esatto."],
  ["C06", "Corona Incandescente", "Fuoco", 2, "Nessun effetto.", "La luce sceglie il suo portatore."],
  ["C07", "Cuore di Magma", "Fuoco", 3, "Dopo averla incanalata scarta 1 carta dalla mano.", "Potere puro, difficile da trattenere."],
  ["C08", "Goccia Memoria", "Acqua", 1, "Dopo averla incanalata puoi riprendere in mano 1 tua carta valore 1 da un Nodo diverso.", "L'acqua non dimentica la forma."],
  ["C09", "Velo di Rugiada", "Acqua", 1, "Nessun effetto.", "Una difesa sottile come il mattino."],
  ["C10", "Anello di Marea", "Acqua", 1, "Se il Nodo contiene Vento questa carta vale +1 fino alla fine del turno.", "La corrente ascolta il cielo."],
  ["C11", "Canale Cristallino", "Acqua", 2, "Pesca 1 carta se hai meno carte in mano di ogni avversario.", "Trasparente, ma mai vuoto."],
  ["C12", "Specchio Fluente", "Acqua", 2, "Puoi copiare l'elemento di un Catalizzatore valore 1 sullo stesso Nodo fino alla stabilizzazione.", "Riflette cio che serve, non cio che e vero."],
  ["C13", "Pozza Lunare", "Acqua", 2, "Nessun effetto.", "La luna si versa senza cadere."],
  ["C14", "Leviatano in Ampolla", "Acqua", 3, "Dopo averla incanalata non puoi lanciare Distorsioni in questo turno.", "Un mare intero, sigillato a fatica."],
  ["C15", "Soffio Alto", "Vento", 1, "Dopo averla incanalata puoi cambiare bersaglio a una tua prossima azione di incanalamento in questo turno.", "Arriva prima della decisione."],
  ["C16", "Piuma Eolica", "Vento", 1, "Nessun effetto.", "Leggera non significa fragile."],
  ["C17", "Runa del Maestrale", "Vento", 1, "Se giochi una seconda carta su questo Nodo nello stesso turno essa vale +1 per la maggioranza.", "Il vento ama le sequenze."],
  ["C18", "Spirale di Quarzo", "Vento", 2, "Puoi scambiare questa carta con un tuo Catalizzatore valore 1 su un altro Nodo.", "Una curva che corregge il destino."],
  ["C19", "Ali di Ottone", "Vento", 2, "Nessun effetto.", "Ingranaggi abbastanza leggeri da sognare."],
  ["C20", "Oracolo del Cielo", "Vento", 2, "Guarda le prime 2 carte del mazzo e rimettile in qualsiasi ordine.", "Prevedere e solo ascoltare meglio."],
  ["C21", "Ciclone Imbrigliato", "Vento", 3, "Dopo averla incanalata un avversario pesca 1 carta.", "Libero anche quando viene catturato."],
  ["C22", "Seme Litico", "Terra", 1, "Nessun effetto.", "Da una pietra puo nascere una mappa."],
  ["C23", "Radice di Ferro", "Terra", 1, "Questa carta non puo essere spostata da Distorsioni avversarie.", "Si aggrappa al mondo con pazienza."],
  ["C24", "Argilla Viva", "Terra", 1, "Se il Nodo contiene Acqua questa carta vale +1 fino alla fine del turno.", "La forma arriva dopo il contatto."],
  ["C25", "Colonna Basaltica", "Terra", 2, "Nessun effetto.", "Solida come un giuramento antico."],
  ["C26", "Geode Senziente", "Terra", 2, "Quando viene incanalata puoi proteggere 1 altro tuo Catalizzatore su questo Nodo fino al tuo prossimo turno.", "Le pietre parlano piano."],
  ["C27", "Martello Tellurico", "Terra", 2, "Puoi ridurre di 1 il valore di un Catalizzatore avversario su questo Nodo fino alla stabilizzazione.", "Non rompe: riequilibra."],
  ["C28", "Titano Dormiente", "Terra", 3, "Dopo averla incanalata salta la tua prossima azione di pesca in questo turno.", "Quando si muove, la valle cambia nome."]
].map(([id, name, element, power, effect, flavour]) => ({ id, name, category: "Catalizzatore", element, power, effect, flavour }));

export const DISTORTIONS = [
  ["D01", "Sovraccarico Eterico", "Interferenza", "Scegli un Nodo: il prossimo Catalizzatore incanalato su quel Nodo in questo turno vale +1.", "Troppa energia e quasi una risposta."],
  ["D02", "Frattura di Runa", "Interferenza", "Riduci di 1 il valore di un Catalizzatore su un Nodo fino alla stabilizzazione.", "Una linea incrinata puo deviare un destino."],
  ["D03", "Rimbalzo Arcano", "Movimento", "Sposta un tuo Catalizzatore valore 1 o 2 da un Nodo a un altro Nodo non stabilizzato.", "Nessun incanto ama restare fermo."],
  ["D04", "Velo di Stasi", "Difesa", "Scegli un tuo Catalizzatore: non puo essere spostato o ridotto fino al tuo prossimo turno.", "Il tempo trattiene il respiro."],
  ["D05", "Scambio di Polarita", "Movimento", "Scambia due Catalizzatori dello stesso valore su due Nodi diversi.", "La posizione e una proprieta negoziabile."],
  ["D06", "Eco Preveggente", "Controllo", "Guarda le prime 3 carte del mazzo; pescane 1 e rimetti le altre in fondo in qualsiasi ordine.", "Il futuro risponde a bassa voce."],
  ["D07", "Scarica di Dispersione", "Interferenza", "Scegli un Nodo: ogni giocatore con almeno 2 Catalizzatori su quel Nodo scarta 1 carta a sua scelta da quel Nodo.", "Quando l'eco e troppo forte, il Nodo tossisce luce."],
  ["D08", "Ricalibrazione", "Controllo", "Scegli un tuo Catalizzatore: cambia il suo elemento fino alla stabilizzazione mantenendo lo stesso valore.", "Il colore cambia, l'intenzione resta."],
  ["D09", "Ancoraggio Comune", "Difesa", "Fino al tuo prossimo turno nessun giocatore puo stabilizzare il Nodo scelto.", "A volte salvare un Nodo significa rimandarlo."],
  ["D10", "Impulso Gemello", "Accelerazione", "Dopo questa carta puoi incanalare immediatamente un Catalizzatore valore 1 come azione gratuita.", "Due battiti nello stesso istante."],
  ["D11", "Archivio Sommerso", "Recupero", "Riprendi in mano 1 Catalizzatore dalla pila degli scarti, poi scarta 1 carta.", "Nulla scompare davvero sotto l'acqua."],
  ["D12", "Disallineamento Gentile", "Controllo", "Scegli un avversario: nel suo prossimo turno la prima azione non puo essere pescare.", "Un invito cortese a improvvisare."]
].map(([id, name, type, effect, flavour]) => ({ id, name, category: "Distorsione", type, effect, flavour }));

export const ELEMENTS = ["Fuoco", "Acqua", "Vento", "Terra"];

export const cssByElement = {
  Fuoco: "fire",
  Acqua: "water",
  Vento: "wind",
  Terra: "earth",
  Universale: "universal"
};
