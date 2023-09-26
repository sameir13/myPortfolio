import Cards from "@/components/card";
import Featurecards from "@/components/featurecards";


const home = () => {
  return (
    <>
        <div className="w-full grid place-items-center h-80 ">
          <h2 className="text-white text-6xl font-extrabold">Blogs</h2>
        </div>
        <div className="max-w-[1200px] m-auto  my-5 px-4 ">
          <h3 className="font-semibold text-3xl mb-5">Featured </h3>
          <Featurecards />
        </div>
        <div className="max-w-[1200px] m-auto my-5 py-6 px-4 ">
          <h3 className="font-semibold text-3xl mb-5">Latest News</h3>
          <Cards />
        </div>
    </>
  );
};

export default home;
