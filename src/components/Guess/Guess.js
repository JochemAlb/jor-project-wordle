import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((value) => (
        <span className="cell" key={value}>
          {guess ? guess.label[value] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
