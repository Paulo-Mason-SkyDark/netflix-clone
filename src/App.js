import './App.css';
import tmdb from './Tmdb';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';

function App() {
	const [ movieHomeList, setMovieHomeList ] = useState([]);

	useEffect(() => {
		const loadListOfHome = async () => {
			const listHome = await tmdb.getHomeList();
			setMovieHomeList(listHome);
		};
		if (movieHomeList.length === 0) loadListOfHome();
	}, []);

	return (
		<div className="page">
			<section className="movie-lists">
				{movieHomeList.map((movieListItem, key) => {
					return <MovieList key={key} title={movieListItem.title} items={movieListItem.items} />;
				})}
			</section>
		</div>
	);
}

export default App;
