import React, { useEffect, useState } from 'react';
import TiptapEditor from './TiptapEditor';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Editmovie = () => {
  const [input, setInput] = useState({
    moviename: '',
    img: '',
    Genre: '',
    description: '', 
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get('http://localhost:5000/movies');
        const movie = response.data.find((obj) => obj.id === id);
        if (movie) {
          setInput(movie);
        } else {
          toast.error('Movie not found.');
        }
      } catch (error) {
        toast.error('Failed to fetch movie data.');
      }
    };
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(input).some((value) => value.trim() === '')) {
      toast.error('Please fill in all fields...');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/movies/${id}`, input);
      toast.success('Movie updated successfully!');
      navigate('/movie-info');
    } catch (error) {
      toast.error('Server error. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-900 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full mt-24 max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden"
      >
        <h2 className="text-2xl font-semibold text-center text-cyan-400 uppercase tracking-wide my-6">
          Edit Movie
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex items-center justify-center p-4">
            <div className="overflow-hidden rounded-xl border-2 border-cyan-400 shadow-md w-full max-w-sm">
              <img
                src={input.img ? input.img : "/images/no-images.png"}
                alt="Movie Background"
                className="w-full h-64 "
              />
            </div>
          </div>

          <div className="md:w-1/2 p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="moviename" className="block mb-1 text-sm font-medium text-cyan-200">
                  Movie Title
                </label>
                <input
                  type="text"
                  id="moviename"
                  placeholder="e.g. Blade Runner 2049"
                  value={input.moviename}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="img" className="block mb-1 text-sm font-medium text-cyan-200">
                  Image URL
                </label>
                <input
                  type="url"
                  id="img"
                  placeholder="e.g. https://image.tmdb.org/..."
                  value={input.img}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="Genre" className="block mb-1 text-sm font-medium text-cyan-200">
                  Genre
                </label>
                <select
                  id="Genre"
                  value={input.Genre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 appearance-none"
                >
                  <option value="" disabled className="bg-gray-800 text-white/80">
                    Select Genre
                  </option>
                  <option value="Action" className="bg-gray-800 text-white/80">Action</option>
                  <option value="Comedy" className="bg-gray-800 text-white/80">Comedy</option>
                  <option value="Drama" className="bg-gray-800 text-white/80">Drama</option>
                  <option value="Horror" className="bg-gray-800 text-white/80">Horror</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <label htmlFor="description" className="block mb-1 text-sm font-medium text-cyan-200">
              Description
            </label>
            <TiptapEditor
              value={input.description}
              onChange={(value) => setInput({ ...input, description: value })}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all shadow-lg"
          >
            Update Movie
          </button>
        </div>
      </form>
    </section>
  );
};

export default Editmovie;
