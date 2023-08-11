import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      {/* This is the main Division*/}
      <div className=" flex bg-[#E5E5E5] w-[100%] h-[100%]">
        {/* This is for the Menu Division*/}
        <div className="bg-black w-[20%] h-screen flex flex-col gap-6">
          {/* This is for the icon and text Division*/}
          <div className="flex items-center gap-2 ml-3 flex-wrap pt-[4%]">
            {/* This is for the Icon Division*/}
            <div className="text-[25px] text-white">
              <CiUser />
            </div>
            <span className="text-[25px] font-[700] text-white">
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
          <div className="pl-[80px] pt-[14px]">
            <button class="bg-white rounded-lg text-[20px] font-[600] px-2 py-1">
              + New post
            </button>
          </div>
          {/* Ends Here*/}
          <div className="pl-16 flex flex-wrap">
            <hr className="w-[80%] border-gray-400 border-t-2"></hr>
          </div>
          <div className=" flex justify-center pt-[20%]">
            <span>
              OOPS, Looks Like you haven’t written any articles. Click the “New
              Post” button above to write a new article.
            </span>
          </div>
        </div>
      </div>
      {/* Ends Here*/}
    </>
  );
};

export default UserDashboard;
