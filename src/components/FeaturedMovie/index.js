import "./style.css";

const FeaturedMovie = ({ movie }) => {
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
        <div className="featured--horizontal">{movie.original_name}</div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
// {featuredMovie}
