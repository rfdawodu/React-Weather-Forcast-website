import React, { useState, useEffect } from "react";

const TimeAndLocation = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setDate(now.toLocaleString("en-US", options));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="time">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
