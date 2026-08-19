# Rules Modules

This folder is the place to edit game logic.

- `scoring-rules.js`: Node totals, completion checks, majority scoring and victory thresholds.
- `turn-rules.js`: action count, draw rules, hand limit and turn privacy.
- `distortion-rules.js`: Distortion card rule IDs and targeting notes.
- `bot-rules.js`: bot difficulty behavior and heuristic weights.

The current game runtime in `../game.js` still owns execution, but these files isolate the values and rule surfaces that are most likely to need balancing.
