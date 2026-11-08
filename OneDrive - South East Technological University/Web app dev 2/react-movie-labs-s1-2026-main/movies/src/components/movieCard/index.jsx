import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Avatar from "@mui/material/Avatar";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router";

export default function MovieCard({ movie, action }) {
  const { favorites, watchlist } = useContext(MoviesContext);

  movie.favorite = favorites.includes(movie.id);
  movie.watchlist = watchlist.includes(movie.id);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": { transform: "translateY(-6px)", boxShadow: 10 },
      }}
    >
      <CardHeader
        sx={{ pb: 1 }}
        avatar={
          movie.favorite || movie.watchlist ? (
            <Stack direction="row" spacing={0.5}>
              {movie.favorite && (
                <Tooltip title="In your favourites">
                  <Avatar sx={{ bgcolor: "error.main", width: 32, height: 32 }}>
                    <FavoriteIcon fontSize="small" />
                  </Avatar>
                </Tooltip>
              )}
              {movie.watchlist && (
                <Tooltip title="On your watchlist">
                  <Avatar sx={{ bgcolor: "secondary.main", width: 32, height: 32 }}>
                    <WatchLaterIcon fontSize="small" />
                  </Avatar>
                </Tooltip>
              )}
            </Stack>
          ) : null
        }
        title={
          <Typography variant="h6" component="p" sx={{ lineHeight: 1.2 }}>
            {movie.title}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 360 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
        title={movie.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <CalendarIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {movie.release_date || "TBA"}
            </Typography>
          </Stack>
          <Tooltip title={`${movie.vote_average} / 10`}>
            <Box>
              <Rating
                value={movie.vote_average / 2}
                precision={0.5}
                size="small"
                readOnly
              />
            </Box>
          </Tooltip>
        </Stack>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <Box>{action(movie)}</Box>
        <Button
          component={Link}
          to={`/movies/${movie.id}`}
          variant="outlined"
          size="small"
          color="primary"
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}
