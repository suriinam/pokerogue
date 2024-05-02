import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} appeared.",
  "trainerAppeared": "{{trainerName}}\nwould like to battle!",
  "singleWildAppeared": "A wild {{pokemonName}} appeared!",
  "multiWildAppeared": "A wild {{pokemonName1}}\nand {{pokemonName2}} appeared!",
  "playerComeBack": "Come back, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} withdrew {{pokemonName}}!",
  "playerGo": "Go! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sent out {{pokemonName}}!",
  "switchQuestion": "Will you switch\n{{pokemonName}}?",
  "trainerDefeated": `You defeated\n{{trainerName}}!`,
  "pokemonCaught": "{{pokemonName}} was caught!",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Go! {{pokemonName}}!",
  "hitResultCriticalHit": "A critical hit!",
  "hitResultSuperEffective": "It's super effective!",
  "hitResultNotVeryEffective": "It's not very effective…",
  "hitResultNoEffect": "It doesn't affect {{pokemonName}}!",
  "hitResultOneHitKO": "It's a one-hit KO!",
  "attackFailed": "But it failed!",
  "attackHitsCount": `Hit {{count}} time(s)!`,
  "expGain": "{{pokemonName}} gained\n{{exp}} EXP. Points!",
  "levelUp": "{{pokemonName}} grew to\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} learned\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} wants to learn the\nmove {{moveName}}.",
  "learnMoveLimitReached": "However, {{pokemonName}} already\nknows four moves.",
  "learnMoveReplaceQuestion": "Should a move be forgotten and\nreplaced with {{moveName}}?",
  "learnMoveStopTeaching": "Stop trying to teach\n{{moveName}}?",
  "learnMoveNotLearned": "{{pokemonName}} did not learn the\nmove {{moveName}}.",
  "learnMoveForgetQuestion": "Which move should be forgotten?",
  "learnMoveForgetSuccess": "{{pokemonName}} forgot how to\nuse {{moveName}}.",
  "levelCapUp": "The level cap\nhas increased to {{levelCap}}!",
  "moveNotImplemented": "{{moveName}} is not yet implemented and cannot be selected.",
  "moveDisabled": "{{moveName}} is disabled!",
  "noPokeballForce": "An unseen force\nprevents using Poké Balls.",
  "noPokeballTrainer": "You can't catch\nanother trainer's Pokémon!",
  "noPokeballMulti": "You can only throw a Poké Ball\nwhen there is one Pokémon remaining!",
  "noPokeballStrong": "The target Pokémon is too strong to be caught!\nYou need to weaken it first!",
  "noEscapeForce": "An unseen force\nprevents escape.",
  "noEscapeTrainer": "You can't run\nfrom a trainer battle!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nprevents {{escapeVerb}}!",
  "runAwaySuccess": "You got away safely!",
  "runAwayCannotEscape": 'You can\'t escape!',
  "escapeVerbSwitch": "switching",
  "escapeVerbFlee": "fleeing",
  "notDisabled": "{{moveName}} is disabled\nno more!",
  "skipItemQuestion": "Are you sure you want to skip taking an item?",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "Use IV Scanner on {{pokemonName}}?"
} as const;