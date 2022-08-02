import React, { useState } from "react";
//stateless functional component: component nhung khong su dung state

const Toggle = () => {
  return <div className="container-fluid toggle">asd</div>;
};
//stateful functional component: component co su dung state
const Toggle2 = () => {
  // destructuring
  // const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
  // console.log(c);

  //React Hook useState(Luôn viết useState trên cùng)
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    setOn((on) => !on);
  };

  return (
    <div className="container-fluid m-3 toggle2">
      <h4>Toggle {on ? "ON" : "OFF"}</h4>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        />
        <label className="form-check-label">Switch Toggle</label>
      </div>
    </div>
  );
};

export default Toggle2;
