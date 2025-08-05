import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-36"
            onClick={handleClick}
          />
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/add-movie"
            className="px-3 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition-all"
          >
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
          <div className="mt-4 space-y-4">
            <Link
              to="/add-movie"
              className="block w-full px-3 py-2 bg-cyan-400 text-black font-semibold rounded hover:bg-cyan-300 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Movie
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
