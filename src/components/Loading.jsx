import React from 'react';
import {RingLoader} from "react-spinners";

const Loading = () => {
    return (
        <div className="fixed top-1/2 right-1/2 translate-y-1/2 translate-x-1/2">
            <RingLoader color={"white"}/>
        </div>
    );
};

export default Loading;