import React from "react";
import Sidebar from "@/components/sidebar";

const layoutd = ({ children }) => {
  return (
    <>
      <content>{children}</content>
    </>
  );
};

export default layoutd;


const Introduction = () => {

  console.log("Hello, my name is Usman")
  
}