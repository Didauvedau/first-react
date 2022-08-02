import React from "react";

const Cell = ({ value, cellClick }) => {
  //khai báo object destructuring thay cho props hoặc tương tự như dứoi
  //   const { value, cellClick } = props;
  return (
    <div className="cell">
      <div
        onClick={cellClick}
        className="text-center fs-1 fw-bold d-flex justify-content-center align-items-center cell-edit"
        style={{ width: "125px", height: "100px" }}
      >
        {value}
      </div>
    </div>
  );
};

export default Cell;
