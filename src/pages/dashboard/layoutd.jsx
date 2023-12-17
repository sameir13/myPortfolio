import React from "react";
import Link from "next/link";
const layoutd = ({ children }) => {
  const navlink = [
    { name: "Dashboard", link: "/dashboard", i: "bx bxs-dashboard" },
    { name: "Form", link: "/dashboard/form", i: "bx bxs-add-to-queue" },
    { name: "List ", link: "/dashboard/list", i: "bx bx-table" },
    { name: "About", link: "/dashboard/about", i: "bx bxs-add-to-queue" },
  ];

  function clear() {}

  return (
    <>
      <div className="flex max-md:flex-col gap-2 md:gap-5 h-screen max-md:p-3 p-4 ">
        <aside className="flex max-md:hidden flex-col justify-between px-6 py-12   h-full bg-[#161C20] rounded-3xl ">
          <div className="flex flex-col gap-20">
            <span className="text-3xl">PORTal</span>
            <ul className="text-3xl flex flex-col gap-10">
              {navlink?.map((v, i) => (
                <li key={i}>
                  <Link href={v.link}>{v.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={"/login"}
            //  onClick={}
          >
            Logout
          </Link>
        </aside>

        <content className="h-full overflow-auto w-full max-md:rounded-lg rounded-3xl bg-[#161C20]">
          {children}
        </content>
        <div className="py-2 md:hidden backdrop-blur-xl rounded-lg w-full bg-[#111315] ">
          <ul className="text-xl flex justify-evenly items-center gap-10">
            {navlink?.map((v, i) => (
              <li key={i}>
                <Link href={v.link}>
                  <i className={v.i}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default layoutd;
