import React from "react";
import { MovieCardProps } from "../types/movieCard";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h5 className="mt-2">{movie.title}</h5>
            <h6 className="mt-2">{movie.genre}</h6>
            <p>{movie.year}</p>
        </div>
    );
};

export default MovieCard;