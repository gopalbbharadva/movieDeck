import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Search from "./Search";
import { NavLink } from "react-router-dom";

const customStyles = makeStyles({
  btn: {
    margin: "1rem",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#ECFDF5",
    },
  },
  appbar: {
    backgroundColor: "#8B5CF6",
  },
  toolbar: {
    height: "3rem",
  },
  typo: {
    color: "black",
  },
  maindiv: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  home: {
    textDecoration: "none",
    color: "black",
  },
});
export default function Navbar() {
  let flag = false;

  useEffect(() => {
    btnHandler();
  }, []);
  const btnHandler = () => {
    flag = true;
    console.log(flag);
  };
  const classes = customStyles();
  return (
    <>
      {!flag ? (
        <AppBar elevation="0" className={classes.appbar} position="fixed">
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.typo} variant="h5" color="secondary">
              <NavLink to="/" className={classes.home}>
                moviesDeck
              </NavLink>
            </Typography>
            <div className={classes.maindiv}>
              <NavLink style={{ textDecoration: "none" }} to="/Search">
                <Button
                  onClick={btnHandler}
                  className={classes.btn}
                  variant="contained"
                >
                  Search
                </Button>
              </NavLink>
              <Button className={classes.btn} variant="contained">
                Sign up
              </Button>
              <Button className={classes.btn} variant="contained">
                Sign in
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <Search />
      )}
    </>
  );
}
