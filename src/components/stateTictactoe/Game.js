import React, { useState } from "react";
import Board from "./Board";
import { calculatorWinner } from "./Helper";

const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));

  //   const [xIsNext, setXIsNext] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    noChangeValue: "Khong thay doi gia tri nay",
  });

  const winner = calculatorWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = state.xIsNext ? "X" : "0";

    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    console.log(state);
    // setBoard(boardCopy);

    // setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    if (window.confirm("Reset The Game?")) {
      setState({
        board: Array(9).fill(null),
        xIsNext: true,
      });
      //   setBoard(Array(9).fill(null));

      //   setXIsNext(true);
    }
  };

  return (
    <div className="container m-3 d-flex justify-content-center align-items-center flex-column">
      <Board cells={state.board} boardClick={handleClick}></Board>
      <h4 className="message mt-3">
        {winner ? `Nguoi Chien Thang la ${winner} ` : ""}
      </h4>
      <div className="mt-4">
        <button className="btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Game;
