import React from 'react';
import {RingLoader} from "react-spinners";

const Loading = () => {
    return (
        <div className="fixed top-1/2 right-1/2">
            <RingLoader />
        </div>
    );
};

export default Loading;