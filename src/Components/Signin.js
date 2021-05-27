import React from "react";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Cardcontent from "@material-ui/core/CardContent";
import { makeStyles, makestyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const styles = makeStyles({
  textfield: {
    margin: "1rem",
    width: "17rem",
  },
  cardcontent: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function Signup() {
  const classes = styles();
  return (
    <div className="container">
      <div className="sub-container">
        <Card className={classes.card} variant="outlined">
          <Cardcontent className={classes.cardcontent}>
            <Typography variant="h4" className="title">
              Sign In
            </Typography>
            <Textfield
              className={classes.textfield}
              type="email"
              placeholder="Enter email:"
              label="Email"
              variant="filled"
            ></Textfield>
            <Textfield
              className={classes.textfield}
              type="password"
              placeholder="Enter password:"
              label="Password"
              variant="filled"
            ></Textfield>
            <Button variant="contained" color="primary">
              Sign in
            </Button>
            <Typography variant="body1">
              Don't have an account?
              <NavLink style={{ textDecoration: "none" }} to="/Signup">
                Sign up
              </NavLink>
            </Typography>
          </Cardcontent>
        </Card>
      </div>
    </div>
  );
}
