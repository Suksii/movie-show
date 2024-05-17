import TVShows from "./pages/TVShows.jsx";
import {Route, Routes} from "react-router-dom";
import TvShow from "./pages/TVShow.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import {useMemo, useState} from "react";
import CardList from "./components/CardList.jsx";

function App() {

  const [popularMovies, setPopularMovies] = useState([]);

  const handlePopularMovies = (movies) => {
    setPopularMovies(movies)
  }

  return (
    <div className="bg-black">
        <Navbar/>
        <div className="py-12 px-5">
            <Routes>
                <Route path="/" element={<Home popularMovies={popularMovies} />}/>
                <Route path="/tv-shows" element={<TVShows/>}/>
                <Route path="/tv-shows/:id" element={<TvShow/>}/>
                <Route path="/movies" element={<Movies handlePopularMovies={handlePopularMovies}/>}/>
                <Route path="/movies/:id" element={<Movie/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default App
