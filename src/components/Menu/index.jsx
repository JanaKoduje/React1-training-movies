import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
    return (
        <>
            <nav className="menu">
                <Link to="/">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </>
    )
}

