import React from "react";
import lady from "../images/aunti.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const home = () => {
  return (
    <div className="homebody">
      <div className="backdrop-blur-lg bg-[#00000076]">
        <section className="neon ">
          <div className="flex justify-evenly py-7 max-w-[1200px] m-auto">
            <div className="w-3/6 flex flex-col gap-10 justify-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-7xl">
                Discover <br /> Digital Art And <br /> Collect NFTs.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos iure quos neque labore corrupti consectetur sed
                quaerat totam quisquam asperiores animi, facere molestias eaque
                aut reprehenderit sunt consequatur aspernatur laborum!
              </p>
              <div className="flex gap-6">
                <Button>Get Started</Button>
                <Button>Learn More --- </Button>
              </div>
            </div>
            <div className="w-1/3">
              <Image
                className="w-full"
                src={lady}
                loading="lazy"
              ></Image>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
