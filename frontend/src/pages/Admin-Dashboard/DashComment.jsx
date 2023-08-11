import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiSealWarningBold } from "react-icons/pi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Dashboard from "./Dashboard";

const allcomments = (val) => {
  return (
    <div
      className="mx-5 my-3 border border-gray-400 px-3
     py-2 flex justify-between lg:mx-20"
    >
      <div className="flex gap-5">
        <div
          className="border border-gray-400
  bg-slate-600 rounded-full lg:w-16 lg:h-16 w-20 h-12 sm:w-14 sm:h-14"
        ></div>
        <div>
          <p className="text-blue-800 font-[600] text-xs sm:text-sm">
            {val.username}{" "}
            <span className="font-[600] text-black text-xs sm:text-sm">
              Commented on{" "}
            </span>
            {val.title}
          </p>
          <p className="text-xs sm:text-sm">{val.comment}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs">2 Hrs ago</p>
        <div className="flex justify-between">
          <PiSealWarningBold className="text-xs" />
          <BsFillTrash3Fill className="text-xs" />
        </div>
      </div>
    </div>
  );
};

function DashComment() {
  const comments = [
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Aryan",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Saugat",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Anil",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Manoj",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Rupesh",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Sapana",
    },
    {
      title: "“This is the dummy post title , Enter actual title here.”",
      comment: "This is the dummy comment",
      username: "Sandeep",
    },
  ];

  return (
    <div className="">
      <div className="flex  w-full font-semibold text-base md:text-lg px-4 md:px-10 py-2 justify-start gap-4 sm:gap-8 mb-[-1rem]">
        {/* hamburger menu */}
        <Dashboard />
      </div>

      {/*Division which holds Comment Section */}
      <div className="py-4 mb-14 w-full">
        {/*This Division contains Heading and a search bar */}
        <div
          className="mx-6 sm:mx-14 my-3 py-1 flex border-b-2
         border-gray-300 items-center flex-wrap justify-between"
        >
          <span className="font-[500] lg:text-3xl text-xl">Comments</span>
          <div className="relative w-[50%] md:w-[20%]">

            <input
              type="text"
              placeholder="Search ..."
              className="border border-gray-300 text-xs md:text-base rounded-md pl-8 pr-4 w-full py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <AiOutlineSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />

          </div>
        </div>
        {/*All news filter */}
        <div className="flex mx-8 my-8 sm:mx-20">
          <span>All {"(20)"}</span>
          <RiArrowDropDownLine className="text-3xl" />
        </div>
        {/*All Comments Section */}
        {comments.map(allcomments)}
      </div>
    </div>
  );
}

export default DashComment;
