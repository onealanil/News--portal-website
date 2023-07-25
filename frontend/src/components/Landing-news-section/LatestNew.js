import React from "react";

const LatestNews = () => {
  return (
    <div className="flex bg-gray-200 rounded-md">
      <div className="w-[50%]">
        <img src="./images/UML.jpg" alt="" className="md:h-[13rem] rounded-l-md" />
      </div>
      <div className=" bg-gray-200 flex flex-col gap-y-3 w-[50%] p-5 h-[13rem] rounded-md">
        <h3 className="font-bold font-timesNewRoman leading-relaxed tracking-wide">
          Nepalese people from Boston gathered in the yard of Pashupati Buddha{" "}
        </h3>
        <p className="text-md font-timesNewRoman leading-relaxed tracking-wide">
          Although it became the Greater Boston Neapolitan Community (GBNC), For
          praying to god and celebrating
        </p>
        <p className="text-xs text-gray-400 font-domine">1 hour Ago | EKantipur News</p>
      </div>
    </div>
  );
};

export default LatestNews;
