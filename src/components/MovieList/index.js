import './style.css';

const MovieList = ({ title, items }) => {
	return (
		<div className="movieRow">
			<h2>{title}</h2>
			<div className="movieRow--listarea">
				<div className="movieRow--list">
					{items.results.length &&
						items.results.map((item, key) => {
							return (
								<div key={key} className="movieRow--item">
									<img
										src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
										alt={item.original_title}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
//Qualquer erro de pagina mudar para ListMovie();
