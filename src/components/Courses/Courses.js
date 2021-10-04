import React, { useEffect, useState } from 'react';
import ProgressIndicator from 'react-loading-animation';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    let [fullstack, setFullstack] = useState([]);
    let [fundamentals, setFundamentals] = useState([]);
    let [frontend, setFrontend] = useState([]);
    let [backend, setBackend] = useState([]);
    let [mobile, setMobile] = useState([]);

    useEffect(() => {
        //fetching all data from json files
        fetch("data/fullstack.json")
            .then(res => res.json())
            .then(data => setFullstack(data));
        fetch("data/fundamentals.json")
            .then(res => res.json())
            .then(data => setFundamentals(data));
        fetch("data/frontend.json")
            .then(res => res.json())
            .then(data => setFrontend(data));
        fetch("data/backend.json")
            .then(res => res.json())
            .then(data => setBackend(data));
        fetch("data/mobile.json")
            .then(res => res.json())
            .then(data => setMobile(data));
    }, []);
    return (
        <div className="container justify-items-start flex-wrap">
            {
                //showing progress indicator untill data loads
                mobile.length === 0 ? <ProgressIndicator></ProgressIndicator> :
                    <div>
                        <p className="text-3xl font-extrabold">Fundamental Courses</p>
                        <div className="flex justify-items-start mb-24 border-b-2 border-gray-400 flex-wrap">
                            {
                                fundamentals.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                        <p className="text-3xl font-extrabold">Frontend Courses</p>
                        <div className="flex justify-items-start mb-24 border-b-2 border-gray-400 flex-wrap">
                            {
                                frontend.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                        <p className="text-3xl font-extrabold">Backend Courses</p>
                        <div className="flex justify-items-start mb-24 border-b-2 border-gray-400 flex-wrap">
                            {
                                backend.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                        <p className="text-3xl font-extrabold">Fullstack Courses</p>
                        <div className="flex justify-items-start mb-24 border-b-2 border-gray-400 flex-wrap">
                            {
                                fullstack.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                        <p className="text-3xl font-extrabold">Mobile App Development Courses</p>
                        <div className="flex justify-items-start mb-24 border-b-2 border-gray-400 flex-wrap">
                            {
                                mobile.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Courses;