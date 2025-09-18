import React, { type MouseEventHandler } from "react";

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: MouseEventHandler;
}) {
  return (
    <button
      className="h-20 w-20 sm:h-40 sm:w-40 bg-[##24135d]"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
