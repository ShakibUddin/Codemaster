import React from 'react';
import {
    HashRouter as Router, Link, Route, Switch
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
                <nav className="container my-6 flex justify-between">
                    <h1 className="text-3xl font-extrabold text-blue-500">CODEMASTER</h1>
                    <ul className="flex flex-wrap justify-center">
                        <li className="-mb-px mr-1">
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
                <Switch>
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