export const VICTORY_TARGETS = {
  twoPlayers: 3,
  multiplayer: 2
};

export const UNIVERSAL_NODE_RULE = {
  minimumElements: 3,
  minimumPowerEach: 2
};

export function currentContributionValue(entry) {
  return Math.max(0, entry.effectivePower + entry.mod);
}

export function nodeTotals(node, elements) {
  const totals = Object.fromEntries(elements.map((element) => [element, 0]));
  node.contributions.forEach((entry) => {
    totals[entry.effectiveElement] += currentContributionValue(entry);
  });
  return totals;
}

export function isNodeComplete(node, elements) {
  const totals = nodeTotals(node, elements);
  if (node.universal) {
    return elements.filter((element) => totals[element] >= UNIVERSAL_NODE_RULE.minimumPowerEach).length >= UNIVERSAL_NODE_RULE.minimumElements;
  }
  return Object.entries(node.requirements).every(([element, needed]) => totals[element] >= needed);
}

export function completionRatio(node, elements) {
  const totals = nodeTotals(node, elements);
  if (node.universal) {
    const current = elements.reduce((sum, element) => sum + Math.min(UNIVERSAL_NODE_RULE.minimumPowerEach, totals[element]), 0);
    return current / (UNIVERSAL_NODE_RULE.minimumElements * UNIVERSAL_NODE_RULE.minimumPowerEach);
  }
  const needed = Object.values(node.requirements).reduce((sum, value) => sum + value, 0);
  const current = Object.entries(node.requirements).reduce((sum, [element, value]) => sum + Math.min(value, totals[element]), 0);
  return current / needed;
}

export function majorityScores(node) {
  return node.contributions.reduce((scores, entry) => {
    const sigilloBonus = entry.id === "C05" ? 1 : 0;
    scores[entry.owner] = (scores[entry.owner] || 0) + currentContributionValue(entry) + sigilloBonus;
    return scores;
  }, {});
}
