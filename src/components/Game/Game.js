import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { checkGuess } from "../../game-helpers";
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
      id: "--" + crypto.randomUUID(),
      result: checkGuess(guess, answer),
    };
    console.log({ guess: nextGuess });
    setGuesses([...guesses, nextGuess]);
  }
  console.log("guesses", guesses.length, guesses);
  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput
        handleGuesses={handleGuesses}
        checkedGuess={guesses.slice(-1)}
        numOfGuesses={guesses.length}
        correctAnswer={answer}
        endOfGame={
          guesses.length === NUM_OF_GUESSES_ALLOWED ||
          (guesses.length > 0 &&
            guesses[0].result?.filter((letter) => letter.status !== "correct")
              .length === 0)
        }
      />
      ;
    </>
  );
}

export default Game;
