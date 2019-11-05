import React from 'react';
import './App.scss';

// components
import Nav from './components/Nav';
import MovieList from './components/MovieList';

// contexts
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
		<MovieProvider>
			<div className="App">
				<Nav />
				<MovieList />
			</div>
		</MovieProvider>
  );
}

export default App;
