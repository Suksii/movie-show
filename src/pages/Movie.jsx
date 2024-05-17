import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../utils/API.js";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading.jsx";
import {FaCopy, FaShare, FaYoutube} from "react-icons/fa6";
import {RiNetflixFill} from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardSlider from "../components/CardSlider.jsx";

const Movie = () => {

    const [movie, setMovie] = useState([])
    // const [similarMovies, setSimilarMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI(`movies/${id}`)
                console.log(response)
                setMovie(response)
                // setSimilarMovies(similarMovies)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovie()
    }, [id]);

    const openLink = (url) => {
        window.open(url)
    }

    const copyLinkFromUrl = () => {
        navigator.clipboard.writeText(window.location.href)
        if (navigator.clipboard.writeText) {
            toast.success('Link copied to clipboard')
        } else {
            toast.error('Failed to copy link to clipboard')
        }
    }

    const shareLinkOnSocialMedia = () => {
        navigator.share({
            title: 'Movie Show',
            text: 'Check out this movie',
            url: window.location.href
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }

    const votes = movie?.vote_count?.toString().length === 7 ? movie?.vote_count / 1000000 + 'M' : movie?.vote_count / 1000 + 'K';
    const directors = movie?.directors?.map(director => director).join(', ')
    const mainCast = movie?.cast?.slice(0, 3).map(actor => actor).join(', ')
    const otherCast = movie?.cast?.slice(3).map(actor => actor).join(', ')
    const releaseDate = movie?.release_date?.slice(0, 4)
    const runtimeHours = Math.floor(movie?.runtime / 60) + 'h'
    const runtimeMinutes = movie?.runtime % 60 + 'min'

    return (
        <>
            {loading && <Loading />}
            <ToastContainer position={"top-center"} autoClose={1000}/>
            <div className="flex md:flex-row flex-col gap-10 md:w-[90%] mx-auto py-10 h-screen">
                <div className=" w-full" style={{flex:1}}>
                    <img src={movie.backdrop_path ? movie?.backdrop_path : movie?.poster_path}
                         alt={movie?.original_title}
                         className="w-[600px] object-cover"/>
                </div>
                <div className="text-gray-300" style={{flex: 1}}>
                    <div className="flex gap-4 py-5 items-center">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl" title={movie?.vote_average}>{movie?.vote_average?.toFixed(2)}</h2>
                            <p>{votes}</p>
                        </div>
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

                    <div className="text-black flex flex-col gap-2">
                        <div onClick={() => openLink(movie?.youtube_trailer)} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] text-center bg-gray-300 w-fit items-center cursor-pointer">
                            <FaYoutube size={22}/>
                            <p>Watch trailer</p>
                        </div>
                        <div onClick={shareLinkOnSocialMedia} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] bg-gray-300 w-fit items-center cursor-pointer">
                            <FaShare size={22}/>
                            <p>Share link</p>
                        </div>
                        <div onClick={copyLinkFromUrl} className="flex gap-2 justify-center py-3 px-2 min-w-[170px] text-center bg-gray-300 w-fit items-center cursor-pointer">
                            <FaCopy size={22}/>
                            <p>Copy link</p>
                        </div>
                        {movie.netflix && <div onClick={() => openLink(movie?.netflix)}
                              className="flex gap-2 justify-center py-3 px-2 min-w-[170px] bg-gray-300 w-fit items-center cursor-pointer">
                            <RiNetflixFill/>
                            <p>Watch on Netflix</p>
                        </div>}
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <h1 className="text-3xl text-gray-300">Similar Movies</h1>*/}
            {/*    <CardSlider data={similarMovies} type={'movies'}/>*/}
            {/*</div>*/}
        </>

    );
};
export default Movie;