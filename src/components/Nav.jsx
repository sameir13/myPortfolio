import { motion } from "framer-motion";
import Link from "next/link";

export default function Topbar() {
  const navlink = [
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/blogs" },
    { name: "Reviews", link: "/blogs" },
    { name: "Contact ", link: "/blogs" },
  ];

  return (
    <>
      <nav className="flex justify-start items-center">
        <motion.ul className="text-3xl space-y-7">
          {navlink.map((v, i) => {
            return (
              <motion.li
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 5 }}
                key={i}
                className="group  duration-100 text-shadow"
              >
                <Link
                  className="tracking-[0.5rem] relative group-hover:-translate-y-1:"
                  href={v.link}
                >
                  <i className="bx bx-chevron-right grid place-content-center opacity-0 absolute top-0  h-full -left-10  group-hover:opacity-100 duration-75"></i>
                  {v.name}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </>
  );
}
