import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
  const navlink = [
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/about" },
    { name: "Reviews", link: "/blogs" },
    { name: "Contact ", link: "/blogs" },
  ];
  return (
    <>
      <audio className="relative z-50" autoPlay>
        <source src="./bg.mp3" />
      </audio>
      <section className="relative flex gap-24 justify-center flex-col items-center h-screen">
        <div className="absolute h-full w-full">
          <Spline scene="/forest_lights_copy.spline" />
        </div>
        <div className="relative z-20 font-serif">
          <motion.h1
            initial={{ scale: 2, y: 150 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 8 }}
            className="max-md:text-4xl text-6xl mb-10 border-b-2 pb-4"
          >
            Quntam Craft
          </motion.h1>
          <nav className="flex justify-start items-center">
            <motion.ul className="text-3xl space-y-7">
              {navlink.map((v, i) => {
                return (
                  <motion.li
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 10 }}
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
        </div>
      </section>
    </>
  );
};

export default index;
