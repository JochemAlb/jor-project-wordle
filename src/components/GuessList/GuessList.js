import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <p className="guess" key={id}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
