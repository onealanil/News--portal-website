import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  //handle login function
  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    console.log(loginData);
  };

  return (
    <>
      <div className="bg-dark fixed inset-0 flex items-center justify-center select-none">
        <div className="flex flex-col w-[90%] md:flex-row xl:w-[85%] 2xl:w-[75%] gap-x-4 p-0 md:p-5 items-center justify-center">
          <div className="w-full flex flex-col md:w-[50%] gap-y-3 p-4">
            <div className="w-full flex flex-col items-center justify-center cursor-pointer select-none">
              <img
                src="./images/logo-footer.png"
                alt="logo"
                className="w[13rem] h-[7rem]"
              />
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-y-2">
              <span className="text-[1rem] md:text-[1.5rem] font-black leading-relaxed tracking-wide text-white">
                Login to your account
              </span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="w-full flex flex-col items-center juistify-center mt-5 gap-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full md:w-[90%] xl:w-[80%] 2xl:w-[75%] px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />

                {/* for password  */}
                <div className="w-full md:w-[90%] xl:w-[80%] 2xl:w-[75%] relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-orange"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                  >
                    {showPassword ? (
                      <AiFillEye className="h-5 w-5" />
                    ) : (
                      <AiFillEyeInvisible className="h-5 w-5" />
                    )}
                  </button>
                </div>
                <div className="flex w-full md:w-[90%] xl:w-[80%] 2xl:w-[75%] items-center justify-between mt-2">
                  <div>
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4  bg-gray-100 border-gray-300 rounded focus:outline-none"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ml-2 mt-1 text-sm font-medium font-poppins text-white"
                    >
                      Remember Me
                    </label>
                  </div>
                  <span className="text-red-500 font-opensans font-semibold text-xs">
                    Forget your password?
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-[90%] xl:w-[80%] 2xl:w-[75%] font-poppins text-sm leading-relaxed px-4 py-2 cursor-pointer bg-red-500 text-white rounded-md text-center mt-2"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
