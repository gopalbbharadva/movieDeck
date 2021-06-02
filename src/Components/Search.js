import React, { useEffect, useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Carditem from "./Carditem";
import { Button, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Moviemodal from "./Moviemodal";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function Search() {
  let [flag, setFlag] = useState(false);
  const [searchMovie, setSearchMovie] = useState();
  let [movies, setMovies] = useState([]);
  const [rating, setRating] = useState();
  let [ratingMovie, setRatingMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();
    const voteMovie = [];
    console.log("formhandler");
    await fetch(search_api + searchMovie)
      .then((data) => data.json())
      .then((movies) => {
        console.log(movies.results);
        setMovies(movies.results);
      });
    movies.filter((currentMovie) => {
      // console.log(searchMovie);
      if (currentMovie.vote_average <= parseInt(rating)) {
        voteMovie.push(currentMovie);
      }
      console.log(voteMovie);
      setRatingMovie(voteMovie);
    });
    // movies.map((item) => {
    //   console.log(item.vote_average);
    // });
    //
    setSearchMovie("");
    setRating("");
    if (movies.length === 0) setFlag(false);
    else setFlag(true);
  };
  const styles = makeStyles({
    textfield: {
      width: "24rem",
      backgroundClip: "#C4B5FD",
      margin: "1rem",
      textTransform: "uppercase",
    },
    typo: {
      margin: "1rem",
      width: "100%",
      //   padding: "0.4rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const classes = styles();
  const selectMovie = (currentMovie) => {
    setSelectedMovie(currentMovie);
    // setFlag(true);
  };
  const resetFlag = () => {
    setSelectedMovie(null);
    // setFlag(false);
  };

  return (
    <div style={{ marginTop: "5rem" }}>
      <Typography variant="h4" className={classes.typo} color="primary">
        Search movies
      </Typography>
      <form onSubmit={formHandler}>
        <Textfield
          required
          value={searchMovie}
          color="primary"
          className={classes.textfield}
          onChange={(e) => setSearchMovie(e.target.value.toLowerCase())}
          label="Search"
          placeholder="Search movies..."
          variant="filled"
        />
        <Textfield
          required
          type="number"
          value={rating}
          color="primary"
          className={classes.textfield}
          onChange={(e) => setRating(e.target.value)}
          label="Rating"
          placeholder="Type rating.."
          variant="filled"
        />
        <Button type="submit" variant="outlined">
          Search
        </Button>
      </form>

      <Container>
        <Grid container spacing={4}>
          {ratingMovie.map((item) => {
            return (
              <Grid
                xs={6}
                key={item.id}
                sm={4}
                lg={3}
                onClick={() => selectMovie(item)}
                item
              >
                <Carditem
                  imgUrl={item.poster_path}
                  movieTitle={item.title}
                  movieRating={item.vote_average}
                />
              </Grid>
            );
          })}
          <div onClick={resetFlag}>
            {selectedMovie  && <Moviemodal currentMovie={selectedMovie} />}
          </div>
          {/* {flag ? (
            movies.map((item) => {
              return (
                <Grid xs={6} key={item.id} sm={4} lg={3} item>
                  <Carditem
                    imgUrl={item.poster_path}
                    movieTitle={item.title}
                    movieRating={item.vote_average}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography
              color="secondary"
              className={classes.typo}
              variant="body1"
            >
              No movies found yet
            </Typography>
          )} */}
        </Grid>
      </Container>
    </div>
  );
}
