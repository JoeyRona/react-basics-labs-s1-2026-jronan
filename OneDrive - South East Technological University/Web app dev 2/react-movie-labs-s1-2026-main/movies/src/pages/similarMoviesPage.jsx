import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddWatchlaterIcon from "../components/cardIcons/addToWatchlist";
import { getMovie, getSimilarMovies } from "../api/tmdb-api";

// Route: /movies/:id/similar
const SimilarMoviesPage = () => {
  const { id } = useParams();

  const movieQuery = useQuery({
    queryKey: ["movie", { id: id }],
    queryFn: getMovie,
  });
const similarQuery = useQuery({
    queryKey: ["similar", { id: id }],
    queryFn: getSimilarMovies,
  });

  if (movieQuery.isPending || similarQuery.isPending) {
    return <Spinner />;
  }

  if (movieQuery.isError) {
    return <h1>{movieQuery.error.message}</h1>;
  }
  if (similarQuery.isError) {
    return <h1>{similarQuery.error.message}</h1>;
  }

  return (
    <PageTemplate
      title={`Movies similar to "${movieQuery.data.title}"`}
      movies={similarQuery.data}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddWatchlaterIcon movie={movie} />
        </>
      )}
    />
  );
};

export default SimilarMoviesPage;
