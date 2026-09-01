import React, { useState } from "react";

const Navbar = () => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <>
      {/* LOGO */}
      <div className="w-full h-20 flex items-center px-26 bg-black/90 backdrop-blur-md text-white sticky top-0 z-50">
        <div className="relative w-14 h-14 rounded-full bg-white border-2 border-black flex items-center justify-center">
          <span className="text-black font-bold text-lg z-10">BSG</span>

          <div className="absolute -inset-2 rounded-full border-2 border-transparent border-t-white/90 border-b-white/90 animate-[spin_5s_linear_infinite]"></div>
        </div>

        {/* COURSES/POP-UP */}
        <div className="relative ml-10">
          <button
            onClick={() => setShowCourses(!showCourses)}
            className="h-14 px-7 ml-10 border border-purple-400 rounded-md text-purple-400 flex items-center gap-3 hover:bg-purple-500 hover:text-white transition"
          >
            All Courses
            <span
              className={`transition-transform duration-300 ${
                showCourses ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          {showCourses && (
            <div className="absolute top-16 left-0 w-[1000px] bg-white text-black rounded-b-2xl shadow-2xl z-50 flex overflow-hidden">
              {/* LEFT SECTION */}
              <div className="w-[35%] border-r border-gray-200">
                <div className="px-6 py-5 bg-gray-50">
                  <h3 className="font-bold text-lg">Class 1</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 2</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {" "}
                    State Board, CBSE, ICSE, ISC{" "}
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 3</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 4</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 5</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 6</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 7</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 8</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 9</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC{" "}
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 10</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 11</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>

                <div className="px-6 py-5">
                  <h3 className="font-bold text-lg">Class 12</h3>
                  <p className="text-sm text-gray-500 mt-2">
                    State Board, CBSE, ICSE, ISC
                  </p>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="w-[65%] p-7">
                <div className="grid grid-cols-3 gap-5">
                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">🎓</span>
                    <span className="font-semibold text-lg">9th Maths</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">🎓</span>
                    <span className="font-semibold text-lg">9th PCM</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">⚙️</span>
                    <span className="font-semibold text-lg">
                      9th Only Physics, Chemistry
                    </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">⚖️</span>
                    <span className="font-semibold text-lg">9th English</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">⚖️</span>
                    <span className="font-semibold text-lg">
                      10th Mathematics
                    </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">🎓</span>
                    <span className="font-semibold text-lg">10th Science</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">🏛️</span>
                    <span className="font-semibold text-lg">10th English</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">👨‍🎓</span>
                    <span className="font-semibold text-lg">
                      11th Mathematics
                    </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">📐</span>
                    <span className="font-semibold text-lg">11th Biology</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">11th PCM </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">11th PCB</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">12th Biology</span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">
                      12th Mathematics
                    </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">12th PCM </span>
                  </div>

                  <div className="h-24 border rounded-xl flex items-center px-6 hover:shadow-md cursor-pointer">
                    <span className="text-3xl mr-4">💊</span>
                    <span className="font-semibold text-lg">12th PCB</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* LINKS */}
        <ul className="flex items-center gap-10 ml-8">
          <li className="text-base font-medium cursor-pointer ">HOME</li>
          <li className="text-base font-medium cursor-pointer">ABOUT</li>
          <li className="text-base font-medium cursor-pointer">ADMISSION</li>
          <li className="text-base font-medium cursor-pointer">FEE DEPOSIT</li>
          <li className="text-base font-medium cursor-pointer">LOCATION</li>
          <li className="text-base font-medium cursor-pointer">
            FREE STUDY MATERIAL
          </li>
        </ul>

        {/* LOGIN */}
        <button className="ml-auto px-8 py-3 bg-white text-black rounded-lg font-semibold">
          Login/Register
        </button>
      </div>
    </>
  );
};

export default Navbar;
