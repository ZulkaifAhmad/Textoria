import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import ViewMoreCircle from "../components/Viewmore";
import BlogCard from "../components/Blogcard";

function Blog() {
  return (
    <div className="blog mt-24 md:mt-40 px-6 md:px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
          Home
        </Link>
        <ChevronRight size={18} />
        <p className="text-base md:text-lg text-purple-600 cursor-pointer">
          Blog
        </p>
      </div>

      <div className="about-hero flex flex-col md:flex-row justify-between items-start md:items-center mt-5 gap-6">
        <h1 className="text-3xl md:text-6xl w-full md:w-3/5 font-semibold">
          Stories About My Life That Inspire Me
        </h1>
        <p className="text-base md:text-lg w-full md:w-2/5 text-gray-600">
          Explore diverse topics, inspiring insights, and meaningful stories on
          Blog.
        </p>
      </div>

      <div className="featuredBlog mt-12 md:mt-20">
        <div className="design-parts flex flex-col lg:flex-row gap-10">
          <div className="webDesign cursor-pointer flex flex-col gap-4 w-full lg:w-2/3">
            <div className="group relative h-64 md:h-80 lg:h-100 w-full overflow-hidden rounded-3xl bg-red-300">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/appdesign.png"
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 relative z-10"
                alt="App Design"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 z-20 pointer-events-none" />
            </div>
            <div className="text-webdesign flex flex-col gap-2">
              <p className="text-purple-600 text-lg font-semibold">
                Web Design
              </p>
              <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
                The Evolution of Web Design From Static to Dynamic
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Web design has evolved from static pages to dynamic, interactive
                experiences. Modern sites adapt to users in real-time.
              </p>
              <div className="flex items-center gap-4 text-sm md:text-base">
                <p className="font-medium">By Alicon Atiqs</p>
                <p className="text-gray-400">Apr 20, 2025</p>
              </div>
            </div>
          </div>

          <div className="right-sidebar w-full lg:w-1/3">
            <div className="blogCards flex flex-col gap-6">
              {[
                {
                  src: "/process.avif",
                  title: "Design Process: From Concept to Completion",
                },
                {
                  src: "/perfectFeature.avif",
                  title: "Design Process: From Concept to Completion",
                },
                {
                  src: "/shirt.avif",
                  title: "Designing the Perfect Feature comparison table",
                },
                {
                  src: "/behindApp.avif",
                  title: "Behind the App Design A Day in the Life",
                },
              ].map((item, index) => (
                <div key={index} className="blogcard flex gap-4 items-center">
                  <img
                    src={item.src}
                    className="w-24 h-20 md:w-32 md:h-24 rounded-2xl object-cover"
                    alt=""
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-base md:text-lg font-medium line-clamp-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">Feb 7, 2023</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-20 md:mt-30">
        <div className="partOne w-full lg:w-3/4">
          <h1 className="text-4xl md:text-6xl font-semibold mb-10">
            Recent Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlogCard
              image="/branding.avif"
              category="Branding"
              title="Building a Strong Brand Identity Beyond The Logo"
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <BlogCard
              image="/appdesign.png"
              category="Website Applications"
              title="Building a Strong Application Identity Beyond Coding"
              author="Zulkaif Austen"
              date="Jun 17, 2005"
            />
            <BlogCard
              image="/behindApp.avif"
              category="Behind App Design"
              title="The Science Behind a Perfect Application Tips for Timeless"
              author="Adolf Austen"
              date="Mar 17, 2023"
            />
          </div>
        </div>

        <div className="partTwo w-full lg:w-1/4 lg:pl-8 space-y-12">
          <div>
            <p className="text-2xl font-semibold mb-8">Top Authors</p>
            <div className="space-y-6">
              {[
                { img: "ux.avif", name: "Alicon Atiqs", role: "Founder & CEO" },
                { img: "writter.avif", name: "Alicon Atiqs", role: "Blogger" },
              ].map((author, i) => (
                <div key={i} className="author-card flex gap-4 items-center">
                  <img
                    src={author.img}
                    className="w-16 h-16 object-cover rounded-full"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-medium">{author.name}</p>
                    <p className="text-sm text-gray-500 mb-2">{author.role}</p>
                    <div className="flex gap-2">
                      <Facebook size={16} className="text-blue-600" />
                      <Instagram size={16} className="text-pink-600" />
                      <Twitter size={16} className="text-sky-500" />
                      <Linkedin size={16} className="text-blue-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-2xl font-semibold">Categories</p>
            <div className="categorie flex flex-col gap-2">
              {["All Blogs", "Life Style", "Travel", "Foods"].map((cat) => (
                <div
                  key={cat}
                  className="categorie-block py-3 cursor-pointer border-b border-purple-100 hover:border-purple-600 transition-colors"
                >
                  <p className="text-gray-700 hover:text-purple-600">{cat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
