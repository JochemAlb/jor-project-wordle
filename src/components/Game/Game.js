import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(guess) {
    const nextGuess = {
      label: guess.toUpperCase(),
      id: crypto.randomUUID(),
    };
    console.log({ guess: nextGuess });
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleGuesses={handleGuesses} />;
    </>
  );
}

export default Game;
