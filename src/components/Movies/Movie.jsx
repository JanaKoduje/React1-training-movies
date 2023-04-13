import React from 'react';
import { movies } from "../../movie-database"
import { useParams } from 'react-router-dom';
import './style.css';


export const Movie = () => {
    const { movieId } = useParams();
    const movie = movies.find((mov) => mov.id === Number(movieId))


    return (
        <>
            <div className="movie">
                <img src={movie?.poster} alt={movie?.title} />

                <h2>{movie?.title}</h2>

                <p>{movie?.storyline}</p>
            </div>
        </>
    )
}
