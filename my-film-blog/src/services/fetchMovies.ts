import moviesData from '../data/movies.json';
import { Movie } from '../types/movie';

export const fetchMoviesByDecade = (decade: number): Movie[] => {
    const startYear = decade;
    const endYear = decade + 9;
    return moviesData.filter((movie: Movie) => movie.year >= startYear && movie.year <= endYear);
};