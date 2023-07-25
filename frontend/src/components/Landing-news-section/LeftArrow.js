import React from "react";
import LatestNews from "./LatestNew";
import Scroll from "./Scroll";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// right  arrow

const LeftArrow = ({data}) => {
  return (
    <>
      <div className="md:flex md:flex-col">
        <div className="flex flex-col">
          {/* top  */}
          <div className="flex items-center justify-between">
            <p className="font-bold">{data[0].category}</p>
            <span className="md:mr-4">
              <IoIosArrowDroprightCircle size={30} className="cursor-pointer" />
            </span>
          </div>
          <hr className=" border-t-4 border-black w-10 mt-0 mb-2 " />
        </div>
        <div className="hidden md:block pr-5 pb-5 pt-5">
          <LatestNews />
        </div>
        <div className="w-full">
          <Scroll data={data} />
        </div>
      </div>
    </>
  );
};

export default LeftArrow;
