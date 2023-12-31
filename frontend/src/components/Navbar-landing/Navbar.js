import { useState } from "react";
import Navlinks from "./NavLinks";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Search from "./Search";
import User from "./ClickToRegister";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAreaClick = (e) => {
    e.stopPropagation();
  };

  return (
    // nav section
    <nav className="w-[100%] xl:w-[95%] 2xl:w-[80%] flex justify-between items-center border-b-[0.5px] border-txtLight px-4 py-4 flex-shrink md:gap-6 lg:gap-0 top-0 z-50 fixed bg-white">
      {/* logo div */}
      <div className="flex items-center cursor-pointer select-none" onClick={()=>{
        navigate("/")
      }}>
        <img src="./images/logo.png" alt="logo" className="w-[10rem] h-[3rem] select-none"/>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4">
        {/* SEARCH IN SMALL SCREEN */}
        <div className="md:hidden flex">
          <Search handleClick={handleAreaClick} />
        </div>

        {/* hamburger menu */}
        <div
          className="md:hidden flex items-center justify-center "
          onClick={toggleMenu}
        >
          <AiOutlineMenu size={25}/>
          {isOpen && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end ">
              <div
                className="flex flex-col h-full w-64 bg-white animate__animated animate__fadeInRightBig"
                onClick={handleAreaClick}
              >
                {/* close menu */}
                <div className="flex  py-4 px-4 justify-between border-b-[.5px] ">
                  <button
                    className="text-txtLight w-5 h-5 hover:text-dark focus:outline-none"
                    onClick={toggleMenu}
                  >
                    <AiOutlineClose className="text-lg" size={25}/>
                  </button>
                  <User handleClick={handleAreaClick} />
                </div>
                {/* hamburger nav links */}
                <Navlinks
                  ulClassName={
                    "flex flex-col items-center gap-4 font-medium  py-4 px-8"
                  }
                  liClassName={
                    " flex text-txtLight hover:text-dark border-b-[.25px] border-txtLight border-opacity-20 pb-2 justify-center items-center w-[100%]"
                  }
                  iconClassName={"text-base -rotate-90"}
                />
              </div>
            </div>
          )}
        </div>
        <Navlinks
          ulClassName={
            "hidden md:flex items-center flex-wrap md:gap-4 lg:gap-6 font-medium "
          }
          liClassName={
            "flex flex-row text-txtLight md:text-sm lg:text-base hover:text-dark hover:border-b-2 border-dark items-center"
          }
          iconClassName={`md:text-xl lg:text-2xl transform transition-transform`}
        />
      </div>

      <div className="hidden md:flex md:gap-4 lg:gap-6">
        {/* search section */}
        <Search handleClick={handleAreaClick} />
        {/* profile section */}
        <User handleClick={handleAreaClick} />
      </div>
    </nav>
  );
}

export default Navbar;
