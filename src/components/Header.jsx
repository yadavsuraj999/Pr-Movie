import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full bg-transparent z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-12 md:h-16" />
        </div>
        {/* <ul className="hidden lg:flex gap-8 font-semibold text-[17px] text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Movie</li>
          <li className="cursor-pointer">Tv Show</li>
          <li className="cursor-pointer">Video</li>
          <li className="cursor-pointer">Pages</li>
        </ul> */}

        <div className="hidden lg:flex items-center gap-5">
          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-white bg-opacity-10 text-white placeholder:text-gray-300 rounded px-4 py-2 pr-10"
            />
            <IoSearchSharp
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none"
            />
          </div> */}
          <Link to={"add-movie"} className="px-3 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition-all">
            Add Movie
          </Link>
        </div>

        <div className="lg:hidden text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white py-4 px-6 space-y-4">
          {/* <ul className="space-y-2 font-semibold text-[17px]">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Movie</li>
            <li className="cursor-pointer">Tv Show</li>
            <li className="cursor-pointer">Video</li>
            <li className="cursor-pointer">Pages</li>
          </ul> */}
          <div className="mt-4 space-y-4">
            {/* <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white bg-opacity-10 text-white placeholder:text-gray-300 rounded px-4 py-2 pr-10"
              />
              <IoSearchSharp
                size={20}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 pointer-events-none"
              />
            </div> */}
            <button className="w-full px-3 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition-all">
              Add Movie
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
