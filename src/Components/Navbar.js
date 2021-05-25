import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const customStyles = makeStyles({
  btn: {
    margin: "1rem",
    backgroundColor: "white",
    '&:hover':{
        backgroundColor:"#ECFDF5"
    }
  },
  appbar: {
    backgroundColor: "#A7F3D0",
  },
  typo: {
    color: "black",
  },
  maindiv:{
      width:"100%",
      display:"flex",
      justifyContent:"flex-end"
  },
  home:{
      textDecoration:"none",
      color:"black"
  }
});

export default function Navbar() {
  const classes = customStyles();
  return (
    <>
      <AppBar elevation="0" className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography className={classes.typo} variant="h5" color="secondary">
            <a href="#" className={classes.home}>movieDecks</a>
          </Typography>
          <div className={classes.maindiv}>
            <Button className={classes.btn} variant="contained">
              Search
            </Button>
            <Button className={classes.btn} variant="contained">
              Sign up
            </Button>
            <Button className={classes.btn} variant="contained">
              Sign in
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
