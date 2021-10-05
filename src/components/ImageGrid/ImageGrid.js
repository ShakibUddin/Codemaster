import React from 'react';

const ImageGrid = () => {
    return (
        <div className="lg:w-1/2 w-full flex">
            <div className="mt-20">
                <img className="w-full rounded  p-4" src="https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-01.jpg" alt="" />
                <img className="w-full rounded  p-4" src="https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-03.jpg" alt="" />
            </div>
            <div>
                <img className="w-full rounded p-4" src="https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-02.jpg" alt="" />
                <img className="w-full rounded  p-4" src="https://d125fmws0bore1.cloudfront.net/webpack/production/app/components/AboutUs/assets/mission/thumb-04.jpg" alt="" />
            </div>
        </div>
    );
};

export default ImageGrid;