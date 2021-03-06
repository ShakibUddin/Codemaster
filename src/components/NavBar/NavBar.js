import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import About from '../About/About';
import Courses from '../Courses/Courses';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import Trainers from '../Trainers/Trainers';

const NavBar = () => {
    return (
        <div className="flex flex-col justify-center flex-wrap">
            <Router>
                <div className="container flex lg:flex-row flex-col my-8 sm:items-center justify-between">
                    <h1 className="text-3xl font-extrabold text-blue-500 text-center">CODEMASTER</h1>
                    <nav>
                        <ul className="flex flex-wrap justify-center">
                            <li className="mr-1">
                                <Link className="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" to="/home">Home</Link>
                            </li>
                            <li className="mr-1">
                                <Link className="bg-white inline-block py-2 px-4 text-blue-500  font-semibold" to="/courses">Courses</Link>
                            </li>
                            <li className="mr-1">
                                <Link className="bg-white inline-block py-2 px-4 text-blue-500  font-semibold" to="/trainers">Trainers</Link>
                            </li>

                            <li className="mr-1">
                                <Link className="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    {/* using exact keyword to match with exact path */}
                    <Route exact path="/"><Home></Home></Route>
                    <Route exact path="/home"><Home></Home></Route>
                    <Route exact path="/courses"><Courses></Courses></Route>
                    <Route exact path="/trainers"><Trainers></Trainers></Route>
                    <Route exact path="/about"><About></About></Route>
                    <Route path="*"><NotFound></NotFound></Route>
                </Switch>
            </Router>
        </div>
    );
};

export default NavBar;