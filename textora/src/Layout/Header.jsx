import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinkClasses = ({ isActive }) =>
    `text-base tracking-wide font-medium transition-colors duration-200 ${
      isActive
        ? 'text-purple-600'
        : 'text-gray-900 hover:text-purple-600'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md font-black ${
      isActive
        ? 'text-purple-600 bg-purple-50'
        : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
    }`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
        setIsOpen(false); 
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`w-full py-4 px-2.5 bg-white border-b border-gray-100 fixed top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src="/vite.svg" alt="Logo" className="h-8 w-full" />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/work" className={navLinkClasses}>Work</NavLink>
            <NavLink to="/blog" className={navLinkClasses}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact Us</NavLink>
          </div>

          <div onClick={()=> navigate("/contact")} className="hidden md:flex items-center">
            <Button text={"Get Started"}/>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
            <NavLink to="/" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/work" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Work</NavLink>
            <NavLink to="/blog" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={mobileLinkClasses} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            
            <div className="pt-4">
              <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:opacity-90">
                Get Started
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;