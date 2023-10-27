import Image from "next/image";
import lady from "../images/aunti.png";

const home = () => {
  return (
    <div>
      <div className="px-4">
        {/* Hero */}
        <section className="neon">
          {/* Hero Section */}
          <div className="flex flex-col sm:justify-evenly justify-end items-end pt-12 max-w-[1200px] m-auto sm:flex-row">
            <div className="sm:w-3/6 pb-16 w-full flex flex-col gap-10 justify-center">
              <h2 className="text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-7xl font-bold font-[Modren]">
                Where Innovation <br /> Meets Digital Precision
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos iure quos neque labore corrupti consectetur sed
                quaerat totam quisquam asperiores animi, facere molestias eaque
                aut reprehenderit sunt consequatur aspernatur laborum!
              </p>
              <div className="flex gap-6 py-4">
                <button className="btn">
                  Get Started
                </button>
                <button variant="bordered">Learn More ---→ </button>
              </div>
            </div>
            <div className="sm:w-1/3 w-3/6">
              <Image alt="" className="w-full" src={lady} ></Image>
            </div>
          </div>
          {/* Hero Cutomer */}
          <div className="max-w-[1100px] m-auto flex py-10 px-4 justify-evenly  backdrop-blur-[18px] rounded-lg bg-[#00000060]">
            <div className="flex gap-5 w-1/2 items-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
              <h3 className="font-[Modren]">Customers</h3>
              <hr className="border h-full transform font-[Modren]" />
              <p>24.3k</p>
            </div>
            <div className="p-3 w-1/2">
              hi
            </div>
          </div>
        </section>
        {/* Service */}
        <section className="neon animation">
          <div className="grid grid-cols-2 border gap-4  max-w-[1200px] m-auto">
            {/* Cards */}
            <div className="flex flex-wrap gap-10 justify-evenly w-full sm:w-3/6">
              cards
            </div>
            {/* Services info */}
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-10 justify-center">
                <span className="text-orange-400">Popular Services ---→</span>
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
                  <button className="btn">
                    Contact Now ---→
                  </button>
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
