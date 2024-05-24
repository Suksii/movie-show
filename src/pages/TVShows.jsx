import React, {useEffect, useState} from 'react';
import { fetchFromAPI } from '../utils/API.js';
import CardList from "../components/CardList.jsx";
import Loading from "../components/Loading.jsx";
import Pagination from "../components/Pagination.jsx";
import Search from "../components/Search.jsx";

const TvShows = () => {

    const [tvShows, setTvShows] = useState([])
    const [filteredTvShows, setFilteredTvShows] = useState([])
    const [pages, setPages] = useState(1)
    const [TvShowsPerPage] = useState(5)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchTVShows = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI('shows')
                setTvShows(response)
                setFilteredTvShows(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchTVShows()
    }, []);

    const prevPage = () => {
        setPages(prev => Math.max(prev - 1, 1));
    };

    const nextPage = () => {
        setPages(prev => Math.min(prev + 1, Math.ceil(filteredTvShows.length / TvShowsPerPage)));
    };

    const indexOfLastTvShow = pages * TvShowsPerPage;
    const indexOfFirstTvShow = indexOfLastTvShow - TvShowsPerPage;
    const currentTvShows = filteredTvShows.slice(indexOfFirstTvShow, indexOfLastTvShow);

    return (
        <div className="relative h-full">
            {loading && <Loading/> }
            <div className="flex flex-col justify-between h-[90vh]">
                <Search data={tvShows}
                        dataType={'TV Show'}
                        searchResults={setFilteredTvShows}
                        setPages={setPages}
                />
                        <CardList data={currentTvShows}
                              type={'tv-shows'}
                        />
                {tvShows.length > 0 ?
                    <Pagination nextPage={nextPage}
                                 prevPage={prevPage}
                                 pages={pages}
                                 data={tvShows}
                                 dataPerPage={TvShowsPerPage}
                    /> :
                    <p className="text-gray-300 text-center text-2xl pt-12">No TV shows found</p>
                }
            </div>
        </div>
    );
};
export default TvShows;