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
    const nextGuesses = [...guesses, guess];
    console.log(guess);
    console.log("list", nextGuesses);
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleGuesses={handleGuesses} />;
    </>
  );
}

export default Game;
