const key = "96ac100724b4b4ced6344916952c21e2";

const requests = {
  requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated :  `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
  requestInspirational : `https://api.themoviedb.org/3/movie/search?api_key=${key}language=en-US&query=inspirational&page=1`,
}

export default requests;