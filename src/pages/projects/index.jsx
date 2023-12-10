import ProjectsCards from "@/components/ProjectCards";

const index = () => {
  return (
    <main className="max-w-[1500px] m-auto py-10 px-4">
      <div className="w-full grid place-items-center h-60 bg-[#00000015] backdrop-blur-3xl rounded-lg">
        <h2 className="text-white text-6xl font-extrabold">PROJECTS</h2>
      </div>
      <div className="max-w-[1500px] m-auto my-5 py-6">
        <ProjectsCards />
      </div>
    </main>
  );
};

export default index;
