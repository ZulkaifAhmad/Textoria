import React, { useState, useEffect } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Your blog stands out with its insightful content and polished presentation. I always find something useful or inspiring. It's rare to find such consistency and quality. You've created a space that's truly worth revisiting often.",
    name: "John Michael",
    title: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "from-blue-100 to-pink-200",
  },
  {
    id: 2,
    quote:
      "Your blog is a wonderful blend of inspiration and knowledge. Each post feels genuine and thoughtfully written. I've shared it with friends because it's too good to keep to myself. Please keep doing what you're doing!",
    name: "William Henry",
    title: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bgColor: "from-blue-100 to-pink-200",
  },
  {
    id: 3,
    quote:
      "I've learned so much from your posts. The way you break down complex topics into easily understandable content is impressive. It's my go-to resource for industry insights.",
    name: "Emily Davis",
    title: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    bgColor: "from-blue-100 to-pink-200",
  },
  {
    id: 4,
    quote:
      "Consistently excellent! The practical tips and in-depth analysis have helped me improve my skills significantly. Thank you for the dedication you put into this blog.",
    name: "Michael Chen",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    bgColor: "from-blue-100 to-pink-200",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkRes = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);

  const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;

  const prevSlide = () => {
    setIndex((oldIndex) => (oldIndex === 0 ? maxIndex : oldIndex - 1));
  };

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex === maxIndex ? 0 : oldIndex + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 font-sans">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4"
            >
              <div
                className={`relative h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br ${item.bgColor} shadow-sm flex flex-col`}
              >
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-purple-600 mb-4 fill-purple-600 opacity-80" />

                <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {item.quote}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-white"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="bg-purple-600 p-3 md:p-4 rounded-full text-white hover:bg-purple-700 active:scale-95 transition shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-purple-600 p-3 md:p-4 rounded-full text-white hover:bg-purple-700 active:scale-95 transition shadow-lg"
        >
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
