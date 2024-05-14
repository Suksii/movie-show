import TVShows from "./pages/TVShows.jsx";
import {Route, Routes} from "react-router-dom";
import TvShow from "./pages/TVShow.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";

function App() {

  return (
    <div className="bg-black">
        <Navbar/>
        <div className="py-10">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tv-shows" element={<TVShows/>}/>
                <Route path="/tv-shows/:id" element={<TvShow/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/movies/:id" element={<Movie/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
