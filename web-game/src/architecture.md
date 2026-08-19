# Echoes of Aetheria - Web Game Modules

## Current module map

- `data.js`: static game content: Nodes, Catalysts, Distortions, element names and CSS mappings.
- `utils.js`: shared helpers for DOM lookup, cloning, random selection and shuffling.
- `game.js`: runtime orchestration. It currently contains setup flow, turn engine, rules resolution, bot decisions, advisor suggestions and rendering.
- `rules/`: rule surfaces split by topic for targeted fixes.
- `../assets/cards/`: card artwork folders and image fallbacks.

## Next extraction targets

The remaining runtime is intentionally ready to be split further into:

- `setup.js`: player configuration, physical-player names and demo setup.
- `rules-engine.js`: actual draw, channel, distortions, node stabilization, scoring and victory execution.
- `bot.js`: base and strategic bot move selection.
- `advisor.js`: suggested human moves and click guidance.
- `render.js`: players, nodes, hand, log and advisor rendering.

This file is kept as a map while the app stays dependency-free and browser-native.
