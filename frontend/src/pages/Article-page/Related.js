import React from "react";
import RelatedArticleData from "./RelatedData";
import { Fade } from "react-awesome-reveal";

function RelatedArticles() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 w-full border-t-[1px] mb-10">
      <h1 className="text-dark flex flex-col font-bold text-sm sm:text-base md:text-xl ">
        Related articles
        <div className="bg-dark w-[3.3rem] sm:w-[3.8rem] md:w-[4.7rem] h-[.3rem]" />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {RelatedArticleData.map((val) => (
          <>
            <Fade>
              <div
                key={val.id}
                className="flex flex-col justify-between rounded-md overflow-hidden "
              >
                <div className="h-full">
                  <img
                    src={val.pic}
                    alt="related article 1"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between px-2 gap-1 sm:gap-2">
                  <span className="text-xs sm:text-sm font-bold line-clamp-2 font-timesNewRoman leading-relaxed tracking-wide">
                    {val.title}
                  </span>
                  <p className="text-xs font-domine text-gray-400">
                    {val.writer} | {val.time}
                  </p>
                </div>
              </div>
            </Fade>
          </>
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
