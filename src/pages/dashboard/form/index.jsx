import Addform from "@/components/Addform";
import Layoutd from "../layoutd";

const index = () => {
  return (
    <>
      <Layoutd>
        <div className="flex justify-center items-center h-screen">
          <Addform />
        </div>
      </Layoutd>
    </>
  );
};

export default index;
