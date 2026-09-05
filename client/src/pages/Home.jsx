import React from "react";
import student from "../assets/student.jpg";
import teacher from "../assets/teacher.jpg";
import Slider from "./Slider";

const Home = () => {

  return (
    <>
     <div className="w-full">

      <Slider />

      <section className="min-h-[calc(100vh-80px)] w-full flex">
        {/* LEFT PART - CONTENT */}
        <div className="w-1/2 flex flex-col justify-center px-16">
          <h1 className="text-5xl font-bold leading-tight">
            KHAIRABAD'S
            <br />
            <span className="text-purple-500">TRUSTED & AFFORDABLE</span>
            <br />
            <span>EDUCATIONAL PLATFORM</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Build strong concepts, prepare with confidence, and achieve your
            academic goals with the right guidance.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-10 py-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="w-1/2 h-[600px] relative">

          {/* ================= STUDENT CIRCLE - TOP RIGHT ================= */}

          <div className="absolute top-10 right-10 w-[300px] h-[300px]">
            {/* Soft inner background */}
            <div className="absolute inset-5 rounded-full bg-[#f0efff]"></div>

            {/* Dashed outer circle */}
            <div
              className="
        absolute inset-0
        rounded-full
        border-[4px]
        border-dashed
        border-[#c8c9f0]
      "
            ></div>

            {/* Student Image */}

            <div className="absolute inset-8 rounded-full overflow-hidden">
              <img
                src={student}
                alt="Student"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Blue Dot */}
            <span
              className="
    absolute
    -top-2
    left-[55px]
    w-4 h-4
    rounded-full
    bg-[#55b6ef]
    z-10
  "
            ></span>

            {/* Pink Dot */}
            <span
              className="
    absolute
    top-1/2
    -right-2
    -translate-y-1/2
    w-3 h-3
    rounded-full
    bg-[#ef5b87]
    z-10
  "
            ></span>

            {/* Orange Dot */}
            <span
              className="
    absolute
    -bottom-2
    left-[105px]
    w-3 h-3
    rounded-full
    bg-[#f28a52]
    z-10
  "
            ></span>
          </div>

          {/* ================= TEACHER CIRCLE - BOTTOM LEFT ================= */}
          
          <div className="absolute bottom-8 left-10 w-[300px] h-[300px]">
            {/* Soft inner background */}
            <div className="absolute inset-5 rounded-full bg-[#f0efff]"></div>

            {/* Dashed outer circle */}
            <div
              className="
        absolute inset-0
        rounded-full
        border-[4px]
        border-dashed
        border-[#c8c9f0]
      "
            ></div>

            {/* Teacher Image */}
            <div className="absolute inset-8 rounded-full overflow-hidden">
              <img
                src={teacher}
                alt="Teacher"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Blue Dot */}
            <span
              className="
    absolute
    -top-2
    left-[65px]
    w-4 h-4
    rounded-full
    bg-[#55b6ef]
    z-10
  "
            ></span>

            {/* Orange Dot */}
            <span
              className="
    absolute
    -bottom-2
    left-[105px]
    w-3 h-3
    rounded-full
    bg-[#f28a52]
    z-10
  "
            ></span>
          </div>

          {/* ================= QUESTION BUBBLE ================= */}
          <div
            className="
      absolute
      top-[125px]
      right-[230px]
      bg-white
      px-5 py-4
      rounded-xl
      shadow-lg
      text-gray-800
      text-[18px]
      font-medium
      whitespace-nowrap
      z-20
    "
          >
            Nilay Sir, What is BSG?
            
            {/* Bubble arrow */}
            <div
              className="
        absolute
        right-[-14px]
        top-1/2
        -translate-y-1/2
        w-0 h-0
        border-t-[12px] border-t-transparent
        border-b-[12px] border-b-transparent
        border-l-[15px] border-l-white
      "
            ></div>
          </div>

          {/* ================= ANSWER BUBBLE ================= */}
          <div
            className="
      absolute
      top-[270px]
      right-[150px]
      bg-[#17105c]
      text-white
      px-5 py-4
      rounded-xl
      text-[18px]
      leading-7
      font-medium
      w-[280px]
      z-20
    "
          >
            BSG is where students learn from qualified staff and can grow with guidance.
            {/* Bubble arrow */}
            <div
              className="
        absolute
        left-[-15px]
        top-5
        w-0 h-0
        border-t-[12px] border-t-transparent
        border-b-[12px] border-b-transparent
        border-r-[16px] border-r-[#17105c]
      "
            ></div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
