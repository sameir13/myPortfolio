import React, { useState, useEffect } from "react";
import Image from "next/image";

const Time = () => {
  const [clockTime, setClockTime] = useState(getClockTime()); // Initial time state

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setClockTime(getClockTime());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run this effect only once (on mount)

  function getClockTime() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let ap = "AM";

    if (hour > 11) {
      ap = "PM";
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour === 0) {
      hour = 12;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }

    return `${hour}:${minute}:${second} ${ap}`;
  }

  return (
    <div className="flex relative justify-center w-full items-center gap-6 text-6xl">
      <img
        width={700}
        height={400}
        alt="clock bg"
        className="w-full h-full object-cover absolute top-0 opacity-50"
        src={
          "https://cdn.pixabay.com/photo/2017/03/27/13/38/canyon-2178786_1280.jpg"
        }
      />
      <span className="relative z-50">{clockTime}</span>
    </div>
  );
};

export default Time;
