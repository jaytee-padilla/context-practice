import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

// MovieProvider's job is to hold information (state) and then pass that info down into components
export const MovieProvider= props => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 23124
		},
		{
			name: 'Game of Thrones',
			price: '$10',
			id: 2566124
		},
		{
			name: 'Inception',
			price: '$10',
			id: 23524
		},
	])

	// This is where the passing of state into components happens, in the props.children wrapped between the provider tags
	// props.children can be used on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’
	// put another way, props.children is used to display whatever you include between the opening and closing tags when invoking a component
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
}
