import React from "react";

const Features = () => {
  return (
    <>
      {/* ================= STATS / FEATURES BAR ================= */}
      <section className="relative z-30 -mt-10 px-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md border border-gray-100">
          <div className="grid grid-cols-4 py-5">
            {/* 1. DAILY LIVE */}
            <div className="flex flex-col items-center justify-center text-center px-6 border-r border-gray-300">
              <div className="text-4xl mb-2">📺</div>

              <h3 className="text-xl font-medium text-gray-900">Daily On-projector</h3>

              <p className="text-lg text-gray-700 mt-1">Interactive classes</p>
            </div>

            {/* 2. TESTS */}
            <div className="flex flex-col items-center justify-center text-center px-6 border-r border-gray-300">
              <div className="text-4xl mb-2">📝</div>

              <h3 className="text-xl font-medium text-gray-900">
                Provided
              </h3>

              <p className="text-lg text-gray-700 mt-1">
                Tests, sample papers & notes
              </p>
            </div>

            {/* 3. DOUBT SOLVING */}
            <div className="flex flex-col items-center justify-center text-center px-6 border-r border-gray-300">
              <div className="text-4xl mb-2">🧠</div>

              <h3 className="text-xl font-medium text-gray-900">24 × 7</h3>

              <p className="text-lg text-gray-700 mt-1">
                Available for your doubts
              </p>
            </div>

            {/* 4. OFFLINE CENTRES */}
            <div className="flex flex-col items-center justify-center text-center px-6">
              <div className="text-4xl mb-2">🏆</div>

              <h3 className="text-xl font-medium text-gray-900">Healthy Environment</h3>

              <p className="text-lg text-gray-700 mt-1">Offline centre</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
