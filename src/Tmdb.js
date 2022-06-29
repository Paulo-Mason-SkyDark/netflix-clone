const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const basicFetch = async (endpoint) => {
  try {
    const request = await fetch(
      `${API_BASE_URL + endpoint + "&language=pt-BR"}`
    );
    const json = await request.json();
    return json;
  } catch (error) {
    console.log("🚀 ~ file: Tmdb.js ~ line 6 ~ basicFetch ~ error", error);
  }
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da netflix",
        items: await basicFetch(
          `/discover/tv?with_networks=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados",
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romace",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieOrTvInfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case "movie":
          info = await basicFetch(`/movie/${movieID}?api_key=${API_KEY}`);
          break;
        case "tv":
          info = await basicFetch(`/tv/${movieID}?api_key=${API_KEY}`);
          break;
        default:
          info = {};
          break;
      }
    }
    return info;
  },
};
