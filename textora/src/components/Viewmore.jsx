import React from "react";
import { MoveUpRight } from "lucide-react";

const ViewMoreCircle = ({ size = 120 }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-full overflow-hidden shadow-lg"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 opacity-90" />

      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-full h-full animate-[spin_10s_linear_infinite]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="transparent"
          />
          <text className="text-[11px] font-bold uppercase tracking-widest fill-white">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              View More ✦ View More ✦ View More ✦
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative z-10 text-white pointer-events-none">
        <MoveUpRight size={size * 0.35} strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default ViewMoreCircle;
