import React, {useEffect, useMemo, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";
import Pagination from "../components/Pagination.jsx";

const Movies = ({handlePopularMovies}) => {

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)
    const [moviesPerPage] = useState(5)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI('movies')
                console.log(response)
                // setPages(pages)
                setMovies(response)

            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);

    const popularMovies = useMemo(() => {
        return movies.filter(movie => movie?.popular === true);
    }, [movies]);

    useEffect(() => {
        handlePopularMovies(popularMovies)
    }, [popularMovies, handlePopularMovies]);

    const indexOfLastMovie = pages * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const nextPage = () => {
        setPages(prevState => prevState + 1)
    }
    const prevPage = () => {
        setPages(prevState => prevState - 1)
    }


    return (
        <div className="relative h-full">
            {loading && <Loading/> }
            <div>
                <CardList data={currentMovies} type={'movies'}/>
                <Pagination pages={pages}
                            dataPerPage={moviesPerPage}
                            data={movies}
                            nextPage={nextPage}
                            prevPage={prevPage}
                />
            </div>
        </div>
    );
};
export default Movies;