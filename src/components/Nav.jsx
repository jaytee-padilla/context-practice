import React, { useContext } from 'react';
import '../App.scss';

// contexts
import { MovieContext } from '../contexts/MovieContext';

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div className="navbar">
			<h3>Jaytee</h3>
			<p>Number of Movies In List: {movies.length}</p>
		</div>
	)
}

export default Nav;
