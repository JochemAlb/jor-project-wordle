import React from "react";

function GuessInput() {
  const MIN_LENGTH = 5;
  const MAX_LENGTH = 5;
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guess.toUpperCase() });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern={`[a-zA-Z]{${MIN_LENGTH},${MAX_LENGTH}}`}
        required
        maxLength={MAX_LENGTH}
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
