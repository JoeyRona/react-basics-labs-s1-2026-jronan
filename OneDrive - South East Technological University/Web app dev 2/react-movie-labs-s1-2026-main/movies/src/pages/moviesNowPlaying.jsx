import { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMoviesNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const MoviesNowPlaying = () => {
  const [movies, setMovies] = useState([]);

 useEffect(() => {
    getMoviesNowPlaying().then(movies => {
      setMovies(movies);
    });
  }, []);
  
  return (
    <PageTemplate
      title='Movies Now in Theatres'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default MoviesNowPlaying;
