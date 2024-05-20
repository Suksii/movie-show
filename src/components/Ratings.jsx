import React from 'react';

const Ratings = ({percetage, circleSize, children}) => {


    const radius = 50;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray - dashArray * percetage / 100;

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
                        stroke={"#f59e0b"}
                        strokeDasharray={dashArray}
                        strokeDashoffset={dashOffset}
                        className={"fill-none stroke-gray-600 transform -rotate-90 origin-center rounded-full transition-all duration-1000 ease-in-out"}
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