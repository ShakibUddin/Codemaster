import React, { useEffect, useState } from 'react';
import bg from '../../bg.gif';
import CourseCard from '../CourseCard/CourseCard';
const Home = () => {
    let [fullstack, setFullstack] = useState([]);
    let [fundamentals, setFundamentals] = useState([]);

    useEffect(() => {
        fetch("data/fullstack.json")
            .then(res => res.json())
            .then(data => setFullstack(data));
        fetch("data/fundamentals.json")
            .then(res => res.json())
            .then(data => setFundamentals(data));
    }, []);
    return (
        <div className="container flex flex-col items-center">
            <div className="w-full flex items-center lg:flex-row flex-col">
                <p className="w-2/4 lg:text-5xl text-3xl leading-relaxed"><q className="text-black italic">An investment in <span className="text-yellow-500 font-bold">knowledge</span> pays the best interest.</q> –  <span className="lg:font-extrabold font-bold">Benjamin Franklin</span></p>
                <img className="w-2/4 object-cover mx-auto" src={bg} alt="" />
            </div>
            <p className="text-3xl font-extrabold">Trending Courses</p>
            <div className="flex justify-evenly flex-wrap">
                {
                    fullstack.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
                {
                    fundamentals.map(course => {
                        if (course.trending) return <CourseCard key={course.id} course={course}></CourseCard>
                    })
                }
            </div>
        </div >
    );
};

export default Home;