import { IoMdTrash } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import { useState } from "react";




function UserList (){
  const [showUsers, setShowUsers] = useState(false);
  const users = [
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
    {
      email: "email@email.com",
      userName: "Saugat Adhikari",
      articles: "21",
      profileImg: "image1",
    },
  ];

    return(
        <>
         {/* user list section */}
         <div className="flex flex-col px-4">
         <div className="flex w-full sm:w-[80%] md:w-[60%] flex-col px-2 gap-2">
           <label
             htmlFor="pendingRequest"
             className="text-txtLight font-medium text-sm sm:text-base"
           >
             {" "}
             Users ({users.length})
           </label>
           <div className="flex flex-col gap-2 overflow-hidden  ">
             {users.length === 0 ? (
               <p className="text-txtLight px-2">No users.</p>
             ) : (
               <>
                 {users
                   .slice(0, showUsers ? undefined : 3)
                   .map((val, index) => (
                     <div
                       key={index}
                       className="flex bg-white text-dark rounded-md border-gray-300 border-[1px] px-2 py-2 items-center"
                     >
                       <div className="flex gap-2 md:gap-4 items-center w-full ">
                         <div className="w-7 h-7 md:w-[3rem] md:h-[3rem] rounded-full bg-gray-300 flex-shrink-0 object-cover overflow-hidden border-gray-300 border-2">
                           {" "}
                           <img
                             src={val.profileImg}
                             alt="user img"
                             className="w-full h-full"
                           />
                         </div>
                         <div className=" flex flex-col  w-full md:w-[90%]">
                           <div className="flex justify-between flex-wrap">
                             <p className="cursor-pointer font-semibold text-sm md:text-base ">
                               {val.userName}
                             </p>
                               <span className=" text-gray-400 text-xs md:text-sm">
                                 Articles: {val.articles}
                               </span>
                           </div>
                           <div className="flex items-center justify-between flex-wrap">

                           <p className="break-all text-txtLight  rounded-md text-xs sm:text-sm md:text-base">
                             {val.email}
                           </p>
                           <div className="flex gap-4 px-2  text-txtLight">
                           <MdModeEdit className="hover:text-dark cursor-pointer" />
                           <IoMdTrash className="hover:text-dark cursor-pointer" />
                           </div>
                           </div>

                         </div>
                       </div>
                     </div>
                   ))}
               </>
             )}
             {users.length > 3 && (
               <button
                 onClick={() => {
                   setShowUsers(!showUsers);
                 }}
                 className="md:px-2 border-2 border-gray-300 rounded-md w-[50%] sm:w-[30%] md:w-[30%] self-center text-dark bg-white flex justify-center items-center font-medium text-xs md:text-sm focus:outline-2 focus:outline-txtLight"
               >
                 {showUsers ? "View Less" : "View All"}
                 {showUsers ? (
                   <BiChevronUp className="text-2xl" />
                 ) : (
                   <BiChevronDown className="text-2xl" />
                 )}
               </button>
             )}
           </div>
         </div>
       </div>
       </>

    )
}

export default UserList;