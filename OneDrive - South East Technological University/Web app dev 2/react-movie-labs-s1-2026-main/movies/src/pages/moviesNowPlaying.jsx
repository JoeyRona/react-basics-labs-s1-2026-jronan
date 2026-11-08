import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getMoviesNowPlaying } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const MoviesNowPlaying = () => {
  const { data: movies, error, isPending, isError } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getMoviesNowPlaying,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <PageTemplate
      title="Movies Now in Theatres"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default MoviesNowPlaying;
