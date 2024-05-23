import TVShows from "./pages/TVShows.jsx";
import {Route, Routes} from "react-router-dom";
import TvShow from "./pages/TVShow.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import {useMemo, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <div className="relative bg-black h-screen">
          <Navbar/>
          <div className="px-5">
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/tv-shows" element={<TVShows/>}/>
                  <Route path="/tv-shows/:id" element={<TvShow/>}/>
                  <Route path="/movies" element={<Movies />}/>
                  <Route path="/movies/:id" element={<Movie/>}/>
              </Routes>
          </div>
      </div>

  )
}

export default App
