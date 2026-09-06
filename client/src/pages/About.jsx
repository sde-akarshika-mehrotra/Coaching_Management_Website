import React, { useEffect, useRef, useState } from "react";
import {
  FaUserGraduate,
  FaClipboardList,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Section viewport mein aane par animation start
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 overflow-hidden"
    >
      {/* ================= HEADING ================= */}

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          A Platform Trusted by Students Worldwide
        </h2>

        <p className="mt-5 text-lg md:text-xl text-gray-700">
          Don't Just Take Our Word for It. Delve into the Numbers and Witness
          the Excellence for Yourself!
        </p>
      </div>

      {/* ================= CARDS ================= */}

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* ================= CARD 1 ================= */}

        <div
          className="
            group
            relative
            h-[290px]
            rounded-2xl
            bg-[#fff3e2]
            flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          <div className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            <AnimatedNumber
              value={500}
              suffix="+"
              visible={isVisible}
            />
          </div>

          <p className="relative z-10 mt-3 text-lg md:text-xl text-gray-800">
            Happy Students
          </p>

          {/* Hover Icon */}
          <div
            className="
              absolute
              bottom-0
              text-7xl
              text-orange-400
              opacity-0
              translate-y-20
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <FaUserGraduate />
          </div>
        </div>


        {/* ================= CARD 2 ================= */}

        <div
          className="
            group
            relative
            h-[290px]
            rounded-2xl
            bg-[#ffecef]
            flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          <div className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            <AnimatedNumber
              value={10}
              suffix="+"
              visible={isVisible}
            />
          </div>

          <p className="relative z-10 mt-3 text-lg md:text-xl text-gray-800">
            Mock Tests
          </p>

          {/* Hover Icon */}
          <div
            className="
              absolute
              bottom-0
              text-7xl
              text-red-400
              opacity-0
              translate-y-20
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <FaClipboardList />
          </div>
        </div>


        {/* ================= CARD 3 ================= */}

        <div
          className="
            group
            relative
            h-[290px]
            rounded-2xl
            bg-[#e1f8fc]
            flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          <div className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            <AnimatedNumber
              value={10}
              suffix="+"
              visible={isVisible}
            />
          </div>

          <p className="relative z-10 mt-3 text-lg md:text-xl text-gray-800">
            Video Lectures
          </p>

          {/* Hover Icon */}
          <div
            className="
              absolute
              bottom-0
              text-7xl
              text-cyan-500
              opacity-0
              translate-y-20
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <FaVideo />
          </div>
        </div>


        {/* ================= CARD 4 ================= */}

        <div
          className="
            group
            relative
            h-[290px]
            rounded-2xl
            bg-[#eee8ff]
            flex
            flex-col
            items-center
            justify-center
            text-center
            overflow-hidden
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-xl
          "
        >
          <div className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            <AnimatedNumber
              value={10}
              suffix="+"
              visible={isVisible}
            />
          </div>

          <p className="relative z-10 mt-3 text-lg md:text-xl text-gray-800">
            Practice Papers
          </p>

          {/* Hover Icon */}
          <div
            className="
              absolute
              bottom-0
              text-7xl
              text-purple-500
              opacity-0
              translate-y-20
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
            "
          >
            <FaFileAlt />
          </div>
        </div>

      </div>


      {/* ================= GET STARTED ================= */}

      <div className="flex justify-center mt-7">
        <button className="px-20 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md">
          Get Started
        </button>
      </div>


      {/* ================= NEXT HEADING ================= */}

      <div className="text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Academic Excellence : Results
        </h2>
      </div>
    </section>
  );
};


// ======================================================
// ANIMATED NUMBER
// ======================================================

const AnimatedNumber = ({ value, suffix, visible, million }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let startTime = null;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth movement
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(value * easeOut);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [visible, value]);

  // 15 Million ko special format
  if (million) {
    return (
      <>
        {count >= value
          ? "15 Million"
          : `${(count / 1000000).toFixed(1)} Million`}
        {suffix}
      </>
    );
  }

  return (
    <>
      {count.toLocaleString("en-IN")}
      {suffix}
    </>
  );
};

export default About;