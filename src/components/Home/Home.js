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
            <div className="w-8/12">
                <img className="w-full object-cover mx-auto" src={bg} alt="" />
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