import React, { useState } from "react";
import Board from "./Board.tsx";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: string[], move: number) => {
    if (move > 0) {
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{"Go to move #" + move}</button>
        </li>
      );
    }
  });
  return (
    <div className="flex flex-col gap-4">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="flex justify-center text-amber-50">
        <button
          onClick={() => {
            setCurrentMove(0);
          }}
        >
          {"Restart Game"}
        </button>
      </div>
      <div className="text-xl sm:text-3xl text-white justify-center flex">
        History
      </div>
      <ol className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-center items-center text-white">
        {moves}
      </ol>
    </div>
  );
}

export default Game;
