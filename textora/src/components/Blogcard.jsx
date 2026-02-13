import React from "react";
import ViewMoreCircle from "./Viewmore";
import "../App.css"

const BlogCard = ({ image, category, title, author, date }) => {
  return (
    <div className="w-full max-w-[450px] cursor-pointer group/card">
      <div className="relative h-80 w-full overflow-hidden rounded-[2rem] bg-gray-200 group">
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/10">
          <ViewMoreCircle size={100} />
        </div>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="blogcardtext mt-5 flex flex-col gap-3 px-1">
        <span id="cat" className="text-lg font-semibold  tracking-wide">
          {category}
        </span>
        <h3 className="text-xl font-medium leading-tight text-gray-900 transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-1 flex items-center gap-4 text-base text-gray-600 font-medium">
          <span>By {author}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;