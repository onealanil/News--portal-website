import React from "react";
import LeftArrow from "./LeftArrow";
import LatestUpdatesSide from "./LatestUpdatesSide";

const localNews = [
  {
    category: "Local News",
    url: "./images/see.png",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "Local News",
    url: "./images/villan.png",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "Local News",
    url: "./images/UML.jpg",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "Local News",
    url: "./images/villan.png",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
];

const international = [
  {
    category: "International",
    url: "./images/UML.jpg",
    data: "Anil of the Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "International",
    url: "./images/see.png",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "International",
    url: "./images/UML.jpg",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
  {
    category: "International",
    url: "./images/villan.png",
    data: "The Nepalese ambassador to India should be called back and asked for Nepal missing land piece",
    time: "1 hour Ago | EKantipur News",
  },
];

const LandingJoin = () => {
  return (
    <>
      <div className="w-[100%] flex items-center justify-center">
        <div className="w-[95%] bg-gray-500 h-[0.5px]"></div>
      </div>
      <div className="w-[100%] flex items-center justify-center">
        <div className="w-[90%] xl:w-[90%] 2xl:w-[80%] flex md:px-10 my-4">
          <div className="w-[100%] md:w-[70%] p-5">
            <LeftArrow data={localNews} />
            <div className="w-[100%] flex items-center justify-center my-5">
              <div className="w-[100%] bg-gray-500 h-[0.5px]"></div>
            </div>
            <LeftArrow data={international} />
            <div className="w-[100%] flex items-center justify-center my-5">
              <div className="w-[100%] bg-gray-500 h-[0.5px]"></div>
            </div>
            <LeftArrow data={international} />
            <div className="w-[100%] flex items-center justify-center my-5">
              <div className="w-[100%] bg-gray-500 h-[0.5px]"></div>
            </div>
            <LeftArrow data={international} />
            <div className="w-[100%] flex items-center justify-center my-5">
              <div className="w-[100%] bg-gray-500 h-[0.5px]"></div>
            </div>
            <LeftArrow data={international} />
            <div className="w-[100%] flex items-center justify-center my-5">
              <div className="w-[100%] bg-gray-500 h-[0.5px]"></div>
            </div>
            <LeftArrow data={international} />
          </div>
          <div className="hidden md:flex flex-col gap-y-96 md:w-[30%]">
            <LatestUpdatesSide />
            <LatestUpdatesSide />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingJoin;
