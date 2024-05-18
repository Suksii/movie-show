import React, {useEffect, useMemo, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";
import Pagination from "../components/Pagination.jsx";
import Search from "../components/Search.jsx";

const Movies = ({handlePopularMovies}) => {

    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [pages, setPages] = useState(1)
    const [moviesPerPage] = useState(3)
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
        <div className="relative h-full">
            {loading && <Loading/> }
            <div>
                <Search data={movies}
                        dataType={'movies'}
                        searchResults={setFilteredMovies}
                        setPages={setPages}
                />
                <CardList data={currentMovies}
                          type={'movies'}
                />
                <Pagination pages={pages}
                            dataPerPage={moviesPerPage}
                            data={filteredMovies}
                            nextPage={nextPage}
                            prevPage={prevPage}
                />
            </div>
        </div>
    );
};
export default Movies;