import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  cardcontent: {
    backgroundColor: "#818CF8",
    display: "flex",
    justifyContent: "space-between",
  },
  cardimg: {
    height:'400px',
    width:'100%',
    objectFit: "cover",
  },
  title: {
    color: "black",
  },
});

const setColor = (movieVote) => {
  // console.log(movieVote);
  if (movieVote > 7) return "green";
  else if (movieVote > 5 && movieVote < 7) return "yellow";
  else return "red";
};
const imagepath = "https://image.tmdb.org/t/p/w1280";

export default function Carditem(props) {
  const classes = styles();
  return (
    <>
      {/* {console.log(movies)} */}
      <Card className={classes.card}>
        <CardActionArea>
          <div className="imagediv">
            <CardMedia
              className={classes.cardimg}
              component="img"
              height="350"
              alt="not render"
              image={
                props.imgUrl
                  ? imagepath + props.imgUrl
                  : "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            />
          </div>
          <CardContent className={classes.cardcontent}>
            <Typography className={classes.title}>
              {props.movieTitle}
            </Typography>
            <Typography id="rating" className={setColor(props.movieRating)}>
              {props.movieRating}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* {console.log(setColor(props.movieRating))}; */}
      </Card>
    </>
  );
}
