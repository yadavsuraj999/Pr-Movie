import Header from "./components/Header";
import AddMovieForm from "./components/AddMovieForm";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-movie" element={<AddMovieForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
