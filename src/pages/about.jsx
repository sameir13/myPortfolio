import React from "react";
import Spline from "@splinetool/react-spline";

const about = () => {
  return (
    <div className="bg-gradient-to-r from-[#141414] to-[#0D0D0D]">
      <section className="h-screen relative">
        <Spline scene="/clock.spline" />
        <div className="absolute top-0 h-full w-full z-10 "></div>
      </section>
      <section className="h-screen"></section>
    </div>
  );
};

export default about;
