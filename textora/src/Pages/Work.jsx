import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ViewMoreCircle from "../components/Viewmore";
import PortfolioSection from "../components/recentVideos";

function Work() {
  return (
    <div className="work mt-24 md:mt-40 px-6 md:px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
          Home
        </Link>
        <ChevronRight size={18} />
        <p className="text-base md:text-lg text-purple-600 cursor-pointer">
          Work
        </p>
      </div>

      <div className="about-hero flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-10 gap-6">
        <h1 className="text-4xl md:text-6xl w-full md:w-3/5 font-semibold">
          All Popular Works
        </h1>
        <p className="text-base md:text-lg w-full md:w-2/5 text-gray-600">
          Where ideas come alive across design, tech, lifestyle, creativity &
          connection everyday.
        </p>
      </div>

      <div className="ourWork pt-6 md:pt-10">
        <div className="ourwork-cards flex flex-wrap items-start gap-y-10 md:gap-5">
          {[
            {
              src: "/work1.avif",
              tags: ["UX Design", "Mobile App"],
              title:
                "AI Flying The Secrets to Intuitive App Design Creating Seamless User Experiences",
            },
            {
              src: "/work2.avif",
              tags: ["UI Design", "Website"],
              title:
                "Cozmo Web Design Trends for 2024 Ideas to Elevate Your Online Presence.",
            },
            {
              src: "/work3.avif",
              tags: ["Design", "Dashboard"],
              title:
                "The Art of Branding – Designing Visual Identities That Truly Stand Out",
            },
            {
              src: "/work4.avif",
              tags: ["UI Design", "Dashboard"],
              title:
                "Designing Intuitive Dashboards Data Accessible and Actionable",
            },
          ].map((work, index) => (
            <div
              key={index}
              className="ourwork-card cursor-pointer flex flex-col gap-4 w-full md:w-[calc(50%-10px)]"
            >
              <div className="ourworkImage overflow-hidden relative group">
                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block">
                  <ViewMoreCircle size={100} />
                </div>
                <img
                  src={work.src}
                  className="w-full rounded-3xl group-hover:scale-105 relative z-10 h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                  alt="work image"
                />
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3 items-center">
                {work.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="px-4 py-2 text-xs md:text-sm lg:text-base rounded-full border border-purple-400 w-fit"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                {work.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="recentVideos mt-20 md:mt-30">
        <h1 className="text-3xl md:text-6xl font-semibold text-center mb-8 md:mb-16">
          Recent Videos
        </h1>
        <PortfolioSection />
      </div>
    </div>
  );
}

export default Work;
