import React from "react";
import firebase from "firebase";
import { useAuth } from "../Contexts/Autcontext";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { toast } from "material-react-toastify";

const styles = makeStyles({
  cardcontent: {
    padding: "1rem 1rem",
    backgroundColor: "#818CF8",
    display: "flex",
    flexDirection: "column",
  },
  cardimg: {
    height: "400px",
    width: "100%",
    objectFit: "cover",
  },
  title: {
    color: "black",
    alignSelf: "flex-start",
    textAlign: "start",
  },
  delete: {
    padding: "0",
    background: "red",
    "&:hover": {
      backgroundColor: "#F87171",
    },
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
  const { currentUser } = useAuth();

  const deleteHandler = () => {
    const _isDelete = window.confirm(
      `Are you sure you want to delete ${props.movieTitle}`
    );
    if (_isDelete) {
      firebase
        .firestore()
        .collection("users")
        .doc(currentUser.uid)
        .collection("movies")
        .doc(props.id)
        .delete();
      toast.success(`${props.movieTitle} successfully deleted`, {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
    }
  };
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
            {props.createdAt && (
              <Button onClick={deleteHandler} className={classes.delete}>
                Delete
              </Button>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
