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
    const endYear = TvShow?.ended?.slice(0, 4)
    const runtimeHours = Math.floor(TvShow?.runtime / 60) > 0 ? Math.floor(TvShow?.runtime / 60) + 'h' : ''
    const runtimeMinutes = TvShow?.runtime % 60 > 0 ? TvShow?.runtime % 60 + 'min' : ''
    const percentage = TvShow?.vote_average * 10
    const embedId = TvShow?.youtube_trailer?.split('v=')[1]

    return (
        <>
            {loading && <Loading />}
            <ToastContainer position={"top-center"} autoClose={1000}/>
            <div className="flex xl:flex-row flex-col gap-10 md:w-[90%] mx-auto py-12">
                <div className="w-full md:py-10" style={{flex:1}}>
                    <img src={TvShow.backdrop_path ? TvShow?.backdrop_path : TvShow?.poster_path}
                         alt={TvShow?.original_title}
                         className="w-[600px] object-cover mx-auto"/>
                </div>
                <div className="text-gray-300" style={{flex: 1}}>
                    <div className="flex md:gap-4 xl:py-5 items-center">
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
                        <div className="flex flex-col justify-between gap-4">
                            <h1 className="text-4xl">{TvShow?.title}</h1>
                            <div className="flex gap-5 items-center border-y border-gray-900 w-fit">
                                <p className="text-md"><span className="text-xl text-red-600">{TvShow?.seasons}</span> Seasons</p>
                                <p className="rounded-full border-2 border-gray-800"></p>
                                <p className="text-md"><span className="text-xl text-red-600">{TvShow?.episodes}</span> Episodes</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-5 items-center border-y border-gray-900 w-fit">
                        <p>{releaseDate} - {endYear ? endYear : "Ongoing"}</p>
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
                    <div className="flex justify-around gap-2 flex-col md:flex-row items-center">
                        <Actions title={"TV Show"}
                                 trailer={TvShow?.youtube_trailer}
                                 netflix={TvShow?.netflix}
                        />
                        <iframe className="w-full md:w-[500px] h-[300px]" src={`https://www.youtube.com/embed/${embedId}`} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>

    );
};
export default TvShow;