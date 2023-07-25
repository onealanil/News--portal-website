import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Scroll = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1950, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 912, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 320 },
      items: 1,
    },
  };
  return (
    (<div>Scroll</div>),
    (
      <div className="w-[99.9%]">
        <Carousel responsive={responsive} className="w-full">
          {data?.map((val, index) => (
            <>
              {/* one data start */}
              <div className="md:pr-5 md:pb-5 md:pt-5 flex flex-col gap-y-3" key={index}>
                <img src={val.url} alt="" className="w-full md:w-[14rem] object-cover h-[10rem] md:h-[8rem] rounded-md" />
                <span className="font-bold font-timesNewRoman leading-relaxed tracking-wide">
                  {val.data}
                </span>
                <p className="text-xs text-gray-400 font-domine">{val.time}</p>
              </div>
              {/* one data end  */}
            </>
          ))}
        </Carousel>
      </div>
    )
  );
};

export default Scroll;
