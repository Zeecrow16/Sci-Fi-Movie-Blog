import React, { useEffect, useState } from 'react';
import { fetchMoviesByDecade } from '../services/fetchMovies';
import { Movie } from '../types/movie';

const MovieList: React.FC = () => {
    const [moviesFromDecade, setMoviesFromDecade] = useState<Movie[]>([]);
    const [selectedDecade, setSelectedDecade] = useState<number>(1920)

    useEffect(() => {
        const moviesFromSelectedDecade = fetchMoviesByDecade(selectedDecade);
        setMoviesFromDecade(moviesFromSelectedDecade);
    }, [selectedDecade]);

    const handleDecadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDecade(Number(event.target.value));
    };

    return (
        <div>
            <h1>Movies From The {selectedDecade}s</h1>

            {/* Decade Selection Dropdown */}
            <select onChange={handleDecadeChange} value={selectedDecade}>
                <option value={1920}>1920s</option>
                <option value={1930}>1930s</option>
                <option value={1940}>1940s</option>
                <option value={1950}>1950s</option>
                <option value={1960}>1960s</option>
                <option value={1970}>1970s</option>
                <option value={1980}>1980s</option>
                <option value={1990}>1990s</option>
                <option value={2000}>2000s</option>
                <option value={2010}>2010s</option>
                <option value={2020}>2020s</option>
            </select>

            {/* Movie List Display */}
            {moviesFromDecade.length === 0 ? (
                <p>No Movies Found for this Decade</p>
            ) : (
                <ul>
                    {moviesFromDecade.map(movie => (
                        <li key={movie.id}>
                            <h2>{movie.title} ({movie.year})</h2>
                            <p>{movie.genre}</p>
                            <p>Rating: {movie.rating}</p>
                            <p>{movie.review}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;