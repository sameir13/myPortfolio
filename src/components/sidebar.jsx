import React from "react";
import Link from "next/link";

const sidebar = () => {
  const menu = [
    {
      link: "/dashboard",
      name: "Dashboard",
      icon: "bx bxs-dashboard p-2 hover:bg-[#349cf656] rounded-full",
    },
    {
      link: "/dashboard/blogadd",
      name: "Add-Blogs",
      icon: "bx bxs-edit-alt  p-2  hover:bg-[#349cf656] rounded-full",
    },
    {
      link: "/dashboard/list",
      name: "Lists",
      icon: "bx bx-library p-2  hover:bg-[#349cf656] rounded-full",
    },
    {
      link: "/dashboard/profile",
      name: "Profile",
      icon: "bx bxs-user p-2 hover:bg-[#349cf656] rounded-full",
    },
  ];
  return (
    <nav className="w-min sticky left-0 top-0 h-screen rounded-2xl bg-[#0000007e] py-5 flex gap-28 flex-col z-50 justify-between">
      <ul className="flex flex-col gap-3">
        <li className="py-1 px-3">
          <i class='bx bx-shape-polygon rounded-full p-2 text-blue-400'></i>
        </li>
        <hr />
        {menu?.map((v, i) => (
          <li key={i} className="py-2 px-3">
            <Link className="relative group" href={v.link}>
              <i className={v.icon}></i>
              <span className="absolute -left-0  -top-2 rounded-e-lg -z-10 opacity-0 group-hover:left-[2.88rem] group-hover:opacity-100 bg-[#0000008f] py-2 px-4 whitespace-nowrap duration-1000">
                {v.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="relative group py-2 px-3" href={"/"}>
        <i class="bx bx-log-out p-2 hover:bg-[#349cf656] rounded-full"></i>
        <span className="absolute -left-0  -top-0 rounded-e-lg -z-10 opacity-0 group-hover:left-[3.8rem] group-hover:opacity-100 bg-[#0000008f] py-2 px-4 whitespace-nowrap duration-1000">
          Log-Out
        </span>
      </Link>
    </nav>
  );
};

export default sidebar;
