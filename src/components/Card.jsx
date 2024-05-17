import React from 'react';
import {useNavigate} from "react-router-dom";

const Card = ({src, alt, title,year, id, type}) => {

    const navigate = useNavigate();

    return (
        <div className="relative w-[300px] h-[400px] py-10">
            <div className="card absolute w-full h-full">
                <div className="absolute w-full backface_hidden h-full rounded-md">
                    <img src={src} alt={alt} className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="absolute flex flex-col justify-between w-full backface_hidden h-full bg-gray-300 rotateY rounded-md py-2">
                    <div>
                        <h2 className="text-center px-2 text-xl font-bold">{title}</h2>
                        {year && <p className="text-center text-xl font-semibold">({year})
                        </p>}
                    </div>
                    <div className="w-full px-1 py-5">
                        <button className="py-2 w-full bg-black rounded-md uppercase text-gray-300 font-semibold tracking-widest" onClick={() => navigate(`/${type}/${id}`)}>See more</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;