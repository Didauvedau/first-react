import React from "react";

const YoutubeItem = (props) => {
    // props là một object
  return (
    <div
      className={`m-3 col-3 mt-3 d-flex flex-column align-items-center  border border-danger p-2 youtube-item ${props.className}`}
    >
      <div className="youtube-image m-2 ">
        {/* đặt mộtt props có tên là headerImage */}
        <img className="mw-100 rounded" src={props.headerImage} alt="" />
      </div>
      <div className="youtube-footer d-flex align-items-center justify-content-start">
        <img
          className="youtube-avatar rounded-circle"
          //   {/* đặt mộtt props có tên là contentImage */}
          src={props.contentImage}
          alt=""
        />
        <div className="youtube-info ms-2">
          {/* đặt mộtt props có tên là title */}
          <h5 className="youtube-title">{props.title}</h5>
          {/* đặt mộtt props có tên là author  */}
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
