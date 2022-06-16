import React from "react";
import { Link } from "react-router-dom"
import image from "../images/404.jpg"

const NotFound = () => {
    return (
        <>
            <Link to="/">
                <div>
                    <img src={image} className="image" alt='image' />
                </div>
                <div>
                    <button type="button">Go back</button>
                </div>
            </Link>
        </>
    )
};

export default NotFound;
