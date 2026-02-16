import React from "react";
import UserReachBadge from "../components/UserReach";
import "../App.css";
import { Search } from "lucide-react";
import Button from "../components/button";
import ViewMoreCircle from "../components/Viewmore";
import BlogCard from "../components/Blogcard";
import PortfolioSection from "../components/recentVideos";
import { useNavigate } from "react-router-dom";
import {blog} from "../components/Articles";

function Home() {
  const finalBlogs = blog.slice(1, 2);
  const finalBlogs2 = blog.slice(2, 3);
  const blogs = blog.slice(3, 6);
  let navigate = useNavigate();
  const brands = [
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/111827" },
    { name: "Notion", logo: "https://cdn.simpleicons.org/notion/111827" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/111827" },
    { name: "Spotify", logo: "https://cdn.simpleicons.org/spotify/111827" },
    { name: "Github", logo: "https://cdn.simpleicons.org/github/111827" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/111827" },
  ];

  return (
    <div id="main" className="main mt-20 lg:mt-30">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="left w-full lg:w-4/6 h-full px-5 lg:px-11 pt-5 lg:pt-10">
          <UserReachBadge />
          <h1
            id="heading"
            className="text-4xl lg:text-7xl mt-5 tracking-tighter"
          >
            Where Ideas Meet Simplicity Dive into <span> Articles on Life</span>
          </h1>
          <img src="./line.svg" alt="" className="w-1/2 lg:w-auto" />
          <p className="mt-5 text-lg lg:text-xl text-gray-600">
            Welcome to a space where simplicity meets creativity, discover
            stories, ideas, and insights crafted with clarity and purpose.
          </p>
          <div className="search w-full lg:w-110 flex items-center h-14 px-4 mt-4 shadow shadow-gray-300 rounded-xl">
            <input
              type="text"
              placeholder="Search Resources"
              className="w-full h-full outline-none text-lg"
            />
            <Search color="gray" />
          </div>
          <p className="mt-5 text-base lg:text-lg text-gray-600">
            <strong>Popular tags: </strong>Portfolio, Technology, Design, Food,
            Travel, Fashion
          </p>
        </div>
        <div className="right w-full lg:w-3/6 px-5 lg:px-11 py-5 lg:py-10">
          <img
            src="./main_section_Image.avif"
            alt=""
            className="w-full h-64 lg:h-full object-contain rounded-2xl lg:rounded-none"
          />
        </div>
      </div>

      <div className="counts px-5 lg:px-11 flex flex-wrap lg:flex-nowrap gap-8 lg:gap-5 justify-center lg:justify-start mt-10">
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

      <div className="featuredBlog px-5 lg:px-11 mt-20 lg:mt-25">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-0">
          <h1 className="text-4xl lg:text-7xl font-semibold">Featured Blogs</h1>
          <div onClick={() => navigate("/blog")}>
            <Button text="See All Posts" />
          </div>
        </div>
        <div className="design-parts mt-10 lg:mt-15 flex flex-col lg:flex-row gap-10 lg:gap-7">
          {finalBlogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="webDesign cursor-pointer flex flex-col gap-4 w-full lg:w-1/2"
            >
              <div className="group relative h-64 lg:h-96 w-full overflow-hidden rounded-3xl bg-red-300">
                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-110">
                  <ViewMoreCircle size={120} />
                </div>

                <img
                  src={blog.image}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-102 relative z-10"
                  alt={blog.title}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 z-20 pointer-events-none" />
              </div>
              <div className="text-webdesign flex flex-col gap-2">
                <p className="web-desing-p-text text-lg font-semibold">
                  Web Design
                </p>
                <h1 className="text-xl lg:text-2xl tracking-wide font-semibold">
                  {blog.title}
                </h1>
                <p className="text-base lg:text-lg line-clamp-2 text-gray-600">
                  {blog.description}
                </p>
                <div>
                  <p className="inline font-medium">By {blog.author} </p>
                  <p className="inline ml-5 text-gray-700">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
          {finalBlogs2.map((blog, index) => (
            <div
              onClick={() => navigate(`/blog/${blog.slug}`)}
              className="webDesign cursor-pointer flex flex-col-reverse lg:flex-col gap-4 w-full lg:w-1/2"
            >
              <div className="text-webdesign flex flex-col gap-2">
                <p className="web-desing-p-text text-lg font-semibold">
                  App Design
                </p>
                <h1 className="text-xl lg:text-2xl tracking-wide font-semibold">
                  {blog.title}
                </h1>
                <p className="text-base lg:text-lg line-clamp-2 text-gray-600">
                  {blog.description}
                </p>
                <div>
                  <p className="inline font-medium">By {blog.author} </p>
                  <p className="inline ml-5 text-gray-700">{blog.date}</p>
                </div>
              </div>
              <div className="group relative h-64 lg:h-96 w-full overflow-hidden rounded-3xl">
                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ViewMoreCircle size={120} />
                </div>

                <img
                  src={blog.image}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-102 relative z-10"
                  alt={blog.title}
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 z-20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
        <div  className="blogCards mt-20 px-5 lg:px-11 flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 items-center">
      {blogs.map((blog, index) => (
          <BlogCard
            slug={blog.slug}
            key={index}
            image={`${blog.image}`}
            category={`${blog.category}`}
            title={`${blog.title}`}
            author={`${blog.author}`}
            date={`${blog.date}`}
          />
      ))}
        </div>

      <div className="ourWork px-5 lg:px-11 pt-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-0">
          <h1 className="text-4xl lg:text-6xl font-semibold">Our Works</h1>
          <div onClick={() => navigate("/work")}>
            <Button text={"See All Work"} />
          </div>
        </div>
        <div className="ourwork-cards flex flex-wrap items-start gap-5">
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work1.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UX Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Mobile App
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              AI Flying The Secrets to Intuitive App DesignCreating Seamless
              User Experiences
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work2.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UI Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Website
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              Cozmo Web Design Trends for 2024 Ideas to Elevate Your Online
              Presence.
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work3.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Dashboard
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              The Art of Branding – Designing Visual Identities That Truly Stand
              Out
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work4.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UI Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Dashboard
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              Designing Intuitive Dashboards Data Accessible and Actionable
            </h1>
          </div>
        </div>
      </div>

      <div className="recentPosts px-5 lg:px-11 mt-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-0">
          <h1 className="text-4xl lg:text-6xl font-semibold">Recents Posts</h1>
          <Button text={"See All Posts"} />
        </div>

        <div className="blogCards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <BlogCard
            image="/branding.avif"
            category="Branding"
            title="Building a Strong Brand Identity Beyond The Logo"
            author="Jane Austen"
            date="Mar 17, 2025"
          />
          <BlogCard
            image="/webdesign.avif"
            category="Website"
            title="Building a Strong Website Identity Beyond The Logo"
            author="Jane Austen"
            date="Mar 17, 2025"
          />
          <BlogCard
            image="/logo design.avif"
            category="Logo Design"
            title="The Science Behind a Perfect Logo Tips for Timeless"
            author="Adolf Austen"
            date="Mar 17, 2023"
          />
          <BlogCard
            image="/work4.avif"
            category="Dashboard"
            title="The Science Behind a Perfect Dashboard Tips for Timeless"
            author="Adolf Austen"
            date="Mar 17, 2023"
          />
          <BlogCard
            image="/graphics design.avif"
            category="Graphics Design"
            title=" Top 10 Graphic Design Trends to Watch This Year"
            author="Jams Bond"
            date="Feb 17, 2025"
          />
          <BlogCard
            image="/appdesign.png"
            category="Mobile App"
            title="Designing Apps That Delight: A Guide to Engaging Interfaces"
            author="Jams Bond"
            date="Feb 17, 2025"
          />
        </div>
      </div>

      <div className="ceo-message mt-20 px-5 lg:px-11">
        <div className="intro py-10 lg:py-20 flex flex-col gap-3 justify-center items-center">
          <h1 className="text-4xl lg:text-7xl font-semibold text-center">
            Message from Our CEO
          </h1>
          <p className="text-lg lg:text-xl w-full lg:w-2/3 text-center text-gray-800">
            The creative mind behind With a passion for storytelling and an
            insatiable curiosity, I explore a wide range of topics and beyond.
          </p>
        </div>

        <div className="message flex flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="mess-left relative rounded-4xl w-full lg:w-1/2 h-96 lg:h-auto">
            <div className="bg absolute bottom-0 left-10 lg:left-13 rounded-4xl h-4/5 w-4/5 bg-purple-800">
              &nbsp;
            </div>
            <img
              src="/ceo.avif"
              className="w-full h-full relative z-30 object-contain"
              alt=""
            />
          </div>
          <div className="mess-right flex flex-col gap-3 items-center justify-center w-full lg:w-1/2">
            <h1 className="text-center text-xl lg:text-4xl">
              I am passionate about exploring diverse topics—from design and
              technology to lifestyle, travel, and beyond. I believe that every
              story has the power to spark change
            </h1>
            <div className="flex flex-col gap-1 items-center justify-center">
              <h1 className="text-center text-xl lg:text-2xl mt-5 text-purple-600">
                Alicon Atiqs
              </h1>
              <p className="text-lg lg:text-xl">CEO</p>
            </div>
          </div>
        </div>

        <div className="brand-marquee mt-20 pb-10 w-full overflow-hidden">
          <div className="brand-track">
            {[...brands, ...brands].map((brand, index) => (
              <div className="brand-item" key={`${brand.name}-${index}`}>
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                />
                <span className="text-2xl lg:text-4xl text-gray-400">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="recentVideos mt-30">
          <h1 className="text-6xl font-semibold text-center mb-10">
            Recent Videos
          </h1>
          <PortfolioSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
