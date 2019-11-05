import React from 'react';

const Movie = props => {
	// destructure the data passed into props
	const {name, price} = props.movieDetails;
	
	return (
		<div>
			<h1>{name}</h1>
			<h4>{price}</h4>
		</div>
	)
}

export default Movie;
