import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; 
const Movieinfo = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/movies");
      setMovies(res.data);
    } catch (error) {
      toast.error("Failed to fetch movies");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/movies/${id}`);
      toast.success("Movie deleted");
      fetchMovies();
    } catch (err) {
      toast.error("Failed to delete movie");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-movie/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view-movie/${id}`);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <section className="pt-32 pb-20 px-4 min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            Movie List
          </h1>

          {movies.length === 0 ? (
            <p className="text-center text-cyan-200 mt-8">No movies found. Add one!</p>
          ) : (
            <div className="overflow-x-auto rounded-lg shadow-lg border border-white/10 bg-white/5 backdrop-blur">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="bg-cyan-400/10 text-cyan-300 uppercase text-xs tracking-wider">
                    <th className="px-6 py-4">Poster</th>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Genre</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie) => (
                    <tr
                      key={movie.id}
                      className="border-b border-white/10 hover:bg-white/10 transition"
                    >
                      <td className="px-6 py-3">
                        <img
                          src={movie.img}
                          alt={movie.moviename}
                          className="w-20 h-28 object-cover rounded-md border border-cyan-400"
                        />
                      </td>
                      <td className="px-6 py-3 font-medium">{movie.moviename}</td>
                      <td className="px-6 py-3">{movie.Genre}</td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-2 space-y-2 sm:space-y-0">
                          <button
                            onClick={() => handleEdit(movie.id)}
                            className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/40 px-3 py-1 rounded text-xs transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleView(movie.id)}
                            className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 px-3 py-1 rounded text-xs transition"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(movie.id)}
                            className="bg-red-600/20 text-red-500 hover:bg-red-600/40 px-3 py-1 rounded text-xs transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Movieinfo;
