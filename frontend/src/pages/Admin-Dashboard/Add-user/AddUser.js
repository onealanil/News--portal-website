import { AiOutlineClose } from "react-icons/ai";

function AddUser({ handleClick, handleOutClick,email }) {
  return (
    <>
      <div
        className="relative flex w-[80%] md:w-[75%] px-4 py-4 bg-dark rounded-sm flex-col gap-2"
        onClick={handleOutClick}
      >
        <div className="flex absolute inset-0 h-8 w-8  justify-center items-center">
          <button
            className="text-gray-400 w-5 h-5 hover:text-gray-300 focus:outline-none"
            onClick={handleClick}
          >
            <AiOutlineClose className="text-lg" />
          </button>
        </div>
        {/* become an editor section */}
        <div className="flex flex-1  flex-col justify-center items-center text-white gap-4">
          <div className="flex flex-col gap-1 justify-center items-center">
            <h1 className="text-xl md:text-3xl font-semibold text-center">
              Add User
            </h1>
          </div>
          {/* email and password */}
          <div className="flex flex-col w-[100%] sm:w-[80%] md:w-[100%] justify-center items-center gap-3">
            <input
              type="email"
              value={email}
              placeholder="Email"
              className="text-dark px-4 py-2 w-[100%] md:w-[40%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="text-dark px-4 py-2 w-[100%] md:w-[40%] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="bg-dark border-2 border-gray-400 px-2 md:w-[20%] rounded-md focus:border-gray-300"
          >
            Add Now
          </button>
        </div>
      </div>
    </>
  );
}

export default AddUser;
