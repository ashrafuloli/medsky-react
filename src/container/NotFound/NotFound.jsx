import React from 'react';
import {Link} from "react-router-dom";
import {MdKeyboardReturn} from "react-icons/md";

const NotFound = () => {
    return (
        <div className="error-page">
            <div className="error-content">
                <h1>404</h1>
                <p>The webpage you are looking for is not here!</p>
                <Link to="/" class="error-btn">
                    Back To Home
                    <span className="icon"><MdKeyboardReturn/></span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
