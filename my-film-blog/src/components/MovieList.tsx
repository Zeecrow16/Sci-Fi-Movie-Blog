import React from "react";
import MovieCard from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import { MovieListProps } from "../types/movieList";

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <Col className="text-center">
            <p>No movies found for this decade.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MovieList;