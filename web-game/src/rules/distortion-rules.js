export const DISTORTION_RULES = {
  D01: { name: "Sovraccarico Eterico", target: "Nodo aperto", effect: "nextCatalystPlusOne" },
  D02: { name: "Frattura di Runa", target: "Catalizzatore avversario non protetto", effect: "reduceByOne" },
  D03: { name: "Rimbalzo Arcano", target: "Proprio Catalizzatore valore 1-2", effect: "moveOwnContribution" },
  D04: { name: "Velo di Stasi", target: "Proprio Catalizzatore", effect: "protectContribution" },
  D05: { name: "Scambio di Polarita", target: "Due Catalizzatori stesso valore", effect: "swapContributions" },
  D06: { name: "Eco Preveggente", target: "Mazzo", effect: "lookTopThreePickOne" },
  D07: { name: "Scarica di Dispersione", target: "Nodo con giocatori investiti", effect: "eachHeavyOwnerDiscardsOne" },
  D08: { name: "Ricalibrazione", target: "Proprio Catalizzatore", effect: "changeElement" },
  D09: { name: "Ancoraggio Comune", target: "Nodo minaccioso", effect: "temporaryNodeLock" },
  D10: { name: "Impulso Gemello", target: "Catalizzatore valore 1 in mano", effect: "freeChannelValueOne" },
  D11: { name: "Archivio Sommerso", target: "Catalizzatore negli scarti", effect: "recoverThenDiscard" },
  D12: { name: "Disallineamento Gentile", target: "Avversario", effect: "blockFirstDraw" }
};

export function distortionPriority(cardId) {
  return {
    D10: 9,
    D02: 8,
    D01: 7,
    D06: 6,
    D09: 5,
    D04: 4,
    D08: 4,
    D03: 3,
    D11: 3,
    D07: 2,
    D05: 2,
    D12: 1
  }[cardId] || 0;
}
