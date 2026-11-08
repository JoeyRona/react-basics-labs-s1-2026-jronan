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
