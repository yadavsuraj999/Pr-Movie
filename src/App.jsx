import Header from "./components/Header";
import AddMovieForm from "./components/AddMovieForm";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movieinfo from "./components/Movieinfo";
import { ToastContainer } from "react-toastify";
import Editmovie from "./components/Editmovie";
import Viewmovie from "./components/Viewmovie";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <BrowserRouter>
      <ToastContainer/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-movie" element={<AddMovieForm />} />
          <Route path="/movie-info" element={<Movieinfo/>} />
          <Route path="/view-movie/:id" element={<Viewmovie/>} />
          <Route path="/edit-movie/:id" element={<Editmovie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
