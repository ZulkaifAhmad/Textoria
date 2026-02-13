import React from 'react'
import { Facebook , Linkedin , Instagram , Twitter , ArrowRight} from 'lucide-react'

function Footer() {
  return (
    <footer className='p-11 mt-5'>
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#9333ea] to-[#4f46e5] px-6 py-12 shadow-2xl md:px-9 md:py-2 lg:px-20 lg:py-15">
  <div className="pointer-events-none absolute left-1/3 top-0 h-full w-full -translate-x-1/4 -translate-y-10 opacity-[0.07]">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full text-white">
      <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>

  <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
    <div className="w-full lg:w-1/2">
      <h2 className="text-5xl font-bold leading-[1.1] tracking-tight text-white ">
        Inspiration, Straight to Your Inbox
      </h2>
    </div>

    <div className="w-full lg:w-5/12">
      <p className="mb-8 text-base font-medium text-purple-100 md:text-lg">
        Fresh ideas, tips, and stories delivered weekly to spark creativity and motivation.
      </p>

      <form className="flex w-full flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Your email"
          className="w-full flex-1 rounded-2xl border-none bg-white px-6 py-4 text-base text-gray-900 placeholder-gray-500 outline-none ring-offset-2 focus:ring-2 focus:ring-white/50"
        />
        <button
          type="button"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-pink-100 px-8 py-4 font-semibold text-gray-900 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10">Submit</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-pink-100 to-white opacity-80" />
        </button>
      </form>
    </div>
  </div>
</div>

<div className="w-full px-6 py-12 lg:px-0">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-12 border-b border-gray-200 pb-12 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col w-2/3 gap-6">
        <img src="/vite.svg" alt="Textora" className="h-8 w-auto self-start" />
        <a href="mailto:hello@designmonks.co" className="text-xl font-medium text-gray-900 transition-colors hover:text-purple-600">
          hello@designmonks.co
        </a>
        <div className="flex flex-col gap-4">
          <span className="text-base text-gray-600">Stay Socially Connected with Us!</span>
          <div className="flex gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-transform hover:scale-110">
              <Facebook size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-transform hover:scale-110">
              <Linkedin size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-transform hover:scale-110">
              <Instagram size={18} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-transform hover:scale-110">
              <Twitter size={18} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-bold text-gray-900">Categories</h3>
        <ul className="flex flex-col gap-4 text-gray-600">
          {['All Blogs', 'Lifestyle', 'Travel', 'Food', 'Healthcare', 'Technology'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-purple-600">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-6 text-lg font-bold text-gray-900">Company</h3>
        <ul className="flex flex-col gap-4 text-gray-600">
          {['About Us', 'Work', 'Blog', 'Contact Us', 'Author', '404'].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-purple-600">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
            alt="Alicon Atiqs"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">Alicon Atiqs</h4>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </div>
        </div>
        <p className="font-medium text-gray-900">
          We're dedicated to finding right solution for you.
        </p>
        <a href="#" className="flex items-center gap-2 font-semibold text-purple-600 transition-colors hover:text-purple-700">
          Need Assistance? <ArrowRight size={18} />
        </a>
      </div>
    </div>

    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-gray-500 md:flex-row">
      <p>© 2025 Design Monks. All rights reserved.</p>
      <a href="#" className="hover:text-purple-600">
        Terms & Conditions
      </a>
    </div>
  </div>
</div>
    </footer>
  )
}

export default Footer