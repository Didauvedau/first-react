import React, { useEffect, useState } from "react";

const ChangeTitle = () => {
  const [title, setTitle] = useState("");
  
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const changePageTitle = () => {
      if (access === true) {
        document.title = `${title}`;
      }
    };

    changePageTitle();

    setAccess(false);
  }, [title, access]);

  return (
    <div className="container mx-3 my-3">
      <label htmlFor="">Change : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="ms-3 btn btn-outline-success"
        onClick={() => setAccess(true)}
      >
        submit
      </button>
    </div>
  );
};

export default ChangeTitle;
