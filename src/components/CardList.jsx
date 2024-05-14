import React from 'react';
import Card from "./Card.jsx";

const CardList = ({data, type}) => {
    return (
        <div className="flex flex-wrap justify-center gap-5">
            {data.map(item => (
                <Card key={item.id}
                      title={item?.original_title}
                      year={item?.first_aired?.slice(0,4) || item?.release_date?.slice(0,4)}
                      src={item?.poster_path}
                      alt={item?.original_title}
                      id={item?.id}
                      type={type}
                />
            ))}
        </div>
    );
};

export default CardList;