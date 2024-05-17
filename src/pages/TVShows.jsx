import React, {useEffect, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";
import Pagination from "../components/Pagination.jsx";

const TvShows = () => {

    const [tvShows, setTvShows] = useState([])
    const [pages, setPages] = useState(1)
    const [TvShowsPerPage] = useState(5)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTVShows = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI('shows')
                // setPages(pages)
                setTvShows(response)
                console.log(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchTVShows()
    }, []);

    const nextPage = () => {
        setPages(prevState => prevState + 1)
    }
    const prevPage = () => {
        setPages(prevState => prevState - 1)
    }

    const indexOfLastTvShow = pages * TvShowsPerPage;
    const indexOfFirstTvShow = indexOfLastTvShow - TvShowsPerPage;
    const currentTvShows = tvShows.slice(indexOfFirstTvShow, indexOfLastTvShow);

    return (
        <div className="relative h-full">
                {loading && <Loading/> }
            <div>
                <CardList data={currentTvShows} type={'tv-shows'}/>
                <Pagination nextPage={nextPage}
                            prevPage={prevPage}
                            pages={pages}
                            data={tvShows}
                            dataPerPage={TvShowsPerPage}
                />
            </div>
        </div>
    );
};
export default TvShows;