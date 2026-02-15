import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import UserReachOut from "../components/UserReach.jsx";
import Slider from "../components/Slider.jsx";

function About() {
  return (
    <div className="about mt-24 md:mt-35 px-6 md:px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
          Home
        </Link>
        <ChevronRight size={18} />
        <p className="text-base md:text-lg text-purple-600 cursor-pointer">
          About
        </p>
      </div>

      <div className="about-hero flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-10 gap-6">
        <h1 className="text-4xl md:text-6xl w-full md:w-2/5 font-semibold">
          The Story Behind The Blog
        </h1>
        <p className="text-base md:text-lg w-full md:w-2/5 text-gray-600">
          Explore diverse topics, gain insights, and be inspired with engaging
          content that connects and informs.
        </p>
      </div>

      <div className="about-hero-image relative flex justify-center items-center mt-10 md:mt-15">
        <div className="background_purple absolute top-0 z-0 w-full h-40 md:h-70 bg-purple-400 rounded-3xl md:rounded-4xl"></div>
        <img
          src="/aboutHero.avif"
          className="w-full md:w-9/10 relative top-10 md:top-15 z-10 rounded-2xl h-64 md:h-auto object-cover"
          alt="About Hero"
        />
      </div>

      <div className="whoweare flex flex-col md:flex-row items-center w-full p-0 md:p-10 mt-32 md:mt-40 gap-10">
        <div className="img w-full md:w-1/2">
          <img
            src="whoweare.avif"
            className="h-auto w-full md:w-8/9 object-cover rounded-2xl"
            alt="Who we are"
          />
        </div>
        <div className="whotext w-full md:w-1/2 flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl text-purple-600 font-bold">
            Who we Are
          </h2>
          <p className="text-lg md:text-xl text-gray-800">
            A platform dedicated to exploring ideas that matter. We are
            passionate creators and storytellers.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            Who believe in the power of words to inspire and connect. Our blog
            topics—from design and technology to lifestyle, travel, and beyond.
          </p>
          <div className="mt-4">
            <UserReachOut />
          </div>
        </div>
      </div>

      <div className="counts px-0 md:px-5 lg:px-11 grid grid-cols-2 lg:flex lg:flex-nowrap gap-8 lg:gap-5 justify-center lg:justify-between mt-20">
        {[
          { label: "Perfect Posts", value: "480" },
          { label: "Social Shares", value: "2K+" },
          { label: "Super Authorize", value: "100+" },
          { label: "Regular Visitors", value: "2K" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div className="count flex flex-col items-center gap-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
                {item.value}
              </h1>
              <p className="text-xs md:text-lg text-gray-500 font-medium text-center">
                {item.label}
              </p>
            </div>
            {index < 3 && (
              <div className="line h-16 w-0.5 bg-purple-200 hidden lg:block"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="teamMembers mt-24 md:mt-30 w-full px-0">
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-12">
          Team Members
        </h1>
        <div className="team-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {[
            {
              name: "Devid Carson",
              role: "Creative Writter",
              img: "/writter.avif",
            },
            { name: "Mason Blake", role: "UX Researcher", img: "/ux.avif" },
            {
              name: "James Edward",
              role: "Design Manager",
              img: "/manager.avif",
            },
            {
              name: "William Henry",
              role: "Marketing Lead",
              img: "/marketingLead.avif",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="team-card flex flex-col items-center group"
            >
              <div className="overflow-hidden rounded-2xl w-full">
                <img
                  src={member.img}
                  className="h-80 md:h-90 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  alt={member.name}
                />
              </div>
              <p className="mt-5 text-xl md:text-2xl font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-gray-500 text-base md:text-lg">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews mt-24 md:mt-32">
        <div className="flex justify-center items-center flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-6xl font-semibold">
            What People Say About Us!
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/2 text-base md:text-lg text-gray-600">
            Discover what our amazing readers have to say — real stories, honest
            reviews, and heartfelt feedback that showcase the value of our
            content and community.
          </p>
        </div>
        <div className="mt-12">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default About;
