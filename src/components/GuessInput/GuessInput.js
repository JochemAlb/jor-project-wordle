import React from "react";

function GuessInput() {
  const LENGTH = 5;
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
        pattern={`[a-zA-Z]{${LENGTH}}`}
        required
        maxLength={LENGTH}
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
