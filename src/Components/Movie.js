import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carditem from "./Carditem";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
export default function Movie() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    await fetch(movie_api)
      .then((allMovies) => allMovies.json())
      .then((json) => {
        // console.log(json.results);
        movies = json.results;
        setMovies(movies);
      });
  };

  const styles = makeStyles({
    toolbar: {
      marginTop: "8rem",
    },
  });
  const classes = styles();

  const gridHandler=()=>{
    console.log("sjdjsdjj")
  }
  return (
    <>
      <div className={classes.toolbar}></div>
      <Container>
        <Grid container spacing={4}>
          {movies.map((item) => {
            return (
              <Grid xs={6} onClick={gridHandler} key={item.id} sm={4} lg={3} item>
                <Carditem
                  imgUrl={item.poster_path}
                  movieTitle={item.title}
                  movieRating={item.vote_average}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
