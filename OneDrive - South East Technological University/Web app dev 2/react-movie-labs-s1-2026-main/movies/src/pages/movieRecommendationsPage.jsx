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

  // The movie itself is only needed for the page title (and is usually cached already).
  const movieQuery = useQuery({
    queryKey: ["movie", { id: id }],
    queryFn: getMovie,
  });
