import React from 'react';
import bg from '../../bg.gif';
const Home = () => {
    return (
        <div className="container flex justify-center">
            <div className="w-8/12">
                <img className="w-full object-cover mx-auto" src={bg} alt="" />
            </div>
        </div>
    );
};

export default Home;