import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";
const CardSlider = ({data, type}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: true,
    };

    return (
        <div className="w-[80%] mx-auto py-10 h-fit">
            <Slider {...settings}>
                {data.map((item,index) => (
                    <Card key={index}
                          title={item?.original_title}
                          year={item?.first_aired?.slice(0,4) || item?.release_date?.slice(0,4)}
                          src={item?.poster_path}
                          alt={item?.original_title}
                          id={item?.id}
                          type={type}
                    />
                ))}
            </Slider>

        </div>
    );
};

export default CardSlider;