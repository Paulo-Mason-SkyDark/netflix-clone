const API_KEY = "c498162ec39b7c1e079486618839b43b"
const API_BASE_URL = "https://api.themoviedb.org/3"


const basicFetch = async (endpoint) => {
  const request = await fetch(`${API_BASE_URL+endpoint+"&language=pt-BR"}`);
  const json = await request.json();
  return json;
}



export default {
  getHomeList: async () => { 
    return [
      {
        slug: 'originals',
        title: "Originais da netflix",
        items: await basicFetch(`/discover/tv?with_networks=213&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: "Recomendados",
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: "Romace",
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      },{
        slug: 'documentary',
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
      },
    ]
  }
}