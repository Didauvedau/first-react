import React from "react";
import { YoutubeData } from "./YoutubeData";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) {
          newClass = "abc";
        } else if (index === 2) {
          newClass = "def";
        }
        return (
          <YoutubeItem
            key={item.id}
            className={newClass}
            headerImage={item.image}
            title={item.title}
            contentImage={item.avatar || item.image}
            author={item.author}
          ></YoutubeItem>
        );
      })}
      <div className="children">{props.children}</div>
    </div>
  );
};

export default YoutubeList;
