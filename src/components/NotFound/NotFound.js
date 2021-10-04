import React from 'react';

const NotFound = () => {
    return (
        <div className="container flex flex-col justify-center h-96 items-center">
            <p className="text-8xl text-red-500 font-extrabold p-5">404</p>
            <p className="text-5xl text-blue-500 font-extrabold">There's Nothing Here</p>
        </div>
    );
};

export default NotFound;