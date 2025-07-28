import React, { useState } from 'react';
import TiptapEditor from './TiptapEditor';

const AddMovieForm = () => {
  const [description, setDescription] = useState('');

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-900 py-10">
      <div className="w-full mt-24 max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <h2 className="text-2xl  font-semibold text-center text-cyan-400 uppercase tracking-wide my-6">
              Add New Movie
            </h2>
        {/* Top Row: Image + Form */}
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          {/* Left Image */}
          <div className="md:w-1/2 flex items-center justify-center p-4">
            <div className="overflow-hidden rounded-xl border-2 border-cyan-400 shadow-md w-full max-w-sm">
              <img
                src="https://cdn.pixabay.com/photo/2025/07/10/21/33/coast-9707472_640.jpg"
                alt="Movie Background"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>


          {/* Right Form */}
          <div className="md:w-1/2 p-8">
            

            <div className="space-y-5">
              <div>
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

              <div>
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

              <div>
                <label htmlFor="genre" className="block mb-1 text-sm font-medium text-cyan-200">
                  Genre
                </label>
                <select
                  id="genre"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  defaultValue=""
                >
                  <option value="" disabled>Select Genre</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Horror">Horror</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Full-width Description and Submit */}
        <div className="p-8">
          <div className="mb-6">
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-cyan-200">
              Description
            </label>
              <TiptapEditor value={description} onChange={setDescription} />  
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all shadow-lg"
          >
            Submit Movie
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddMovieForm;
