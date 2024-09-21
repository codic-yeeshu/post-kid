import { Box, TextareaAutosize, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import numbers from "../Assets/numbering.png";
import { DataContext } from "../context/dataProvider";

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
const CreateJsonText = () => {
  const classes = useStyles();

  const { setJsonText } = useContext(DataContext);

  const onValueChange = (e) => {
    setJsonText(e.target.value);
  };

  return (
    <Box style={{ width: "100%" }}>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize
        className={classes.textareastyle}
        minRows={3}
        maxRows={10}
        onChange={(e) => onValueChange(e)}
      ></TextareaAutosize>
    </Box>
  );
};

export default CreateJsonText;
