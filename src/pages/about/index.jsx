import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const about = () => {
  const cards = [1, 2];
  return (
    <>
      <Image
        width={400}
        height={400}
        className="absolute right-0 animate-spin-slower -z-30"
        src="/pie.svg"
        alt="aboutme"
      />

      <section className="max-w-[1500px] relative m-auto flex flex-col">
        <Image
        alt="design"
          className="absolute -z-10"
          width={700}
          height={700}
          src={"/d2.png"}
        />
      </section>

      <section className="px-10 max-md:px-0 mt-60">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 800 }}
          transition={{ duration: 1, delay: 0 }}
          className="bg-[#0f1113] flex rounded-[4rem] max-md:flex-col-reverse"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col gap-10 max-md:pt-0 pt-10 px-10 h-max w-[70%]"
          >
            <div className="flex justify-start items-center gap-4 mb-6">
              <Link
                href={"/"}
                className="bg-[#1E1F29] rounded-full p-4 flex justify-center items-center"
              >
                <i className="bx bx-home-alt text-2xl"></i>
              </Link>
              <div className="bg-[#1E1F29] rounded-full p-4 flex justify-center items-center">
                <i className="bx bx-shape-circle text-2xl"></i>
              </div>
              <h2 className="text-white text-xl font-extrabold bg-black rounded-full px-6 py-6">
                ABOUT
              </h2>
            </div>
            <motion.h2
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="text-6xl font-bold"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 4 }}
            >
              As a passionate web developer, I specialize in crafting elegant
              and functional websites with a keen eye for design and user
              experience. With a solid foundation in various programming
              languages and frameworks, I strive to create responsive and
              dynamic web solutions that exceed client expectations. Committed
              to continuous learning and innovation, I aim to merge creativity
              and technical expertise to deliver impactful digital experiences.
            </motion.p>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-24">
              {cards?.map((i) => (
                <motion.div
                key={i}
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 5 }}
                  className="bg-[#1E1F29] rounded-[3rem] py-6 px-5 flex flex-col gap-4"
                >
                  <div className="flex justify-center items-center gap-10 ">
                    <span className="font-bold text-xl whitespace-nowrap">
                      Contact Me
                    </span>
                    <Image alt="contact svg" width={120} height={120} src={"/contact.svg"} />
                  </div>
                  <Link
                    className="bg-black py-4 px-5 rounded-[2.3rem]"
                    href={"/contact"}
                  >
                    GO TO
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2, x: -400, y: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: -120 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:w-1/2 -mb-52"
          >
            <Image
              width={400}
              height={400}
              className="w-full"
              src="/OKAY.svg"
              alt="aboutme"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default about;
