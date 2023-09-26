import React from "react";
import { blogfetch } from "@/hooks/queryfetchblogs";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  function createMarkup(c) {
    return { __html: c };
  }

  const { isLoading, error, data } = blogfetch();

  if (isLoading) return <p className="text-white">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;

  return (
    <>
      <div className="flex flex-wrap gap-2  ">
        {data?.message?.map((v, i) => (
          <Card key={i} className="py-4 max-w-[285px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={v.blogimg}
                width={270}
              />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
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
              <Link href={`/blogs/${v.slug}`} >
                <Button className="mt-5">Read More</Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
