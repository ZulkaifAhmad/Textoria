import React, { useState } from "react";
import { X, Play } from "lucide-react";

const PortfolioSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleCardClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          onClick={handleCardClick}
          className="group cursor-pointer flex flex-col gap-4"
        >
          <div className="relative overflow-hidden rounded-2xl w-full h-[400px]">
            <img
              src="webdesign.avif"
              alt="Web Design"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-purple-600 fill-current ml-1" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-purple-600 font-medium text-xl">
              Web Design
            </span>
            <h2 className="text-2xl font-medium text-gray-900 leading-tight">
              Create a Landing Page That Performs Great
            </h2>
            <p className="text-gray-500 text-lg">
              Explore how minimalism in design can elevate user experience and
              make your brand stand out with clarity and focus experience and
              make your Brand.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div
            onClick={handleCardClick}
            className="group cursor-pointer flex flex-col gap-3"
          >
            <div className="relative overflow-hidden rounded-2xl w-full h-[240px]">
              <img
                src="appdesign.png"
                alt="App Design"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-purple-600 fill-current ml-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-purple-600 font-medium text-xl">App</span>
              <h3 className="text-2xl font-medium text-gray-900">
                Behind the App Design A Day in the Life of a Designer
              </h3>
            </div>
          </div>

          <div
            onClick={handleCardClick}
            className="group cursor-pointer flex flex-col gap-3"
          >
            <div className="relative overflow-hidden rounded-2xl w-full h-[240px]">
              <img
                src="branding.avif"
                alt="Branding"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-purple-600 fill-current ml-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-purple-600 font-medium text-xl">
                Design Process
              </span>
              <h3 className="text-2xl font-medium text-gray-900">
                How to Design a Timeless Logo: A Step by-Step Guide
              </h3>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src="video.mp4"
              controls
              autoPlay
              className="w-full aspect-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;
