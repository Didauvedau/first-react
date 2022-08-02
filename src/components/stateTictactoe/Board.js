import React from "react";
import Cell from "./Cell";
import { calculatorWinner } from "./Helper";

const Board = (props) => {
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];

  //   console.log(calculatorWinner(cells));

  return (
    <div
      className="d-flex align-content-center flex-wrap "
      style={{ width: "380px" }}
    >
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          cellClick={() => props.boardClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
