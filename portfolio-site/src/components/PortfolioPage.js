import React from "react";
import {Link} from "react-router-dom";

export default () => (
    <div>
        <h1>My Work</h1>
        <p>Check out the things I have done:</p>
        <ul>
            <li><Link to="/portfolio/1">Item One</Link></li>
            <li><Link to="/portfolio/2">Item Two</Link></li>
        </ul>
    </div>
);