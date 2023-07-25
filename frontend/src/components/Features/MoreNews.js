import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const data = [
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Health",
  },
  {
    url: "./images/UML.jpg",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
  {
    url: "./images/see.png",
    data: "Nepal's first win in world cup.",
    time: "1 hour Ago | EKantipur News",
    in: "In Sports",
  },
];

const MoreNews = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col gap-x-4 p-5">
        <div className="w-[100%] md:w-[33.33%] md:border-r-[1px] border-black p-3 flex flex-col gap-y-4">
          <div className="flex flex-col ">
            {/* top  */}
            <div className="flex items-center justify-between">
              <p className="font-bold">Science & Technology</p>
              <span className="mr-4">
                <IoIosArrowDroprightCircle
                  size={30}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <hr className=" border-t-4 border-black w-12 mt-0 mb-2 " />
          </div>
          {data.map((val, index) => (
            <>
              {/* one item start  */}
              <div className="flex cursor-pointer" key={index}>
                <div className="w-[45%]">
                  <img
                    className="md:h-[5rem] w-full object-cover rounded-md"
                    src={val.url}
                    alt="news1 "
                  />
                </div>
                {/*This Is to separate three spans in sport section*/}
                <div className="flex flex-col h-[5rem] p-2 gap-y-1">
                  <span className="font-bold text-[14px] font-timesNewRoman leading-relaxed tracking-wide">
                    {val.data}
                  </span>
                  <span className="text-[10px] font-domine text-gray-400">
                    {val.time}
                  </span>
                </div>
              </div>
              {/* one items end  */}
            </>
          ))}
        </div>
        <div className="w-[100%] md:w-[33.33%] md:border-r-[1px] border-black p-3 flex flex-col gap-y-3">
          <div className="flex flex-col">
            {/* top  */}
            <div className="flex items-center justify-between">
              <p className="font-bold">Economy</p>
              <span className="mr-4">
                <IoIosArrowDroprightCircle
                  size={30}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <hr className=" border-t-4 border-black w-12 mt-0 mb-2 " />
          </div>
          {data.map((val, index) => (
            <>
              {/* one item start  */}
              <div className="flex cursor-pointer" key={index}>
                <div className="w-[45%]">
                  <img
                    className="md:h-[5rem] w-full object-cover rounded-md"
                    src={val.url}
                    alt="news1 "
                  />
                </div>
                {/*This Is to separate three spans in sport section*/}
                <div className="flex flex-col h-[5rem] p-2 gap-y-1">
                  <span className="font-bold text-[14px] font-timesNewRoman leading-relaxed tracking-wide">
                    {val.data}
                  </span>
                  <span className="text-[10px] font-domine text-gray-400">
                    {val.time}
                  </span>
                </div>
              </div>
              {/* one items end  */}
            </>
          ))}
        </div>
        <div className="w-[100%] md:w-[33.33%] md:border-r-[1px] border-black p-3 flex flex-col gap-y-4">
          <div className="flex flex-col">
            {/* top  */}
            <div className="flex items-center justify-between">
              <p className="font-bold">Life Style</p>
              <span className="mr-4">
                <IoIosArrowDroprightCircle
                  size={30}
                  className="cursor-pointer"
                />
              </span>
            </div>
            <hr className=" border-t-4 border-black w-12 mt-0 mb-2 " />
          </div>
          {data.map((val, index) => (
            <>
              {/* one item start  */}
              <div className="flex cursor-pointer" key={index}>
                <div className="w-[45%]">
                  <img
                    className="md:h-[5rem] w-full object-cover rounded-md"
                    src={val.url}
                    alt="news1 "
                  />
                </div>
                {/*This Is to separate three spans in sport section*/}
                <div className="flex flex-col h-[5rem] p-2 gap-y-1">
                  <span className="font-bold text-[14px] font-timesNewRoman leading-relaxed tracking-wide">
                    {val.data}
                  </span>
                  <span className="text-[10px] font-domine text-gray-400">
                    {val.time}
                  </span>
                </div>
              </div>
              {/* one items end  */}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoreNews;
