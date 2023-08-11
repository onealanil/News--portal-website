import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { BiSolidCommentDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrow90DegLeft } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* This is the main Division*/}
      <div className=" flex bg-[#E5E5E5] w-[100%] h-[100%]">
        {/* This is for the Menu Division*/}
        <div className="bg-black w-[20%] h-screen flex flex-col gap-6">
          {/* This is for the icon and text Division*/}
          <div className="flex items-center justify-center py-4 gap-x-2">
            {/* This is for the Icon Division*/}
            <div className=" text-white">
              <CiUser size={20}/>
            </div>
            <span className="font-bold text-md text-white">
              User Dashboard
            </span>
          </div>
          {/* Ends Here*/}
          <div className="pl-[16%] flex flex-wrap">
            <ul>
              <li className="pb-[2%] border-b-2 border-b-gray-600">
                <Link to="/posts" className="text-white font-[500] text-[20px]">
                  Posts
                </Link>
              </li>
              <li className="pb-[10px] border-b-2 border-b-gray-600">
                <Link
                  to="/profile"
                  className="text-white font-[500] text-[20px]"
                >
                  Profile
                </Link>
              </li>
              <li className="pb-[10px] border-b-2 border-b-gray-600">
                <Link
                  to="/privacy&security"
                  className="text-white font-[500] text-[20px]"
                >
                  Privacy & Security
                </Link>
              </li>
              <li className="pb-[10px] border-b-2 border-b-gray-600">
                <Link
                  to="/logout"
                  className="text-white font-[500] text-[20px]"
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*Ends here*/}
        {/* This is for posts division*/}
        <div className="flex flex-col gap-3 flex-wrap w-full">
          <div className="pl-[80px] pt-[14px] ">
            <button class="bg-white rounded-lg text-[20px] font-[600] px-2 py-1">
              + New post
            </button>
            <span
              className=" flex font-[400] text-[18px] absolute top-5 right-40 py-1 gap-1"
              onClick={toggleDropdown}
            >
              All(19)
              <IoMdArrowDropdown />
              {isOpen && (
                <div className="flex flex-col absolute top-8 border border-gray-600 bg-white w-[90px] h-[100px] rounded-md ">
                  <ul className="text-[14px] text-gray-500 text-center ">
                    <li>Published</li>
                    <hr className="w-50  text-gray-500 border-t-1 "></hr>
                    <li>Draft</li>
                    <hr className="w-50  text-gray-500 border-t-1 "></hr>
                    <li>Schedule</li>
                    <hr className="w-50  text-gray-500 border-t-1 "></hr>
                    <li>Trash</li>
                  </ul>
                </div>
              )}
            </span>
          </div>
          {/* Ends Here*/}
          <div className="pl-16 flex flex-wrap">
            <hr className="w-[85%] border-gray-400 border-t-2"></hr>
          </div>

          {/*This is for the news*/}
          <div className="flex gap-x-4">
            {/* one start  */}
            <div className="flex flex-col gap-2 px-12">
              <div className="w-[200px] h-[100%]">
                <img
                  className="object-cover w-[200px] h-[100%]"
                  src="../Image/Rectangle 1.png"
                  alt="news1"
                />
              </div>
              <div className="flex flex-col gap-2 max-w-xs flex-wrap">
                <span className="max-w-[150px] text-[14px] font-[700]">
                  The Nepalese ambassador to India should be called back and
                  asked for...
                </span>
                <div className="flex flex-row gap-12 ">
                  <span className="text-[11px]  text-black">
                    Published.16 Jun{" "}
                  </span>
                  <span className="flex items-center justify-end gap-2 py-1 text-[11px]  text-black">
                    34
                    <BiSolidCommentDetail />
                    <BsFillShareFill />
                    <BsThreeDotsVertical />
                    {isOpen && (
                      <div className="flex flex-col absolute border border-gray-600 bg-white w-[120px] h-[70px] rounded-md ">
                        <ul className="text-[14px] text-gray-500 text-center ">
                          <li className="flex gap-2 ">
                            <RiDeleteBinFill /> Delete
                          </li>
                          <hr className="w-50  text-gray-500 border-t-1 "></hr>
                          <li className="flex gap-2">
                            <AiFillEye />
                            View
                          </li>
                          <hr className="w-50  text-gray-500 border-t-1 "></hr>
                          <li className="flex gap-2">
                            <BsArrow90DegLeft />
                            Revert to Draft
                          </li>
                        </ul>
                      </div>
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* one end  */}
          </div>
          {/*******/}
        </div>
      </div>
      {/* Ends Here*/}
    </>
  );
};

export default UserDashboard;
