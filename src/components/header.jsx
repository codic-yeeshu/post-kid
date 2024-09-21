import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../Assets/post-kid-logo.png";
const useStyles = makeStyles({
  logo: {
    width: 200,
    padding: 5,
  },
});
const Header = () => {
  const classes = useStyles();
  return <img src={logo} alt="app-logo" className={classes.logo} />;
};

export default Header;
