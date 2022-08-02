import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log("email:", event.target.value);
  };

  const onSubmit = () => {
    alert(email);
  };

  return (
    <div className="container m-3 d-flex justify-content-center align-items-center">
      <form style={{ width: "400px" }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {props.children}
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
