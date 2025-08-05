import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Viewmovie = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const fetchMovie = async () => {
    try {
      const response = await axios.get("http://localhost:5000/movies");
      const viewmovie = response.data.find((data) => data.id == id);
      setMovie(viewmovie);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section className="bg-gray-900 px-4 py-10 pt-24 min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/10 text-white relative">
        <Link
          to="/movie-info"
          className="absolute top-4 right-4 px-3 py-1.5 bg-black bg-opacity-60 text-white font-semibold rounded-md shadow-lg hover:bg-cyan-600 transition-all duration-300 hover:scale-105 text-sm z-10"
        >
          X
        </Link>
        <div className="w-full h-60 sm:h-72 md:h-96">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            {movie.moviename}
          </h1>
          <p className="text-sm md:text-base text-gray-300 uppercase tracking-widest">
            {movie.Genre}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: movie.description }}
            className="tiptap text-base break-words"
            style={{ wordWrap: "break-word" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Viewmovie;
