import Sidebar from "../../components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="relative backdrop-blur-lg bg-[#00000076] neon h-screen">
      <Sidebar />
      <div className="flex flex-col-reverse md:flex-row border">
      <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default layout;
