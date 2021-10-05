import React from 'react';
import bg from '../../bg.gif';


const Hero = () => {
    return (
        <div className="w-full flex items-center lg:flex-row flex-col">
            <p className="w-2/4 lg:text-5xl text-3xl leading-relaxed"><q className="text-black italic">An investment in <span className="text-yellow-500 font-bold">knowledge</span> pays the best interest.</q> –  <span className="lg:font-extrabold font-bold">Benjamin Franklin</span></p>
            <img className="w-2/4 object-cover mx-auto" src={bg} alt="" />
        </div>
    );
};

export default Hero;