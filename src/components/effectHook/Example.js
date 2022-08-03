import React, { useEffect, useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  // Cập nhập document title sử dụng browser API
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div className="container mb-5 ms-3">
      <p
        className={`text-decoration-underline ${
          count >= 5 ? "fw-bold fs-3" : ""
        }`}
      >
        You clicked {count} times
      </p>
      <div className="d-flex">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          Click Here
        </button>
        <button
          className="btn btn-outline-primary ms-3"
          onClick={() => setCount(0)}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default Example;
