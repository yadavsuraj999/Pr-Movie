import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Viewmovie = () => {
  
    const [movie, setMovie] = useState({})

    const {id} = useParams()
    
    const featch = async ()=>{
        const featch = await axios.get('http://localhost:5000/movies')
        // console.log(featch);
        const viewmovie = featch.data.find((data)=>{
            return data.id == id;
        })
        setMovie(viewmovie)
    }

    useEffect(()=>{
        featch()
    }, [])

    console.log(movie);




  return (
    <section className="min-h-screen bg-gray-900 px-4 py-20 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-xl shadow-lg border border-white/10 overflow-hidden text-white">
        <div className="h-72 md:h-96 w-full">
          <img
            src={movie.img}
            alt={movie.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6 md:p-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">
            {movie.moviename}
          </h1>
          <p className="text-sm text-gray-300 uppercase tracking-widest">
            {movie.Genre}
          </p>
          <div dangerouslySetInnerHTML={{ __html:movie.description}} className="tiptap"></div>
        </div>
      </div>
    </section>
  );
};

export default Viewmovie;
