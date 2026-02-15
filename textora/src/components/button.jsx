import React from "react";
import { ArrowUpRight } from "lucide-react";

function Button({ text }) {
  return (
    <>
      <button className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium  hover:opacity-90 transition-all shadow-md active:scale-95">
        {text}
        <ArrowUpRight size={20} />
      </button>
    </>
  );
}

export default Button;
