import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../App.css";
import UserReachOut from "../components/UserReach.jsx";

function About() {
  return (
    <div className="about mt-35 px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-lg">
          Home
        </Link>
        <ChevronRight size={20} />
        <p className="text-lg text-purple-600 cursor-pointer">About</p>
      </div>
      <div className="about-hero flex justify-between items-center mt-10">
        <h1 className="text-6xl w-2/5 font-semibold">
          The Story Behind The Blog
        </h1>
        <p className="text-lg w-2/5">
          Explore diverse topics, gain insights, and be inspired with engaging
          content that connects and informs.
        </p>
      </div>
      <div className="about-hero-image relative flex justify-center items-center mt-15">
        <div className="background_purple absolute top-0 z-0 w-full h-70 bg-purple-400 rounded-4xl"></div>
        <img
          src="/aboutHero.avif"
          className="w-9/10 relative top-15 z-10 rounded-2xl h-full object-cover"
          alt=""
        />
      </div>
      <div className="whoweare flex overflow-hidden w-full p-10 mt-30">
        <div className="img py-10 w-1/2">
          <img
            src="whoweare.avif"
            className="h-full w-8/9 object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="whotext h-full items-start justify-center w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl text-purple-600">Who we Are</h2>
          <p className="text-2xl">
            A platform dedicated to exploring ideas that matter. We are
            passionate creators and storytellers.{" "}
          </p>
          <p className="text-2xl">
            Who believe in the power of words to inspire and connect. Our blog
            topics—from design and technology to lifestyle, travel, and beyond.
          </p>
          <UserReachOut />
        </div>
      </div>

      <div className="counts px-5 lg:px-11 flex lg:flex-nowrap gap-8 lg:gap-5 justify-center lg:justify-between mt-20">
        <div className="count flex flex-col items-center gap-1 w-1/3 lg:w-auto">
          <h1 className="text-3xl lg:text-5xl font-medium">480</h1>
          <p className="text-sm lg:text-lg text-gray-700 font-medium text-center">
            Perfect Posts
          </p>
        </div>

        <div className="line h-20 w-0.5 bg-purple-200 hidden lg:block"></div>

        <div className="count flex flex-col items-center gap-1 w-1/3 lg:w-auto">
          <h1 className="text-3xl lg:text-5xl font-medium">2K+</h1>
          <p className="text-sm lg:text-lg text-gray-700 tracking-wide font-medium text-center">
            Social Shares
          </p>
        </div>
        <div className="line h-20 w-0.5 bg-purple-200 hidden lg:block"></div>

        <div className="count flex flex-col items-center gap-1 w-1/3 lg:w-auto">
          <h1 className="text-3xl lg:text-5xl font-medium">100+</h1>
          <p className="text-sm lg:text-lg text-gray-700 tracking-wide font-medium text-center">
            Super Authorize
          </p>
        </div>
        <div className="line h-20 w-0.5 bg-purple-200 hidden lg:block"></div>

        <div className="count flex flex-col items-center gap-1 w-1/3 lg:w-auto">
          <h1 className="text-3xl lg:text-5xl font-medium">2K</h1>
          <p className="text-sm lg:text-lg text-gray-700 tracking-wide font-medium text-center">
            Regular Visitors
          </p>
        </div>
      </div>

      <div className="teamMembers  mt-30 w-full h-screen p-5">
        <h1 className="text-6xl font-semibold lg:text-center">Team Members</h1>
        <div className="team-cards flex justify-between items-center gap-2 mt-12">
          <div className="team-card w-fit h-110 overflow-auto">
            <img
              src="/writter.avif"
              className="h-90 rounded-2xl w-70 object-cover object-top"
              alt=""
            />
            <p className="mt-5 text-center text-2xl font-semibold">
              Devid Carson
            </p>
            <p className="text-center text-lg">Creative Writter</p>
          </div>
          <div className="team-card w-fit h-110 overflow-auto">
            <img
              src="/ux.avif"
              className="h-90 rounded-2xl w-70 object-cover object-top"
              alt=""
            />
            <p className="mt-5 text-center text-2xl font-semibold">
              Mason Blake
            </p>
            <p className="text-center text-lg">UX Researcher</p>
          </div>
          <div className="team-card w-fit h-110 overflow-auto">
            <img
              src="/manager.avif"
              className="h-90 rounded-2xl w-70 object-cover object-top"
              alt=""
            />
            <p className="mt-5 text-center text-2xl font-semibold">
              James Edward
            </p>
            <p className="text-center text-lg">Design Manager</p>
          </div>
          <div className="team-card w-fit h-110 overflow-auto">
            <img
              src="/marketingLead.avif"
              className="h-90 rounded-2xl w-70 object-cover object-top"
              alt=""
            />
            <p className="mt-5 text-center text-2xl font-semibold">
              William Henry
            </p>
            <p className="text-center text-lg">Marketing Lead</p>
          </div>
        </div>
      </div>

      <div className="reviews mt-30">
        <div className="flex justify-center items-center flex-col gap-2.5">
        <h1 className="text-6xl font-semibold">What People Say About Us!</h1>
        <p className="w-1/2 text-center text-lg">Discover what our amazing readers have to say — real stories, honest reviews, and heartfelt feedback that showcase the value of our content and community.</p>
        </div>
      </div>


    </div>
  );
}

export default About;
