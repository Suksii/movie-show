import React from 'react';
import CardList from "./CardList.jsx";

const Popular = ({popularMovies}) => {

    return (
        <>
            <h1 className="text-white text-3xl font-bold ml-10">Popular Movies</h1>
            <CardList data={popularMovies} type={'movies'}/>
        </>
    );
};

export default Popular;