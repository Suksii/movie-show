import React, {useEffect, useState} from 'react';

const Ratings = ({percentage = 0, circleSize, children}) => {


    const radius = 50;
    const dashArray = 2 * Math.PI * radius;
    const initialOffset = dashArray;
    const [dashOffset, setDashOffset] = useState(initialOffset);

    useEffect(() => {
        setDashOffset(initialOffset);
    }, [percentage, initialOffset]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDashOffset(dashArray - (dashArray * percentage) / 100);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage, dashArray]);

    return (
        <div className="relative w-fit">
            <svg width={circleSize}
                 height={circleSize}
                 viewBox={`0 0 ${circleSize} ${circleSize}`}
            >
                <circle cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        strokeWidth="12"
                        className={"fill-none stroke-current text-gray-300"}
                />
                <circle cx={circleSize / 2}
                        cy={circleSize / 2}
                        r={radius}
                        strokeWidth="12"
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        strokeMiterlimit={10}
                        stroke={"red"}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        className={"fill-none transform -rotate-90 origin-center transition-all duration-1000 ease-in-out"}
                >
                </circle>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {children}
            </div>
        </div>
    );
};

export default Ratings;