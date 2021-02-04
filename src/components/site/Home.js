import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div className ="mainDiv">
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is intended to be a starter/tutuorial app for your upcoming project and a learning sandbox for you in months and year to come should you continue to develop software with React.  In this application we will work through some of the basic React contents, build out some small applications, and then unleash you to build your own applications.
                </p>
                <hr/>
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next module.</li>
                    <li>
                        The styling is intentionally bland in some spots. Just a sandbox. 
                    </li>
                    <li>At this phase, this site is not yet responsive</li>
                    <li>
                        My Portfolio Project 
                    </li>
                    <li>We have tried to collect the very best resources for this app, and we have cited those <Link to="/resources">here</Link>
                    </li>
                    <li>
                        The set up for this app might be the confusing part.  Hang in there...
                    </li>
                    <li>
                        <link to="/resources">React Resources</link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;