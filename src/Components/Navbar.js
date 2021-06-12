import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme, useMediaQuery } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/Autcontext";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

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
    display: "flex",
    justifyContent: "space-between",
  },
  typo: {
    color: "black",
  },
  maindiv: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  links: {
    color: "black",
    fontSize: "1.5rem",
    textDecoration: "none",
    padding: "1rem",
  },
  home: {
    textDecoration: "none",
    color: "black",
  },
});

export default function Navbar() {
  const { signOut, currentUser } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const classes = customStyles();

  const logoutUser = () => {
    const _isLogout = window.confirm(`Logout user ${currentUser.email}?`);
    if (_isLogout) signOut();
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));

  console.log(isMatch);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.typo} variant="h5" color="secondary">
            <NavLink
              to="/"
              
              className={classes.home}
            >
              moviesDeck
            </NavLink>
          </Typography>
          {!isMatch ? (
            <div>
              <NavLink
                className={classes.links}
                activeClassName="currentNavbar"
                to="/Search"
              >
                Search
              </NavLink>

              {!currentUser ? (
                <NavLink
                  className={classes.links}
                  activeClassName="currentNavbar"
                  to="/Signup"
                >
                  Sign up
                </NavLink>
              ) : (
                <NavLink
                  className={classes.links}
                  activeClassName="currentNavbar"
                  to="/Favorites"
                >
                  Watchlists
                </NavLink>
              )}
              {!currentUser ? (
                <NavLink
                  className={classes.links}
                  activeClassName="currentNavbar"
                  to="/Signin"
                >
                  Sign in
                </NavLink>
              ) : (
                <NavLink
                  activeClassName="currentNavbar"
                  onClick={logoutUser}
                  className={classes.links}
                  to="/Logout"
                >
                  Logout
                </NavLink>
              )}
            </div>
          ) : (
            <div className={classes.maindiv}>
              <Button
                onClick={handleMenu}
                style={{ padding: "0", color: "white" }}
              >
                <MenuIcon fontSize="large" />
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    className={classes.links}
                    activeClassName="currentNavbar"
                    to="/Search"
                  >
                    Search
                  </NavLink>
                </MenuItem>
                {!currentUser ? (
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <NavLink
                      className={classes.links}
                      activeClassName="currentNavbar"
                      to="/Signup"
                    >
                      Sign up
                    </NavLink>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      className={classes.links}
                      activeClassName="currentNavbar"
                      to="/Favorites"
                    >
                      Watchlists
                    </NavLink>
                  </MenuItem>
                )}
                {!currentUser ? (
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <NavLink
                      className={classes.links}
                      activeClassName="currentNavbar"
                      to="/Signin"
                    >
                      Sign in
                    </NavLink>
                  </MenuItem>
                ) : (
                  <MenuItem onClick={handleClose}>
                    <NavLink
                      activeClassName="currentNavbar"
                      onClick={logoutUser}
                      className={classes.links}
                      to="/Logout"
                    >
                      Logout
                    </NavLink>
                  </MenuItem>
                )}
              </Menu>
            </div>
          )}

          {/* )} */}
        </Toolbar>
      </AppBar>
    </>
  );
}
