import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Movieinfo = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      const res = await axios.get('http://localhost:5000/movies');
      const data = res.data;
      setMovies(data);
    } catch (error) {
      toast.error('Failed to fetch movies');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:5000/movies/${id}`);
      toast.success('Movie deleted');
      fetchMovies();
    } catch (err) {
      toast.error('Failed to delete movie');
    }
  };


  const handleEdit = (id) => {
    navigate(`/edit-movie/${id}`);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">Movie Table</h2>

        {movies.length === 0 ? (
          <p className="text-center text-cyan-200 mt-8">No movies found. Add one!</p>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-white/10 bg-white/5 backdrop-blur">
            <table className="min-w-full text-white text-sm">
              <thead>
                <tr className="bg-cyan-400/10 text-cyan-300 text-left uppercase text-xs tracking-wider">
                  <th className="px-6 py-4">Poster</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Genre</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id} className="border-b border-white/10 hover:bg-white/10 transition">
                    <td className="px-6 py-3">
                      <img
                        src={movie.img}
                        alt={movie.moviename}
                        className="w-20 h-28 object-cover rounded-md border border-cyan-400"
                      />
                    </td>
                    <td className="px-6 py-3 font-medium">{movie.moviename}</td>
                    <td className="px-6 py-3">{movie.Genre}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => handleEdit(movie.id)}
                        className=" text-black text-xs px-3 py-1 rounded mr-2 "
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(movie.id)}
                        className=" text-red-700 text-xs px-3 py-1 rounded "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Movieinfo;
