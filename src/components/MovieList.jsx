import React, { useState, useContext } from 'react';

// components
import Movie from './Movie';

// contexts
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<div>
			{movies.map(movie => (
				<Movie key={movie.id} movieDetails={movie} />
			))}
		</div>
	)
}

export default MovieList;
