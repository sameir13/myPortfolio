import Link from "next/link";


export default function Sidebar() {


  const navLinks = [
    {
      herf: "/dashboard",
      name: "Dashboard",
      icon: "bx bxs-dashboard p-2 hover:bg-orange-400 rounded-full",
    },
    {
      herf: "/dashboard/blogadd",
      name: "Add-Blogs",
      icon: "bx bxs-edit-alt  p-2  hover:bg-orange-400 rounded-full",
    },
    {
      herf: "/dashboard/list",
      name: "Lists",
      icon: "bx bx-library p-2  hover:bg-orange-400 rounded-full",
    },
    {
      herf: "/dashboard/profile",
      name: "Profile",
      icon: "bx bxs-user p-2 hover:bg-orange-400 rounded-full",
    },
  ];
  return <aside className={`w-[200px] h- pr-4 mt-4`}>fsgfsg</aside>;
}
