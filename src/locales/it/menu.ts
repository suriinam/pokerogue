import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const menu: SimpleTranslationEntries = {
    "yes": "Yes",
    "no": "No",
    "cancel": "Annulla",
    "continue": "Continua",
    "newGame": "Nuova Partita",
    "loadGame": "Carica Partita",
    "dailyRun": "Corsa Giornaliera (Beta)",
    "selectGameMode": "Seleziona una modalità di gioco.",
    "dailyRankings": "Daily Rankings",
    "weeklyRankings": "Weekly Rankings",
    "noRankings": "No Rankings",
    "loading": "Loading…",
    "playersOnline": "Players Online",
    "confirmStarterSelection": "Begin with these Pokémon?",
    "evolving": "What?\n{{pokemonName}} is evolving!",
    "stoppedEvolving": "{{pokemonName}} stopped evolving.",
    "pauseEvolutionsQuestion": "Would you like to pause evolutions for {{pokemonName}}?\nEvolutions can be re-enabled from the party screen.",
    "evolutionsPaused": "Evolutions have been paused for {{pokemonName}}.",
    "evolutionDone": "Congratulations!\nYour {{pokemonName}} evolved into {{evolvedPokemonName}}!"
} as const;