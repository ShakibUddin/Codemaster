import React from 'react';

const About = () => {
    return (
        <div className="container flex flex-col justify-center">
            <p className="text-4xl font-bold p-12 text-center"><span className="text-blue-500 font-extrabold">CODEMASTER</span> is where we <span className="text-yellow-500">TRAIN</span> you to be a master of what you do</p>

            <div className="flex flex-wrap lg:flex-row flex-col my-32 justify-center items-center">
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
                <div className="lg:w-1/2 w-full text-black p-10">
                    <p className="text-3xl py-4 font-bold">Our Mission</p>
                    <p className="text-xl">Our mission is to train the world’s workforce in the careers of the future. We partner with leading technology companies to learn how technology is transforming industries, and teach the critical tech skills that companies are looking for in their workforce. With our powerful and flexible digital education platform, even the busiest learners can prepare themselves to take on the most in-demand tech roles.</p>
                </div>
            </div>
            <p className="text-3xl py-4 font-bold text-center">Our Global partners</p>
            <div className="flex flex-wrap justify-center">
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2UtwS6ncaXmx6WqVEO6Oub/8d19d851b14ab6b913669fae6ca3a8b5/google-logo.png?fm=webp&q=100" alt="" />
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5cvkzOuNDF7ufQuiGnWEde/5084a36dd91a11028bbeb722f7f21818/aws-logo.png?fm=webp&q=100" alt="" />
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/2peqKnHw89OvG9dNgzqsFL/a5795ff607036d37505cffa42fdddee1/mode-logo.png?fm=webp&q=100" alt="" />
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3ia9REv0wKYiEEXMEERLf1/7f9ac4f31d4183c5fd4d660b7177b7a2/alteryx-logo.png?fm=webp&q=100" alt="" />
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/6FHSYdz556PxJKVXfiyLSN/547b71cad54a60050e378a5dca14e834/ibm-logo.png?fm=webp&q=100" alt="" />
                <img className="w-18 h-7 m-6" src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3kGWSPzG7LPV7JJ9CSPtUX/1b5b6834edbfb1e577271bd182ba1f92/microsoft-logo.png?fm=webp&q=100" alt="" />
            </div>
        </div>
    );
};

export default About;