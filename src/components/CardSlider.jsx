import React from 'react';
import Card from "./Card.jsx";

const CardSlider = ({data, type}) => {
    return (
        <div className="flex gap-5 justify-center">
            {data.map(item => (
                <Card key={item._id}
                      title={item?.original_title || item?.title}
                      year={item?.first_aired?.slice(0,4) || item?.release_date?.slice(0,4)}
                      src={item?.poster_path}
                      alt={item?.original_title}
                      id={item?._id}
                      type={type}
                />
            ))}
        </div>
    );
};

export default CardSlider;