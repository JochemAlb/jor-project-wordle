import React from "react";

function GuessInput({
  handleGuesses,
  checkedGuess,
  numOfGuesses,
  endOfGame,
  correctAnswer,
}) {
  const LENGTH = 5;
  const [guess, setGuess] = React.useState("");
  console.log("checkedGuess", checkedGuess);
  console.log("numOfGuesses", numOfGuesses);

  function happyBanner() {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  function sadBanner() {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        handleGuesses(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {checkedGuess.length > 0 &&
        checkedGuess[0].result?.filter((letter) => letter.status !== "correct")
          .length === 0 &&
        happyBanner(numOfGuesses)}

      {endOfGame &&
        checkedGuess[0].result?.filter(
          (letter) => letter.status !== "incorrect"
        ).length === 0 &&
        sadBanner()}

      <input
        id="guess-input"
        type="text"
        pattern={`[a-zA-Z]{${LENGTH}}`}
        required
        maxLength={LENGTH}
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
        disabled={endOfGame}
      />
    </form>
  );
}

export default GuessInput;
