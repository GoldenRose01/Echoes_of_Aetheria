export const TURN_RULES = {
  actionsPerTurn: 2,
  startingHandSize: 4,
  maxHandSize: 7,
  physicalPlayersMustRevealHand: true
};

export function victoryTargetForPlayerCount(playerCount) {
  return playerCount === 2 ? 3 : 2;
}

export function shouldBlockFirstDraw(player, actionsLeft) {
  return player.skipFirstDraw && actionsLeft === TURN_RULES.actionsPerTurn;
}

export function shouldHidePhysicalHand(player) {
  return TURN_RULES.physicalPlayersMustRevealHand && player.type === "human" && !player.handRevealed;
}
