import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchMoviesByDecade } from '../services/fetchMovies';
import Timeline from '../components/Timeline';
import { Movie } from '../types/movie';
import MovieList from '../components/MovieList';

const MoviesPage: React.FC = () => {
    const [moviesFromDecade, setMoviesFromDecade] = useState<Movie[]>([]);
    const [selectedDecade, setSelectedDecade] = useState<number>(1920)

    const handleDecadeChange = (decade: number) => {
        setSelectedDecade(decade);
    };

    useEffect(() => {
        const moviesFromDecade = fetchMoviesByDecade(selectedDecade);
        setMoviesFromDecade(moviesFromDecade);
    }, [selectedDecade]);

    return (
        <Container>
            <Row className='my-4'>
                <Col className='text-center'>
                <h2>Browse Movies by Decade</h2>
                </Col>
            </Row>

            {/* Timeline Bar */}
            <Timeline selectedDecade={selectedDecade} onSelectDecade={handleDecadeChange} />

            {/* Movie List */}
            <MovieList movies={moviesFromDecade} />
        </Container>
    );
};

export default MoviesPage;