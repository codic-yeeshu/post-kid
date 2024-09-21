import { Box, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import numbers from "../Assets/numbering.png";
import React from "react";

const useStyles = makeStyles({
  textareastyle: {
    width: "100%",
    padding: 10,
    background: `url(${numbers})`,
    backgroundAttachment: "local",
    backgroundRepeat: "no-repeat",
    paddingLeft: 35,
    paddingTop: 13,
    borderColor: "#ccc",
  },
});

const Response = ({ data }) => {
  const classes = useStyles();

  let obj = data;

  let readAbleObj = "{\n";

  for (let key in obj) {
    readAbleObj += "\t";
    readAbleObj +=
      typeof obj[key] === "string"
        ? `${key}: "${obj[key]}"`
        : `${key}: ${obj[key]}`;
    if (Object.keys(obj).pop() !== key.toString()) {
      readAbleObj += ",\n";
    }
  }

  readAbleObj += "\n}";
  return (
    <Box>
      <Typography mt={2} mb={2}>
        RESPONSE
      </Typography>

      <TextareaAutosize
        disabled
        minRows={3}
        maxRows={10}
        className={classes.textareastyle}
        value={readAbleObj}
      ></TextareaAutosize>
    </Box>
  );
};

export default Response;
