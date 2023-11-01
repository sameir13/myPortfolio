import Image from "next/image";
import lady from "../images/aunti.png";
import graphic from "../images/graphic.png";

const home = () => {
  var cards = [1,2,3,4];
  return (
    <div>
      <div className="px-4">
        {/* Hero */}
        <section className="neon">
          {/* Hero Section */}
          <div className="flex flex-col sm:justify-between justify-end items-end pt-12 max-w-[1200px] m-auto sm:flex-row">
            <div className="sm:w-3/6  pb-16 w-full flex flex-col gap-10 justify-center">
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
                <button className="btn">Get Started</button>
                <button variant="bordered">Learn More ---→ </button>
              </div>
            </div>
            <div className="sm:w-1/3 w-3/6">
              <Image alt="" className="w-full" src={lady}></Image>
            </div>
          </div>
          {/* Hero Cutomer */}
          <div className="max-w-[1200px] m-auto flex py-10 px-4 justify-evenly  backdrop-blur-[18px] rounded-lg bg-[#00000060]">
            <div className="flex gap-5  items-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl">
              <h3 className="font-[Modren]">Customers</h3>
              <hr className="border h-full transform font-[Modren]" />
              <p>24.3k</p>
            </div>
          </div>
        </section>
        {/* Service */}
        <section className="neon animation md:py-10">
          <div className="flex flex-col-reverse md:grid md:grid-flow-col-dense md:grid-rows-1 gap-6 max-w-[1200px] m-auto my-5">
            {/* Cards */}
            <div className="flex flex-wrap gap-4 w-full">
              {cards.map((v,i)=>(

              <div key={i} className="relative w-[290px] h-[200px] backdrop-blur-3xl rounded-lg bg-[#ffffff11] shadow-2xl">
                <div className="w-full h-[100%]">
                  <Image
                    alt=""
                    className="w-full h-full object-contain"
                    src={graphic}
                  ></Image>
                </div>
                <div className="absolute z-50 bottom-2 w-full  px-2 ">
                  <div className="flex justify-between items-center p-1 rounded-lg backdrop-blur-xl bg-[#00000084] border border-[#0000001e]">
                  <h2 className="text-xs">Graphic Design</h2>
                  <button className="text-xs px-2 py-1 rounded-lg">
                    Learn More
                  </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
            {/* Services info */}
            <div className="md:px-10">
              <div className="flex flex-col gap-5 justify-center">
                <span className="text-orange-400">Popular Services ---→</span>
                <h2 className="text-4xl  font-bold font-[Modren]">
                  Hot Trending <br /> Services
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos iure quos neque labore corrupti consectetur sed
                  quaerat totam quisquam asperiores animi, facere molestias
                  eaque aut reprehenderit sunt consequatur aspernatur laborum!
                </p>
                <div className="flex gap-6">
                  <button className="btn">Contact Now ---→</button>
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
