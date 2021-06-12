import React from "react";
import Grid from "@material-ui/core/Grid";
import Carditem from "./Carditem";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MovieFirestore from "./MovieFirestore";

export default function Movie() {
  //   let [movies, setMovies] = useState([]);
  const { favorites } = MovieFirestore("movies");
  //   const [selectedMovie, setSelectedMovie] = useState(null);

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
    gridContainer: {
      padding: "1rem 2rem",
    },
  });
  const classes = styles();

  return (
    <>
      <div className={classes.toolbar}></div>
      <Container>
        {favorites.length > 0 ? (
          <Grid container spacing={4}>
            {favorites.map((item) => {
              return (
                <Grid xs={6} key={item.id} sm={4} lg={3} item>
                  <Carditem
                    id={item.id}
                    imgUrl={item.image}
                    movieTitle={item.title}
                    movieRating={item.rating}
                    createdAt={item.createdAt}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <h1>No favorite movies found.</h1>
        )}
      </Container>
    </>
  );
}
