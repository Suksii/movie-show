import React, {useEffect, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";

const TvShows = () => {

    const [movies, setMovies] = useState([])
    // const [pages, setPages] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI('movies')
                // setPages(pages)
                setMovies(response)

                console.log(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);

    // const nextPage = () => {
    //     setPages(prevState => prevState + 1)
    // }
    // const prevPage = () => {
    //     setPages(prevState => prevState - 1)
    // }


    return (
        <div className="relative">
            {loading && <Loading/> }
            <div>
                <CardList data={movies} type={'movies'}/>
                {/*<div className="text-white">*/}
                {/*    <button onClick={prevPage}>Previous Page</button>*/}
                {/*    {pages}*/}
                {/*    <button onClick={nextPage}>Next Page</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
export default TvShows;