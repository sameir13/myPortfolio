import Spline from "@splinetool/react-spline";
import Navbar from "@/components/Topnavb";

const home = () => {
  return (
    <div>
      <div className="px-4">
        <audio className="relative z-50" autoPlay>
          <source src="./bg.mp3" />
        </audio>
        <section className="relative flex gap-24 justify-center flex-col items-center h-screen">
          <div className="absolute h-full w-full">
            <Spline scene="/forest_lights_copy.spline" />
          </div>
          <div className="relative z-20 font-serif">
            {/* <h1 className="text-6xl mb-10 border-b-2 pb-4">Welcome</h1> */}
            <Navbar />
          </div>
        </section>
      </div>
    </div>
  );
};

export default home;
