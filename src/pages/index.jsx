import Spline from "@splinetool/react-spline";
import Navbar from "@/components/Nav";
import { motion } from "framer-motion";

const home = () => {
  return (
    <>
      {/* <audio className="relative z-50" autoPlay>
       <source src="./bg.mp3" />
       </audio> */}
      <section className="relative flex gap-24 justify-center flex-col items-center h-screen">
        <div className="absolute h-full w-full">
          <Spline scene="/forest_lights_copy.spline" />
        </div>
        <div className="relative z-20 font-serif">
          <motion.h1
            initial={{ scale: 2.5, y: 150 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 10 }}
            className="text-6xl mb-10 border-b-2 pb-4"
          >
            Quntam Craft
          </motion.h1>
          <Navbar />
        </div>
      </section>
    </>
  );
};

export default home;
