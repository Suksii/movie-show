import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../utils/API.js";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import { ToastContainer } from 'react-toastify';
import Ratings from "../components/Ratings.jsx";
import CountUp from "react-countup";
import Actions from "../components/Actions.jsx";

const Movie = () => {

    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI(`movies/${id}`)
                console.log(response)
                setMovie(response)

            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovie()
    }, [id]);

    const votes = movie?.vote_count?.toString().length === 7 ? movie?.vote_count / 1000000 + 'M' : movie?.vote_count / 1000 + 'K';
    const directors = movie?.directors?.map(director => director).join(', ')
    const mainCast = movie?.cast?.slice(0, 3).map(actor => actor).join(', ')
    const otherCast = movie?.cast?.slice(3).map(actor => actor).join(', ')
    const releaseDate = movie?.release_date?.slice(0, 4)
    const runtimeHours = Math.floor(movie?.runtime / 60) + 'h'
    const runtimeMinutes = movie?.runtime % 60 + 'min'
    const percentage = movie?.vote_average * 10
    const embedId = movie?.youtube_trailer?.split('v=')[1]

    return (
        <>
            {loading && <Loading />}
            <ToastContainer position={"top-center"} autoClose={1000}/>
            <div className="flex md:flex-row flex-col gap-10 md:w-[90%] mx-auto py-10 h-screen">
                <div className=" w-full" style={{flex:1}}>
                    <img src={movie.backdrop_path ? movie?.backdrop_path : movie?.poster_path}
                         alt={movie?.original_title}
                         className="w-[500px] object-cover"/>
                </div>
                <div className="text-gray-300" style={{flex: 1}}>
                    <div className="flex gap-4 py-5 items-center">
                        <Ratings percentage={percentage} circleSize={"200"}>
                        <div className="flex flex-col justify-center items-center">
                            <CountUp start={0}
                                     end={movie?.vote_average}
                                     decimals={2}
                                     duration={1.5}
                                     className={"text-3xl"}
                            />
                            <p>{votes}</p>
                        </div>
                        </Ratings>
                        <h1 className="text-4xl">{movie?.title}</h1>
                    </div>
                    <div className="flex gap-5 items-center border-y border-gray-900 w-fit">
                        <p>{releaseDate}</p>
                        <p className="rounded-full border-2 border-gray-800"></p>
                        <p>{runtimeHours} {runtimeMinutes}</p>
                    </div>

                    <div className="flex gap-1 p-3 flex-wrap">
                        {movie?.genres?.map((genre, index) => (
                            <p key={index} className="py-1 px-2 bg-gray-200 w-fit rounded-sm text-black font-semibold">{genre}</p>
                        ))}
                    </div>
                    <p className="pl-10 py-5 text-lg">{movie?.overview}</p>
                    <div className="py-5 text-lg">
                        <p className="flex gap-5 items-center py-2 border-y border-gray-400">Directors: <span>{directors}</span></p>
                        <p className="flex gap-5 items-center py-2 border-b border-gray-400">Actors: <span>{mainCast}</span></p>
                        <p className="flex gap-5 items-center py-2 border-b border-gray-400">Other Actors: <span>{otherCast}</span></p>
                    </div>
                    <div className="flex justify-around items-center">
                        <Actions title={"Movie"}
                                 trailer={movie?.youtube_trailer}
                                 netflix={movie?.netflix} />
                        <iframe width={500} height={300} src={`https://www.youtube.com/embed/${embedId}`} allowFullScreen></iframe>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Movie;