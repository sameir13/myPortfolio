import React from "react";
import { Blogfetch } from "@/hooks/queryfetchblogs";
import Link from "next/link";

export default function Cards() {
  function createMarkup(c) {
    return { __html: c };
  }

  const { isLoading, error, data } = Blogfetch();

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {data?.message?.map((v, i) => (
          //*  Blog Card -----------------------------------------------------//
          <div
            key={i}
            className="bg-gray-900 group hover:bg-slate-700 duration-1000 rounded-xl max-w-[16rem]"
          >
            {/*//? Card Image ---------------------------------------------- */}
            <div className="p-2 overflow-hidden">
              <div className="overflow-hidden max-[300px]: rounded-md">
                <img
                  width={700}
                  height={700}
                  alt="Card background"
                  className="object-cover w-full  group-hover:scale-105 duration-100"
                  src={v.blogimg}
                />
              </div>
            </div>
            {/*//? --------------------------------------------------------- */}

            {/*//? Card Info ----------------------------------------------- */}
            <div className="overflow-visible py-2 px-4">
              <div className="flex justify-between mb-3">
                <small className="text-default-500">{v.authorname}</small>
                <small className="text-default-500">
                  {new Date().toDateString(v.createdAt)}
                </small>
              </div>
              <h4 className="font-bold text-large text-clip line-clamp-2 leading-tight mb-2">
                {v.title}
              </h4>
              <div
                className="text-tiny uppercase font-normal text-clip line-clamp-3"
                dangerouslySetInnerHTML={createMarkup(v.description)}
              />
              <Link href={`/blogs/${v.slug}`}>
                <button className="mt-5">Read More</button>
              </Link>
            </div>
            {/*//? --------------------------------------------------------- */}
          </div>
        ))}
      </div>
    </>
  );
}
