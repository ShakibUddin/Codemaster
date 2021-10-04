import React, { useEffect, useState } from 'react';
import ProgressIndicator from 'react-loading-animation';
import TrainerCard from '../TrainerCard/TrainerCard';

const Trainers = () => {
    let [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch('data/trainers.json')
            .then(res => res.json())
            .then(data => setTrainers(data));
    }, []);
    return (
        <div>
            <p className="text-4xl font-bold text-yellow-500 p-12 text-center">Meet our experienced trainers</p>
            <div className="container flex flex-wrap justify-center">
                {
                    trainers.length === 0 ? <ProgressIndicator></ProgressIndicator> :
                        trainers.map(trainer => <TrainerCard trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>

    );
};

export default Trainers;