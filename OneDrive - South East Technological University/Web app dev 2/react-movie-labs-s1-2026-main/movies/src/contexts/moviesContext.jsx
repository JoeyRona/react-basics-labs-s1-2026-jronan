import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [watchList, setWatchlist] = useState([]);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)) {
      newFavorites = [...favorites, movie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };
  // console.log(myReviews);

  const addToPlaylist = (movie) => {
    let newPlaylist = [];
    if (!playlist.includes(movie.id)) {
      newPlaylist = [...playlist, movie.id];
    } else {
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist);
  };
  // console.log(playlist);


  const addToWatchlist = (movie) => {
    let newWatchlist =[];
    if (!watchList.include(movie.id)){
      newWatchlist = [...watchList, movie.id];
    } else {
      newWatchlist = [watchlist];
    }
    setWatchlist(newWatchlist)
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(favorites.filter((mId) => mId !== movie.id));
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        addToWatchlist,
        removeFromWatchlist,
        playlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
