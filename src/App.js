import "./App.css";
import tmdb from "./Tmdb";
import MovieList from "./components/MovieList";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

import { useEffect, useState, useCallback } from "react";

function App() {
  const [movieHomeList, setMovieHomeList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(true);

  const getFeaturedMovie = useCallback(async () => {
    let originalsMovie = movieHomeList.filter(
      (movie) => movie.slug === "originals"
    );
    let randomChosen = Math.floor(
      Math.random() * (originalsMovie[0]?.items.results.length - 1)
    );
    let chosen = originalsMovie[0]?.items.results[randomChosen];
    let chosenInfo = await tmdb.getMovieOrTvInfo(chosen?.id, "tv");
    setFeaturedData(chosenInfo);
  }, [movieHomeList]);

  useEffect(() => {
    const loadListOfHome = async () => {
      const listHome = await tmdb.getHomeList();
      setMovieHomeList(listHome);
    };

    if (movieHomeList.length === 0) {
      loadListOfHome();
    }
    getFeaturedMovie();
  }, [movieHomeList]);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header blackHeader={blackHeader} />

      {featuredData && <FeaturedMovie movie={featuredData} />}

      <section className="movie-lists">
        {movieHomeList.map((movieListItem, key) => {
          return (
            <MovieList
              key={key}
              title={movieListItem.title}
              items={movieListItem.items}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
