import React from "react";
import UserReachBadge from "../components/UserReach";
import "../App.css"

function Home() {
  return (
    <div id="main" className="flex">
      <div className="left w-4/6 h-full px-11 py-10">
        <UserReachBadge />
        <h1 id="heading" className="text-7xl mt-5 tracking-tighter">Where Ideas Meet Simplicity Dive into <span> Articles on Life</span></h1>
        <img src="./line.svg" alt="" />
        <p className="mt-5 text-xl text-gray-600">Welcome to a space where simplicity meets creativity, discover stories, ideas, and insights crafted with clarity and purpose.</p>
      </div>
      <div className="right w-3/6 px-11 py-10">
      <img src="./main_section_Image.avif" alt="" 
      className="w-full h-full object-cover"
      />
      </div>
    </div>
  );
}

export default Home;
