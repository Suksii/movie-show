import React, {useEffect, useState} from 'react';
import CardList from "./CardList.jsx";
import {IoSearch} from "react-icons/io5";

const Search = ({data, dataType, searchResults, setPages}) => {

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        if (searchTerm.trim().length < 2) {
            searchResults(data);
        } else {
            const results = data.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            searchResults(results);
        }
    }, [searchTerm, data, searchResults]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        setPages(1);
    }

    return (
        <div className="relative flex justify-between w-full md:w-[600px] items-center">
            <input placeholder={`Search for ${dataType}`}
                   className="w-full p-2 rounded-lg m-5 bg-gray-800 text-white outline-none"
                   type="text"
                   value={searchTerm}
                   onChange={handleChange}/>
            <IoSearch size={20} color={'gray'} className="text-white absolute right-8"/>
        </div>
    );
};

export default Search;