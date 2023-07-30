import React from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


function HeroSubs({ imgSrc, articleTitle, articleWriter, snippet, altImg }) {
  const navigate = useNavigate();

  return (
    <div>
      <Fade>
      {/* image and news */}
      <div className=" w-[100%]  md:px-4 flex justify-center select-none">
        <div className="md:bg-gray-200 w-[100%] md:w-75% flex flex-row rounded-md md:gap-4 ">
          <div
            className="rounded-md relative w-[90%] md:w-[50%] overflow-hidden object-cover aspect-video cursor-pointer"
            onClick={() => {
              navigate("/article");
            }}
          >
            <img src={imgSrc} alt={altImg} className="w-[100%] rounded-md" />
            {/* overlay div */}
            <div className="absolute inset-y-[35%] bg-gradient-to-t from-dark to-transparent rounded-md w-[100%] h-[65%] px-4 md:px-6 pb-4 items-end flex  text-white ">
              {/* picture text div */}
              <div className="flex flex-col gap-2 md:gap-4 ">
                {/* article heding and sub heading */}
                <h1 className="text-xs font-medium line-clamp-2 sm:text-base md:text-base  lg:text-xl sm:font-medium md:tracking-wider w-[100%] md:line-clamp-1 lg:line-clamp-none">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/article");
                    }}
                  >
                    {articleTitle}
                  </div>
                </h1>
                <p className="text-xs md:text-sm font-light">{articleWriter}</p>
              </div>
            </div>
          </div>

          {/* news Snippet Div*/}
          <div className="hidden md:flex flex-1 items-center px-4">
            <div className="flex flex-col space-y-2 pr-4">
              <p
                className={`md:line-clamp-6  text-justify sm:text-xs md:text-sm lg:text-base`}
              >
                {snippet} {/* news snippet/preview */}
              </p>

              {/* read more button */}
              <button
                className="text-dark font-medium"
                onClick={() => {
                  navigate("/article");
                }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default HeroSubs;
