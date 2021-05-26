import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  cardcontent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardimg: {
    maxWidth: "100%",
  },
});
const imagepath = "https://image.tmdb.org/t/p/w1280";
export default function Carditem(props) {
  const classes = styles();
  return (
    <>
      {/* {console.log(movies)} */}
      <Card  className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardimg}
            component="img"
            height="350"
            alt="not render"
            image={imagepath + props.imgUrl}
          />
          <CardContent className={classes.cardcontent}>
            <Typography style={{ textAlign: "start" }}>
              {props.movieTitle}
            </Typography>
            <Typography style={{ textAlign: "start" }}>
              {props.movieRating}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
