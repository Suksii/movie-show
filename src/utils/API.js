import axios from "axios";

// const BASE_URL = 'https://movies-api14.p.rapidapi.com';
const BASE_URL = 'http://localhost:3001';

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, {
        // headers: {
        //     'X-RapidAPI-Key': '65ef94e7cemsh2b6fd81bc5acfaep125f0fjsn3c47329afe29',
        //     'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        // },
        // params: {
        //     page: page
        // }
    })
    return data
}