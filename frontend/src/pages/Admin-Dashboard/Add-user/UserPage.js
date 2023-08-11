import SettingDashboard from "../Dashboard";
import { FiFileText } from "react-icons/fi";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

function UserPage() {
  const [showPendingUsers, setShowPendingUsers] = useState(false);
  const [showApprovedUsers, setShowApprovedUsers] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const handleAreaClick = (e) => {
    e.stopPropagation();
  };
  const toggleAddForm = (email) => {
    setShowAddForm(!showAddForm);
    setSelectedEmail(email); 
  }

  

  let [pending, setPending] = useState([
    {
      email: "email@email.com",
      timestamp: "Tue, 2:31 pm",
    },
    {
      email: "helloworld@email.com",
      timestamp: "sun, 2:31 pm",
    },
    {
      email: "don023@email.com",
      timestamp: "mon, 2:31 pm",
    },
    {
      email: "anilkhalifa@email.com",
      timestamp: "wed, 2:31 pm",
    },
    {
      email: "saugatdada02@email.com",
      timestamp: "thu, 2:31 pm",
    },
  ]);

  let approved = [
    {
      email: "email@email.com",
      timestamp: "Tue, 2:31 pm",
    },
    {
      email: "helloworld@email.com",
      timestamp: "sun, 2:31 pm",
    },
    {
      email: "don023@email.com",
      timestamp: "mon, 2:31 pm",
    },
    {
      email: "anilkhalifa@email.com",
      timestamp: "wed, 2:31 pm",
    },
    {
      email: "saugatdada02@email.com",
      timestamp: "thu, 2:31 pm",
    },
  ];
  
  
  const removePendingUser = (email) => {
    setPending(pending.filter(user => user.email !== email));
  }

  const movePendingToApproved = (email) => {
    const pendingUser = pending.find(u => u.email.toLowerCase() === email.toLowerCase());
    console.log(pendingUser);
    if(pendingUser) {
      console.log(approved.length);
approved.push(pendingUser);
console.log(approved.length);

      removePendingUser(email); 
    }
  };



  return (
    <div className="flex w-full flex-col px-8">
      <SettingDashboard />
      <div className="flex flex-col bg-gray-100 w-full min-h-screen gap-8 pb-16">
        {/* users top start*/}
        <div className="flex justify-between py-2 border-b-2 border-b-gray-300 px-4">
          <span className="text-xl font-bold text-dark">Users</span>
          
<div className="relative w-[50%] md:w-[20%]">

  <input 
    type="text"
    placeholder="Search users..."
    className="border border-gray-300 text-xs md:text-base rounded-md pl-8 pr-4 w-full py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
  />

  <AiOutlineSearch 
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
  />

</div>
        </div>
        {/* users top end */}

        <div className="flex flex-wrap justify-betwen gap-4 sm:gap-0 ">
          {/* pending request section */}
          <div className="flex w-full sm:w-[80%] md:w-[50%] flex-col px-2 gap-2">
            <label
              htmlFor="pendingRequest"
              className="text-txtLight font-medium text-sm sm:text-base"
            >
              {" "}
              Pending Requests ({pending.length})
            </label>
            <div className="flex flex-col gap-2 overflow-hidden items-center ">
              {pending.length === 0 ? (
                <p className="text-txtLight px-2">No pending requests.</p>
              ) : (
                <>
                  {pending
                    .slice(0, showPendingUsers ? undefined : 3)
                    .map((val, index) => (
                      <div
                        key={index}
                        className="w-full   flex bg-white text-dark rounded-md border-gray-300 border-[1px] px-2 py-2 items-center"
                      >
                        <div className="flex justify-between gap-2 px-2 w-[50%] items-center border-r-[1px] border-txtLight break-all">
                          <p className="font-medium text-xs sm:text-sm md:text-base">
                            {" "}
                            { val.email}
                          </p>{" "}
                          <FiFileText className="text-txtLight text-sm sm:text-lg hover:text-dark cursor-pointer flex-shrink-0" />
                        </div>

                        <div className="flex items-center flex-1 justify-around  px-2 sm:px-4 gap-2 ">
                          <span className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 text-txtLight ">
                            <AiOutlineCheck
                              className="hover:text-dark cursor-pointer"
                              onClick={() => movePendingToApproved(val.email)}
                            />
                            
                            <AiOutlineClose className="hover:text-dark cursor-pointer" onClick={() => removePendingUser(val.email)} />
                          </span>
                          <span className="text-xs md:text-sm text-txtLight">
                            {val.timestamp}{" "}
                          </span>
                        </div>
                      </div>
                    ))}
                </>
              )}
              {pending.length > 3 && (
                <button
                  onClick={() => {
                    setShowPendingUsers(!showPendingUsers);
                  }}
                  className="md:px-2 border-2 border-gray-300 rounded-md w-[50%] sm:w-[30%]  self-center text-dark bg-white flex justify-center items-center font-medium text-xs md:text-sm focus:outline-2 focus:outline-txtLight"
                >
                  {showPendingUsers ? "View Less" : "View All"}
                  {showPendingUsers ? (
                    <BiChevronUp className="text-2xl" />
                  ) : (
                    <BiChevronDown className="text-2xl" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="flex w-full sm:w-[80%] md:w-[50%] flex-col px-2 gap-2">
            <label
              htmlFor="approvedRequest"
              className="text-txtLight font-medium text-sm sm:text-base"
            >
              {" "}
              Approved Requests ({approved.length})
            </label>
            <div className="flex flex-col gap-2 overflow-hidden items-center ">
              {approved.length === 0 ? (
                <p className="text-txtLight px-2">No approved requests.</p>
              ) : (
                <>
                  {approved
                    .slice(0, showApprovedUsers ? undefined : 3)
                    .map((val, index) => (
                      <div
                        key={index}
                        className="w-full   flex bg-white text-dark rounded-md border-gray-300 border-[1px] px-2 py-2 items-center"
                      >
                        <div className="flex justify-between gap-2 px-2 w-[50%] items-center border-r-[1px] border-txtLight break-all">
                          <p className="font-medium text-xs sm:text-sm md:text-base">
                            {" "}
                            { val.email}
                          </p>{" "}
                          <FiFileText className="text-txtLight text-sm sm:text-lg hover:text-dark cursor-pointer flex-shrink-0" />
                        </div>

                        <div className="flex items-center flex-1 justify-around  px-2 sm:px-4 gap-2 ">
                          <span className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 text-txtLight ">
                            <AiOutlinePlus
                              className="hover:text-dark cursor-pointer"
                              onClick={() => toggleAddForm(val.email)}
                            />
                            {showAddForm && (
                              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center">
                                <AddUser
                                  handleOutClick={handleAreaClick}
                                  handleClick={toggleAddForm}
                                  email={selectedEmail}
                                />
                              </div>
                            )}
                          </span>
                          <span className="text-xs md:text-sm text-txtLight">
                            {val.timestamp}{" "}
                          </span>
                        </div>
                      </div>
                    ))}
                </>
              )}
              {approved.length > 3 && (
                <button
                  onClick={() => {
                    setShowApprovedUsers(!showApprovedUsers);
                  }}
                  className="md:px-2 border-2 border-gray-300 rounded-md w-[50%] sm:w-[30%]  self-center text-dark bg-white flex justify-center items-center font-medium text-xs md:text-sm focus:outline-2 focus:outline-txtLight"
                >
                  {showApprovedUsers ? "View Less" : "View All"}
                  {showApprovedUsers ? (
                    <BiChevronUp className="text-2xl" />
                  ) : (
                    <BiChevronDown className="text-2xl" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        <UserList/>
      </div>
    </div>
  );
}

export default UserPage;
