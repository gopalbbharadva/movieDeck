import React, { useRef, useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Cardcontent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/Autcontext";
import { toast } from "material-react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";

toast.configure();
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
  form: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function Signup() {
  const classes = styles();

  const route = useHistory();
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let cnfPasswordRef = useRef("");
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);
    if (passwordRef.current.value !== cnfPasswordRef.current.value) {
      toast.error("Password does not match", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      cnfPasswordRef.current.value = "";
      return;
    }

    try {
      setError("");
      await signUp(emailRef.current.value, passwordRef.current.value);
      toast.success("Account created successfully!!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      route.push("/");
    } catch {
      toast.error("Failed to sign in!!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      // console.log("Failed to sign in");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      cnfPasswordRef.current.value = "";
    }
  };
  return (
    <div className="container">
      <div className="sub-container">
        <Card className={classes.card} variant="outlined">
          <Cardcontent className={classes.cardcontent}>
            {currentUser && currentUser.email}
            <form className={classes.form} onSubmit={formSubmitHandler}>
              <Typography variant="h4" className="title">
                Sign Up
              </Typography>
              {/* <input type="email" ref={emailRef} placeholder="Enter email"></input> */}
              <Textfield
                required
                className={classes.textfield}
                type="email"
                inputRef={emailRef}
                placeholder="Enter email:"
                label="Email"
                variant="filled"
              ></Textfield>
              <Textfield
                required
                inputRef={passwordRef}
                className={classes.textfield}
                type="password"
                placeholder="Enter password:"
                label="Password"
                variant="filled"
              ></Textfield>
              <Textfield
                required
                inputRef={cnfPasswordRef}
                className={classes.textfield}
                type="password"
                placeholder="Re-enter password:"
                label="Confirm password"
                variant="filled"
              ></Textfield>
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </form>

            <Typography variant="body1">
              Already have an account?
              <NavLink style={{ textDecoration: "none" }} to="/Signin">
                Sign in
              </NavLink>
            </Typography>
          </Cardcontent>
        </Card>
      </div>
    </div>
  );
}
