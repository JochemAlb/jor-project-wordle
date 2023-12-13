import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuesses(guess) {
    const nextGuess = {
      label: guess.toUpperCase(),
      id: "--" + crypto.randomUUID(),
      result: checkGuess(guess, answer),
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
