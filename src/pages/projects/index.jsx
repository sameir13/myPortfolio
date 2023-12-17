import ProjectsCards from "@/components/ProjectCards";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const index = () => {

  let [img, setImg] = useState();

  return (
    <main className="max-w-[1500px] m-auto py-10 px-4 ">
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
          PROJECTS
        </h2>
      </div>
      <div className="relative flex max-md:flex-col-reverse w-full my-5  min-h-[80vh]">
        <Image
        width={700}
        height={700}
          className="absolute w-full h-full object-cover top-0 md:top-10 max-md:left-[2rem] left-[5.4rem] -mt-10 -z-10 opacity-40"
          src="/design.png"
          alt=""
        />

        <div className="">
          <ProjectsCards setImg={setImg} />
        </div>


        {img ? (
          <div className="flex justify-center items-center py-10 w-full md:w-[68%] showcase">
            <div className="group duration-1000 md:scale-[2] overflow-hidden rounded-full shadow-md shadow-[#ffffff68]">
              {/*//? Card Image ---------------------------------------------- */}
              <div className="relative aspect-square bg-[#1E1F29] p-4  rounded-full  flex flex-col justify-center items-center ">
                <Image
                  width={700}
                  height={700}
                  alt="Card background"
                  className="object-cover w-[220px] h-[220px] aspect-square rounded-full"
                  src={img.img}
                />
                <div className="absolute -bottom-[0%] z-10 pt-4 bg-[#000000ab] rounded w-full text-center h-[25%]">
                  <h4 className=" font-bold text-clip line-clamp-1 leading-tight capitalize">
                    {img.title}
                  </h4>
                </div>
              </div>

              {/*//? --------------------------------------------------------- */}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default index;
