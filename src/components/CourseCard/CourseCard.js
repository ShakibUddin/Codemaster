import React from 'react';
import StarRatings from 'react-star-ratings';

const CourseCard = (props) => {
    //destructuring course data
    let { name, rating, price, image } = props.course;
    console.log(props.course)
    return (
        <div style={{ minWidth: "300px" }} className="w-3/12 m-6 flex flex-col justify-start shadow-2xl rounded-lg overflow-hidden">
            <img className="w-full" src={image} alt="" />
            <div className="p-3">
                <p className="font-bold text-3xl py-3">{name}</p>
                <StarRatings
                    rating={parseFloat(rating)}
                    starDimension="25px"
                    starRatedColor="orange"
                    starSpacing="5px"
                />
                <p className="font-bold text-blue-600 text-2xl py-3">${price}</p>
            </div>
        </div>
    );
};

export default CourseCard;