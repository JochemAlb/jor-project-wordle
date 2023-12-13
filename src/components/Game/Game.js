import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

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
      {/* <GuessList guesses={guesses} /> */}
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((value) => (
          <Guess key={value} guess={guesses[value]} />
        ))}
      </div>
      <GuessInput handleGuesses={handleGuesses} />;
    </>
  );
}

export default Game;
