import React from 'react';
import { movies } from "../../movie-database";
import { NavLink } from 'react-router-dom'
import './style.css';


export const MovieList = () => {
    return (
        <>
            <nav className="movie-list">
                {movies.map((movie) => (
                    <NavLink to={`/movies/${movie.id}`}
                        key={movie.id}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        {movie.title}
                    </NavLink>))}
            </nav>
        </>
    )
}