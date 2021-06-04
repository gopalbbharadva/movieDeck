import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carditem from "./Carditem";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Moviemodal from "./Moviemodal";

const movie_api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imagepath = "https://image.tmdb.org/t/p/w1280";
export default function Movie() {
  let [movies, setMovies] = useState([]);
  
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    await fetch(movie_api)
      .then((allMovies) => allMovies.json())
      .then((json) => {
        // console.log(json.results[0]);
        movies = json.results;
        setMovies(movies);
      });
  };

  const styles = makeStyles({
    toolbar: {
      marginTop: "8rem",
    },
    cardcontent: {
      backgroundColor: "#818CF8",
      maxHeight: "100vh",
    },
    cardimg: {
      minWidth: "100%",
      minHeight: "100%",
      maxWidth: "150%",
      objectFit: "fill",
    },
    div: {
      display: "flex",
      margin: "80px auto",
      maxHeight: "60%",
      maxWidth: "20%",
      display: "block",
      boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.5)",
    },
    title: {
      color: "black",
    },
    main: {
      top: 0,
      left: 0,
      position: "fixed",
      width: "100%",
      height: "100%",
      background: "rgba(139, 150, 143, 0.5)",
    },
    overview: {
      fontSize: "1rem",
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
  const classes = styles();

  const selectMovie = (currentMovie) => {
    setSelectedMovie(currentMovie);
    // setFlag(true);
  };

  // const resetFlag = () => {
  //   setSelectedMovie(null);
  //   // setFlag(false);
  // };

  return (
    <>
      <div className={classes.toolbar}></div>
      <Container>
        <Grid container spacing={4}>
          {movies.map((item) => {
            return (
              <Grid
                xs={6}
                onClick={() => selectMovie(item)}
                key={item.id}
                sm={4}
                lg={3}
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
        </Grid>
        <div >
          {selectedMovie &&  (
            <Moviemodal
              currentMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
            />
          )}
        </div>
      </Container>
    </>
  );
}
{
  /* <Card className={classes.main} onClick={resetFlag}>
            <CardActionArea className={classes.div}>
              <CardMedia
                className={classes.cardimg}
                component="img"
                height="200"
                alt="not render"
                image={
                  selectedMovie.poster_path
                    ? imagepath + selectedMovie.poster_path
                    : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
              />
              <CardContent className={classes.cardcontent}>
                <Typography className={classes.overview}>{selectedMovie.overview}</Typography>
              </CardContent>
            </CardActionArea>
          </Card> */
}
