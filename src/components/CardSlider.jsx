import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card.jsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa6";
const CardSlider = ({data, type}) => {

    const NextArrow = ({style, onClick}) => {
        return (
            <div style={{...style}} className="arrow-right hover:text-fuchsia-500 duration-500" onClick={onClick}>
                <FaArrowRight size={26} />
            </div>
        )
    }
    const PrevArrow = ({style, onClick}) => {
        return (
            <div style={{...style}} className="arrow-left hover:text-fuchsia-500 duration-500" onClick={onClick}>
                <FaArrowLeft size={26} />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        adaptiveHeight: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
    };

    return (
        <div className="w-[80%] mx-auto py-5 h-fit">
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