import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const audioRef = useRef(null);

  function playAudio() {
    if (audioRef.current) {
      console.log("hi");
      audioRef.current.play();
    }
  }

  const navlink = [
    { name: "Projects", link: "/projects" },
    { name: "About Me", link: "/about" },
    { name: "Contact ", link: "/contact" },
    { name: "Reviews", link: "/blogs" },
  ];
  return (
    <>
      <audio id="audio" ref={audioRef} className="relative z-50">
        <source src="./bg.mp3" />
      </audio>
      <audio autoPlay className="relative z-50">
        <source src="./rain.mp3" />
      </audio>
      <section className="relative flex gap-24 justify-center flex-col items-center h-screen">
        <video
          muted
          autoPlay
          loop
          className="object-cover absolute h-full w-full opacity-40 "
        >
          <source src="/Letters.mp4" />
        </video>
        <div className="relative z-20 font-serif">
          <motion.h1
            initial={{ scale: 2, y: 150 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="text-center text-6xl mb-10 relative pointer-events-none"
          >
            Quantum
          </motion.h1>

          <nav className="flex justify-start items-center">
            <motion.ul className="text-3xl space-y-7">
              {navlink.map((v, i) => {
                return (
                  <motion.li
                    id="target"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 5 }}
                    key={i}
                    className="group  duration-100 text-shadow"
                  >
                    <Link
                      className="tracking-[0.5rem] relative group-hover:-translate-y-1:"
                      href={v.link}
                      onMouseEnter={() => playAudio()}
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

export default Index;
