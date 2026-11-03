import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const WatchLaterIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWatchlist}>
      <WatchLaterIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default WatchLaterIcon
