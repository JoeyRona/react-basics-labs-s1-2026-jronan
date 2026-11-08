import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import AddWatchlaterIcon from "../components/cardIcons/addToWatchlist";
import { getMovie, getMovieRecommendations } from "../api/tmdb-api";

// Route: /movies/:id/recommendations
const MovieRecommendationsPage = () => {
  const { id } = useParams();

  const movieQuery = useQuery({
    queryKey: ["movie", { id: id }],
    queryFn: getMovie,
  });

  const recommendationsQuery = useQuery({
    queryKey: ["recommendations", { id: id }],
    queryFn: getMovieRecommendations,
  });

  if (movieQuery.isPending || recommendationsQuery.isPending) {
    return <Spinner />;
  }

  if (movieQuery.isError) {
    return <h1>{movieQuery.error.message}</h1>;
  }
  if (recommendationsQuery.isError) {
    return <h1>{recommendationsQuery.error.message}</h1>;
  }

  return (
    <PageTemplate
      title={`Recommended if you liked "${movieQuery.data.title}"`}
      movies={recommendationsQuery.data}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddWatchlaterIcon movie={movie} />
        </>
      )}
    />
  );
};

export default MovieRecommendationsPage;
