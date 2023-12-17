import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
  const social = [
    {
      herf: "www.linkedin.com/in/usman-ashfi",
      i: "bx bxl-linkedin-square",
    },
    {
      herf: "https://www.upwork.com/freelancers/~015a6292fcb5cb75e0?viewMode=1",
      i: "bx bxl-upwork",
    },
    {
      herf: "https://github.com/Usman-Ashfi",
      i: "bx bxl-github",
    },
  ];
  const socialmedia = [
    {
      herf: "https://www.instagram.com/osmanashfaq/",
      i: "bx bxl-instagram-alt",
    },
    {
      herf: "https://twitter.com/The_Ruthless__",
      i: "bx bxl-xing",
    },
    {
      herf: "tel:+923046942283",
      i: "bx bxl-whatsapp",
    },
  ];
  return (
    <main className="max-w-[1500px] m-auto py-10 px-4">
      <div className="flex justify-start items-center gap-4 mb-10 ">
        <Link
          href={"/"}
          className="bg-[#1E1F29] rounded-full p-4 flex justify-center items-center"
        >
          <i className="bx bx-home-alt text-2xl"></i>
        </Link>
        <div className="bg-[#1E1F29] rounded-full p-4 flex justify-center items-center">
          <i className="bx bx-shape-circle text-2xl"></i>
        </div>
        <h2 className="text-white md:text-xl font-extrabold bg-black rounded-full px-6 py-6">
          Contact
        </h2>
      </div>

      <div className="relative flex justify-between max-md:flex-col  max-w-[1500px] m-auto my-5 ">
        {/* social medai --------------------------------------------------------- */}
        <div className="flex flex-col max-md:hidden justify-between px-4 py-6">
          {socialmedia?.map((v, i) => (
            <Link
              key={i}
              href={v.herf}
              target="_blank"
              className="relative aspect-square bg-[#1E1F29] p-6  rounded-full  flex flex-col justify-center items-center hover:shadow-xl hover:shadow-slate-500"
            >
              <i className={`${v.i} md:text-6xl`}></i>
            </Link>
          ))}
        </div>

        <div className="relative max-md:overflow-hidden">
          <Image
            width={400}
            height={400}
            className="absolute scale-[2] md:scale-[3]  object-cover top-28 left-[2rem] md:left-[3.5rem] -z-10 opacity-40"
            src="/design.png"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.2, x: -400, y: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Image width={400} height={400} src="/OKAY.svg" alt="aboutme" />
          </motion.div>
        </div>

        {/* bussines profiles ------------------------------------------------------------------ */}
        <div className="flex md:flex-col  justify-between px-4 py-6">
          {social?.map((v, i) => (
            <Link
              key={i}
              href={v.herf}
              target="_blank"
              className="relative aspect-square bg-[#1E1F29] p-6  hover:shadow-xl hover:shadow-slate-500  rounded-full  flex flex-col justify-center items-center "
            >
              <i className={`${v.i} md:text-6xl`}></i>
            </Link>
          ))}
        </div>

        {/* social medai --------------------------------------------------------- */}
        <div className="flex md:flex-col md:hidden justify-between px-4 py-6">
          {socialmedia?.map((v, i) => (
            <Link
              key={i}
              href={v.herf}
              target="_blank"
              className="relative aspect-square bg-[#1E1F29] p-6  hover:shadow-xl hover:shadow-slate-500  rounded-full  flex flex-col justify-center items-center "
            >
              <i className={`${v.i} md:text-6xl`}></i>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default index;
