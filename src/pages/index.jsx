import Link from "next/link";
import ProjectsCards from "@/components/ProjectCards";
import { Usefetchme } from "@/hooks/aboutme";
import { motion } from "framer-motion";
import Image from "next/image";

const Index = () => {
  const social = [
    {
      herf: "www.linkedin.com/in/usman-ashfi",
      i: "bx bxl-linkedin-square group-hover:text-blue-500",
    },
    {
      herf: "https://www.upwork.com/freelancers/~015a6292fcb5cb75e0?viewMode=1",
      i: "bx bxl-upwork group-hover:text-green-500",
    },
    {
      herf: "https://github.com/Usman-Ashfi",
      i: "bx bxl-github group-hover:text-white",
    },
    {
      herf: "https://www.instagram.com/osmanashfaq/",
      i: "bx bxl-instagram-alt group-hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover:bg-clip-text group-hover:text-transparent",
    },
    {
      herf: "https://twitter.com/The_Ruthless__",
      i: "bx bxl-xing group-hover:text-white",
    },
    {
      herf: "tel:+923046942283",
      i: "bx bxl-whatsapp group-hover:text-green-500",
    },
  ];
  const { isLoading, error, data } = Usefetchme();
  if (isLoading) {
    return (
      <div>
        <div className="w-full h-10 bg-slate-500 animate-pulse"></div>
      </div>
    );
  }

  if (error)
    return (
      <div className="grid place-content-center h-[30vh]">
        <div className="flex justify-between items-center gap-4 text-yellow-300">
          <i className="bx bx-error"></i>
          <span>Somthing Went Wrong</span>
        </div>
      </div>
    );

  let me = data?.data?.message;
  return (
    <>
      <section className="h-[300px]">
        <video
          className="w-full h-full aspect-video blur-sm object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/bg.mp4" />
        </video>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: -70 }}
        transition={{ duration: 1 }}
        className="-translate-y-16 max-w-[550px] px-4 m-auto"
      >
        {/* intro Section -------------------------------------------- */}
        <section className="mb-4">
          <div className="w-full flex justify-center ">
            <Image
              priority
              width={300}
              height={300}
              className="w-[150px] h-[150px] border-4 border-gray-700 rounded-full object-cover bg-[#0000007a]"
              src="/me.png"
              alt=""
            />
          </div>
          <div className="text-center flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-4xl py-4"
            >
              {me?.Name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="text-gray-400 "
            >
              {me?.description}
            </motion.p>
            <div className="flex justify-center gap-4 flex-wrap">
              {social?.map((v, i) => (
                <Link
                  className="group text-gray-300"
                  key={i}
                  target="_blank"
                  href={v.herf}
                >
                  <motion.i
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 2 }}
                    className={`${v.i} mr-4 text-3xl max-md:text-lg `}
                  ></motion.i>
                </Link>
              ))}
            </div>
            <div className="flex justify-center gap-2 flex-wrap-reverse">
              <button className="bg-slate-200 text-black rounded-lg flex-auto">
                <i className="bx bx-upload text-xl py-3 px-4"></i>
              </button>
              <button className="bg-slate-200 max-md:text-sm text-black rounded-lg h-full py-1 px-4 flex-auto w-[80%]">
                <span>{me?.email}</span>
                <i className="bx bx-copy  py-3 pl-4"></i>
              </button>
            </div>
          </div>
        </section>
        {/* Project Section ------------------------------------------ */}
        <section>
          <h2 className="text-3xl py-4 border-b-2">Projects</h2>
          <div className="py-4">
            <ProjectsCards />
          </div>
        </section>
      </motion.section>
    </>
  );
};

export default Index;
