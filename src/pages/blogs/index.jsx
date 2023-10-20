import BlogCards from "@/components/Cards";
import Featurecards from "@/components/Featurecards";

const blogs = () => {
  return (
    <div className="backdrop-blur-lg bg-[#0000006d]">
      <div className="w-full grid place-items-center h-80 ">
        <h2 className="text-white text-6xl font-extrabold">Blogs</h2>
      </div>
      <div className="max-w-[1200px] m-auto  my-5 px-4 neon">
        <Featurecards />
      </div>
      <div className="max-w-[1200px] m-auto my-5 py-6 px-4 neon ">
        <h3 className="font-semibold text-3xl mb-5">Latest News</h3>
        <BlogCards />
      </div>
    </div>
  );
};

export default blogs;
