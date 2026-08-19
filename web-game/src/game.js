"use strict";

const NODES = [
  { id: "N01", name: "Nodo del Fuoco Ancestrale", element: "Fuoco/Terra", requirements: { Fuoco: 4, Terra: 2 }, flavour: "La montagna ricorda ogni scintilla." },
  { id: "N02", name: "Nodo delle Maree Sospese", element: "Acqua/Vento", requirements: { Acqua: 4, Vento: 2 }, flavour: "Un oceano immobile attende il primo respiro." },
  { id: "N03", name: "Nodo del Bosco Magnetico", element: "Terra/Vento", requirements: { Terra: 3, Vento: 3 }, flavour: "Le radici puntano verso il cielo." },
  { id: "N04", name: "Nodo della Forgia Nebulare", element: "Fuoco/Acqua", requirements: { Fuoco: 3, Acqua: 3 }, flavour: "Vapore e brace battono lo stesso ritmo." },
  { id: "N05", name: "Nodo del Prisma Eterico", element: "Universale", universal: true, flavour: "Ogni colore e un frammento di memoria." }
];

const CATALYSTS = [
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

const DISTORTIONS = [
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

const ELEMENTS = ["Fuoco", "Acqua", "Vento", "Terra"];
const cssByElement = { Fuoco: "fire", Acqua: "water", Vento: "wind", Terra: "earth", Universale: "universal" };

let state = null;
let selectedCardId = null;
let waitingForNode = null;
let busyBot = false;
let suggestedMove = null;
let manualHint = "";

const $ = (id) => document.getElementById(id);
const clone = (value) => JSON.parse(JSON.stringify(value));
const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeDeck() {
  return shuffle([...CATALYSTS, ...DISTORTIONS].map((card, index) => ({ ...card, uid: `${card.id}-${index}-${Math.random().toString(16).slice(2)}` })));
}

function initSetup() {
  $("player-count").addEventListener("change", renderPlayerConfigs);
  $("setup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    startGame(readSetup());
  });
  $("demo-button").addEventListener("click", startGuidedDemo);
  $("new-game-button").addEventListener("click", () => location.reload());
  $("rules-button").addEventListener("click", () => $("rules-dialog").showModal());
  $("draw-button").addEventListener("click", humanDraw);
  $("end-turn-button").addEventListener("click", endTurn);
  renderPlayerConfigs();
}

function startGuidedDemo() {
  $("player-count").value = "3";
  renderPlayerConfigs();
  document.querySelector('select[name="type-0"]').value = "human";
  document.querySelector('select[name="type-1"]').value = "bot";
  document.querySelector('select[name="type-2"]').value = "bot";
  document.querySelector('input[name="name-0"]').value = "Arcanista";
  document.querySelector('select[name="difficulty-1"]').value = Math.random() > .5 ? "base" : "strategic";
  document.querySelector('select[name="difficulty-2"]').value = "strategic";
  syncPlayerConfigVisibility();
  startGame(readSetup());
  log("Demo guidata: guarda il pannello Consiglio mosse per sapere dove cliccare.");
  render();
}

function renderPlayerConfigs() {
  const count = Number($("player-count").value);
  $("player-configs").innerHTML = Array.from({ length: count }, (_, index) => `
    <section class="player-config">
      <h3>Giocatore ${index + 1}</h3>
      <label class="name-field">Nome fisico
        <input name="name-${index}" type="text" maxlength="18" placeholder="Nome giocatore ${index + 1}">
      </label>
      <label class="type-field">Tipo
        <select name="type-${index}" onchange="syncPlayerConfigVisibility()">
          <option value="human"${index === 0 ? " selected" : ""}>Fisico</option>
          <option value="bot"${index > 0 ? " selected" : ""}>Bot</option>
        </select>
      </label>
      <label class="difficulty-field">Difficolta bot
        <select name="difficulty-${index}">
          <option value="base">Base</option>
          <option value="strategic">Strategica</option>
        </select>
      </label>
    </section>
  `).join("");
  syncPlayerConfigVisibility();
}

function syncPlayerConfigVisibility() {
  document.querySelectorAll(".player-config").forEach((config, index) => {
    const type = config.querySelector(`select[name="type-${index}"]`)?.value;
    config.classList.toggle("is-human", type === "human");
    config.classList.toggle("is-bot", type === "bot");
    config.querySelector(".name-field")?.classList.toggle("hidden", type === "bot");
    config.querySelector(".difficulty-field")?.classList.toggle("hidden", type === "human");
    config.querySelector(".type-field")?.classList.toggle("hidden", index === 0);
  });
}

function readSetup() {
  const form = new FormData($("setup-form"));
  const count = Number(form.get("playerCount"));
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    type: form.get(`type-${index}`),
    name: form.get(`type-${index}`) === "bot"
      ? `Bot ${index + 1}`
      : (String(form.get(`name-${index}`) || "").trim() || `Giocatore ${index + 1}`),
    difficulty: form.get(`difficulty-${index}`),
    hand: [],
    captured: [],
    handRevealed: false,
    skipFirstDraw: false,
    cannotDistortThisTurn: false,
    skipDrawThisTurn: false
  }));
}

function startGame(players) {
  const deck = makeDeck();
  state = {
    players,
    deck,
    discard: [],
    nodes: clone(NODES).map((node) => ({ ...node, contributions: [], capturedBy: null, tempBoostNext: 0, lockedUntilTurn: -1 })),
    current: 0,
    actionsLeft: 2,
    turnNumber: 0,
    contributionOrder: 0,
    winner: null,
    victoryTarget: players.length === 2 ? 3 : 2,
    log: []
  };
  players.forEach((player) => drawCards(player, 4));
  $("setup").classList.add("hidden");
  $("game").classList.remove("hidden");
  log("La rete di Aetheria si risveglia.");
  render();
  maybeRunBot();
}

function currentPlayer() {
  return state.players[state.current];
}

function log(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 45);
}

function drawCards(player, count = 1) {
  for (let i = 0; i < count; i += 1) {
    if (state.deck.length === 0) {
      const recycled = state.discard.filter((card) => !card.fromNode);
      state.discard = state.discard.filter((card) => card.fromNode);
      state.deck = shuffle(recycled);
      if (state.deck.length === 0) return;
      log("Gli scarti vengono rimescolati nel mazzo.");
    }
    player.hand.push(state.deck.pop());
  }
}

function humanDraw() {
  if (!canHumanAct()) return;
  const player = currentPlayer();
  if (player.skipFirstDraw && state.actionsLeft === 2) {
    log(`${player.name} non puo pescare come prima azione.`);
    render();
    return;
  }
  if (player.skipDrawThisTurn) {
    log(`${player.name} deve saltare la prossima azione di pesca.`);
    player.skipDrawThisTurn = false;
    consumeAction();
    return;
  }
  drawCards(player, 1);
  log(`${player.name} pesca 1 carta.`);
  consumeAction();
}

function canHumanAct() {
  return state && !state.winner && currentPlayer().type === "human" && currentPlayer().handRevealed && !busyBot;
}

function consumeAction() {
  const firstAction = state.actionsLeft === 2;
  state.actionsLeft -= 1;
  if (firstAction) currentPlayer().skipFirstDraw = false;
  selectedCardId = null;
  waitingForNode = null;
  suggestedMove = null;
  manualHint = "";
  cleanupTurnEffectsIfNeeded();
  checkVictory();
  if (!state.winner && state.actionsLeft <= 0) endTurn();
  else {
    render();
    maybeRunBot();
  }
}

function cleanupTurnEffectsIfNeeded() {
  if (state.actionsLeft <= 0) {
    state.nodes.forEach((node) => { node.tempBoostNext = 0; });
  }
}

function endTurn() {
  if (!state || state.winner) return;
  const player = currentPlayer();
  while (player.hand.length > 7) {
    const discarded = chooseDiscard(player);
    discardFromHand(player, discarded.uid);
    log(`${player.name} scarta ${discarded.name} per il limite mano.`);
  }
  state.current = (state.current + 1) % state.players.length;
  state.turnNumber += 1;
  state.actionsLeft = 2;
  const next = currentPlayer();
  next.cannotDistortThisTurn = false;
  next.skipDrawThisTurn = false;
  if (next.type === "human") next.handRevealed = false;
  selectedCardId = null;
  waitingForNode = null;
  suggestedMove = null;
  manualHint = "";
  log(`Turno di ${next.name}.`);
  render();
  maybeRunBot();
}

function chooseDiscard(player) {
  const distortions = player.hand.filter((card) => card.category === "Distorsione");
  return distortions[0] || player.hand[0];
}

function discardFromHand(player, uid) {
  const index = player.hand.findIndex((card) => card.uid === uid);
  if (index < 0) return null;
  const [card] = player.hand.splice(index, 1);
  state.discard.push(card);
  return card;
}

function playHandCard(uid) {
  if (!canHumanAct()) return;
  const player = currentPlayer();
  const card = player.hand.find((item) => item.uid === uid);
  if (!card) return;
  selectedCardId = uid;
  if (card.category === "Catalizzatore") {
    waitingForNode = { mode: "channel", cardUid: uid };
    $("selection-hint").textContent = "Scegli un Nodo non stabilizzato per incanalare il Catalizzatore.";
  } else if (card.category === "Distorsione") {
    if (player.cannotDistortThisTurn) {
      log(`${player.name} non puo lanciare Distorsioni in questo turno.`);
      render();
      return;
    }
    playDistortion(player, card);
  }
  render();
}

function clickNode(nodeId) {
  if (!canHumanAct() || !waitingForNode) return;
  const player = currentPlayer();
  const node = state.nodes.find((item) => item.id === nodeId);
  if (!node || node.capturedBy !== null) return;
  if (waitingForNode.mode === "channel") {
    const card = player.hand.find((item) => item.uid === waitingForNode.cardUid);
    if (!card) return;
    channelCard(player, card, node);
    player.hand = player.hand.filter((item) => item.uid !== card.uid);
    consumeAction();
  }
}

function channelCard(player, card, node, free = false) {
  let element = card.element;
  let value = card.power;
  if (node.tempBoostNext > 0) {
    value += node.tempBoostNext;
    node.tempBoostNext = 0;
  }
  if (card.id === "C10" && nodeTotals(node).Vento > 0) value += 1;
  if (card.id === "C24" && nodeTotals(node).Acqua > 0) value += 1;
  if (card.id === "C17" && node.contributions.some((entry) => entry.owner === player.id && entry.turnPlayed === state.turnNumber)) {
    value += 1;
  }
  node.contributions.push({
    ...card,
    owner: player.id,
    effectiveElement: element,
    effectivePower: value,
    mod: 0,
    order: state.contributionOrder += 1,
    turnPlayed: state.turnNumber,
    protectedUntil: -1
  });
  log(`${player.name} incanala ${card.name} su ${node.name}${free ? " come azione gratuita" : ""}.`);
  applyCatalystSideEffect(player, card, node);
  checkNodeStabilization(node);
}

function applyCatalystSideEffect(player, card, node) {
  if (card.id === "C01" && state.deck.length) log(`${player.name} intravede: ${state.deck[state.deck.length - 1].name}.`);
  if (card.id === "C02" && nodeTotals(node).Terra > 0) {
    drawCards(player, 1);
    if (player.hand.length) {
      const discarded = chooseDiscard(player);
      discardFromHand(player, discarded.uid);
      log(`${player.name} pesca e scarta ${discarded.name}.`);
    }
  }
  if (card.id === "C07" && player.hand.length) {
    const discarded = chooseDiscard(player);
    discardFromHand(player, discarded.uid);
    log(`${player.name} scarta ${discarded.name}.`);
  }
  if (card.id === "C11" && state.players.every((other) => other.id === player.id || player.hand.length < other.hand.length)) {
    drawCards(player, 1);
    log(`${player.name} pesca con Canale Cristallino.`);
  }
  if (card.id === "C14") player.cannotDistortThisTurn = true;
  if (card.id === "C21") {
    const opponents = state.players.filter((item) => item.id !== player.id);
    drawCards(randomItem(opponents), 1);
    log("Un avversario pesca per l'effetto del Ciclone Imbrigliato.");
  }
  if (card.id === "C28") player.skipDrawThisTurn = true;
}

function playDistortion(player, card) {
  const playable = resolveDistortion(player, card);
  if (!playable) {
    selectedCardId = null;
    log(`${player.name} non ha bersagli validi per ${card.name}.`);
    render();
    return;
  }
  discardFromHand(player, card.uid);
  log(`${player.name} lancia ${card.name}.`);
  checkAllNodes();
  consumeAction();
}

function resolveDistortion(player, card) {
  const openNodes = state.nodes.filter((node) => node.capturedBy === null);
  const allContribs = openNodes.flatMap((node) => node.contributions.map((entry) => ({ node, entry })));
  const ownContribs = allContribs.filter(({ entry }) => entry.owner === player.id);
  const enemyContribs = allContribs.filter(({ entry }) => entry.owner !== player.id && !isProtected(entry));
  if (card.id === "D01") {
    const node = chooseNodeForPlayer(player, openNodes);
    if (!node) return false;
    node.tempBoostNext = 1;
    log(`${node.name} riceve un sovraccarico temporaneo.`);
    return true;
  }
  if (card.id === "D02") {
    const target = bestEnemyContribution(player) || enemyContribs[0];
    if (!target) return false;
    target.entry.mod -= 1;
    log(`${target.entry.name} viene ridotta di 1.`);
    return true;
  }
  if (card.id === "D03") {
    const movable = ownContribs.find(({ entry }) => entry.effectivePower + entry.mod <= 2 && !isProtected(entry));
    const destination = openNodes.find((node) => movable && node.id !== movable.node.id);
    if (!movable || !destination) return false;
    moveContribution(movable.node, destination, movable.entry);
    return true;
  }
  if (card.id === "D04") {
    const target = ownContribs[0];
    if (!target) return false;
    target.entry.protectedUntil = state.turnNumber + state.players.length;
    log(`${target.entry.name} viene protetta.`);
    return true;
  }
  if (card.id === "D05") {
    const pair = findSwapPair(allContribs);
    if (!pair) return false;
    moveContribution(pair.a.node, pair.b.node, pair.a.entry, false);
    moveContribution(pair.b.node, pair.a.node, pair.b.entry, false);
    log(`${pair.a.entry.name} e ${pair.b.entry.name} si scambiano posizione.`);
    return true;
  }
  if (card.id === "D06") {
    const seen = state.deck.splice(Math.max(0, state.deck.length - 3));
    if (!seen.length) return false;
    const pick = bestCardForBot(player, seen);
    player.hand.push(pick);
    seen.filter((item) => item.uid !== pick.uid).forEach((item) => state.deck.unshift(item));
    log(`${player.name} sceglie una carta tra le prime tre.`);
    return true;
  }
  if (card.id === "D07") {
    const node = openNodes.find((item) => {
      const owners = groupByOwner(item.contributions);
      return Object.values(owners).some((entries) => entries.length >= 2);
    });
    if (!node) return false;
    Object.entries(groupByOwner(node.contributions)).forEach(([owner, entries]) => {
      if (entries.length >= 2) removeContribution(node, entries[0]);
    });
    log(`${node.name} disperde una carta dai giocatori piu investiti.`);
    return true;
  }
  if (card.id === "D08") {
    const target = ownContribs[0];
    if (!target) return false;
    target.entry.effectiveElement = bestElementForNode(target.node);
    log(`${target.entry.name} viene ricalibrata in ${target.entry.effectiveElement}.`);
    return true;
  }
  if (card.id === "D09") {
    const node = chooseThreatNode(player);
    if (!node) return false;
    node.lockedUntilTurn = state.turnNumber + state.players.length;
    log(`${node.name} viene ancorato fino al prossimo giro.`);
    return true;
  }
  if (card.id === "D10") {
    const valueOne = player.hand.find((item) => item.category === "Catalizzatore" && item.power === 1);
    const node = valueOne && chooseNodeForPlayer(player, openNodes, valueOne);
    if (!valueOne || !node) return false;
    player.hand = player.hand.filter((item) => item.uid !== valueOne.uid);
    channelCard(player, valueOne, node, true);
    return true;
  }
  if (card.id === "D11") {
    const recoveredIndex = state.discard.findIndex((item) => item.category === "Catalizzatore");
    if (recoveredIndex < 0) return false;
    const [recovered] = state.discard.splice(recoveredIndex, 1);
    player.hand.push(recovered);
    if (player.hand.length) discardFromHand(player, chooseDiscard(player).uid);
    log(`${player.name} recupera un Catalizzatore dagli scarti.`);
    return true;
  }
  if (card.id === "D12") {
    const target = state.players.find((item) => item.id !== player.id);
    if (!target) return false;
    target.skipFirstDraw = true;
    log(`${target.name} non potra pescare come prima azione.`);
    return true;
  }
  return false;
}

function isProtected(entry) {
  return entry.id === "C23" || entry.protectedUntil >= state.turnNumber;
}

function groupByOwner(entries) {
  return entries.reduce((acc, entry) => {
    acc[entry.owner] ||= [];
    acc[entry.owner].push(entry);
    return acc;
  }, {});
}

function removeContribution(node, entry) {
  node.contributions = node.contributions.filter((item) => item.uid !== entry.uid);
  state.discard.push({ ...entry, fromNode: true });
}

function moveContribution(fromNode, toNode, entry, announce = true) {
  fromNode.contributions = fromNode.contributions.filter((item) => item.uid !== entry.uid);
  toNode.contributions.push(entry);
  if (announce) log(`${entry.name} si sposta su ${toNode.name}.`);
}

function findSwapPair(items) {
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      if (items[i].node.id !== items[j].node.id && currentValue(items[i].entry) === currentValue(items[j].entry)) {
        return { a: items[i], b: items[j] };
      }
    }
  }
  return null;
}

function currentValue(entry) {
  return Math.max(0, entry.effectivePower + entry.mod);
}

function nodeTotals(node) {
  const totals = { Fuoco: 0, Acqua: 0, Vento: 0, Terra: 0 };
  node.contributions.forEach((entry) => {
    totals[entry.effectiveElement] += currentValue(entry);
  });
  return totals;
}

function checkAllNodes() {
  state.nodes.forEach(checkNodeStabilization);
}

function checkNodeStabilization(node) {
  if (node.capturedBy !== null || node.lockedUntilTurn >= state.turnNumber) return;
  if (!isNodeComplete(node)) return;
  const scores = {};
  node.contributions.forEach((entry) => {
    scores[entry.owner] = (scores[entry.owner] || 0) + currentValue(entry) + (entry.id === "C05" ? 1 : 0);
  });
  const contenders = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!contenders.length) return;
  let winnerId = Number(contenders[0][0]);
  if (contenders.length > 1 && contenders[0][1] === contenders[1][1]) {
    winnerId = node.contributions
      .filter((entry) => scores[entry.owner] === contenders[0][1])
      .sort((a, b) => a.order - b.order)[0].owner;
  }
  node.capturedBy = winnerId;
  state.players[winnerId].captured.push({ id: node.id, name: node.name });
  node.contributions.forEach((entry) => state.discard.push({ ...entry, fromNode: true }));
  node.contributions = [];
  log(`${state.players[winnerId].name} stabilizza ${node.name}.`);
  checkVictory();
}

function isNodeComplete(node) {
  const totals = nodeTotals(node);
  if (node.universal) return ELEMENTS.filter((element) => totals[element] >= 2).length >= 3;
  return Object.entries(node.requirements).every(([element, needed]) => totals[element] >= needed);
}

function checkVictory() {
  const winner = state.players.find((player) => player.captured.length >= state.victoryTarget);
  if (winner) {
    state.winner = winner.id;
    log(`${winner.name} vince la partita.`);
  }
  render();
}

function maybeRunBot() {
  if (!state || state.winner || busyBot || currentPlayer().type !== "bot") return;
  busyBot = true;
  render();
  window.setTimeout(() => {
    runBotTurn();
    busyBot = false;
    render();
    maybeRunBot();
  }, 550);
}

function runBotTurn() {
  const player = currentPlayer();
  while (!state.winner && state.actionsLeft > 0 && currentPlayer().id === player.id) {
    const action = chooseBotAction(player);
    if (action.type === "draw") botDraw(player);
    if (action.type === "channel") {
      player.hand = player.hand.filter((card) => card.uid !== action.card.uid);
      channelCard(player, action.card, action.node);
      if (state.actionsLeft === 2) player.skipFirstDraw = false;
      state.actionsLeft -= 1;
      checkVictory();
    }
    if (action.type === "distort") {
      resolveDistortion(player, action.card);
      discardFromHand(player, action.card.uid);
      log(`${player.name} lancia ${action.card.name}.`);
      if (state.actionsLeft === 2) player.skipFirstDraw = false;
      state.actionsLeft -= 1;
      checkAllNodes();
    }
    if (state.actionsLeft <= 0) endTurn();
  }
}

function botDraw(player) {
  if (player.skipFirstDraw && state.actionsLeft === 2) {
    player.skipFirstDraw = false;
    log(`${player.name} evita la pesca bloccata.`);
    state.actionsLeft -= 1;
    return;
  }
  if (player.skipDrawThisTurn) {
    player.skipDrawThisTurn = false;
    log(`${player.name} salta una pesca.`);
    state.actionsLeft -= 1;
    return;
  }
  drawCards(player, 1);
  log(`${player.name} pesca 1 carta.`);
  state.actionsLeft -= 1;
}

function chooseBotAction(player) {
  const openNodes = state.nodes.filter((node) => node.capturedBy === null);
  const catalysts = player.hand.filter((card) => card.category === "Catalizzatore");
  const distortions = player.hand.filter((card) => card.category === "Distorsione");
  if (player.difficulty === "base") {
    const playableCatalyst = catalysts.length && randomItem(catalysts);
    if (playableCatalyst && Math.random() > .25) return { type: "channel", card: playableCatalyst, node: randomItem(openNodes) };
    if (distortions.length && !player.cannotDistortThisTurn && Math.random() > .5) return { type: "distort", card: randomItem(distortions) };
    return { type: "draw" };
  }
  const winningPlay = bestImmediateNodeCompletion(player, catalysts, openNodes);
  if (winningPlay) return winningPlay;
  const helpfulDistortion = distortions.find((card) => ["D01", "D02", "D06", "D10"].includes(card.id)) && !player.cannotDistortThisTurn;
  if (helpfulDistortion && player.hand.length >= 4) return { type: "distort", card: helpfulDistortion };
  const bestCatalyst = bestCatalystPlay(player, catalysts, openNodes);
  if (bestCatalyst) return bestCatalyst;
  return { type: "draw" };
}

function bestImmediateNodeCompletion(player, catalysts, nodes) {
  for (const card of catalysts) {
    for (const node of nodes) {
      const ghost = clone(node);
      ghost.contributions.push({ ...card, owner: player.id, effectiveElement: card.element, effectivePower: card.power, mod: 0, order: 999 });
      if (isNodeComplete(ghost)) return { type: "channel", card, node };
    }
  }
  return null;
}

function bestCatalystPlay(player, catalysts, nodes) {
  let best = null;
  let bestScore = -Infinity;
  catalysts.forEach((card) => {
    nodes.forEach((node) => {
      const score = scoreCatalystOnNode(player, card, node);
      if (score > bestScore) {
        bestScore = score;
        best = { type: "channel", card, node };
      }
    });
  });
  return best;
}

function scoreCatalystOnNode(player, card, node) {
  const totals = nodeTotals(node);
  let score = card.power;
  if (node.universal) {
    if (totals[card.element] < 2) score += 3;
  } else if (node.requirements[card.element]) {
    score += Math.max(0, node.requirements[card.element] - totals[card.element]) * 1.4;
  } else {
    score -= 2;
  }
  const ownPower = node.contributions.filter((entry) => entry.owner === player.id).reduce((sum, entry) => sum + currentValue(entry), 0);
  score += ownPower * .4;
  return score;
}

function chooseNodeForPlayer(player, nodes, card = null) {
  if (player.difficulty === "strategic") {
    const catalyst = card || player.hand.find((item) => item.category === "Catalizzatore");
    if (catalyst) return bestCatalystPlay(player, [catalyst], nodes)?.node || nodes[0];
  }
  return nodes[0] || null;
}

function chooseThreatNode(player) {
  return state.nodes
    .filter((node) => node.capturedBy === null)
    .sort((a, b) => completionRatio(b) - completionRatio(a))[0];
}

function completionRatio(node) {
  const totals = nodeTotals(node);
  if (node.universal) return ELEMENTS.reduce((sum, element) => sum + Math.min(2, totals[element]), 0) / 6;
  const needed = Object.values(node.requirements).reduce((a, b) => a + b, 0);
  const current = Object.entries(node.requirements).reduce((sum, [element, value]) => sum + Math.min(value, totals[element]), 0);
  return current / needed;
}

function bestEnemyContribution(player) {
  return state.nodes
    .flatMap((node) => node.contributions.map((entry) => ({ node, entry })))
    .filter(({ entry }) => entry.owner !== player.id && !isProtected(entry))
    .sort((a, b) => currentValue(b.entry) - currentValue(a.entry))[0];
}

function bestCardForBot(player, cards) {
  const catalyst = cards.filter((card) => card.category === "Catalizzatore").sort((a, b) => b.power - a.power)[0];
  return catalyst || cards[0];
}

function bestElementForNode(node) {
  const totals = nodeTotals(node);
  if (node.universal) return ELEMENTS.sort((a, b) => totals[a] - totals[b])[0];
  return Object.entries(node.requirements).sort((a, b) => (totals[a[0]] / a[1]) - (totals[b[0]] / b[1]))[0][0];
}

function render() {
  if (!state) return;
  const player = currentPlayer();
  $("current-player").textContent = state.winner !== null ? `${state.players[state.winner].name} ha vinto` : `${player.name}${player.type === "bot" ? " (bot)" : ""}`;
  $("actions-left").textContent = state.actionsLeft;
  $("deck-count").textContent = state.deck.length;
  $("victory-target").textContent = `${state.victoryTarget} Nodi`;
  $("draw-button").disabled = !canHumanAct();
  $("end-turn-button").disabled = !canHumanAct();
  $("selection-hint").textContent = state.winner !== null ? "Partita conclusa." : manualHint || (waitingForNode ? "Scegli un Nodo valido." : busyBot ? "Il bot sta ragionando..." : "Scegli una carta o pesca.");
  renderPlayers();
  renderNodes();
  renderHand();
  renderAdvisor();
  renderLog();
}

function renderPlayers() {
  $("players").innerHTML = state.players.map((player) => `
    <section class="player-card ${player.id === state.current ? "active" : ""} ${player.id === state.winner ? "winner" : ""}">
      <div class="player-name">
        <span>${player.name}</span>
        <span>${player.type === "bot" ? "Bot" : "Fisico"}</span>
      </div>
      <div class="player-stats">
        <span>${player.hand.length} carte</span>
        <span>${player.captured.length}/${state.victoryTarget} Nodi</span>
      </div>
      <div class="captured-nodes">${player.captured.map((node) => `<span class="token">${node.id}</span>`).join("") || "<span class=\"token\">-</span>"}</div>
    </section>
  `).join("");
}

function renderNodes() {
  $("nodes").innerHTML = state.nodes.map((node) => {
    const totals = nodeTotals(node);
    const captured = node.capturedBy !== null;
    const reqs = node.universal
      ? `<span class="element-pill pill-universal">3 elementi a 2+</span>`
      : Object.entries(node.requirements).map(([element, value]) => `<span class="element-pill pill-${cssByElement[element]}">${element} ${value}</span>`).join("");
    const cornerBadges = ELEMENTS.map((element) => `
      <span class="corner-badge corner-${cssByElement[element]} pill-${cssByElement[element]}">
        <b>${element[0]}</b>${totals[element]}
      </span>
    `).join("");
    return `
      <article class="node-card node ${captured ? "captured" : ""} ${waitingForNode ? "selectable" : ""} ${suggestedMove?.nodeId === node.id ? "suggested" : ""}" onclick="clickNode('${node.id}')" data-node-id="${node.id}">
        <div class="corner-badges">${cornerBadges}</div>
        <div class="node-art"><img src="${nodeImagePath(node)}" onerror="this.onerror=null;this.src='${nodeTemplatePath()}'" alt=""></div>
        <div class="card-head">
          <div>
            <div class="card-title">${node.name}</div>
            <div class="card-type">${captured ? `Stabilizzato da ${state.players[node.capturedBy].name}` : node.element}</div>
          </div>
          <div class="orb">N</div>
        </div>
        <div class="requirements">${reqs}</div>
        <div class="contributions">${node.contributions.map(renderContribution).join("") || "<span class=\"card-type\">Nessuna energia incanalata</span>"}</div>
        <div class="flavour">${node.flavour}</div>
      </article>
    `;
  }).join("");
}

function renderContribution(entry) {
  return `
    <div class="mini-card ${cssByElement[entry.effectiveElement]}">
      <strong>${entry.name}</strong> - ${state.players[entry.owner].name}<br>
      ${entry.effectiveElement} ${currentValue(entry)}${isProtected(entry) ? " - protetta" : ""}
    </div>
  `;
}

function renderHand() {
  const player = currentPlayer();
  $("hand-title").textContent = `Mano di ${player.name}`;
  $("hand-help").textContent = player.type === "bot" ? "Le carte del bot sono nascoste durante il suo turno." : "Clicca un Catalizzatore per incanalarlo o una Distorsione per lanciarla.";
  if (player.type === "human" && !player.handRevealed) {
    $("hand-help").textContent = "Conferma quando il dispositivo e davanti al giocatore corretto.";
    $("hand").innerHTML = `
      <section class="hand-privacy">
        <div class="privacy-mark">Aetheria</div>
        <h3>Turno di ${player.name}</h3>
        <p>La mano e coperta per evitare che gli altri giocatori vedano le carte.</p>
        <button type="button" onclick="revealCurrentHand()">Mostra mano</button>
      </section>
    `;
    return;
  }
  if (player.type === "bot") {
    $("hand").innerHTML = Array.from({ length: player.hand.length }, (_, index) => `
      <article class="hand-card card-back" style="--tilt:${handTilt(index, player.hand.length)}deg">
        <div class="card-title">Echoes</div>
        <div class="card-art"><div class="card-sigil"></div></div>
        <div class="effect">Carta coperta</div>
        <div class="card-foot"><span>Aetheria</span><span>?</span></div>
      </article>
    `).join("");
    return;
  }
  $("hand").innerHTML = player.hand.map((card, index) => {
    const className = card.category === "Catalizzatore" ? cssByElement[card.element] : "distortion";
    const badge = card.category === "Catalizzatore" ? card.power : "D";
    const kind = card.category === "Catalizzatore" ? card.element : card.type;
    const suggested = suggestedMove?.cardUid === card.uid ? "suggested" : "";
    return `
      <article class="hand-card ${className} playable ${selectedCardId === card.uid ? "selected" : ""} ${suggested}" onclick="playHandCard('${card.uid}')" data-card-uid="${card.uid}" style="--tilt:${handTilt(index, player.hand.length)}deg;--spin:${(index * 33) % 360}deg;--turn:${(index * 17) % 80}deg">
        <div class="card-head">
          <div>
            <div class="card-title">${card.name}</div>
            <div class="card-type">${card.category}</div>
          </div>
          <div class="orb">${badge}</div>
        </div>
        <div class="card-art"><img src="${cardImagePath(card)}" onerror="this.onerror=null;this.src='${cardTemplatePath(card)}'" alt=""></div>
        <div class="effect">${card.effect}</div>
        <div class="card-foot"><span>${kind}</span><span>${card.id}</span></div>
        <div class="flavour">${card.flavour}</div>
      </article>
    `;
  }).join("") || "<p class=\"selection-hint\">La mano e vuota. Pesca una carta.</p>";
}

function cardImagePath(card) {
  const id = card.id.toLowerCase();
  if (card.category === "Distorsione") return `assets/cards/distortions/${id}.png`;
  return `assets/cards/catalysts/${card.element.toLowerCase()}/${id}.png`;
}

function cardTemplatePath(card) {
  if (card.category === "Distorsione") return "assets/cards/templates/distortion.svg";
  return `assets/cards/templates/catalyst-${card.element.toLowerCase()}.svg`;
}

function nodeImagePath(node) {
  return `assets/cards/nodes/${node.id.toLowerCase()}.png`;
}

function nodeTemplatePath() {
  return "assets/cards/templates/node.svg";
}

function revealCurrentHand() {
  if (!state || currentPlayer().type !== "human") return;
  currentPlayer().handRevealed = true;
  render();
}

function handTilt(index, total) {
  if (total <= 1) return 0;
  const center = (total - 1) / 2;
  return Math.max(-10, Math.min(10, (index - center) * 3));
}

function renderAdvisor() {
  const advisor = $("advisor");
  if (!advisor) return;
  $("draw-button").classList.toggle("suggested", suggestedMove?.type === "draw");
  if (!state || state.winner) {
    advisor.innerHTML = `<div class="advisor-card"><strong>Partita conclusa</strong> Avvia una nuova partita per ricevere nuovi consigli.</div>`;
    return;
  }
  const player = currentPlayer();
  if (player.type !== "human" || busyBot) {
    advisor.innerHTML = `<div class="advisor-card"><strong>Attesa bot</strong> Il consiglio torna disponibile quando gioca un giocatore fisico.</div>`;
    return;
  }
  if (!player.handRevealed) {
    advisor.innerHTML = `<div class="advisor-card"><strong>Mano coperta</strong> Premi Mostra mano quando il dispositivo e davanti a ${player.name}. I consigli appariranno dopo la conferma.</div>`;
    return;
  }
  const moves = suggestMoves(player).slice(0, 3);
  advisor.innerHTML = moves.map((move, index) => `
    <div class="advisor-card">
      <strong>${index + 1}. ${move.title}</strong>
      ${move.reason}<br>
      <button type="button" onclick="previewSuggestion('${move.id}')">${move.where}</button>
    </div>
  `).join("");
}

function suggestMoves(player) {
  const moves = [];
  const openNodes = state.nodes.filter((node) => node.capturedBy === null);
  const catalysts = player.hand.filter((card) => card.category === "Catalizzatore");
  const distortions = player.hand.filter((card) => card.category === "Distorsione" && isDistortionLikelyPlayable(player, card));
  const bestChannel = bestCatalystPlay(player, catalysts, openNodes);
  const immediate = bestImmediateNodeCompletion(player, catalysts, openNodes);
  if (immediate) {
    moves.push(makeMove("finish", "Chiudi un Nodo", `Gioca ${immediate.card.name} su ${immediate.node.name}: completa i requisiti e prova a vincere la maggioranza.`, immediate.card, immediate.node, 100));
  }
  if (bestChannel) {
    moves.push(makeMove("channel", "Costruisci il Nodo migliore", `Gioca ${bestChannel.card.name} su ${bestChannel.node.name}: e la combinazione piu utile per i requisiti attuali.`, bestChannel.card, bestChannel.node, 70));
  }
  const bestDistortion = distortions.sort((a, b) => distortionPriority(b) - distortionPriority(a))[0];
  if (bestDistortion && !player.cannotDistortThisTurn) {
    moves.push({
      id: `distort:${bestDistortion.uid}`,
      type: "card",
      cardUid: bestDistortion.uid,
      score: 58,
      title: "Usa una Distorsione",
      reason: `${bestDistortion.name} puo cambiare il ritmo del turno senza investire potenza su un Nodo.`,
      where: `Premi la carta ${bestDistortion.name}`
    });
  }
  moves.push({
    id: "draw",
    type: "draw",
    score: player.hand.length <= 2 ? 65 : 28,
    title: "Pesca una carta",
    reason: player.hand.length <= 2 ? "Hai poche opzioni in mano: pescare aumenta le scelte disponibili." : "Mossa prudente se non vuoi esporti subito su un Nodo.",
    where: "Premi il pulsante Pesca"
  });
  return uniqueMoves(moves).sort((a, b) => b.score - a.score);
}

function makeMove(prefix, title, reason, card, node, score) {
  return {
    id: `${prefix}:${card.uid}:${node.id}`,
    type: "channel",
    cardUid: card.uid,
    nodeId: node.id,
    score,
    title,
    reason,
    where: `Premi ${card.name}, poi premi ${node.name}`
  };
}

function uniqueMoves(moves) {
  const seen = new Set();
  return moves.filter((move) => {
    const key = `${move.type}:${move.cardUid || ""}:${move.nodeId || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isDistortionLikelyPlayable(player, card) {
  const openNodes = state.nodes.filter((node) => node.capturedBy === null);
  const allContribs = openNodes.flatMap((node) => node.contributions.map((entry) => ({ node, entry })));
  const own = allContribs.filter(({ entry }) => entry.owner === player.id);
  const enemy = allContribs.filter(({ entry }) => entry.owner !== player.id && !isProtected(entry));
  if (card.id === "D01" || card.id === "D06" || card.id === "D12") return true;
  if (card.id === "D02") return enemy.length > 0;
  if (card.id === "D03") return own.some(({ entry }) => currentValue(entry) <= 2 && !isProtected(entry)) && openNodes.length > 1;
  if (card.id === "D04" || card.id === "D08") return own.length > 0;
  if (card.id === "D05") return Boolean(findSwapPair(allContribs));
  if (card.id === "D07") return openNodes.some((node) => Object.values(groupByOwner(node.contributions)).some((entries) => entries.length >= 2));
  if (card.id === "D09") return openNodes.some((node) => completionRatio(node) > .45);
  if (card.id === "D10") return player.hand.some((item) => item.category === "Catalizzatore" && item.power === 1);
  if (card.id === "D11") return state.discard.some((item) => item.category === "Catalizzatore");
  return false;
}

function distortionPriority(card) {
  return { D10: 9, D02: 8, D01: 7, D06: 6, D09: 5, D04: 4, D08: 4, D03: 3, D11: 3, D07: 2, D05: 2, D12: 1 }[card.id] || 0;
}

function previewSuggestion(moveId) {
  const move = suggestMoves(currentPlayer()).find((item) => item.id === moveId);
  if (!move) return;
  suggestedMove = move;
  selectedCardId = null;
  waitingForNode = null;
  if (move.type === "channel") {
    selectedCardId = move.cardUid;
    waitingForNode = { mode: "channel", cardUid: move.cardUid };
    manualHint = move.where;
  }
  if (move.type === "card") {
    selectedCardId = move.cardUid;
    manualHint = move.where;
  }
  if (move.type === "draw") {
    manualHint = move.where;
  }
  render();
  window.setTimeout(() => {
    const target = move.cardUid
      ? document.querySelector(`[data-card-uid="${move.cardUid}"]`)
      : document.getElementById("draw-button");
    target?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }, 40);
}

function renderLog() {
  $("log").innerHTML = state.log.map((entry) => `<li>${entry}</li>`).join("");
}

window.addEventListener("DOMContentLoaded", initSetup);
