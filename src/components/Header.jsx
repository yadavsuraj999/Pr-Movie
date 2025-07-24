const Header = () => {
  return (
    <div className="w-full fixed top-0 z-10">
      <header className="container mx-auto flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md shadow-sm">
        <div className="flex items-center space-x-2 text-cyan-300 font-semibold text-xl">
          <span role="img" aria-label="logo">🎬</span>
          <span>MovieDB</span>
        </div>
        <button className="bg-cyan-400 text-black px-4 py-2 rounded-md font-medium hover:bg-cyan-300 transition-all">
          Login
        </button>
      </header>
    </div>
  );
};

export default Header;
