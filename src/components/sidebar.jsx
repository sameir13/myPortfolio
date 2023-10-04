import React from "react";
import Link from "next/link";

const sidebar = () => {
  return (
    <nav className="w-min sticky h-full bg-white">
      <div>
        <span>Logo</span>
      </div>
      <div>
        <ul>
          <li><Link href={"/blogadd"}>Add Blogs</Link></li>
          <li><Link href={"/list"}>Lists</Link></li>
          <li><Link href={"/blogs"}>Profile</Link></li>
        </ul>
      </div>
      <div>
        Logout
      </div>
    </nav>
  );
};

export default sidebar;
