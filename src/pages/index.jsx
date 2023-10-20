import React from "react";
import lady from "../images/aunti.png";
import graphic from "../images/graphic.png";
import Image from "next/image";
import {
  Button,
  Avatar,
  AvatarGroup,
  Card,
  CardFooter,
} from "@nextui-org/react";

const home = () => {
  return (
    <div className="homebody">
      <div className="backdrop-blur-lg bg-[#00000076]">
        {/* Hero */}
        <section className="neon ">
          {/* Hero Section */}
          <div className="flex justify-evenly pt-7 max-w-[1200px] m-auto">
            <div className="w-3/6 flex flex-col gap-10 justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-7xl font-bold font-[Modren]">
                Where Innovation <br /> Meets Digital Precision
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos iure quos neque labore corrupti consectetur sed
                quaerat totam quisquam asperiores animi, facere molestias eaque
                aut reprehenderit sunt consequatur aspernatur laborum!
              </p>
              <div className="flex gap-6">
                <Button color="primary" variant="flat">
                  Get Started
                </Button>
                <Button variant="bordered">Learn More ---→ </Button>
              </div>
            </div>
            <div className="w-1/3">
              <Image alt="" className="w-full" src={lady} loading="lazy"></Image>
            </div>
          </div>
          {/* Hero Cutomer */}
          <div className="max-w-[1100px] m-auto flex py-10 justify-evenly  backdrop-blur-[18px] rounded-lg">
            <div className="flex gap-5 items-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
              <h3 className="font-[Modren]">Customers</h3>
              <hr className="border h-full transform font-[Modren]" />
              <p>24.3k</p>
            </div>
            <div className="p-3">
              <AvatarGroup isBordered>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
          </div>
        </section>
        {/* Service */}
        <section className="neon animation">
          <div className="flex justify-evenly py-20 max-w-[1200px] m-auto">
            {/* Cards */}
            <div className="flex flex-wrap gap-10 justify-evenly  w-3/6">
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none bg-transparent"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src={graphic}
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Graphic Design</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Contact
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none bg-transparent"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src={graphic}
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Graphic Design</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Contact
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none bg-transparent"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src={graphic}
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Graphic Design</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Contact
                  </Button>
                </CardFooter>
              </Card>
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none bg-transparent"
              >
                <Image
                  alt="Woman listing to music"
                  className="object-cover"
                  height={200}
                  src={graphic}
                  width={200}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-white/80">Graphic Design</p>
                  <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* Services info */}
            <div className="flex justify-evenly w-3/6">
              <div className="w-3/6 flex flex-col gap-10 justify-center">
                <span className="text-sky-600">Popular Services ---→</span>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold font-[Modren]">
                  Hot Trending <br /> Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos iure quos neque labore corrupti consectetur sed
                  quaerat totam quisquam asperiores animi, facere molestias
                  eaque aut reprehenderit sunt consequatur aspernatur laborum!
                </p>
                <div className="flex gap-6">
                  <Button color="primary" variant="flat">
                    Contact Now ---→
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
