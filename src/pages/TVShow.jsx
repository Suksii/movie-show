import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../utils/API.js";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import Ratings from "../components/Ratings.jsx";
import CountUp from "react-countup";
import {ToastContainer} from "react-toastify";
import Actions from "../components/Actions.jsx";

const TvShow = () => {

    const [TvShow, setTvShow] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        const fetchTVShow = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI(`shows/${id}`)
                setTvShow(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchTVShow()
    }, [id]);

    const votes = TvShow?.vote_count?.toString().length === 7 ? TvShow?.vote_count / 1000000 + 'M' : TvShow?.vote_count / 1000 + 'K';
    const creators = TvShow?.creators?.map(director => director).join(', ')
    const mainCast = TvShow?.cast?.slice(0, 3).map(actor => actor).join(', ')
    const otherCast = TvShow?.cast?.slice(3).map(actor => actor).join(', ')
    const releaseDate = TvShow?.release_date?.slice(0, 4)
    const runtimeHours = Math.floor(TvShow?.runtime / 60) + 'h'
    const runtimeMinutes = TvShow?.runtime % 60 + 'min'
    const percentage = TvShow?.vote_average * 10

    return (
        <>
            {loading && <Loading />}
            <ToastContainer position={"top-center"} autoClose={1000}/>
            <div className="flex md:flex-row flex-col gap-10 md:w-[90%] mx-auto py-10 h-screen">
                <div className=" w-full" style={{flex:1}}>
                    <img src={TvShow.backdrop_path ? TvShow?.backdrop_path : TvShow?.poster_path}
                         alt={TvShow?.original_title}
                         className="w-[600px] object-cover"/>
                </div>
                <div className="text-gray-300" style={{flex: 1}}>
                    <div className="flex gap-4 py-5 items-center">
                        <Ratings percentage={percentage} circleSize={"200"}>
                            <div className="flex flex-col justify-center items-center">
                                <CountUp start={0}
                                         end={TvShow?.vote_average}
                                         decimals={2}
                                         duration={1.5}
                                         className={"text-3xl"}
                                />
                                <p>{votes}</p>
                            </div>
                        </Ratings>
                        <h1 className="text-4xl">{TvShow?.title}</h1>
                    </div>
                    <div className="flex gap-5 items-center border-y border-gray-900 w-fit">
                        <p>{releaseDate}</p>
                        <p className="rounded-full border-2 border-gray-800"></p>
                        <p>{runtimeHours} {runtimeMinutes}</p>
                    </div>

                    <div className="flex gap-1 p-3 flex-wrap">
                        {TvShow?.genres?.map((genre, index) => (
                            <p key={index} className="py-1 px-2 bg-gray-200 w-fit rounded-sm text-black font-semibold">{genre}</p>
                        ))}
                    </div>
                    <p className="pl-10 py-5 text-lg">{TvShow?.overview}</p>
                    <div className="py-5 text-lg">
                        <p className="flex gap-5 items-center py-2 border-y border-gray-400">Creators: <span>{creators}</span></p>
                        <p className="flex gap-5 items-center py-2 border-b border-gray-400">Actors: <span>{mainCast}</span></p>
                        <p className="flex gap-5 items-center py-2 border-b border-gray-400">Other Actors: <span>{otherCast}</span></p>
                    </div>
                <Actions title={"TV Show"}
                         trailer={TvShow?.youtube_trailer}
                         netflix={TvShow?.netflix}
                />
                </div>
            </div>
        </>

    );
};
export default TvShow;