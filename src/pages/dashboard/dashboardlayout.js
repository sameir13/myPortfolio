import Sidebar from "@/components/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="backdrop-blur-lg bg-[#00000076] flex neon ">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
