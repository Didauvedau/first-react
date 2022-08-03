import React, { useState } from "react";

const Clock = (props) => {
  const [time, setTime] = useState("");
  const [ampm, setAmPm] = useState("");

  const updateTime = () => {
    let dateTime = new Date();

    let getHours = dateTime.getHours();

    let getMinutes = dateTime.getMinutes();

    let getSecond = dateTime.getSeconds();

    let today = getHours + "時" + getMinutes + "分" + getSecond + "秒";

    let ampmToday = getHours >= 12 ? "PM" : "AM";


    setTime(today);

    setAmPm(ampmToday);
  };

  setInterval(() => {
    updateTime();
  }, 1000);

  return (
    <div
      className={`clock container d-flex justify-content-center align-items-center mb-5 ${props.clName}`}
    >
      <h4>
        {ampm} : {time}
      </h4>
    </div>
  );
};

export default Clock;
