import Layoutd from "./layoutd";
import { Weather, News, Time } from "@/components/Dashboard/Export";

const index = () => {
  return (
    <>
      <Layoutd>
        <div className="flex">
          <Weather />
          <Time />
        </div>
        <div>
          <News />
        </div>
      </Layoutd>
    </>
  );
};

export default index;
