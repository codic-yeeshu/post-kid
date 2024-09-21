import { Box, Typography } from "@mui/material";
import React from "react";
import error from "../Assets/error-img.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  error: {
    width: "80%",
    height: "auto",
    margin: "auto",
    objectPosition: "center 10%",
  },
  errormsg: {
    textAlign: "center",
  },
});

const ErrorScreen = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography mt={2} mb={2}>
        RESPONSE
      </Typography>
      <Box style={{ display: "flex" }}>
        <img src={error} alt="error" className={classes.error} />
      </Box>
      <Typography className={classes.errormsg}>
        Something went wrong. Check console for more info.
      </Typography>
    </Box>
  );
};

export default ErrorScreen;
