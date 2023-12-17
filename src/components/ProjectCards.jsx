import { Usefetch } from "@/hooks/queryfetchProjects";
import Image from "next/image"
import { useRef } from "react";

export default function ProjectsCards({ setImg }) {
  var loadskeleton = [1, 2, 3, 4, 5];
  const audioRef = useRef(null);

  const { isLoading, error, data } = Usefetch();
  if (isLoading) {
    return (
      <div className="flex gap-6 flex-wrap justify-between">
        {loadskeleton.map((i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="animate-pulse bg-gray-500 h-12 w-12 rounded-full"></div>
            <div className="space-y-2">
              <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"></div>
              <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"></div>
            </div>
          </div>
        ))}
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

  const playAudio = () => {
    if (audioRef.current) {
    
      audioRef.current.play();
    }
  };
  return (
    <>
      <audio id="audio" ref={audioRef} className="relative -z-50">
        <source src="./bg.mp3" />
      </audio>
      <div className="flex flex-nowrap md:flex-col overflow-auto gap-6 ">
        {data?.message?.map((v, i) => (
          //*  Card -----------------------------------------------------//
          <div
            // href={`/blogs/${v.slug}`}
            onClick={() => {setImg(v),playAudio()}}
            key={i}
            className="group duration-1000   overflow-hidden rounded-full"
          >
            {/*//? Card Image ---------------------------------------------- */}
            <div className="relative  bg-[#1E1F29] p-4 md:max-w-[16rem]  rounded-full  flex flex-col justify-center items-center ">
              <Image
                width={700}
                height={700}
                alt="Card background"
                className="object-cover  aspect-square rounded-full"
                src={v.img}
              />
              <div className="absolute -bottom-[0%] z-10 pt-4 bg-[#000000ab] rounded w-full text-center h-[25%]">
                <h4 className=" font-bold text-clip line-clamp-1 leading-tight capitalize">
                  {v.title}
                </h4>
              </div>
            </div>

            {/*//? --------------------------------------------------------- */}
          </div>
        ))}
      </div>
    </>
  );
}
