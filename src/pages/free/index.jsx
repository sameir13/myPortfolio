import React from "react";
import Link from "next/link";

const index = () => {
  const things = [
    {
      i: "bx bxs-location-plus",
      name: "Wah,cant",
    },
    {
      i: "bx bxs-phone",
      name: "+092300000000",
    },
    {
      i: "bx bx-envelope",
      name: "email@info.com",
    },
  ];
  const social = [
    {
      i: "bx bxl-facebook-circle",
      c: "hover:bg-blue-600",
    },
    {
      i: "bx bxl-twitter",
      c: "hover:bg-blue-300",
    },
    {
      i: "bx bxl-linkedin-square",
      c: "hover:bg-blue-800",
    },
    {
      i: "bx bxl-whatsapp",
      c: "hover:bg-green-600",
    },
  ];
  return (
    <nav className=" sticky top-0 left-0  bg-[#000000a3] backdrop-blur-lg text-white text-xs px-6 border-b-1 border-gray-600 ">
      <div className="flex justify-between max-w-[1200px] m-auto">
      <ul className="md:flex hidden">
        {things?.map((v, i) => (
          <li
            className="flex justify-center items-center border-r border-gray-700 px-4 hover:text-blue-600"
            key={i}
          >
            <Link className="flex justify-center items-center gap-1" href={"/"}>
              <i class={v.i}></i>
              {v.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-between w-full md:w-min">
        <ul className="flex">
          {social?.map((v, i) => (
            <li
              className={`flex justify-center items-center border-x border-gray-700 py-2 px-4  ${v.c}`}
              key={i}
            >
              <Link href={"/"}>
                <i className={v.i}></i>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={"/"} className="flex justify-center items-center gap-2 border-x border-gray-700 py-2 px-4 hover:bg-blue-700">
          <i className="bx bxs-user"></i>
          Login
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default index;
