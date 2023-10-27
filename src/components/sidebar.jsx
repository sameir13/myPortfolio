import Link from "next/link";

export default function Sidebar() {
  const menu = [
    {
      link: "/dashboard",
      name: "Dashboard",
      icon: "bx bxs-dashboard p-2 hover:bg-orange-400 rounded-full",
    },
    {
      link: "/dashboard/blogadd",
      name: "Add-Blogs",
      icon: "bx bxs-edit-alt  p-2  hover:bg-orange-400 rounded-full",
    },
    {
      link: "/dashboard/list",
      name: "Lists",
      icon: "bx bx-library p-2  hover:bg-orange-400 rounded-full",
    },
    {
      link: "/dashboard/profile",
      name: "Profile",
      icon: "bx bxs-user p-2 hover:bg-orange-400 rounded-full",
    },
  ];
  return (
    <nav className="md:w-min w-full absolute md:sticky left-0 md:top-0 bottom-0 md:h-screen bg-[#000000eb] md:bg-[#0000007e] md:py-5 flex gap-28 md:flex-col z-50 justify-center md:justify-between">
      <ul className="flex md:flex-col gap-3">
        <li className="hidden md:block py-1 px-3">
          <i className="bx bx-shape-polygon rounded-full p-2 text-orange-400"></i>
        </li>
        <hr />
        {menu?.map((v, i) => (
          <li key={i} className="py-2 px-3">
            <Link className="relative group" href={v.link}>
              <i className={v.icon}></i>
              <span className="absolute -top-14 md:-left-0  md:-top-2 md:rounded-e-lg -z-10 opacity-0 group-hover:left-[-2rem] md:group-hover:left-[2.88rem] group-hover:opacity-100 bg-[#0000008f] py-2 px-4 whitespace-nowrap duration-1000">
                {v.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link className="hidden md:block relative group py-2 px-3" href={"/"}>
        <i className="bx bx-log-out p-2 hover:bg-orange-400 rounded-full"></i>
        <span className="absolute -left-0  -top-0 rounded-e-lg -z-10 opacity-0 group-hover:left-[3.8rem] group-hover:opacity-100 bg-[#0000008f] py-2 px-4 whitespace-nowrap duration-1000">
          Log-Out
        </span>
      </Link>
    </nav>
  );
}
