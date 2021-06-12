import React, { useRef } from "react";
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
export default function Signin() {
  const classes = styles();
  const { signIn } = useAuth();

  let routeHistory = useHistory();

  let emailRef = useRef();
  let passwordRef = useRef();

  const formSubmitHandler = async (e) => {
    console.log(emailRef.current.value);
    e.preventDefault();
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
      toast.success("Signed in successful", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      routeHistory.push("/");
    } catch {
      toast.error("Invalid email or password", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="container">
      <div className="sub-container">
        <Card className={classes.card} variant="outlined">
          <Cardcontent className={classes.cardcontent}>
            <form className={classes.form} onSubmit={formSubmitHandler}>
              <Typography variant="h4" className="title">
                Sign In
              </Typography>
              <Textfield
                inputRef={emailRef}
                required
                className={classes.textfield}
                type="email"
                placeholder="Enter email:"
                label="Email"
                variant="filled"
              ></Textfield>
              <Textfield
                inputRef={passwordRef}
                required
                className={classes.textfield}
                type="password"
                placeholder="Enter password:"
                label="Password"
                variant="filled"
              ></Textfield>
              <Button variant="contained" type="submit" color="primary">
                Sign in
              </Button>
            </form>
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
