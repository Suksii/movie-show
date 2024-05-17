import React from 'react';
import Popular from "../components/Popular.jsx";
import CardList from "../components/CardList.jsx";

const Home = ({popularMovies}) => {
    return (
        <div className="h-full">
            <h1 className="text-white text-3xl font-bold ml-10">Popular Movies</h1>
            <CardList data={popularMovies} type={'movies'}/>
        </div>
    );
};

export default Home;