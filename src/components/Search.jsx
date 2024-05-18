import React, {useEffect, useState} from 'react';
import CardList from "./CardList.jsx";

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
        <div>
            <input placeholder={`Search for ${dataType}`}
                   className="w-1/2 p-2 rounded-lg m-5 bg-gray-800 text-white outline-none"
                   type="text"
                   value={searchTerm}
                   onChange={handleChange}/>
        </div>
    );
};

export default Search;