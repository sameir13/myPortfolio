import { Blogfetch } from "@/hooks/queryfetchblogs";
import Link from "next/link";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function Featurecards() {
  const { isLoading, error, data } = Blogfetch();

  if (isLoading) return <p className="text-white h-56">Loading....</p>;

  if (error) return <p className="text-white">Error {error.message} </p>;
  return (
    <div className="max-w-[1200px] m-auto gap-2 grid grid-cols-12 grid-rows-2">
      {/* {data?.message?.slice(0, 3).map((v, i) => (
        <Link className="col-span-12 sm:col-span-4 h-[300px]" href={`/blogs/${v.slug}`} key={i}>       
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="text-white font-medium text-large">{v.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={v.blogimg}
            loading="lazy"
          />
        </Card>
        </Link>
      ))} */}
      {/* <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={data?.message?.[3].blogimg}
          loading="lazy"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <h4 className="text-white font-medium text-large line-clamp-1">
              {data?.message?.[3].title}
            </h4>
          </div>
          <Button className="text-tiny" color="primary" size="sm">
          <Link href={`/blogs/${data.message[3].slug}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 fcard"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={data?.message?.[4].blogimg}
          loading="lazy"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
              loading="lazy"
            />
            <div className="flex flex-col">
              <h4 className="text-white font-medium text-large line-clamp-1">
                {data?.message?.[4].title}
              </h4>
            </div>
          </div>
          <Button size="sm">
          <Link href={`/blogs/${data.message[4].slug}`}>Read More</Link>
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
}
