import React, { useEffect, useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Carditem from "./Carditem";
import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const search_api =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function Search() {
  let [flag, setFlag] = useState(false);
  const [searchMovie, setSearchMovie] = useState();
  let [movies, SetMovies] = useState([]);

  //   useEffect(()=>{
  //         formHandler();
  //   },[])

  const formHandler = async (e) => {
    e.preventDefault();
    await fetch(search_api + searchMovie)
      .then((data) => data.json())
      .then((jsonData) => {
        movies = jsonData.results;
        SetMovies(movies);
        // console.log(movies);
      });
    setSearchMovie("");
    if (movies.length === 0) setFlag(false);
    else setFlag(true);
  };
  const styles = makeStyles({
    textfield: {
      width: "24rem",
      backgroundClip: "#C4B5FD",
      margin: "1rem",
    },
    typo: {
      
      margin:"1rem",
      width:"100%",
      //   padding: "0.4rem",
      display:"flex",
      justifyContent:"center",
      alignItems:'center'
    },
  });

  const classes = styles();
  return (
    <div style={{ marginTop: "5rem" }}>
      <Typography variant="h4" className={classes.typo} color="primary">
        Search movies
      </Typography>
      <form onSubmit={formHandler}>
        <Textfield
          value={searchMovie}
          color="primary"
          className={classes.textfield}
          onChange={(e) => setSearchMovie(e.target.value)}
          label="Search"
          placeholder="Search movies..."
          variant="filled"
        />
      </form>

      <Container>
        <Grid container spacing={4}>
          {flag ? (
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
            <Typography color="secondary" className={classes.typo} variant="body1">
              No movies found yet
            </Typography>
          )}  
        </Grid>
      </Container>
    </div>
  );
}
