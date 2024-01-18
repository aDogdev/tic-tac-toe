import { Square } from "./Square";
import PropTypes from "prop-types";

function WinnerMessage({ winner }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>
      </div>
    </section>
  );
}

WinnerMessage.propTypes = {
  winner: PropTypes.string,
};

export { WinnerMessage };
