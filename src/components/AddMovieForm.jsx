const AddMovieForm = () => {
  return (
    <main className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-cyan-400 uppercase tracking-wide mb-6">
          Add New Movie
        </h2>

        <form>
          {/* Title */}
          <div className="mb-5">
            <label htmlFor="title" className="block mb-1 text-sm font-medium text-cyan-200">
              Movie Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="e.g. Blade Runner 2049"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Image URL */}
          <div className="mb-5">
            <label htmlFor="image" className="block mb-1 text-sm font-medium text-cyan-200">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              placeholder="e.g. https://image.tmdb.org/..."
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Genre */}
          <div className="mb-5">
            <label htmlFor="genre" className="block mb-1 text-sm font-medium text-cyan-200">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              placeholder="e.g. Sci-Fi, Action"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-cyan-200">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Write a brief synopsis..."
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all shadow-lg"
          >
            Submit Movie
          </button>
        </form>
      </div>
    </main>
  );
};

export default AddMovieForm;
