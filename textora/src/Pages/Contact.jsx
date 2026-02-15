import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Mail,
  Send,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <div className="mt-24 md:mt-40 px-6 md:px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
          Home
        </Link>
        <ChevronRight size={18} />
        <p className="text-base md:text-lg text-purple-600 cursor-pointer">
          Contact Us
        </p>
      </div>

      <div className="about-hero flex flex-col md:flex-row justify-between items-start md:items-center mt-5 gap-4">
        <h1 className="text-4xl md:text-6xl w-full md:w-3/5 font-semibold">
          Get In Touch
        </h1>
        <p className="text-base md:text-lg w-full md:w-2/5 text-gray-600">
          Your feedback is important to us because it helps us improve our
          services and provide a better experience.
        </p>
      </div>

      <div className="w-full rounded-3xl md:rounded-4xl mt-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-700 p-6 md:p-12 font-sans">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col justify-center text-white space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                We’d Love to Hear! Got Questions?
              </h2>
              <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-md">
                We believe in building meaningful conversations and a strong
                community. Feel free to drop us a message we're here to help or
                simply chat about ideas.
              </p>
            </div>

            <div className="relative py-8 hidden md:block">
              <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/20 transform rotate-[-10deg] hover:rotate-0 transition-all duration-500">
                <Mail size={64} className="text-pink-200 drop-shadow-lg" />
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs md:text-sm text-white/80 mb-2">
                Feel free to reach out
              </p>
              <a
                href="mailto:hello@designmonks.com"
                className="flex items-center gap-3 text-lg md:text-xl font-semibold hover:text-pink-200 transition-colors group"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span>hello@designmonks.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-0 md:p-2">
            <div className="space-y-2">
              <label className="block text-white font-medium ml-1">
                Your Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-2xl text-gray-800 bg-white border-none focus:ring-4 focus:ring-purple-400/30 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white font-medium ml-1">
                Your Email *
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-5 py-4 rounded-2xl text-gray-800 bg-white border-none focus:ring-4 focus:ring-purple-400/30 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-white font-medium ml-1">
                Message*
              </label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full px-5 py-4 rounded-2xl text-gray-800 bg-white border-none focus:ring-4 focus:ring-purple-400/30 outline-none transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 text-slate-800 font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 w-full sm:w-auto">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 bg-white font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Reach Out Directly
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base">
              Get in touch with us through any of these channels. We are here to
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-purple-600">
                <Mail className="w-6 h-6 text-purple-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Email Us
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-[200px]">
                Ask us a question by email and we will respond shortly.
              </p>
              <span className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                hello@designmonks.co
              </span>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-purple-600">
                <MapPin className="w-6 h-6 text-purple-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Drop in Us
              </h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-[200px]">
                Visit our office to discuss the details of your question.
              </p>
              <span className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Directions <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-purple-600">
                <Phone className="w-6 h-6 text-purple-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-[200px]">
                Call us if your question requires an immediate response.
              </p>
              <span className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                +1 800 778 884 <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
