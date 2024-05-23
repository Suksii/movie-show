import React from 'react';
import Popular from "../components/Popular.jsx";

const Home = () => {
    return (
        <div>
            <Popular title={"Popular movies"}
                     fetchedData={'movies'}
                        type={"movies"}
            />
            <Popular title={"Popular TV Shows"}
                     fetchedData={'shows'}
                     type={"tv-shows"}
            />
        </div>
    );
};

export default Home;