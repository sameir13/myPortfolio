import Sidebar from "../../components/sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
