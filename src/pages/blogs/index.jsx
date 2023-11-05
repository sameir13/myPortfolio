import BlogCards from "@/components/Blogcards";
import Featurecards from "../../components/featurecards";

const blogs = () => {
  return (
    <main className="max-w-[1500px] m-auto py-10 px-4">
      <div className="w-full grid place-items-center h-60 bg-[#00000015] backdrop-blur-3xl rounded-lg">
        <h2 className="text-white text-6xl font-extrabold">Blogs</h2>
      </div>
      {/* <div className="max-w-[1200px] m-auto  my-5 px-4 neon">
        <Featurecards />
      </div> */}
      <div className="max-w-[1500px] m-auto my-5 py-6">
        <BlogCards />
      </div>
    </main>
  );
};

export default blogs;
