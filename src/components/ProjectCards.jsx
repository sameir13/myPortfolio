import { Usefetch } from "@/hooks/queryfetchProjects";
import Link from "next/link";

export default function ProjectsCards() {
  var loadskeleton = [1, 2, 3, 4, 5];
  const { isLoading, error, data } = Usefetch();
  console.log(data);
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

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.message?.map((v, i) => (
          //*  Card -----------------------------------------------------//
          <Link
            href={`/blogs/${v.slug}`}
            key={i}
            className="group duration-1000 rounded-xl max-w-[16rem]"
          >
            {/*//? Card Image ---------------------------------------------- */}
            <div className="overflow-hidden">
              <div className="overflow-hidden max-w-[300px]  p-2 bg-[#6553458e] rounded-lg mb-2 backdrop-blur-3xl">
                <div className="overflow-hidden rounded-lg">
                  <img
                    width={700}
                    height={700}
                    alt="Card background"
                    className="object-cover w-full h-auto aspect-square rounded-lg  group-hover:scale-105 duration-100"
                    src={v.img}
                  />
                </div>
              </div>
            </div>
            {/*//? --------------------------------------------------------- */}

            {/*//? Card Info ----------------------------------------------- */}
            <div className="overflow-visible py-2 px-4 rounded-lg bg-[#6553458e] backdrop-blur-3xl min-h-[100px]">
              <div className="flex justify-between mb-3 items-center">
                <small className="text-default-500 capitalize bg-[#ffffffae] text-black rounded-full py-1 px-2">
                  {v.authorname}
                </small>
                <time className="text-xs text-orange-400">
                  {new Date().toDateString(v.createdAt)}
                </time>
              </div>
              <h4 className="font-bold text-large text-clip line-clamp-2 leading-tight mb-2 capitalize">
                {v.title}
              </h4>
            </div>
            {/*//? --------------------------------------------------------- */}
          </Link>
        ))}
      </div>
    </>
  );
}
