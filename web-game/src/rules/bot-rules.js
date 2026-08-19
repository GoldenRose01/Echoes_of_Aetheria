export const BOT_DIFFICULTIES = {
  base: {
    label: "Base",
    description: "Gioca Catalizzatori spesso, usa Distorsioni occasionalmente, pesca quando non ha una scelta evidente.",
    randomCatalystChance: 0.75,
    randomDistortionChance: 0.5
  },
  strategic: {
    label: "Strategica",
    description: "Cerca chiusure immediate, preferisce Nodi coerenti con l'elemento e usa Distorsioni ad alto impatto.",
    nodeRequirementWeight: 1.4,
    ownMajorityWeight: 0.4,
    universalNeedBonus: 3
  }
};

export function scoreCatalystForBot({ card, node, totals, ownPower }) {
  let score = card.power;
  if (node.universal) {
    if (totals[card.element] < 2) score += BOT_DIFFICULTIES.strategic.universalNeedBonus;
  } else if (node.requirements[card.element]) {
    score += Math.max(0, node.requirements[card.element] - totals[card.element]) * BOT_DIFFICULTIES.strategic.nodeRequirementWeight;
  } else {
    score -= 2;
  }
  return score + ownPower * BOT_DIFFICULTIES.strategic.ownMajorityWeight;
}
