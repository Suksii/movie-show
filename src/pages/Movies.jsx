import React, {useEffect, useMemo, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";
import Pagination from "../components/Pagination.jsx";
import Search from "../components/Search.jsx";
import CardSlider from "../components/CardSlider.jsx";

const Movies = ({handlePopularMovies}) => {

    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [pages, setPages] = useState(1)
    const [moviesPerPage] = useState(6)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI('movies')
                setMovies(response)
                setFilteredMovies(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);

    // const popularMovies = useMemo(() => {
    //     return movies.filter(movie => movie?.popular === true);
    // }, [movies]);
    //
    // useEffect(() => {
    //     handlePopularMovies(popularMovies)
    // }, [popularMovies, handlePopularMovies]);

    const indexOfLastMovie = pages * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    const prevPage = () => {
        setPages(prev => Math.max(prev - 1, 1));
    };

    const nextPage = () => {
        setPages(prev => Math.min(prev + 1, Math.ceil(filteredMovies.length / moviesPerPage)));
    };

    return (
        <>
            {loading && <Loading/> }
                <Search data={movies}
                        dataType={'movie'}
                        searchResults={setFilteredMovies}
                        setPages={setPages}
                />
                <CardList data={currentMovies}
                          type={'movies'}
                />
                {currentMovies.length > 0 ?
                <Pagination pages={pages}
                            dataPerPage={moviesPerPage}
                            data={filteredMovies}
                            nextPage={nextPage}
                            prevPage={prevPage}
                />
                    : <p className="text-gray-300 text-center text-2xl pt-12">No movies found</p>
                }
        </>
    );
};
export default Movies;