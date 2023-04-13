import React from 'react';
import './style.css';
import { MovieList } from './MovieList';
import { Outlet } from 'react-router-dom';


export const Movies = () => {
    return (
        <>
            <div className="movies">
                <h1>Movies</h1>

                <div className="movies-container">
                    <MovieList />
                    <Outlet />
                </div>
            </div>

        </>
    )
}