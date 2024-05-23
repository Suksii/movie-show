import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../utils/API.js";
import Loading from "./Loading.jsx";
import CardSlider from "./CardSlider.jsx";

const Popular = ({title, fetchedData, type}) => {

    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const response = await fetchFromAPI(fetchedData)
                console.log(response)
                const popularData = response.filter(item => item?.popular === true)
                setPopular(popularData)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, []);

    return (
        <>
            {loading && <Loading/> }
            <h1 className="text-white text-3xl ml-10">{title}</h1>
            <CardSlider data={popular} type={type}/>
        </>
    );
};

export default Popular;