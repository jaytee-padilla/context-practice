import React, { useState, useContext } from 'react';
import uuid from 'uuid';

// contexts
import { MovieContext } from '../contexts/MovieContext';

const AddMovie = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movies, setMovies] = useContext(MovieContext);

	const updateName = event => {
		setName(event.target.value);
	}

	const updatePrice = event => {
		setPrice(event.target.value);
	}

	const addMovie = event => {
		event.preventDefault();

		setMovies([...movies, {name: name, price: `$${price}`, id: uuid()}])
		setName('');
		setPrice('');
		console.log(movies);
	}

	return (
		<div>
			<form onSubmit={addMovie}>
				<input type="text" name="name" value={name} onChange={updateName} placeholder="name" required />
				<input type="text" name="price" value={price} onChange={updatePrice} placeholder="price" required />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default AddMovie;
