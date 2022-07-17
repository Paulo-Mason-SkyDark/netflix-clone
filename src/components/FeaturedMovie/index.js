import "./style.css";

const FeaturedMovie = ({ movie }) => {
  let firstDate = new Date(movie.first_air_date ?? new Date());
  let genres = [];

  movie.genres?.forEach((genre) => genres.push(genre.name));

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{movie.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{movie.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--number_of_seasons">
              {movie.number_of_seasons}{" "}
              {getSeasonInThePluralOrSingular(movie.number_of_seasons)}
            </div>
          </div>
          <div className="featured--description">{movie.overview}</div>
          <div className="featured--buttons">
            <a href="" className="featured--watchButton">
              ▶ Assistir
            </a>
            <a href="" className="featured--myListButton">
              + Minha lista
            </a>
          </div>
          <div className="featured--genres">
            <strong>Genero: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};

const getSeasonInThePluralOrSingular = (howManySeasons) => {
  let word;
  howManySeasons !== 1 ? (word = "Temporadas") : (word = "Temporada");
  return word;
};

export default FeaturedMovie;
// {featuredMovie}
