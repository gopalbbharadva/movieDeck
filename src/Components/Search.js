import React, { useEffect, useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Carditem from "./Carditem";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Moviemodal from "./Moviemodal";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function Search() {
  let voteMovie = [];
  let [flag, setFlag] = useState(true);
  const [searchMovie, setSearchMovie] = useState();
  // let [movies, setMovies] = useState([]);
  let [rating, setRating] = useState(0);
  let [ratingMovie, setRatingMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const formHandler = async (e) => {
    setRatingMovie("");
    e.preventDefault();
    console.log("formhandler");
    await fetch(search_api + searchMovie)
      .then((data) => data.json())
      .then((movies) => {
        console.log(rating);
        console.log(movies.results);
        // // setMovies(movies.results);
        // setRatingMovie(movies.results);
        movies.results.filter((item) => {
          if (item.vote_average <= parseInt(rating)) voteMovie.push(item);
          setRatingMovie(voteMovie);
        });
      });
    console.log(rating);
    console.log(ratingMovie);
    setSearchMovie("");
    setRating("");
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    submitBtn: {
      alignSelf: "center",
    },
  });

  const classes = styles();
  const selectMovie = (currentMovie) => {
    setSelectedMovie(currentMovie);
  };

  const setVote = (e) => {
    rating = e.target.value;
    setRating(rating);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "5rem auto",
      }}
    >
      <Typography variant="h4" className={classes.typo} color="primary">
        Search movies
      </Typography>
      <form
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        onSubmit={formHandler}
      >
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
        <div style={{ alignSelf: "center", padding: "1rem" }}>
          <FormLabel>Rating</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={rating}
            onChange={setVote}
          >
            <FormControlLabel
              value="8"
              control={<Radio required />}
              label="<5"
            />
            {/* <FormControlLabel value="5" control={<Radio />} label=">5" /> */}
          </RadioGroup>
        </div>
        <Button type="submit" className={classes.submitBtn} variant="outlined">
          Search
        </Button>
      </form>

      <Container>
        <Grid container spacing={4}>
          {ratingMovie.length != 0 ? (
            ratingMovie.map((item) => {
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
            })
          ) : (
            <div style={{width:'100%',margin:'3rem',fontSize:'1.5rem',color:'red', display:'flex',justifyContent:'center'}}>No movies found</div>
          )}
          <div>
            {selectedMovie && (
              <Moviemodal
                currentMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
              />
            )}
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
