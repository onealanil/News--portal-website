import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMore } from "react-icons/ai";
import { BiSolidShare, BiCommentDetail } from "react-icons/bi";
import { LuEdit2 } from "react-icons/lu";
import { BsDot } from "react-icons/bs";
import { FcAddImage } from "react-icons/fc";
import Dashboard from "./Dashboard";



function UserProfileAdmin() {
  const postdata = [
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },
    {
      img: "/images/villan.png",
      title: "Kathmandu - Nepal is going to bat in the first match of World...",
      date: "16 Jun",
      comments: "34",
    },


  ];


  return (
    <>
      <Dashboard />

      <div className="">

        {/* Heading Section */}
        <div className="flex justify-between mx-14 my-3 border-b-2 border-gray-300 py-1">
          <h2 className="font-[500] md:text-3xl text-xl">User Profile</h2>
          <div className="flex gap-2 items-center">
            <BiSolidShare className="md:text-2xl text-xl" />
            <span className="text-sm">Share Profile</span>
          </div>
        </div>

        {/* User Details Section */}
        <div
          className="md:mx-20 md:mt-7 mx-20 lg:gap-52 md:flex-row md:gap-11
       flex flex-col-reverse pb-14 border-b border-gray-400 mb-6 bg-gray-1 "
        >
          {/* User personal detail Section */}
          <div className="flex flex-col gap-3">
            <div>
              <span>Username</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Aryan Dhamala"
                  className="border border-gray-400 rounded-md pl-3 py-2 w-96"
                />
                <LuEdit2 className="text-2xl" />
              </div>
            </div>

            <div>
              <span>Email Address</span>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="useremail@gmail.com"
                  className="border border-gray-400 rounded-md pl-3 py-2 w-96"
                />
                <LuEdit2 className="text-2xl" />
              </div>
            </div>

            <div>
              <span>Password</span>
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  placeholder="*********"
                  className="border border-gray-400 rounded-md pl-3 py-2 w-96"
                />
                <LuEdit2 className="text-2xl" />
              </div>
            </div>
          </div>
          {/* User Image Section */}
          <div className="flex relative pl-10">
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full bg-slate-300 h-32 w-32 border border-gray-400 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="profile"
                  className="object-cover"
                />
              </div>
              <span className="font-[500]">Profile Image</span>
            </div>

            <div className="flex flex-col justify-center items-center absolute md:top-32 md:left-32 top-24 left-32">
              <div className="rounded-full bg-slate-300 h-8 w-8 border border-gray-400 overflow-hidden flex items-center justify-center">
                <FcAddImage size={25} />
              </div>
            </div>
          </div>
        </div>
        <span
          className="md:mx-20 ml-36 lg:gap-52 md:flex-row md:gap-11 font-bold text-lg
      flex flex-col-reverse pb-4"
        >
          User Post
        </span>

        {/* User All posts Section */}
        <div className="md:mx-20 ml-10 pb-4 grid md:grid-cols-3 grid-cols-1">
          {postdata.map((val, index) => {
            return (
              <div>
                <div className="w-72 md:w-80 h-52 rounded-xl overflow-hidden">
                  <img src={val.img} alt="news" />
                </div>
                <div className="w-72 md:w-80 h-14">
                  <h3>
                    Kathmandu - Nepal is going to bat in the first match of World...
                  </h3>
                </div>
                <div className="flex w-72 md:w-80 h-14">
                  <div className="w-72 md:w-80 h-4 ml-2 flex items-center">
                    <span className="text-xs">Published</span>
                    <BsDot />
                    <span className="text-xs">16 Jun</span>
                  </div>
                  <div className="flex gap-1">
                    <BiSolidShare />
                    <span className="text-xs">34</span>
                    <BiCommentDetail />
                    <AiOutlineMore />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div>
          <button
            className="text-sm bg-dark text-white rounded-md border
         border-gray-600 py-2 px-6 ml-[40%] mb-8 md:ml-[45%]"
          >
            View all
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfileAdmin;
