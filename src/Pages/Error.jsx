import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#182118] flex items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto space-y-6">

        {/* Glowing 404 */}
        <div className="relative">
          <h1 className="text-[10rem] sm:text-[14rem] font-black text-green-900 leading-none select-none">
            404
          </h1>
          <h1 className="absolute inset-0 text-[10rem] sm:text-[14rem] font-black text-transparent bg-gradient-to-b from-green-400 to-cyan-600 bg-clip-text leading-none blur-[2px] opacity-60 select-none">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-green-900/40 border border-green-700 flex items-center justify-center text-3xl">
            🧭
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Lost in the woods?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => navigate("/")}
            className="btn btn-success text-white px-8"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline btn-success px-8"
          >
            Go Back
          </button>
        </div>

        {/* Footer note */}
        <p className="text-gray-600 text-xs pt-4">
          KeenKeeper · Page not found
        </p>

      </div>
    </div>
  );
};

export default Error;